// import React from "react";
// import LoginState from "./context/Login/LoginState";
// import Profile from "./components/Profile";
// import SidebarState from "./context/Sidebar/SidebarState";
// import AdminSidebar from "./components/AdminSidebar";

// function App() {
//   return (
//     <div>
//       <LoginState>
//         <SidebarState>
//           <Profile />
//           <AdminSidebar />
//         </SidebarState>
//       </LoginState>
//     </div>
//   );
// }

// export default App;
import React from "react";
import LoginState from "./context/Login/LoginState";
import Profile from "./components/Profile";
import SidebarState from "./context/Sidebar/SidebarState";
import AdminSidebar from "./components/AdminSidebar";
import { useAuth } from "./context/Login/LoginState";
import UserHeader from "./components/UserHeader";
import HeaderState from "./context/Header/HeaderState";

function AppContent() {
  const { isLoggedIn } = useAuth();

  return (
    <div className="flex">
      {isLoggedIn && <AdminSidebar />}
      {isLoggedIn && <UserHeader />}
      <div className="flex-1">
        <Profile />
      </div>
    </div>
  );
}

function App() {
  return (
    <LoginState>
      <SidebarState>
        <HeaderState>
          <AppContent />
        </HeaderState>
      </SidebarState>
    </LoginState>
  );
}

export default App;
