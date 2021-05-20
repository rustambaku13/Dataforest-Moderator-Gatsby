import "./src/styles/index.scss";
import React from "react";
import ModeratorStore from './src/store/ModeratorStore'

export const wrapPageElement = ({ element }) => {
  return (
    <>
      {element}
      {/* <Modals /> */}
    </>
  );
};
