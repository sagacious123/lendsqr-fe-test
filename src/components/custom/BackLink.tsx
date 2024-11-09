import React from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

interface BackLinkProps {
  text: string;
  to?: any;
  onClick?: () => void;
}

export const BackLink: React.FC<BackLinkProps> = ({ text, to, onClick }) => {
  const navigate = useNavigate();

  const handleClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    e.preventDefault();
    navigate(to || -1);
  };

  return (
    <div
      role="link"
      onClick={(e) => {
        handleClick(e);
        onClick && onClick();
      }}
      className="back-link"
    >
      <BsArrowLeft />
      <p className="text-base font-medium ">{text}</p>
    </div>
  );
};
