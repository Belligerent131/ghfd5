import React from "react";
import HeaderComponent from "../../components/header/header.component";
import FooterComponent from "../../components/footer/footer.component";
import {Container, Row, Col} from 'react-bootstrap';
import './recruitment-page.styles.scss';

import PostComponent from './post.component';

const jobs = [
  {
    id: 1,
    title: 'Firefighter - Lateral',
    pay: '$45,000 - $50,000',
    fullTime: true,
    closing: new Date('05/20/2020').toLocaleDateString()
  },
  {
    id: 2,
    title: 'Firefighter - Lateral',
    pay: '$45,000 - $50,000',
    fullTime: true,
    closing: new Date('05/20/2020').toLocaleDateString()
  },
];

class HomePage extends React.Component {
  render() {

    const jobItems = [];
    jobs.forEach((jobItem) => jobItems.push(
      <PostComponent {...jobItem}  />
    ));


    return (
      <div>
        <HeaderComponent />
            <Container className="job-board-container">
                <Row>
                    <Col lg={{span: 9, offset: 2}}>
                    {jobItems}
                    </Col>
                </Row>
            </Container>
        <FooterComponent />
      </div>
    );
  }
}

export default HomePage;
