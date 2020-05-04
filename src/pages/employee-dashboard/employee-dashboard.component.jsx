import React from "react";
import HeaderComponent from "../../components/header/header.component";
import FooterComponent from "../../components/footer/footer.component";
import DashboardMenu from "../../components/menus/dashboard-menu/dashboard-menu.component";
import RosterDashboard from '../../components/dashboards/roster.component';
import SchedulerDashboard from '../../components/dashboards/scheduler/scheduler.component';
import { Container, Row, Col } from "react-bootstrap";


class EmployeeDashboardPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuIsVisible: true,
      pageSelect: ''
    };

    this.selectPage = this.selectPage.bind(this);
  }

  selectPage(page) {
    this.setState({
      pageSelect: page
    });
  }

  render() {
    const dashboardItems = [
      {
        name: "Dashboard",
        label: "Dashboard",
        route: "roster",
      },
      {
        name: "Roster",
        label: "Roster",
        route: "roster",
      },
      {
        name: "Scheduling",
        label: "Scheduling",
        route: "scheduler",
      },
    ];

    return (
      <div>
        <HeaderComponent />
        <Container fluid style={{ margin: "0", padding: "0" }}>
          <Row>
            <Col lg={2} style={{ margin: "0", padding: "0", minHeight: '344px' }}>
              <DashboardMenu items={dashboardItems} changePage={this.selectPage} />
            </Col>
            <Col lg={10} style={{ margin: "0", padding: "0" }}>
              {this.state.pageSelect === 'roster' ? <RosterDashboard /> :
                this.state.pageSelect  === 'scheduler' ? <SchedulerDashboard /> : null }
            </Col>
          </Row>
        </Container>
        <FooterComponent />
      </div>
    );
  }
}

export default EmployeeDashboardPage;
