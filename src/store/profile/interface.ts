import { IResponse, User } from "store/auth";

export interface UpdateProfilePayload {
  firstName?: string;
  // avatar: string;
  // image: string;
  lastName?: string;
  email?: string;
  // isVerified?: string;
  phoneNumber?: string;
  address?: string;
  country?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  sex?: string;
  dateOfBirth?: string;
  signature?: string;
  enable2fa?: boolean;
  businessInformation?: {
    exportGoodType?: string;
    TIN?: string;
    yearsInExport?: string;
    exportFrequency?: string;
    countriesOfExport?: string[];
    // exportRegCertificateUrl?: string;
  };
  userIdentity?: {
    identificationMode?: string;
    // identificationUrl?: string;
    // utilityBillUrl?: string;
    bvn?: string;
  };
}

export interface ChangeProfileResponse {
  userId: string;
  request?: string;
  reason?: string;
  adminApprovalStatus: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ChangeProfilePayload {
  request?: string;
  reason?: string;
}

export interface ProfileInformationResponse extends IResponse {
  data: User;
}

export interface ChangePasswordPayload {
  oldPassword: string;
  newPassword: string;
}

export interface UploadProfilePicturePayload {
  avatar: File;
}

export interface DocumentUploadPayload {
  fileClass: string;
  file: FormData;
}

export interface CancelProfileRequestPayload {
  id: string;
}

export interface CancelProfileRequestResponse extends IResponse {
  data: {
    acknowledged: boolean;
    deletedCount: number;
  };
}
