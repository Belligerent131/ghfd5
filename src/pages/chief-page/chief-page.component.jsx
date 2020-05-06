import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import HeaderComponent from "../../components/header/header.component";
import FooterComponent from "../../components/footer/footer.component";
import "./chief-page.styles.scss";

class ChiefPage extends React.Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <Container>
          <Row className="chiefs-page-container">
            <Col>
            <h4>Chief Adam Fulbright</h4>
            <Image align="left" alt="chief" src="/img/Afulbright.jfif" fluid />
              <p>
                This is the chief's page. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione ducimus laboriosam autem minima, voluptate assumenda aliquid sequi? Fugit quos beatae harum sed illum? Architecto nihil tenetur impedit enim? Praesentium, quaerat?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum illo repellat expedita rerum sunt asperiores excepturi nobis assumenda eligendi, ullam perspiciatis inventore sed est quo, eius cupiditate necessitatibus nulla! Beatae.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus ipsum in cupiditate. Assumenda, harum. Aliquam nulla eligendi architecto ex optio voluptatibus, facere commodi quibusdam asperiores maxime illo molestias ut minima!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ex quasi accusamus perferendis delectus, perspiciatis incidunt nam exercitationem facilis odit, iste repellat minima repudiandae expedita magni dolore nostrum laboriosam sequi.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptate dolore, culpa vitae amet unde deleniti, dolorum possimus nostrum itaque dolores cum, voluptatum ducimus harum distinctio doloribus iste reprehenderit earum!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis iste quis maxime distinctio facere ex nemo nulla pariatur possimus voluptates ratione placeat, magni mollitia voluptate non a quaerat praesentium culpa.
                </p>
            </Col>
          </Row>
        </Container>
        <FooterComponent />
      </div>
    );
  }
}

export default ChiefPage;
