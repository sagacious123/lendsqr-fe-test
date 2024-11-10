import { BsInfoCircle } from "react-icons/bs";
// import "./styles.scss";
import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormErrorMessageProps,
  FormHelperText,
  FormLabel,
  FormLabelProps,
  FormHelperTextProps,
  Select,
  InputElementProps,
  InputGroup,
  InputLeftElement,
  SelectProps,
  InputRightElement,
  InputLeftAddon,
  InputRightAddon,
  InputAddonProps,
  Tooltip,
} from "@chakra-ui/react";

export interface PrimarySelectOption {
  text: string | number;
  props?: React.DetailedHTMLProps<
    React.OptionHTMLAttributes<HTMLOptionElement>,
    HTMLOptionElement
  >;
}
export interface PrimarySelectProp extends SelectProps {
  disabled?: boolean;
  label?: string;
  labelProps?: FormLabelProps;
  formControlProps?: FormControlProps;
  error?: boolean;
  options?: PrimarySelectOption[];
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
  placeholder?: string;
  children?: React.ReactNode;
  labelInfo?: string;
  className?: string;
}

export const PrimarySelect: React.FC<PrimarySelectProp> = ({
  disabled,
  label,
  labelProps,
  setValue,
  options = [],
  error,
  bottomText,
  leftComponent,
  rightComponent,
  formControlProps,
  leftComponentProps,
  rightComponentProps,
  leftAddon,
  rightAddon,
  leftAddonProps,
  rightAddonProps,
  errorTextProps,
  bottomTextProps,
  placeholder,
  children,
  labelInfo,
  className,
  ...rest
}) => {
  const leftAddonClass = leftAddon
    ? "select-border-left-0 primary-input-addon"
    : "";
  const rightAddonClass = rightAddon
    ? "select-border-right-0 primary-input-addon"
    : "";

  return (
    <FormControl
      isInvalid={error}
      isRequired={rest.isRequired}
      isReadOnly={rest.isReadOnly}
      className={formControlProps?.className + " select"}
      {...formControlProps}
    >
      {Boolean(label) && (
        <FormLabel {...labelProps}>
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
      <InputGroup size={rest.size} className="h-[48px]">
        {/* left component goes here  */}
        {Boolean(leftComponent) && (
          <InputLeftElement {...leftComponentProps}>
            {leftComponent}
          </InputLeftElement>
        )}

        {Boolean(leftAddon) && (
          <InputLeftAddon {...leftAddonProps}>{leftAddon}</InputLeftAddon>
        )}

        <Select
          {...rest}
          className={`primary-select h-full ${className} ${leftAddonClass} ${rightAddonClass}`}
          isDisabled={disabled}
        >
          {placeholder && placeholder.length && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((item, index) => (
            <option key={index} {...item.props}>
              {item.text}
            </option>
          ))}
          {children}
        </Select>

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
      {Boolean(!error && bottomText) && (
        <FormHelperText {...bottomTextProps}>{bottomText}</FormHelperText>
      )}
    </FormControl>
  );
};
