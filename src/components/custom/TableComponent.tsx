/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Spinner,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  PopoverBody,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import { ReactComponent as FilterIcon } from "assets/images/filter-results-button.svg";
import { SetStateAction, useEffect, useRef, useState } from "react";
import { Pagination } from ".";
import { ReactComponent as VerticalEllipsesIcon } from "assets/images/vertical-ellipses.svg";
import { ReactComponent as EyeIcon } from "assets/images/eye.svg";
import { ReactComponent as ActivateUserIcon } from "assets/images/activate-user.svg";
import { ReactComponent as BlacklistUserIcon } from "assets/images/blacklist-user.svg";
import { Link, useNavigate } from "react-router-dom";
import { User } from "store/auth";
import { PrimaryButton } from "components/buttons";
import { useFormik } from "formik";
import { UsersList } from "store/users";

interface ColumnConfig {
  key: string;
  label: string;
  render?: (item: Record<string, any>) => React.ReactNode;
}

interface TableComponentProps {
  data: Record<string, any>[];
  headings: ColumnConfig[];
  showActions?: boolean;
  isRowClickable?: boolean;
  // itemsPerPage?: number;
  actions?: string[];
  isDataLoading?: boolean;
  style?: React.CSSProperties;
  paginate?: boolean;
  tableContainerClassName: string;
}

