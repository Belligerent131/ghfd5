import React from "react";
import "./App.css";
import { Route } from "react-router";
import HomePage from "./pages/home-page/home-page.page";
import EmployeeGatewayPage from "./pages/employee-gateway/employee-gateway.component";
import EmployeeDashboardPage from "./pages/employee-dashboard/employee-dashboard.component";
import RecruitmentPage from "./pages/recruitment-page/recruitment-page.component";
import JobPostDetail from "./pages/recruitment-page/job-post-detail/job-post-detail.component";
import AboutPage from "./pages/about/about.component";
import ChiefPage from "./pages/chief-page/chief-page.component";

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/employee/login" component={EmployeeGatewayPage} />
      <Route exact path="/employee/dashboard" component={EmployeeDashboardPage} />
      <Route exact path="/recruitment" component={RecruitmentPage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/chief" component={ChiefPage} />

      <Route path ="/recruit/job" component={JobPostDetail} />
    </div>
  );
}

export default App;
