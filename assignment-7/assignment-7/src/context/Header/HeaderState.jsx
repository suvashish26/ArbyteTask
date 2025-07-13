import React from "react";
import HeaderContext from "./HeaderContext";

const content = {
  Home: "Home",
  Gallery: "Gallery",
  About: "About",
  Product: "Product",
};
function HeaderState(props) {
  return (
    <div>
      <HeaderContext.Provider value={content}>
        {props.children}
      </HeaderContext.Provider>
    </div>
  );
}

export default HeaderState;
