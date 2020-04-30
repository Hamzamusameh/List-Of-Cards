"use strict";

import "core-js/stable";
import "./../style/visual.less";
import powerbi from "powerbi-visuals-api";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import * as React from "react";
import * as ReactDOM from "react-dom";
import { VisualSettings } from "./settings";
import { Helpers } from "./Helpers";


export class Visual implements IVisual {
  private target: HTMLElement;

  constructor(options: VisualConstructorOptions) {
    console.log("Visual constructor", options);
    this.target = options.element;
  }

  public update(options: VisualUpdateOptions) {
    if (options.dataViews && options.dataViews[0]) {
      console.log("Visual update", options);
      this.manipulateData(options);
      ReactDOM.render(
        React.createElement(Helpers, options),
        this.target
      );
    }
  }

  public manipulateData(x) {
    console.log("manipulateData " + x);
    return x;
  }
}
