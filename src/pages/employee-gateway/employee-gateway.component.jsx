import React from "react";
import HeaderComponent from "../../components/header/header.component";
import FooterComponent from "../../components/footer/footer.component";
import EmployeeLoginForm from "../../components/widgets/employee-login/employee-login.component";

class EmployeeGatewayPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <HeaderComponent />
        <EmployeeLoginForm
          handleChange={this.handleChange}
          emailValue={this.state.email}
          passwordValue={this.state.password}
          formSubmit={this.handleSubmit}
        />
        <FooterComponent />
      </div>
    );
  }
}

export default EmployeeGatewayPage;
