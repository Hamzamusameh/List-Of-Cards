import * as React from "react";
// import 'bootstrap/dist/css/bootstrap.css';
import { Card, Container, Row } from "react-bootstrap";
// import Chart from "./Components/chart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faCoffee } from "@fortawesome/fontawesome-free-solid";

export interface State {
  textLabel: string;
  textValue: string;
}

export class Helpers extends React.Component<any, any> {
  public state = {
    textLabel: "",
    textValue: "",
  };

  // private static updateCallback: (data: object) => void = null;

  constructor(props: any) {
    super(props);
    console.log("Component Constructor");
    console.log(props);
    this.state = {
      textLabel: "",
      textValue: "",
    };
  }

  update = (newState: State) => {
    console.log("Component Update " + newState);
    this.setState({ newState });
  };

  render() {
    // const { textLabel, textValue } = this.state;
    console.log("Props: " + this.props);
    const elements = this.props.dataViews[0].categorical.categories[0].values;
    return (
      <Container
        style={{
          msOverflowY: "scroll",
        }}
      >
        {elements.map((item) => {
          return (
            <Card
              onClick={() => {
                console.log(item);
              }}
              style={{
                width: "18rem",
                margin: "15px",
                backgroundColor: "yellow",
                padding: "25px",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              <Card.Body>
                {/* <FontAwesomeIcon icon={faCoffee} /> */}
                <Card.Title>{item}</Card.Title>
              </Card.Body>
            </Card>
          );
        })}
        {elements.map((item) => {
          return (
            <Card
              style={{
                width: "18rem",
                margin: "15px",
                backgroundColor: "yellow",
                padding: "25px",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              <Card.Body>
                {/* <FontAwesomeIcon icon={faCoffee} /> */}
                <Card.Title>{item}</Card.Title>
              </Card.Body>
            </Card>
          );
        })}
        {elements.map((item) => {
          return (
            <Card
              style={{
                width: "18rem",
                margin: "15px",
                backgroundColor: "yellow",
                padding: "25px",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              <Card.Body>
                {/* <FontAwesomeIcon icon={faCoffee} /> */}
                <Card.Title>{item}</Card.Title>
              </Card.Body>
            </Card>
          );
        })}
      </Container>
    );
  }
}

export default Helpers;
