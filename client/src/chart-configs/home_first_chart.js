import moment from "moment";

var dayVal,
  monthVal = moment().format("MMMM, Do YYYY");

var first_chart_today = {
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
    autoscale: "1",
    groups: [
      {
        items: [
          {
            id: "indicator",
            type: "text",
            text: "Energy Used:",
            color: "#B4F9A1",
            fontSize: "30",
            x: "$canvasEnd/2 +200",
            y: "$canvasheight/2 -120",
          },
          {
            id: "indicator",
            type: "text",
            text: "11.5 kW/Hr",
            color: "#FDFDFD",
            fontSize: "20",
            x: "$canvasEnd/2 +200",
            y: "$canvasheight/2 - 80",
          },
        ],
      },
    ],
  },

  data: [
    {
      label: "Day 6am-10pm",
      value: "8.05",
    },
    {
      label: "Night 10pm-6am",
      value: "3.45",
    },
  ],
};

// var monthVal = moment().format('MMMM YYYY');

var first_chart_month = {
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
    autoscale: "1",
    groups: [
      {
        items: [
          {
            id: "indicator",
            type: "text",
            text: "Energy Used:",
            color: "#B4F9A1",
            fontSize: "30",
            x: "$canvasEnd/2 +200",
            y: "$canvasheight/2 -120",
          },
          {
            id: "indicator",
            type: "text",
            text: "350 kW/Hr",
            color: "#FDFDFD",
            fontSize: "20",
            x: "$canvasEnd/2 +200",
            y: "$canvasheight/2 - 80",
          },
        ],
      },
    ],
  },

  data: [
    {
      label: "Day: 6am-10pm",
      value: "245",
    },
    {
      label: "Night: 10pm-6am",
      value: "105",
    },
  ],
};

//var yearVal = moment().format('YYYY');

var first_chart_year = {
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
    autoscale: "1",
    groups: [
      {
        items: [
          {
            id: "indicator",
            type: "text",
            text: "Energy Used:",
            color: "#B4F9A1",
            fontSize: "30",
            x: "$canvasEnd/2 +200",
            y: "$canvasheight/2 - 120",
          },
          {
            id: "indicator",
            type: "text",
            text: "4200 kW/Hr",
            color: "#FDFDFD",
            fontSize: "20",
            x: "$canvasEnd/2 +200",
            y: "$canvasheight/2 - 80",
          },
        ],
      },
    ],
  },

  data: [
    {
      label: "Day 6am-10pm",
      value: "2940",
    },
    {
      label: "Night 10pm-6am",
      value: "1260",
    },
  ],
};

var chartConfigs1 = {
  type: "pie2d",
  className: "fc-pie2d",
  dataFormat: "JSON",
  width: "100%",
  height: "300",
  id: "mychart1",
  dataSource: first_chart_month,
};

export default chartConfigs1;
export { first_chart_month };
export { first_chart_today };
export { first_chart_year };
