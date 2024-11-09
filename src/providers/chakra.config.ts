import { extendTheme } from "@chakra-ui/react"

export const chakraCustomTheme = extendTheme({
    fonts: {
        // heading: "Mulish-Bold",
        // body: "Mulish-Regular",
        heading: "Poppins",
        body: "Poppins",
    },
    colors: {
        "brand-primary": {
          500: "#2F8132"
        },
        "success": {
          500: "#039855"
        },
        "warning": {
          500: "#F79009"
        },
      },
})