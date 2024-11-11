import { useMatch } from "react-router-dom";
import { useState } from "react";
import { AuthVerifyContainer } from "pages/auth/components";
import { SideBarComponent, HeaderComponent } from ".";

export const AppContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const match = useMatch("/exporter/*");
  const page = match ? match.params["*"] : undefined;

  return (
    <div className="app">
      {/*========== HEADER =========== */}
      <HeaderComponent
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      {/*========== END OF HEADER =========== */}

      <section className="app-main" style={{ minHeight: "100vh" }}>
        <div className="app-main-container">
          {/* <button
              onClick={() => setActive(!active)}
              className="exporter-menu-btn my-4"
            >
              <HiMenuAlt2 className="header-menu-icon" />
            </button> */}
          <SideBarComponent
            page={page}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
          {/* </div> */}
          <div className="app-right bg-grey-50" style={{ minHeight: "100vh" }}>
            <div className="pt-2 h-100">
              <AuthVerifyContainer />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
