import React, { Component } from "react";
import EmployeeCard from "./EmployeeCard";
import EmployeeList from "./EmployeeList";
import API from "../utils/API";
import Row from "./Row";
import Col from "./Col";
import Container from "./Container";
import SearchForm from "./SearchForm";
import Card from "./Card";


class EmployeeContainer extends Component {
  state = {
    result: [{}],
    search: ""
  };

  // When this component mounts, search for the Employee
  componentDidMount() {
    this.searchEmployees();
  }

  searchEmployees = () => {
    API.search()
      .then(res =>
        this.setState({ result: res.data.results}))
      .catch(err => console.log(err));
      console.log(this.state.result)
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Employee API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployees(this.state.search);
  };

  render() {
    return (
      // Pass state and the two form handler functions into the provider
      // <EmployeeContext.Provider 
      //   value={{
      //     ...this.state, 
      //     handleInputChange: this.handleInputChange, 
      //     handleFormSubmit: this.handleFormSubmit
      //   }}
      // >
        <Container>
          <Row>
            {/* <Col size="md-8">
              <Card
                heading={this.state.result.Title || "Search for an Employee"}
              >
                {this.state.result.Title ? <EmployeeList /> : <h3>No Results to Display</h3>}
              </Card>
            </Col> */}
            <Col size="md-4">
              <Card heading="Search">
                <SearchForm />
              </Card>
            </Col>
            {this.state.result.length > 0 ? <EmployeeList data = {this.state.result}/> : <h3>No Results to Display</h3>}
            
          </Row>
        </Container>
      // </EmployeeContext.Provider>
    );
  }
}













export default EmployeeContainer;
