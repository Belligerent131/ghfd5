import React from "react";
import "./public-forms-page.styles.scss";
import HeadngComponent from "../../components/header/header.component";
import FooterComponent from "../../components/footer/footer.component";
import { Container, CardDeck } from "react-bootstrap";
import PublicFormBlock from "./public-form-block.component";

class PublicFormsPage extends React.Component {
  render() {
    return (
      <div>
        <HeadngComponent />
        <Container className="public-forms-container">
          <CardDeck>
            <PublicFormBlock
              title="First Form"
              body="Short Description"
              updated="05/06/2020"
              pdf="/#"
              doc="/#"
            />
            <PublicFormBlock
              title="Second Form"
              body="Short Description"
              updated="05/06/2020"
              pdf="/#"
              doc="/#"
            />
            <PublicFormBlock
              title="Third Form"
              body="Short Description"
              updated="05/06/2020"
              pdf="/#"
              doc="/#"
            />
          </CardDeck>
          <CardDeck>
            <PublicFormBlock
              title="Forth Form"
              body="Short Description"
              updated="05/06/2020"
              pdf="/#"
              doc="/#"
            />
            <PublicFormBlock
              title="Fifth Form"
              body="Short Description"
              updated="05/06/2020"
              pdf="/#"
              doc="/#"
            />
            <PublicFormBlock
              title="Sixth Form"
              body="Short Description"
              updated="05/06/2020"
              pdf="/#"
              doc="/#"
            />
          </CardDeck>
        </Container>
        <FooterComponent />
      </div>
    );
  }
}

export default PublicFormsPage;
