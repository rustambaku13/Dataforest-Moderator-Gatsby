import Input from "../Input";
export default {
  baseStyle: {
    ...Input.baseStyle.field,
    paddingY: "8px",
    minHeight: "80px",
    lineHeight: "short",
  },
  sizes: {
    lg: Input.sizes.lg.field,
  },
  variants: {
    outline: Input.variants.outline.field,
  },
  defaultProps: { variant: "outline" },
};
