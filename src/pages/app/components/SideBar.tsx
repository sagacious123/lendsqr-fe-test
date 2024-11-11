import { NavLink } from "react-router-dom";
import React from "react";

import { ReactComponent as DashboardIcon } from "assets/images/home.svg";
import { ReactComponent as UsersIcon } from "assets/images/users.svg";
import { ReactComponent as GuarantorsIcon } from "assets/images/users.svg";
import { ReactComponent as LoansIcon } from "assets/images/sack.svg";
import { ReactComponent as DecisionModelsIcon } from "assets/images/handshake-regular.svg";
import { ReactComponent as SavingsIcon } from "assets/images/piggy-bank.svg";
import { ReactComponent as LoanRequestsIcon } from "assets/images/hand-holding-sack.svg";
import { ReactComponent as WhitelistIcon } from "assets/images/user-check.svg";
import { ReactComponent as KarmaIcon } from "assets/images/user-times.svg";
import { ReactComponent as OrganizationIcon } from "assets/images/briefcase.svg";
import { ReactComponent as LoanProductsIcon } from "assets/images/hand-holding-sack.svg";
import { ReactComponent as SavingsProductsIcon } from "assets/images/bank.svg";
import { ReactComponent as FeesAndChargesIcon } from "assets/images/coins-solid.svg";
import { ReactComponent as TransactionsIcon } from "assets/images/transactions.svg";
import { ReactComponent as ServicesIcon } from "assets/images/galaxy.svg";
import { ReactComponent as ServiceAccountIcon } from "assets/images/user-cog.svg";
import { ReactComponent as SettlementsIcon } from "assets/images/scroll.svg";
import { ReactComponent as ReportsIcon } from "assets/images/chart-bar.svg";
import { ReactComponent as PreferencesIcon } from "assets/images/sliders-h.svg";
import { ReactComponent as FeesAndPricingIcon } from "assets/images/badge-percent.svg";
import { ReactComponent as AuditLogsIcon } from "assets/images/clipboard-list.svg";
import { BsChevronDown } from "react-icons/bs";

interface SideBarComponentProps {
  page?: string | null;
  isModalOpen?: boolean;
  setIsModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SideBarComponent: React.FC<SideBarComponentProps> = ({
  page,
  isModalOpen,
  setIsModalOpen,
}) => {
  const pageSplit = page ? page.split("/") : [];

  return (
    <aside
      className={isModalOpen ? "sidebar active" : "sidebar"}
      onClick={(e: React.SyntheticEvent) => {
        e.stopPropagation();
      }}
    >
      <button className="organization-switch">
        <OrganizationIcon />
        <span>Switch Organization</span>
        <BsChevronDown />
      </button>

      <div className="sidebar-link-group">
        {navLinks.map((navLink, key) => (
          <>
            {navLink.title ? <h5>{navLink.title}</h5> : null}

            {navLink.links.map((item, key) => (
              <NavLink
                key={key}
                className={({ isActive }) => {
                  return isActive ? "navlink active" : "navlink";
                }}
                to={item.to}
                onClick={() => setIsModalOpen!((prev) => !prev)}
              >
                {pageSplit[0] === item.to ? item.iconActive : item.icon}
                <div className="nav-text">{item.label}</div>
              </NavLink>
            ))}
          </>
        ))}
      </div>
    </aside>
  );
};

const navLinks = [
  {
    title: "",
    links: [
      {
        label: "Dashboard",
        to: "dashboard",
        icon: <DashboardIcon />,
        iconActive: <DashboardIcon className="active" />,
      },
    ],
  },
  {
    title: "CUSTOMERS",
    links: [
      {
        label: "Users",
        to: "users",
        icon: <UsersIcon />,
        iconActive: <UsersIcon className="active" />,
      },
      {
        label: "Guarantors",
        to: "guarantors",
        icon: <GuarantorsIcon />,
        iconActive: <GuarantorsIcon className="active" />,
      },
      {
        label: "Loans",
        to: "loans",
        icon: <LoansIcon />,
        iconActive: <LoansIcon className="active" />,
      },
      {
        label: "Decision Models",
        to: "decision-models",
        icon: <DecisionModelsIcon />,
        iconActive: <DecisionModelsIcon className="active" />,
      },
      {
        label: "Savings",
        to: "savings",
        icon: <SavingsIcon />,
        iconActive: <SavingsIcon className="active" />,
      },
      {
        label: "Loan Requests",
        to: "loan-requests",
        icon: <LoanRequestsIcon />,
        iconActive: <LoanRequestsIcon className="active" />,
      },
      {
        label: "Whitelist",
        to: "whitelist",
        icon: <WhitelistIcon />,
        iconActive: <WhitelistIcon className="active" />,
      },
      {
        label: "Karma",
        to: "karma",
        icon: <KarmaIcon />,
        iconActive: <KarmaIcon className="active" />,
      },
    ],
  },
  {
    title: "BUSINESSES",
    links: [
      {
        label: "Organization",
        to: "organization",
        icon: <OrganizationIcon />,
        iconActive: <OrganizationIcon className="active" />,
      },
      {
        label: "Loan Products",
        to: "loan-products",
        icon: <LoanProductsIcon />,
        iconActive: <LoanProductsIcon className="active" />,
      },
      {
        label: "Savings Products",
        to: "savings-products",
        icon: <SavingsProductsIcon />,
        iconActive: <SavingsProductsIcon className="active" />,
      },
      {
        label: "Fees and Charges",
        to: "fees-and-charges",
        icon: <FeesAndChargesIcon />,
        iconActive: <FeesAndChargesIcon className="active" />,
      },
      {
        label: "Transactions",
        to: "transactions",
        icon: <TransactionsIcon />,
        iconActive: <TransactionsIcon className="active" />,
      },
      {
        label: "Services",
        to: "services",
        icon: <ServicesIcon />,
        iconActive: <ServicesIcon className="active" />,
      },
      {
        label: "Service Account",
        to: "service-account",
        icon: <ServiceAccountIcon />,
        iconActive: <ServiceAccountIcon className="active" />,
      },
      {
        label: "Settlements",
        to: "settlements",
        icon: <SettlementsIcon />,
        iconActive: <SettlementsIcon className="active" />,
      },
      {
        label: "Reports",
        to: "reports",
        icon: <ReportsIcon />,
        iconActive: <ReportsIcon className="active" />,
      },
    ],
  },
  {
    title: "SETTINGS",
    links: [
      {
        label: "Preferences",
        to: "preferences",
        icon: <PreferencesIcon />,
        iconActive: <PreferencesIcon className="active" />,
      },
      {
        label: "Fees and Pricing",
        to: "fees-and-pricing",
        icon: <FeesAndPricingIcon />,
        iconActive: <FeesAndPricingIcon className="active" />,
      },
      {
        label: "Audit Logs",
        to: "audit-logs",
        icon: <AuditLogsIcon />,
        iconActive: <AuditLogsIcon className="active" />,
      },
    ],
  },
];
