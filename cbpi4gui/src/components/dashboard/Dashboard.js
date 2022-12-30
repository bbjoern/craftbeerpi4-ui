import React from "react";
import "../../App.css";
import { useParams } from "react-router-dom";
import { Dashboard, DashboardProvider } from "./DashboardContext";
import { Container } from "@material-ui/core";


const Dashboard2 = () => {  
  return (
    <Container maxWidth={false} style={{ marginTop: 64 }}>
    <DashboardProvider>
        <Dashboard width="100%" height={1000} />
    </DashboardProvider>  
    </Container>
  );
};

const FixDashboard = () => {  
  const { dashboardid } = useParams();
  return (
    <Container maxWidth={false} style={{ marginTop: 64 }}>
    <DashboardProvider>
        <Dashboard width="100%" height={1000} fixdash={dashboardid}/>
    </DashboardProvider>  
    </Container>
  );
};

export {Dashboard2, FixDashboard};
