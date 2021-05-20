export default {
  baseStyle: {
    px: 2,
    py: "2px",
    textTransform: "capitalize",
    borderRadius: "base",
    fontSize: "300",
  },
  variants: {
    accepted: {
      bg: "success.light",
      color: "success.dark",
    },
    rejected: {
      bg: "danger.light",
      color: "danger.dark",
    },
    pending: {
      bg: "warning.light",
      color: "warning.dark",
    },
  },
};
