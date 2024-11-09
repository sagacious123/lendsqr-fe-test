import React from "react";

export type AuthHeaderTextProps = {
  title: string;
  subTitle?: string;
  containerClassName?: string;
  headingClassName?: string;
  subheadingClassName?: string;
};

export const AuthHeaderText: React.FC<AuthHeaderTextProps> = ({
  title,
  subTitle,
  containerClassName,
  headingClassName,
  subheadingClassName,
}) => {
  return (
    <div className={containerClassName}>
      <h1 className={headingClassName}>{title}</h1>
      <p className={subheadingClassName}>{subTitle}</p>
    </div>
  );
};
