import * as React from "react";
import { Icon, createIcon } from "@chakra-ui/react";

export const TaskIcon = (props) => (
  <Icon d="flex" viewBox="0 0 18 18" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.25 0A2.25 2.25 0 000 2.25v13.5A2.25 2.25 0 002.25 18h13.5A2.25 2.25 0 0018 15.75V2.25A2.25 2.25 0 0015.75 0H2.25zm3.5 5.25a1 1 0 11-2 0 1 1 0 012 0zm1.75 0a.75.75 0 01.75-.75h5.5a.75.75 0 010 1.5h-5.5a.75.75 0 01-.75-.75zM7.5 9a.75.75 0 01.75-.75h5.5a.75.75 0 110 1.5h-5.5A.75.75 0 017.5 9zm.75 3a.75.75 0 000 1.5h5.5a.75.75 0 100-1.5h-5.5zm-3.5-2a1 1 0 100-2 1 1 0 000 2zm1 2.75a1 1 0 11-2 0 1 1 0 012 0z"
      fill="currentColor"
    />
  </Icon>
);
