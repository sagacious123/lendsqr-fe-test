import { BackLink } from "components";
import { PrimaryButton } from "components/buttons";
import UserIcon from "assets/images/user-icon.svg";
import { useState } from "react";
import { User } from "store/auth";
import { NAIRA } from "utilities/currency";
import { TabNavigation } from "components/custom";

export const UserDetailsPage = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [currentViewedUser] = useState<User | null>(
    JSON.parse(localStorage.getItem("currentViewedUser")!) || null
  );
  const profileImage = currentViewedUser?.image || UserIcon;

  // const handleClearUserFromLocalStorage = () => {
  //   localStorage.removeItem("currentViewedUser");
  // };
  return (
    <section className="app-user-details-page px-3">
      <BackLink
        to="/users"
        text="Back to Users"
        // onClick={handleClearUserFromLocalStorage}
      />
      <div className="user-details-header">
        <h1 className="app-page-heading">User Details</h1>
        <div className="user-details-header-right">
          <PrimaryButton type="button" className="btn-md primary-danger-btn">
            Blacklist User
          </PrimaryButton>
          <PrimaryButton type="button" className="btn-md secondary-btn">
            Activate User
          </PrimaryButton>
        </div>
      </div>

      <div className="user-details-white-box">
        <div className="user-details-top-box-container">
          <div className="cont avatar-name-group">
            <div className="avatar">
              <img
                src={profileImage}
                alt={"Avatar"}
                style={{
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
            </div>
            <div>
              <h5 className="username">{currentViewedUser?.fullName}</h5>
              <p>{currentViewedUser?.userCode}</p>
            </div>
          </div>
          <div className="cont tier">
            <h6>User’s Tier</h6>
            <p>{currentViewedUser?.accountInfo.tier}</p>
          </div>
          <div className="cont account-info">
            <h5>
              {NAIRA}
              {currentViewedUser?.accountInfo.balance}
            </h5>
            <p>
              {currentViewedUser?.accountInfo.accountNumber}/
              {currentViewedUser?.accountInfo.bank}
            </p>
          </div>
        </div>
        <TabNavigation
          items={[
            "General Details",
            "Documents",
            "Bank Details",
            "Loans",
            "Savings",
            "App and System",
          ]}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      </div>
      <div className="user-details-white-box">
        {selectedTab === 0 ? (
          <>
            <div className="user-details-group">
              <h4>Personal Information</h4>
              <div className="user-details-group-container">
                {Object.keys(personalInfoKeys).map((key) => (
                  <div className="user-single-detail" key={key}>
                    <h6>
                      {personalInfoKeys?.[key as keyof typeof personalInfoKeys]}
                    </h6>
                    <p>
                      {
                        currentViewedUser?.[
                          key as keyof typeof personalInfoKeys
                        ]
                      }
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="user-details-group">
              <h4>Education and Employment</h4>
              <div className="user-details-group-container">
                {Object.keys(educationAndEmploymentInfoKeys).map((key) => (
                  <div className="user-single-detail" key={key}>
                    <h6>
                      {
                        educationAndEmploymentInfoKeys?.[
                          key as keyof typeof educationAndEmploymentInfoKeys
                        ]
                      }
                    </h6>
                    <p>
                      {
                        currentViewedUser?.educationAndEmployment?.[
                          key as keyof typeof educationAndEmploymentInfoKeys
                        ]
                      }
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="user-details-group">
              <h4>Socials</h4>
              <div className="user-details-group-container">
                {Object.keys(socialsInfoKeys).map((key) => (
                  <div className="user-single-detail" key={key}>
                    <h6>
                      {socialsInfoKeys?.[key as keyof typeof socialsInfoKeys]}
                    </h6>
                    <p>
                      {
                        currentViewedUser?.socials?.[
                          key as keyof typeof socialsInfoKeys
                        ]
                      }
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="user-details-group">
              <h4>Guarantor</h4>
              <div className="user-details-group-container">
                {Object.keys(guarantorInfoKeys).map((key) => (
                  <div className="user-single-detail" key={key}>
                    <h6>
                      {
                        guarantorInfoKeys?.[
                          key as keyof typeof guarantorInfoKeys
                        ]
                      }
                    </h6>
                    <p>
                      {
                        currentViewedUser?.guarantor[0]?.[
                          key as keyof typeof guarantorInfoKeys
                        ]
                      }
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {currentViewedUser?.guarantor[1] && (
              <div className="user-details-group">
                <div className="user-details-group-container">
                  {Object.keys(guarantorInfoKeys).map((key) => (
                    <div className="user-single-detail" key={key}>
                      <h6>
                        {
                          guarantorInfoKeys?.[
                            key as keyof typeof guarantorInfoKeys
                          ]
                        }
                      </h6>
                      <p>
                        {
                          currentViewedUser?.guarantor[1]?.[
                            key as keyof typeof guarantorInfoKeys
                          ]
                        }
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="empty">
            <h3>Nothing to see here!</h3>
          </div>
        )}
      </div>
    </section>
  );
};

const personalInfoKeys = {
  fullName: "Full Name",
  phoneNumber: "Phone Number",
  emailAddress: "Email Address",
  bvn: "BVN",
  gender: "Gender",
  maritalStatus: "Marital Status",
  children: "Children",
  typeOfResidence: "Type of Residence",
};

const educationAndEmploymentInfoKeys = {
  levelOfEducation: "Level of Education",
  employmentStatus: "Employment Status",
  sectorOfEmployment: "Sector of Employment",
  durationOfEmployment: "Duration of Employment",
  officeEmail: "Office Email",
  monthlyIncome: "Monthly Income",
  loanRepayment: "Loan Repayment",
};

const socialsInfoKeys = {
  twitter: "Twitter",
  facebook: "Facebook",
  instagram: "Instagram",
};

const guarantorInfoKeys = {
  fullName: "Full Name",
  phoneNumber: "Phone Number",
  emailAddress: "Email Address",
  relationship: "Relationship",
};
