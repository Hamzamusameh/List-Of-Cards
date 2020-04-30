import { Visual } from "../../src/visual";
import powerbiVisualsApi from "powerbi-visuals-api"
import IVisualPlugin = powerbiVisualsApi.visuals.plugins.IVisualPlugin
import VisualConstructorOptions = powerbiVisualsApi.extensibility.visual.VisualConstructorOptions
var powerbiKey: any = "powerbi";
var powerbi: any = window[powerbiKey];

var cardsList55FB9B0494D540179EBAEAFE64FCDE54_DEBUG: IVisualPlugin = {
    name: 'cardsList55FB9B0494D540179EBAEAFE64FCDE54_DEBUG',
    displayName: 'CardsList',
    class: 'Visual',
    apiVersion: '2.6.0',
    create: (options: VisualConstructorOptions) => {
        if (Visual) {
            return new Visual(options);
        }

        throw 'Visual instance not found';
    },
    custom: true
};

if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["cardsList55FB9B0494D540179EBAEAFE64FCDE54_DEBUG"] = cardsList55FB9B0494D540179EBAEAFE64FCDE54_DEBUG;
}

export default cardsList55FB9B0494D540179EBAEAFE64FCDE54_DEBUG;