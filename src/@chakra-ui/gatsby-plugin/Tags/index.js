export default {
  variants: {
    "dataforest-tag": {
      container: {
        border: "none",
        whiteSpace: "nowrap",
        fontWeight: 400,
        color: "babyBlueEyes.dark",
        bg: "babyBlueEyes.light",
        _hover: {
          bg: "babyBlueEyes.light",
        },
      },
      label: {
        color: "babyBlueEyes.dark",
        fontWeight: "400",
      },
    },
    "dataforest-button": {
      container: {
        border: "1px solid",
        borderColor: "babyBlueEyes.base",
        whiteSpace: "nowrap",
        cursor: "pointer",
        fontWeight: 400,
        color: "babyBlueEyes.dark",
        _hover: {
          bg: "babyBlueEyes.light",
        },
      },
      label: {
        color: "babyBlueEyes.dark",
        fontWeight: "400",
      },
    },
  },
  sizes: {
    sm: {
      container: {
        px: 2,
        py: 2,
        fontSize: 500,
        borderRadius: "base",
      },
    },
    md: {
      container: {
        px: 3,
        py: 3,
        fontSize: 400,
        borderRadius: "base",
      },
    },
    lg: {
      container: {
        px: 3,
        py: 2,
        fontSize: 500,
        borderRadius: "base",
      },
    },
  },
  defaultProps: {
    variant: "dataforest-tag",
    size: "sm",
  },
};
