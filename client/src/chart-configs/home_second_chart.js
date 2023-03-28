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
    plotBorderAlpha: "0",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "7",
    toolTipBorderRadius: "3",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    baseFont: "Roboto",
    baseFontSize: "18",
    baseFontColor: "#FDFDFD",
    showLegend: "0",
    legendShadow: "0",
    legendBorderAlpha: "0",
    legendBgAlpha: "0",
    canvasTopMargin: "20",
    chartBottomMargin: "20",
    canvasBottomMargin: "20",
    legendPosition: "BOTTOM",
    useDataPlotColorForLabels: "1",
    enableRotation: "0",
    transposeAnimation: "1",
    plotToolText: "<div>$label<br>$dataValue ($percentValue)<div>",
    plotBorderThickness: "2",
    plotBorderColor: "#FFFFFF",
  },

  annotations: {
    autoscale: "1",
    groups: [
      {
        items: [
          {
            id: "indicator",
            type: "text",
            text: "Day Rate: 43.68c p/KWh",
            color: "#58e2c2",
            fontSize: "20",
            x: "$canvasEnd/2 +150",
            y: "$canvasheight/2 - 150",
            italic: "1",
          },
          {
            id: "indicator",
            type: "text",
            text: "Night Rate: 21.55c p/KWh",
            color: "#f7e53b",
            fontSize: "20",
            x: "$canvasEnd/2 +150",
            y: "$canvasheight/2 - 120",
            italic: "1",
          },
          {
            id: "indicator",
            type: "text",
            text: "Total Cost: €4.26",
            color: "65AFFF",
            fontSize: "25",
            x: "$canvasEnd/2 +150",
            y: "$canvasheight/2 - 70",
            bold: "1",
          },
        ],
      },
    ],
  },

  data: [
    {
      label: "Day 6am-11pm",
      value: "8.05",
    },
    {
      label: "Night 11pm-6am",
      value: "3.45",
    },
  ],
};

var currentMonth = moment().format("MMM");
var previousMonth = moment().subtract(1, "month").format("MMM");

var second_chart_month = {
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
    plotBorderAlpha: "0",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "7",
    toolTipBorderRadius: "3",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    baseFont: "Roboto",
    baseFontSize: "18",
    baseFontColor: "#FDFDFD",
    showLegend: "0",
    legendShadow: "0",
    legendBorderAlpha: "0",
    legendBgAlpha: "0",
    canvasTopMargin: "20",
    chartBottomMargin: "20",
    canvasBottomMargin: "20",
    legendPosition: "BOTTOM",
    useDataPlotColorForLabels: "1",
    enableRotation: "0",
    transposeAnimation: "1",
    plotToolText: "<div>$label<br>$dataValue ($percentValue)<div>",
    plotBorderThickness: "2",
    plotBorderColor: "#FFFFFF",
  },

  annotations: {
    autoscale: "1",
    groups: [
      {
        items: [
          {
            id: "indicator",
            type: "text",
            text: "Day Rate: 43.68c p/KWh",
            color: "#58e2c2",
            fontSize: "20",
            x: "$canvasEnd/2 +150",
            y: "$canvasheight/2 - 150",
            italic: "1",
          },
          {
            id: "indicator",
            type: "text",
            text: "Night Rate: 21.55c p/KWh",
            color: "#f7e53b",
            fontSize: "20",
            x: "$canvasEnd/2 +150",
            y: "$canvasheight/2 - 120",
            italic: "1",
          },
          {
            id: "indicator",
            type: "text",
            text: "Total Cost: €40.26",
            color: "65AFFF",
            fontSize: "25",
            x: "$canvasEnd/2 +150",
            y: "$canvasheight/2 - 70",
            bold: "1",
          },
        ],
      },
    ],
  },

  data: [
    {
      label: "Day 6am-11pm",
      value: "80.05",
    },
    {
      label: "Night 11pm-6am",
      value: "30.45",
    },
  ],
};
var currentYear = moment().format("YYYY");
var previousYear = moment().subtract(1, "year").format("YYYY");

var second_chart_year = {
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
    plotBorderAlpha: "0",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "7",
    toolTipBorderRadius: "3",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    baseFont: "Roboto",
    baseFontSize: "18",
    baseFontColor: "#FDFDFD",
    showLegend: "0",
    legendShadow: "0",
    legendBorderAlpha: "0",
    legendBgAlpha: "0",
    canvasTopMargin: "20",
    chartBottomMargin: "20",
    canvasBottomMargin: "20",
    legendPosition: "BOTTOM",
    useDataPlotColorForLabels: "1",
    enableRotation: "0",
    transposeAnimation: "1",
    plotToolText: "<div>$label<br>$dataValue ($percentValue)<div>",
    plotBorderThickness: "2",
    plotBorderColor: "#FFFFFF",
  },

  annotations: {
    autoscale: "1",
    groups: [
      {
        items: [
          {
            id: "indicator",
            type: "text",
            text: "Day Rate: 43.68c p/KWh",
            color: "#58e2c2",
            fontSize: "20",
            x: "$canvasEnd/2 +150",
            y: "$canvasheight/2 - 150",
            italic: "1",
          },
          {
            id: "indicator",
            type: "text",
            text: "Night Rate: 21.55c p/KWh",
            color: "#f7e53b",
            fontSize: "20",
            x: "$canvasEnd/2 +150",
            y: "$canvasheight/2 - 120",
            italic: "1",
          },
          {
            id: "indicator",
            type: "text",
            text: "Total Cost: €400.26",
            color: "65AFFF",
            fontSize: "25",
            x: "$canvasEnd/2 +150",
            y: "$canvasheight/2 - 70",
            bold: "1",
          },
        ],
      },
    ],
  },

  data: [
    {
      label: "Day 6am-11pm",
      value: "800.05",
    },
    {
      label: "Night 11pm-6am",
      value: "300.45",
    },
  ],
};

var chartConfigs2 = {
  type: "doughnut2d",
  className: "fc-doughnut2d",
  id: "mychart2",
  dataFormat: "JSON",
  width: "100%",
  height: "300",
  dataSource: second_chart_month,
};

export default chartConfigs2;
export { second_chart_month };
export { second_chart_today };
export { second_chart_year };
