import React from "react";
import Logo from "assets/images/logo.svg";

import UserIcon from "assets/images/user-img.svg";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "store/auth";
import { ReactComponent as NotificationIcon } from "assets/images/notification.svg";
import { SearchBar } from "components/custom";
import { BsCaretDownFill } from "react-icons/bs";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";

interface HeaderComponentProps {
  isModalOpen?: boolean;
  setIsModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HeaderComponent = ({
  isModalOpen,
  setIsModalOpen,
}: HeaderComponentProps) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const profileImage = user?.image ?? UserIcon;

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    navigate("/login");
  };

  return (
    <header className="app-header">
      <div className="app-header-container">
        <div className="app-logo-container">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        {/* User profile component */}
        <div className="app-header-right">
          <SearchBar />
          {/* {profile ? ( */}
          <div className="app-header-user-actions">
            <Link to="#">Docs</Link>
            <div className="app-header-user-actions-2">
              <button className="notification-btn">
                <NotificationIcon />
              </button>

              <div className="app-header-user-details">
                <div className="app-header-user-icon">
                  <img
                    src={profileImage}
                    alt={"Avatar"}
                    style={{
                      objectFit: "cover",
                      objectPosition: "top",
                    }}
                  />
                </div>
                <Menu>
                  <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    className="menu-btn"
                  >
                    Adedeji <BsCaretDownFill />
                  </MenuButton>
                  <MenuList>
                    <MenuItem className="menu-item" onClick={handleLogout}>
                      Log out
                    </MenuItem>
                  </MenuList>
                </Menu>
              </div>
            </div>
            <IconButton
              aria-label="Back"
              icon={<RxHamburgerMenu />}
              border={"none"}
              bg={"transparent"}
              className="hamburger"
              onClick={(e: React.SyntheticEvent) => {
                e.stopPropagation();
                setIsModalOpen!((prev) => !prev);
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
