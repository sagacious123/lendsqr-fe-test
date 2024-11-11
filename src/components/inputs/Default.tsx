import React from "react";
import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormErrorMessageProps,
  FormHelperText,
  FormLabel,
  FormLabelProps,
  FormHelperTextProps,
  Input,
  InputElementProps,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
  InputAddonProps,
  InputLeftAddon,
  InputRightAddon,
  InputGroupProps,
  LinkProps,
  Flex,
  Tooltip,
} from "@chakra-ui/react";
import { ReactComponent as InvalidIcon } from "assets/images/invalid-icon-solid.svg";
import { Link } from "react-router-dom";
import { BsInfoCircle } from "react-icons/bs";

export interface PrimaryInputProp extends InputProps {
  disabled?: boolean;
  inputRef?: React.LegacyRef<HTMLInputElement>;
  label?: string;
  labelProps?: FormLabelProps;
  formControlProps?: FormControlProps;
  inputGroupProps?: InputGroupProps;
  value?: string | number;
  error?: boolean;
  bottomTextOnError?: boolean;
  bottomText?: string | React.ReactElement;
  setValue?: (value: string) => void;
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  leftAddon?: React.ReactNode;
  rightAddon?: React.ReactNode;
  leftComponentProps?: InputElementProps;
  rightComponentProps?: InputElementProps;
  leftAddonProps?: InputAddonProps;
  rightAddonProps?: InputAddonProps;
  errorTextProps?: FormErrorMessageProps;
  bottomTextProps?: FormHelperTextProps;
  rightLabel?: string;
  rightLabelProps?: LinkProps;
  labelInfo?: string;
}

export const PrimaryInput: React.FC<PrimaryInputProp> = ({
  disabled,
  inputRef,
  label,
  labelProps,
  // setValue,
  error,
  bottomTextOnError = true,
  bottomText,
  leftComponent,
  rightComponent,
  formControlProps,
  inputGroupProps,
  leftComponentProps,
  rightComponentProps,
  leftAddon,
  rightAddon,
  leftAddonProps,
  rightAddonProps,
  errorTextProps,
  bottomTextProps,
  rightLabel,
  labelInfo,
  ...rest
}) => {
  return (
    <FormControl
      isInvalid={error}
      isRequired={rest.isRequired}
      isReadOnly={rest.isReadOnly}
      {...formControlProps}
    >
      <Flex justifyContent="space-between">
        {Boolean(rightLabel) && (
          <Link
            to="/forgot-password"
            style={{ color: "#2F8132", textDecoration: "none" }}
          >
            {rightLabel}
          </Link>
        )}
      </Flex>

      <InputGroup size={rest.size} {...inputGroupProps} className="h-50px">
        {/* left component goes here  */}
        {Boolean(leftComponent) && (
          <InputLeftElement {...leftComponentProps}>
            {leftComponent}
          </InputLeftElement>
        )}

        {Boolean(leftAddon) && (
          <InputLeftAddon {...leftAddonProps}>{leftAddon}</InputLeftAddon>
        )}
        <div className="input-label-group">
          <Input
            ref={inputRef}
            className={`primary-input ${leftAddon ? "!rounded-s-none " : ""} ${
              rightComponent ? "pe-5" : ""
            }`}
            style={{
              paddingLeft: leftComponent ? "70px" : "14px",
              borderRadius: leftAddon ? "0 8px 8px 0" : "8px",
            }}
            isDisabled={disabled}
            isInvalid={error}
            isRequired={rest.isRequired}
            errorBorderColor="red.300"
            {...rest}
          />
          {Boolean(label) && (
            <FormLabel gridColumn="2" {...labelProps}>
              {label}
              {Boolean(labelInfo) && (
                <Tooltip
                  hasArrow
                  label={labelInfo}
                  bg="gray.900"
                  color="white"
                  placement={"top"}
                  p="2"
                  fontSize="sm"
                  rounded="md"
                  fontWeight="400"
                >
                  <span className="d-inline-block ms-2 cursor-pointer">
                    <BsInfoCircle />
                  </span>
                </Tooltip>
              )}
            </FormLabel>
          )}
        </div>

        {error ? (
          <div
            className={`input-error-icon ${
              rest.name === "password" ||
              rest.name === "confirmPassword" ||
              rest.type === "date"
                ? "right-12"
                : "right-2"
            }`}
            style={{
              right:
                rest.name === "password" ||
                rest.name === "confirmPassword" ||
                rest.type === "date"
                  ? "48px"
                  : "12px",
            }}
          >
            <InvalidIcon className="" />
          </div>
        ) : null}

        {Boolean(rightAddon) && (
          <InputRightAddon {...rightAddonProps}>{rightAddon}</InputRightAddon>
        )}

        {/* right component goes here  */}
        {Boolean(rightComponent) && (
          <InputRightElement {...rightComponentProps}>
            {rightComponent}
          </InputRightElement>
        )}
      </InputGroup>
      {Boolean(error && bottomText) && (
        <FormErrorMessage {...errorTextProps}>{bottomText}</FormErrorMessage>
      )}
      {Boolean(!bottomTextOnError && !error && bottomText) && (
        <FormHelperText {...bottomTextProps}>{bottomText}</FormHelperText>
      )}
    </FormControl>
  );
};
