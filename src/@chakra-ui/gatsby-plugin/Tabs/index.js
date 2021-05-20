export default {
  baseStyle: {},
  variants: {
    buttons: {
      tab: {
        borderWidth: "1px",
        h: "36px",
        w: "36px",
        borderRadius: "base",
        fontSize: "600",
        bg: "white",
        borderColor: "babyBlueEyes.dark",
        color: "romanSilver.base",
        _selected: {
          color: "babyBlueEyes.dark",
        },
      },
    },

    line: {
      tablist: {
        borderColor: "transparent",
        button: {
          color: "outline.base",
          fontSize: "500",
          fontWeight: 500,
          _focus: {
            boxShadow: "none",
          },
          _selected: {
            color: "babyBlueEyes.dark",
            borderColor: "babyBlueEyes.dark",
          },
          pl: "0px",
          pr: 10,
          mr: 4,
          pb: 4,
        },
      },
    },
  },

  defaultProps: { variant: "line" },
};
