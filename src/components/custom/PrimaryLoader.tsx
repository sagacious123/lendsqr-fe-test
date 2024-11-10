/* eslint-disable @typescript-eslint/no-unused-vars */
import { Spinner, Stack, StackProps } from "@chakra-ui/react";

interface PrimaryLoaderProps extends StackProps {
  color?: string;
}
export const PrimaryLoader: React.FC<PrimaryLoaderProps> = ({
  color = "teal",
  children,
  ...rest
}) => {
  return (
    <Stack
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      minHeight={window.innerHeight}
      position="fixed"
      width="100%"
      height={"100vh"}
      right="0"
      top="0px"
      zIndex={99999}
      backgroundColor={"#e3e3e32b"}
      backdropFilter={"blur(16px)"}
      {...rest}
    >
      {children ?? (
        <div className="animate-spin">
          <Spinner />
        </div>
      )}
    </Stack>
  );
};
