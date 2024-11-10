/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  // AlertIcon,
  AlertProps,
} from "@chakra-ui/react";
// import WarningIcon from "assets/svg/password-warning.svg?react";

export interface BadgeProps extends AlertProps {
  text: string | undefined;
  scheme?:
    | "error"
    | "success"
    | "warning"
    | "info"
    | "neutral"
    | "pending"
    | "draft"
    | "approved"
    | "completed"
    | "ongoing"
    | undefined
    | string;
  icon?: React.ReactNode;
  className?: string;
  type?: "outline" | "solid" | undefined;
}
export const Badge: React.FC<BadgeProps> = ({
  text,
  scheme,
  icon,
  // className,
  // type = "solid",
  // ...rest
}) => {
  const getSolidBadgeBgAndTextColors = (
    scheme:
      | "error"
      | "success"
      | "warning"
      | "info"
      | "neutral"
      | "pending"
      | "draft"
      | "approved"
      | "completed"
      | "ongoing"
      | undefined
      | string
  ) => {
    let className;

    switch (scheme?.toLowerCase()) {
      case "error":
        className = "error";
        break;
      case "blacklisted":
        className = "error";
        break;
      case "success":
        className = "success";
        break;
      case "active":
        className = "success";
        break;
      case "approved":
        className = "success";
        break;
      case "completed":
        className = "success";
        break;
      case "warning":
        className = "warning";
        break;
      case "pending":
        className = "warning";
        break;
      case "ongoing":
        className = "success";
        break;
      case "info":
        className = "success";
        break;
      case "neutral":
        className = "neutral";
        break;
      case "inactive":
        className = "neutral";
        break;
      default:
        className = "success";
    }
    return className;
  };

  return (
    <span className={`badge ${getSolidBadgeBgAndTextColors(scheme)}`}>
      {icon ? icon : null}
      {text}
    </span>
  );
};
