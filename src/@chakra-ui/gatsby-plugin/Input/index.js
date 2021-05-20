export default {
  parts: ["field", "addon"],
  baseStyle: {
    field: {
      fontWeight: "500",
      borderRadius: "base",
      zIndex: 1,
      _placeholder: {
        color: "text.disabled",
        fontWeight: "500",
      },
    },
    addon: {},
  },
  variants: {
    outline: {
      field: {
        borderColor: "outline.base",
        _focus: {
          boxShadow: "none",
          borderColor: "text.dark",
        },
        _placeholder: {
          color: "text.disabled",
          fontWeight: "500",
        },
      },
    },
  },
  sizes: {
    lg: {
      field: {
        h: "56px",
        borderRadius: "base",
        fontSize: "500",
      },
    },
  },
  defaultProps: { variant: "outline" },
};
