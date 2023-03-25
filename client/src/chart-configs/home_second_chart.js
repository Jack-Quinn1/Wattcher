import moment from "moment";
import "../index.css";
var currentDay = moment().format("MMM D");
var previousDay = moment().subtract(1, "day").format("MMM D");
var second_chart_today = {
  chart: {
    showBorder: "0",
    showShadow: "0",
    use3DLighting: "0",
    showLabels: "1",
    showPercentValues: "1",
    paletteColors: "#58E2C2, #F7E53B",
    bgColor: "#1D1B41",
    bgAlpha: "0",
    canvasBgAlpha: "0",
    // doughnutRadius: "75",
    // pieRadius: "95",
    // "pieRadius": "100",
    // numberPrefix: "$",
    plotBorderAlpha: "0",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "7",
    toolTipBorderRadius: "3",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    baseFont: "Nunito Sans",
    baseFontSize: "14",
    baseFontColor: "#FDFDFD",
    showLegend: "0",
    legendShadow: "0",
    legendBorderAlpha: "0",
    // drawCustomLegendIcon: "0",
    legendBgAlpha: "0",
    // chartTopMargin: "-10",
    canvasTopMargin: "-10",
    chartBottomMargin: "20",
    canvasBottomMargin: "20",
    legendPosition: "BOTTOM",
    useDataPlotColorForLabels: "1",
    // defaultCenterLabel: "Total <br> $214",
    // centerLabel: "$label<br>$value",
    // centerLabelBold: "1",
    // centerLabelFontSize: "20",
    enableRotation: "0",
    transposeAnimation: "1",
    plotToolText: "<div>$label<br>$dataValue ($percentValue)<div>",
  },

  annotations: {
    groups: [
      {
        autoscale: "1",
        items: [
          {
            id: "indicator",
            type: "text",
            text: "Day Rate: 43.68c p/KWh",
            color: "#58e2c2",
            fontSize: "30",
            x: "$canvasEnd/2 +250",
            y: "$canvasheight/2 - 150",
          },
          {
            id: "indicator",
            type: "text",
            text: "Night Rate: 21.55c p/KWh",
            color: "#f7e53b",
            fontSize: "30",
            x: "$canvasEnd/2 +250",
            y: "$canvasheight/2 - 110",
          },
          {
            id: "indicator",
            type: "text",
            text: "Total Cost: €4.26",
            color: "#FF0000",
            fontSize: "30",
            x: "$canvasEnd/2 +250",
            y: "$canvasheight/2 - 70",
          },
        ],
      },
    ],
  },

  data: [
    {
      label: "Day",
      value: "3.51624",
      alpha: "55",
    },
    {
      label: "Night",
      value: "0.743475",
    },
  ],
};

var currentMonth = moment().format("MMM");
var previousMonth = moment().subtract(1, "month").format("MMM");

var second_chart_month = {
  chart: {
    showBorder: "0",
    showCanvasBorder: "0",
    showAlternateHGridColor: "0",
    bgColor: "#1D1B41",
    bgAlpha: "0",
    canvasBgAlpha: "0",
    baseFontSize: "14",
    baseFont: "Nunito Sans Regular",
    baseFontColor: "#FDFDFD",
    divLineThickness: "2",
    numberPrefix: "$",
    showLimits: "0",
    showDivLineValues: "0",
    paletteColors: "#58E2C2",
    usePlotGradientColor: "0",
    divLineColor: "#979797",
    divLineDashed: "1",
    divLineDashLen: "5",
    valueFontSize: "15",
    canvasRightMargin: "200",
    canvasLeftMargin: "35",
    canvasBottomMargin: "60",
    canvasTopMargin: "60",
    placeValuesInside: "0",
    yAxisMaxValue: "250",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "7",
    toolTipBorderRadius: "3",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    yaxismaxvalue: "280",
    transposeAnimation: "1",
  },

  annotations: {
    autoscale: "1",
    groups: [
      {
        items: [
          {
            id: "indicator",
            type: "text",
            text: "▲ 5.42%",
            color: "#E8506B",
            fontSize: "30",
            x: "$canvasEndX + 100",
            y: "$canvasheight/2 - 40",
          },
          {
            id: "indicator",
            type: "text",
            text: "INCREASE IN COST",
            color: "#FDFDFD",
            fontSize: "14",
            x: "$canvasEndX + 100",
            y: "$canvasheight/2 - 15",
          },
        ],
      },
    ],
  },

  data: [
    {
      label: previousMonth,
      value: "203",
      alpha: "55",
    },
    {
      label: currentMonth,
      value: "214",
    },
  ],
};
var currentYear = moment().format("YYYY");
var previousYear = moment().subtract(1, "year").format("YYYY");

var second_chart_year = {
  chart: {
    showBorder: "0",
    showCanvasBorder: "0",
    showAlternateHGridColor: "0",
    bgColor: "#1D1B41",
    bgAlpha: "0",
    canvasBgAlpha: "0",
    baseFontSize: "14",
    baseFont: "Nunito Sans Regular",
    baseFontColor: "#FDFDFD",
    divLineThickness: "2",
    numberPrefix: "$",
    showLimits: "0",
    showDivLineValues: "0",
    paletteColors: "#58E2C2",
    usePlotGradientColor: "0",
    divLineColor: "#979797",
    divLineDashed: "1",
    divLineDashLen: "5",
    valueFontSize: "15",
    canvasRightMargin: "200",
    canvasLeftMargin: "35",
    canvasBottomMargin: "60",
    canvasTopMargin: "60",
    placeValuesInside: "0",
    yAxisMaxValue: "2000",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "7",
    toolTipBorderRadius: "3",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    decimals: "1",
    transposeAnimation: "1",
    formatNumberScale: "0",
  },

  annotations: {
    groups: [
      {
        autoscale: "1",
        items: [
          {
            id: "indicator",
            type: "text",
            text: "▼ 11.25%",
            color: "#B4F9A1",
            fontSize: "30",
            x: "$canvasEndX + 100",
            y: "$canvasheight/2 - 40",
          },
          {
            id: "indicator",
            type: "text",
            text: "DECREASE IN COST",
            color: "#FDFDFD",
            fontSize: "14",
            x: "$canvasEndX + 100",
            y: "$canvasheight/2 - 15",
          },
        ],
      },
    ],
  },

  data: [
    {
      label: previousYear,
      value: "1600",
      alpha: "55",
    },
    {
      label: currentYear,
      value: "1420",
    },
  ],
};

var chartConfigs2 = {
  type: "doughnut2d",
  id: "mychart2",
  dataFormat: "JSON",
  width: "100%",
  height: "300",
  dataSource: second_chart_month,
};

export default chartConfigs2;
export { second_chart_today };
export { second_chart_month };
export { second_chart_year };
