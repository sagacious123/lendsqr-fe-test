import React, { useEffect } from "react";
import { MetricsCard } from "../components";
import UsersMetricIcon from "assets/images/users-metric.svg";
import ActiveUsersMetricIcon from "assets/images/active-users-metric.svg";
import UsersWithLoanMetricIcon from "assets/images/users-with-loan-metric.svg";
import UsersWithSavingsMetricIcon from "assets/images/users-with-savings-metric.svg";
import { Badge, PrimaryLoader, TableComponent } from "components";
import moment from "moment";
import { useGetAllUsersQuery, UsersList } from "store/users";
import { useGeneralAppProvider } from "providers/generalAppProvider";

export const AppUsersPage = () => {
  const { data: users, isLoading } = useGetAllUsersQuery({});

  return (
    <section className="app-dashboard-page px-3">
      {isLoading && <PrimaryLoader height={"90vh"} />}
      <div className="">
        <h1 className="app-page-heading">Users</h1>
      </div>
      <div className="metrics">
        {[
          {
            icon: UsersMetricIcon,
            title: "Users",
            value: (users?.length as number) || 0,
          },
          {
            icon: ActiveUsersMetricIcon,
            title: "Active Users",
            value:
              (users?.filter((u) => u.userStatus === "active")
                .length as number) || 0,
          },
          {
            icon: UsersWithLoanMetricIcon,
            title: "Users with Loans",
            value: (users?.filter((u) => u.isOnLoan).length as number) || 0,
          },
          {
            icon: UsersWithSavingsMetricIcon,
            title: "Users with Savings",
            value: (users?.filter((u) => u.isOnSavings).length as number) || 0,
          },
        ].map((item, index) => (
          <MetricsCard
            key={index}
            icon={item.icon}
            title={item.title}
            value={item.value}
          />
        ))}
      </div>
      <div className="app-dashboard-table-container">
        <TableComponent
          data={users as UsersList}
          headings={usersTableHeadings}
          showActions={true}
          // itemsPerPage={"6"}
          paginate={true}
          tableContainerClassName=""
          isDataLoading={isLoading}
        />
      </div>
    </section>
  );
};

const usersTableHeadings = [
  {
    key: "organization",
    label: "Organization",
    render: (item: Record<string, any>) => (
      <span className="">{item.organization || "--"}</span>
    ),
  },
  {
    key: "username",
    label: "Username",
    render: (item: Record<string, any>) => <span>{item.fullName || "--"}</span>,
  },
  {
    key: "email",
    label: "Email",
    render: (item: Record<string, any>) => (
      <span className="flex items-center gap-2">
        {item.emailAddress || "--"}
      </span>
    ),
  },
  {
    key: "phoneNumber",
    label: "Phone Number",
    render: (item: Record<string, any>) => <span>{item.phoneNumber}</span>,
  },
  {
    key: "dateJoined",
    label: "Date Joined",
    render: (item: Record<string, any>) => (
      <span>
        {moment(item.createdAt).format("MMM D, YYYY HH:MM A") || "--"}
      </span>
    ),
  },
  {
    key: "status",
    label: "Status",
    render: (item: Record<string, any>) => (
      <span>
        <Badge scheme={item.userStatus} text={item.userStatus} />
      </span>
    ),
  },
];