export const TableComponent: React.FC<TableComponentProps> = ({
  data,
  headings,
  showActions,
  isRowClickable = true,
  // actions,
  // itemsPerPage = 6,
  isDataLoading = false,
  style,
  paginate,
  tableContainerClassName,
}) => {
  const navigate = useNavigate();
  const initRef = useRef<any>();

  const [currentPage, setCurrentPage] = useState(1);

  const [itemsPerPage, setItemsPerPage] = useState("10");
  const indexOfLastItem = currentPage * Number(itemsPerPage);
  const indexOfFirstItem = indexOfLastItem - Number(itemsPerPage);
  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);

  const handleSetUserToLocalStorage = (user: User) => {
    localStorage.setItem("currentViewedUser", JSON.stringify(user));
  };

  const [filteredData, setFilteredData] = useState<Record<string, any>[]>([]);
  const { values, handleChange, handleReset, handleSubmit } = useFormik({
    initialValues: {
      organization: "",
      username: "",
      email: "",
      date: "",
      phoneNumber: "",
      status: "",
    },
    onSubmit: () => handleDataFilter(),
  });

  useEffect(() => {
    setFilteredData(currentItems);
  }, [currentItems]);

  const handleDataFilter = () => {
    let returnedData = currentItems.filter(
      (item: Record<string, any>) =>
        item.organization
          .toLowerCase()
          .includes(values.organization.toLowerCase()) ||
        item.username.toLowerCase().includes(values.username.toLowerCase()) ||
        item.email.toLowerCase().includes(values.email.toLowerCase()) ||
        item.date.includes(values.date) ||
        item.phoneNumber.includes(values.phoneNumber) ||
        item.status.toLowerCase().includes(values.status.toLowerCase())
    );
    setFilteredData(returnedData);
  };

  console.log(filteredData);

  return (
    <>
      <TableContainer
        className={`${tableContainerClassName} custom-table`}
        style={style}
      >
        {isDataLoading ? (
          <>
            <div className="animate-spin table-spinner">
              <Spinner />
            </div>
          </>
        ) : (
          <>
            <div>
              <Table variant="simple">
                <Thead>
                  <Tr className="">
                    {headings.map((col, index) => (
                      <Th key={index}>
                        <Popover
                          closeOnBlur={true}
                          placement="bottom"
                          initialFocusRef={initRef}
                        >
                          {({ isOpen, onClose }) => (
                            <>
                              <PopoverTrigger>
                                <button
                                  disabled={!filteredData?.length}
                                  className="table-header-btn"
                                >
                                  <span className="table-header-text">
                                    {col.label}
                                  </span>
                                  <FilterIcon />
                                </button>
                              </PopoverTrigger>
                              <PopoverContent>
                                <PopoverBody className="table-filter-popover">
                                  <form onSubmit={handleSubmit}>
                                    <div className="table-filter-item">
                                      <label htmlFor="organization">
                                        Organization
                                      </label>
                                      <select
                                        name="organization"
                                        id="organization"
                                        value={values.organization}
                                        onChange={handleChange}
                                      >
                                        <option value="">Select</option>
                                        <option value="Lendsqr">Lendsqr</option>
                                        <option value="Irorun">Irorun</option>
                                      </select>
                                    </div>
                                    <div className="table-filter-item">
                                      <label htmlFor="username">Username</label>
                                      <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        placeholder="User"
                                        value={values.username}
                                        onChange={handleChange}
                                      />
                                    </div>
                                    <div className="table-filter-item">
                                      <label htmlFor="email">Email</label>
                                      <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Email"
                                        value={values.email}
                                        onChange={handleChange}
                                      />
                                    </div>
                                    <div className="table-filter-item">
                                      <label htmlFor="date">Date</label>
                                      <input
                                        type="date"
                                        name="date"
                                        id="date"
                                        placeholder="Date"
                                        value={values.date}
                                        onChange={handleChange}
                                      />
                                    </div>
                                    <div className="table-filter-item">
                                      <label htmlFor="email">
                                        Phone Number
                                      </label>
                                      <input
                                        type="tel"
                                        name="phoneNumber"
                                        id="phoneNumber"
                                        placeholder="Phone Number"
                                        value={values.phoneNumber}
                                        onChange={handleChange}
                                      />
                                    </div>
                                    <div className="table-filter-item">
                                      <label htmlFor="status">Status</label>
                                      <select
                                        name="status"
                                        id="status"
                                        value={values.status}
                                        onChange={handleChange}
                                      >
                                        <option value="">Select</option>
                                        <option value="Active">Active</option>
                                        <option value="Inactive">
                                          Inactive
                                        </option>
                                        <option value="Pending">Pending</option>
                                        <option value="Blacklisted">
                                          Blacklisted
                                        </option>
                                      </select>
                                    </div>
                                    <div className="table-filter-btns">
                                      <PrimaryButton
                                        type="reset"
                                        className="btn-md secondary-btn"
                                        onClick={handleReset}
                                      >
                                        Reset
                                      </PrimaryButton>
                                      <PrimaryButton
                                        type="submit"
                                        className="btn-md primary-btn"
                                      >
                                        Filter
                                      </PrimaryButton>
                                    </div>
                                  </form>
                                </PopoverBody>
                              </PopoverContent>
                            </>
                          )}
                        </Popover>
                      </Th>
                    ))}
                    {showActions && <Th>&nbsp;</Th>}
                  </Tr>
                </Thead>
                <Tbody>
                  {filteredData && filteredData.length > 0 ? (
                    filteredData?.map((item, index: number) => (
                      <>
                        <Tr key={index} className="">
                          {headings?.map((col, colIndex) => (
                            <Td key={colIndex}>
                              {isRowClickable && (
                                <Link
                                  className="row-link"
                                  onClick={() =>
                                    handleSetUserToLocalStorage(item as User)
                                  }
                                  to={"/users/" + item.id}
                                ></Link>
                              )}
                              {col.render
                                ? col.render(item)
                                : item[col.key] ?? "--"}
                            </Td>
                          ))}
                          {showActions && (
                            <Td>
                              <Menu>
                                <MenuButton
                                  as={IconButton}
                                  aria-label="Options"
                                  className="menu-btn"
                                  icon={
                                    <VerticalEllipsesIcon className="h-4 w-4" />
                                  }
                                  variant="outline"
                                />
                                <MenuList>
                                  <MenuItem
                                    className="menu-item"
                                    icon={<EyeIcon />}
                                    onClick={() => {
                                      handleSetUserToLocalStorage(item as User);
                                      navigate("/users/" + item.id);
                                    }}
                                  >
                                    View Details
                                  </MenuItem>
                                  <MenuItem
                                    className="menu-item"
                                    icon={<BlacklistUserIcon />}
                                  >
                                    Blacklist User
                                  </MenuItem>
                                  <MenuItem
                                    className="menu-item"
                                    icon={<ActivateUserIcon />}
                                  >
                                    Activate User
                                  </MenuItem>
                                </MenuList>
                              </Menu>
                            </Td>
                          )}
                        </Tr>
                      </>
                    ))
                  ) : (
                    <Tr>
                      <Td
                        colSpan={headings?.length}
                        className="table-empty-data"
                      >
                        No data available
                      </Td>
                    </Tr>
                  )}
                </Tbody>
              </Table>
            </div>
          </>
        )}
      </TableContainer>
      {paginate && data?.length ? (
        <div>
          <Pagination
            totalItems={data?.length}
            itemsPerPage={itemsPerPage}
            setItemsPerPage={setItemsPerPage}
            currentPage={currentPage}
            onPageChange={(page: SetStateAction<number>) =>
              setCurrentPage(page)
            }
          />
        </div>
      ) : null}
    </>
  );
};
