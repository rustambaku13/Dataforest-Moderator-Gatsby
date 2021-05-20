import { Icon } from "@chakra-ui/react";
import * as React from "react";
export const ChevronDownIcon = (props) => (
  <Icon d="flex" viewBox="0 0 16 9" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 010-1.414z"
      fill="currentColor"
    />
  </Icon>
);
export const ChevronRightIcon = (props) => (
  <ChevronDownIcon transform="rotate(-90deg)" {...props} />
);

export const ChevronLeftIcon = (props) => (
  <ChevronDownIcon transform="rotate(90deg)" {...props} />
);
