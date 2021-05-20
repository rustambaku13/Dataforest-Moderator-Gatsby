import Input from "../Input";
export default {
  baseStyle: {
    field: {
      ...Input.baseStyle.field,
      appearance: "none",
      paddingBottom: "1px",
      lineHeight: "normal",
      ">option:first-child": {
        color: "text.disabled",
      },
    },
  },
  sizes: {
    ...Input.sizes,
  },
};
