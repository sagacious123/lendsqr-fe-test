import React, { useEffect, useState } from "react";
import Logo from "assets/images/logo.svg";

import UserIcon from "assets/images/user-img.svg";
import { Link } from "react-router-dom";
import { useAuth } from "store/auth";
import { ReactComponent as NotificationIcon } from "assets/images/notification.svg";
import { SearchBar } from "components/custom";
import { BsCaretDownFill } from "react-icons/bs";
import { IconButton } from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";

interface HeaderComponentProps {
  isModalOpen?: boolean;
  setIsModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HeaderComponent = ({
  isModalOpen,
  setIsModalOpen,
}: HeaderComponentProps) => {
  const { user } = useAuth();
  console.log("user", user);
  const profileImage = user?.image ?? UserIcon;
  const profile = user;

  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const checkScroll = () => {
    const offset = window.scrollY > 760;

    setIsScrolled(offset);
    setIsVisible(!(window.scrollY > 0 && window.scrollY < 760));
  };
  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <>
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
                      className="rounded rounded-circle"
                      style={{
                        objectFit: "cover",
                        objectPosition: "top",
                      }}
                    />
                  </div>
                  <button className="text-grey-900 fw-400">
                    Adedeji <BsCaretDownFill />
                  </button>
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

      {/* {isModalOpen && (
        <header className="mobile-nav app-header">
          <div className="app-header-container">
            <div className="app-logo-container">
              <Link to="/">
                <img src={Logo} alt="Logo" />
              </Link>
            </div>
            <div className="app-header-right">
              <SearchBar />
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
                        className="rounded rounded-circle"
                        style={{
                          width: "48px",
                          height: "48px",
                          objectFit: "cover",
                          objectPosition: "top",
                        }}
                      />
                    </div>
                    <button className="text-grey-900 fw-400">
                      Adedeji <BsCaretDownFill />
                    </button>
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
      )} */}
    </>
  );
};
