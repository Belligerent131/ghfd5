import React from "react";
import "./scheduler.styles.scss";
import {Container} from 'react-bootstrap';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

class SchedulerDashboard extends React.Component {
  render() {
    return (
      <Container style={{paddingRight: '20px', paddingTop: '20px', paddingBottom: '20px'}} fluid>
        <FullCalendar defaultView="dayGridMonth" plugins={[dayGridPlugin]} />
      </Container>
    );
  }
}

export default SchedulerDashboard;
