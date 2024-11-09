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
} from "@chakra-ui/react";
import { ReactComponent as FilterIcon } from "assets/images/filter-results-button.svg";
import { SetStateAction, useState } from "react";
import { Pagination } from ".";
import { ReactComponent as VerticalEllipsesIcon } from "assets/images/vertical-ellipses.svg";
import { ReactComponent as EyeIcon } from "assets/images/eye.svg";
import { ReactComponent as ActivateUserIcon } from "assets/images/activate-user.svg";
import { ReactComponent as BlacklistUserIcon } from "assets/images/blacklist-user.svg";
import { Link, useNavigate } from "react-router-dom";
import { User } from "store/auth";

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

  const [currentPage, setCurrentPage] = useState(1);

  const [itemsPerPage, setItemsPerPage] = useState("10");
  const indexOfLastItem = currentPage * Number(itemsPerPage);
  const indexOfFirstItem = indexOfLastItem - Number(itemsPerPage);
  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);

  const handleSetUserToLocalStorage = (user: User) => {
    localStorage.setItem("currentViewedUser", JSON.stringify(user));
  };
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
            {/* // <TableSkeletonLoader
          //   columns={headings.length || 4}
          //   rows={itemsPerPage}
          // /> */}
          </>
        ) : (
          <>
            <div>
              <Table variant="simple">
                <Thead>
                  <Tr className="">
                    {headings.map((col, index) => (
                      <Th key={index}>
                        <button>
                          <span>{col.label}</span>
                          <FilterIcon />
                        </button>
                      </Th>
                    ))}
                    {showActions && <Th>&nbsp;</Th>}
                  </Tr>
                </Thead>
                <Tbody>
                  {currentItems && currentItems.length > 0 ? (
                    currentItems?.map((item, index: number) => (
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
                              {/* <button className="self-start me-4">
                                
                              </button> */}
                            </Td>
                          )}
                        </Tr>
                      </>
                    ))
                  ) : (
                    <Tr>
                      <Td colSpan={headings?.length}>No data available</Td>
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
