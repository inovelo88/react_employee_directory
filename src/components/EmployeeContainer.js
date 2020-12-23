import React, { Component } from "react";
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
      .then(res =>{
        console.log("API data", res.data.results);
        this.setState({ result: res.data.results})
        console.log(this.state.result)
      })
      .catch(err => console.log(err));
     
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
        <Container>
          <Row>
            <Col size="md-4">
              <Card heading="Search">
                <SearchForm />
              </Card>
            </Col>
            {this.state.result.length > 0 ? <EmployeeList data = {this.state.result}/> : <h3>No Results to Display</h3>}
          </Row>
        </Container>
    );
  }
}




export default EmployeeContainer;
