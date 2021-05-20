export default {
  parts: ["field", "control"],
  baseStyle: {
    control: {
      borderColor: "outline.dark",
    },
  },
  variants: {
    light: {
      control: {
        _hover: {
          borderColor: "babyBlueEyes.dark",
        },
        checked: {
          bg: "babyBlueEyes.dark",
          borderColor: "babyBlueEyes.dark",
        },
      },
    },
    dark: {
      control: {
        bg: "white",
        borderColor: "blueberryBlue.dark",
        borderRadius: "sm",
        _hover: {
          borderColor: "blueberryBlue.dark",
        },
        _checked: {
          bg: "blueberryBlue.dark",
          borderColor: "blueberryBlue.dark",
        },
      },
    },
    circle: {
      control: {
        bg: "white",
        borderColor: "babyBlueEyes.dark",
        borderRadius: "50%",
        color: "babyBlueEyes.dark",
        _hover: {
          borderColor: "babyBlueEues.dark",
        },
        _checked: {
          color: "babyBlueEyes.dark",
          bg: "white",
          borderColor: "babyBlueEues.dark",
          _hover: {
            bg: "white",
            borderColor: "babyBlueEues.dark",
          },
        },
      },
    },
  },
  sizes: {
    md: {
      control: {
        h: "18px",
        w: "18px",
      },
    },
  },
};
