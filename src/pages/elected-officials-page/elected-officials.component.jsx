import React from "react";
import "./elected-officials-page.styles.scss";
import HeaderComponent from "../../components/header/header.component";
import FooterComponent from "../../components/footer/footer.component";
import { Container, Row, Col, Image } from "react-bootstrap";
import BioBlock from './elected-officials-bio-block.component';

class ElectedOfficialsPage extends React.Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <Container className="elected-officials-container">
            <BioBlock name="FirstName LastName" image="/img/Afulbright.jfif" position="left">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, officia dicta amet optio soluta consectetur dolor nam delectus corrupti et laborum voluptate molestiae facere pariatur illo quod sunt beatae nobis?
            </BioBlock>
            <BioBlock name="FirstName LastName" image="/img/Afulbright.jfif" position="right">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, officia dicta amet optio soluta consectetur dolor nam delectus corrupti et laborum voluptate molestiae facere pariatur illo quod sunt beatae nobis?
            </BioBlock>
            <BioBlock name="FirstName LastName" image="/img/Afulbright.jfif" position="left">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, officia dicta amet optio soluta consectetur dolor nam delectus corrupti et laborum voluptate molestiae facere pariatur illo quod sunt beatae nobis?
            </BioBlock>
            <BioBlock name="FirstName LastName" image="/img/Afulbright.jfif" position="right">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, officia dicta amet optio soluta consectetur dolor nam delectus corrupti et laborum voluptate molestiae facere pariatur illo quod sunt beatae nobis?
            </BioBlock>
        </Container>
        <FooterComponent />
      </div>
    );
  }
}

export default ElectedOfficialsPage;
