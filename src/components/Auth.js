import { Tabs, Tab, Box } from "@mui/material";
import { useState } from "react";
import { Login } from "./Login";
import { SignUp } from "./SignUp";

const tabs = {
  login: "login",
  signup: "signup",
};

export function Auth() {
  const [tab, setTab] = useState(tabs.login);

  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <Tabs value={tab} onChange={(_, newTab) => setTab(newTab)}>
          <Tab label="Login" value={tabs.login} />
          <Tab label="Register" value={tabs.signup} />
        </Tabs>
      </Box>
      {tab === tabs.login && <Login />}
      {tab === tabs.signup && <SignUp />}
    </Box>
  );
}
