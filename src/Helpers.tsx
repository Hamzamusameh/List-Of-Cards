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

  handleClick = (event) => {
    console.log("Button Clicked", event);
    let x = this.props.selectionManager.select(event);
    console.log("x: ", x);
    this.props.selectionManager.showContextMenu(event, {
      x: 5,
      y: 6,
    });
  };

  render() {
    // const { textLabel, textValue } = this.state;
    console.log("Props: " + this.props);
    const elements = this.props.dataViews[0].categorical.categories[0].values;
    const element2 = this.props.dataViews[0].categorical.categories[1].values;

    let dataViews = this.props.dataViews; //options: VisualUpdateOptions
    let categorical = dataViews[0].categorical;
    let dataValues = categorical.categories[1].values;
    debugger

    for (let dataValue of dataValues) {
      let values = dataValue.values;
      for (let i = 0, len = dataValue.values.length; i < len; i++) {
        let selectionId = this.props.host
          .createSelectionIdBuilder()
          .withCategory(categorical.categories[0], i)
          .withMeasure(dataValue.source.queryName)
          .withSeries(categorical.values, categorical.values[i])
          .createSelectionId();
      }
    }

    debugger;
    return (
      <Container
        style={{
          msOverflowY: "scroll",
        }}
      >
        {elements.map((item, index) => {
          debugger;
          // let selectionID = this.props.host
          //   .createSelectionIdBuilder()
          //   .withCategory(categorical.categories[1], index)
          //   .withMeasure(item.source.queryName)
          //   .withSeries(categorical.values, categorical.values[index])
          //   .createSelectionId();

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
                <button onClick={() => this.handleClick('Governance')}>
                  Activate Lasers
                </button>
              </Card.Body>
            </Card>
          );
        })}
      </Container>
    );
  }
}

export default Helpers;
