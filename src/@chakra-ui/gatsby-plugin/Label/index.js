export default {
  baseStyle: {
    fontWeight: 500,
    fontSize: 400,
  },
  variants: {
    hanging: {
      pos: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      color: "text.light",
      left: "1rem",
      zIndex: 0,
    },
  },
  defaultProps: { variant: "hanging" },
};
