import React, { Component } from "react";
import API from "../../utils/API";
import {
  Input,
  Button,
  Container,
  CardHeader,
  CardText,
  Card,
  CardTitle,
  CardImg,
  CardBody
} from "reactstrap";
import { Col, Row, Grid } from "../../components/Grid";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import "./Newsfeed.css";

class Newsfeed extends Component {
  state = {
    userInput: "",
    participant: [],
    feed: [],
    firstName: "",
    lastName: "",
    role: ""
  };

  loadParticipant = () => {
    API.getParticipants()
      .then(res =>
        this.setState({
          participant: res.data,
          firstName: "",
          lastName: "",
          role: ""
        })
      )
      .catch(err => console.log(err));
  };

  changeUserInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  addtofeed = input => {
    let feedArray = [...this.state.feed];
    feedArray.push(input);
    this.setState({
      feed: feedArray,
      userInput: ""
    });
  };

  render() {
    return (
      <div>
        <Nav />
        <div>
          <Row>
            <Col sm="12" md={{ size: 8, offset: 2 }}>
              <Input
                onChange={e => this.changeUserInput(e.target.value)}
                value={this.state.userInput}
                type="text"
              />
            </Col>
          </Row>
          <Row>
            <Col sm="12" md={{ size: 8, offset: 2 }}>
              <Button
                onClick={() => this.addtofeed(this.state.userInput)}
                style={{ display: "block" }}
              >
                Add my Snap!
              </Button>
            </Col>
          </Row>
        </div>

        <Card>
          <CardHeader>Post a snap</CardHeader>
          <CardImg
            top
            width="100%"
            src="https://picsum.photos/318/180"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Snap What?</CardTitle>
            <CardText>
              <ul>
                {this.state.feed.map(val => (
                  <li>{this.state.feed.value}</li>
                ))}
              </ul>
            </CardText>
          </CardBody>
        </Card>

        <Card body inverse color="info">
          <CardTitle>What's Snappin'!</CardTitle>
          <CardText>
            <ul>
              {" "}
              {this.state.feed.map(val => (
                <li>{this.state.feed.value}</li>
              ))}
            </ul>
          </CardText>
          <Button color="secondary">Button</Button>
        </Card>

        <div className="footer">
          {" "}
          <Footer />{" "}
        </div>
      </div>
    );
  }
}

export default Newsfeed;
