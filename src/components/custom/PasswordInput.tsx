// import { PrimaryInputProp } from "components/inputs";
import { PrimaryInput, PrimaryInputProp } from "components/inputs/Default";
import { useState } from "react";

export const CustomPasswordInput = ({ ...rest }: PrimaryInputProp) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <PrimaryInput
      type={showPassword ? "text" : "password"}
      rightComponentProps={{
        className: "password-view-toggle",
      }}
      rightComponent={
        <button onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <span>Hide</span> : <span>Show</span>}
        </button>
      }
      {...rest}
    />
  );
};
