import FusionCharts from "fusioncharts";

const date = new Date();
var time = date.toLocaleTimeString("en-US", {
  hour12: false,
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

var fourth_chart_month = {
  chart: {
    bgColor: "#1D1B41",
    bgAlpha: "0",
    canvasBgAlpha: "0",
    showBorder: "0",
    showCanvasBorder: "0",
    showValues: "1",
    showAlternateHGridColor: "0",
    legendBgAlpha: "0",
    usePlotGradientColor: "0",
    paletteColors: "#48DFBA, #F7E332",
    drawCustomLegendIcon: "1",
    showPlotBorder: "0",
    legendBorderAlpha: "0",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "5",
    toolTipBorderRadius: "2",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    divLineColor: "#414761",
    divLineAlpha: "100",
    divLineThickness: "1.5",
    divLineDashed: "1",
    divLineDashGap: "2",
    divlineDashLen: "3",
    xAxisName: "Time",
    yAxisName: "Energy kWh",
    numberSuffix: " kWh",
    refreshinterval: "1",
    yaxisminvalue: "0.0002",
    yaxismaxvalue: "0.0006",
    numdisplaysets: "10",
    labeldisplay: "rotate",
    showRealTimeValue: "1",
    labelFontColor: "#C6C4C4",
    labelFontBold: "0",
    labelFontSize: "10",
    canvasLeftMargin: "0",
    canvasRightMargin: "40",
    canvasBottomMargin: "20",
    canvasTopMargin: "20",
    baseFontColor: "#FDFDFD",
  },

  categories: [
    {
      category: [
        {
          label: time,
        },
      ],
    },
  ],
  dataset: [
    {
      data: [
        {
          value: "0.00041",
        },
      ],
    },
  ],
};

var fourth_chart_today = fourth_chart_month;
var fourth_chart_year = fourth_chart_month;

var chartConfigs4 = {
  type: "realtimeline",
  className: "fc-realtimeline",
  id: "mychart4",
  dataFormat: "JSON",
  width: "100%",
  height: "300",
  dataSource: fourth_chart_month,
  events: {
    initialized: function (e) {
      function addLeadingZero(num) {
        return num <= 9 ? "0" + num : num;
      }

      function updateData() {
        var chartRef = FusionCharts("mychart4"),
          currDate = new Date(),
          label =
            addLeadingZero(currDate.getHours()) +
            ":" +
            addLeadingZero(currDate.getMinutes()) +
            ":" +
            addLeadingZero(currDate.getSeconds()),
          randomValue =
            Math.round(
              (Math.random() * (0.0005 - 0.00035) + 0.00035) * 100000
            ) / 100000,
          strData = "&label=" + label + "&value=" + randomValue;
        //console.log("Data fed to chartRef: ", strData);
        chartRef.feedData(strData);
        //console.log("Data", strData);
        //chartRef.render();
      }

      // setInterval(() => {
      //   window.dispatchEvent(new Event("resize"));
      //   console.log("It's happening ");
      // }, 5000);

      var myVar = setInterval(function () {
        updateData();
      }, 5000);
    },
  },
};

export default chartConfigs4;
export { fourth_chart_today };
export { fourth_chart_month };
export { fourth_chart_year };
