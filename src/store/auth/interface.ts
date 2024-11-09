export interface IResponse {
  error: boolean;
  errorCode: number;
  message: string;
  data: null | any;
}

export interface User {
  id: string;
  bvn: number;
  gender: string;
  userCode: string;
  createdAt: string;
  updatedAt: string;
  image: string;
  userStatus: string;
  isOnLoan: boolean;
  isOnSavings: boolean;
  socials: {
    twitter: string;
    facebook: string;
    instagram: string;
  };
  children: 0;
  fullName: string;
  guarantor: [
    {
      fullName: string;
      phoneNumber: string;
      emailAddress: string;
      relationship: string;
    },
    {
      fullName: string;
      phoneNumber: string;
      emailAddress: string;
      relationship: string;
    }
  ];
  accountInfo: {
    bank: string;
    tier: string;
    balance: string;
    accountNumber: number;
  };
  phoneNumber: string;
  emailAddress: string;
  organization: string;
  maritalStatus: string;
  typeOfResidence: string;
  educationAndEmployment: {
    officeEmail: string;
    loanRepayment: number;
    monthlyIncome: string;
    employmentStatus: string;
    levelOfEducation: string;
    sectorOfEmployment: string;
    durationOfEmployment: string;
  };
}

export interface Auth {
  user?: User | null;
  token_type: string;
  access_token?: string | null;
  refresh_token?: string | null;
  isLoading?: boolean;
  expires_in: number;
}

export interface LoginPayload {
  email: string;
  password: string;
}
