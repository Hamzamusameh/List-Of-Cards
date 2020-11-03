import * as React from "react";
export interface State {
    textLabel: string;
    textValue: string;
}
export declare class Helpers extends React.Component<any, any> {
    state: {
        textLabel: string;
        textValue: string;
    };
    constructor(props: any);
    update: (newState: State) => void;
    render(): JSX.Element;
}
export default Helpers;
