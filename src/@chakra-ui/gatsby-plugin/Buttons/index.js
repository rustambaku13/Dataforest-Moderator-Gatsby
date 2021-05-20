export default {
  baseStyle: {
    borderRadius: "base",
    fontWeight: "regular",
    _focus: {
      boxShadow: "unset",
    },
  },
  sizes: {
    xxs: {
      h: "24px",
      fontSize: 300,
      px: 2,
      py: 1,
    },
    xs: {
      h: "36px",
      fontSize: "500",
      px: "0.5rem",
    },
    sm: {
      h: "40px",
      fontSize: "500",
      px: "1rem",
    },
    md: {
      h: "48px",
      px: "1rem",
    },
    lg: {
      h: "56px",
      px: "1.25rem",
    },
  },
  // styles for different visual variants ("outline", "solid")
  variants: {
    primaryBlueBerryBlueDark: {
      color: "white",
      bg: "blueberryBlue.dark",
      border: "none",
      _hover: {
        bg: "blueberryBlue.base",
      },
    },
    babyBlue: {
      color: "white",
      bg: "babyBlueEyes.dark",
      border: "none",
      _hover: {
        bg: "blueberryBlue.base",
      },
    },

    outline: {
      bg: "white",
      color: "text.dark",
      borderColor: "outline.medium",
      borderWidth: "0.5px",
      _active: {
        bg: "white",
      },
      _hover: {
        bg: "white",
        borderColor: "text.dark",
      },
    },
    dropdown_button: {
      borderColor: "outline.medium",
      fontSize: 500,
      borderWidth: "0.5px",
      bg: "transparent",
      color: "romanSilver.base",
      _hover: { borderColor: "outline.medium", bg: "white" },
      _active: { bg: "white" },
    },
    sideMenu: {
      fontSize: "500",
      w: "100%",
      color: "text.light",
      textAlign: "left",
      justifyContent: "unset",
      _hover: { bg: "blueberryBlue.base", color: "white" },
      _selected: { bg: "blueberryBlue.base", color: "white" },
      _focus: { bg: "blueberryBlue.base", color: "white" },
      borderRadius: "base",
      pl: 4,
    },
    persianGreen: {
      bg: "persianGreen.base",
      color: "white",
      _hover: {
        bg: "persianGreen.dark",
      },
    },
    black: {
      bg: "black",
      color: "white",
      border: "none",
      _hover: {
        bg: "charlestonGreen.dark",
      },
    },
    success: {
      bg: "success.base",
      color: "white",
      border: "none",
    },
    error: {
      bg: "danger.base",
      color: "white",
      border: "none",
    },
  },
  // default values for `size` and `variant`
  defaultProps: {
    size: "md",
    variant: "outline",
  },
};
