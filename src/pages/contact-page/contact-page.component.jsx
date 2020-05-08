import React from "react";
import "./contact-page.styles.scss";
import HeaderComponent from "../../components/header/header.component";
import FooterComponent from "../../components/footer/footer.component";
import { Container } from "react-bootstrap";
import ContactField from './contact-fields.component'

const TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";


class ContactPage extends React.Component {

    onChange(value) {
        console.log("Catcha value: ", value);
    }

  render() {

    return (
      <div>
        <HeaderComponent />
        <Container className="contact-page-container">
        <h3>Contact Us</h3>
          <ContactField onChange={this.onChange} />
        </Container>
        <FooterComponent />
      </div>
    );
  }
}

export default ContactPage;
