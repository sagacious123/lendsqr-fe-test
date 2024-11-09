// import { PrimaryInputProp } from "components/inputs";
import { PrimaryInput, PrimaryInputProp } from "components/inputs/default";
import { useState } from "react";
import { PiEyeLight, PiEyeClosedLight } from "react-icons/pi";

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