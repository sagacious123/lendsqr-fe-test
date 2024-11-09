import React, { useEffect, useState } from "react";
import Logo from "assets/images/logo.svg";

import UserIcon from "assets/images/user-img.svg";
import { Link } from "react-router-dom";
import { useAuth } from "store/auth";
import { ReactComponent as NotificationIcon } from "assets/images/notification.svg";
import { SearchBar } from "components/custom";
import { BsCaretDownFill } from "react-icons/bs";
// impor { ReactComponent as HamburgerIcon } from "assets/images/hamburger.svg";
// import { SearchBar } from "components/custom/searchBar";

interface HeaderComponentProps {
  hamburger?: boolean;
  setHamburger?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HeaderComponent = ({
  hamburger,
  setHamburger,
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
    <header className="app-header">
      <div className="app-header-container">
        {/* <div className={`d-flex justify-content-between align-items-center `}> */}
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
            <button className="notification-btn">
              <NotificationIcon />
            </button>

            {/* <IconButton
                    aria-label="Back"
                    icon={<HamburgerIcon />}
                    border={"none"}
                    bg={"transparent"}
                    onClick={(e: React.SyntheticEvent) => {
                      e.stopPropagation();
                      setHamburger!((prev) => !prev);
                    }}
                  /> */}

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
          {/* ) : (
            <div className="d-flex justify-content-center align-items-center gap-3">
              <Link to="/login" className="secondary-btn btn-md">
                Log In
              </Link>
              <Link to="/register" className="primary-btn btn-md">
                Register
              </Link>
            </div>
          )} */}
        </div>
        {/* </div> */}
      </div>
    </header>
  );
};
