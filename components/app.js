import React from "react";
import SSRProvider from "react-bootstrap/SSRProvider";
import Home from "components/home/home";
import Signup from "components/account/signup";
import { ConfigProvider } from "contexts/ConfigContext";
import { AuthProvider } from "contexts/AuthContext";

const pageToShow = (pageName, props) => {
  if (pageName === "home") return <Home props={props} />;
  if (pageName === "signup") return <Signup props={props} />;
  return <div>Not Found</div>;
};

const App = ({ pageName, props = null }) => {
  return (
    <SSRProvider>
      <ConfigProvider>
        <AuthProvider>
          <div>{pageToShow(pageName, props)}</div>
        </AuthProvider>
      </ConfigProvider>
    </SSRProvider>
  );
};

export default App;
