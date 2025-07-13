import React, { Children, useState } from "react";
import SideBarContext from "./sideBarContext";
function SidebarState(props) {
  const data = {
    Home: "Manage Data ",
    Charts: "Chart",
    Elements: "UI-Elements",
    Widgets: "Widgets",
  };
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <SideBarContext.Provider value={data}>
        {props.children}
      </SideBarContext.Provider>
    </div>
  );
}

export default SidebarState;
