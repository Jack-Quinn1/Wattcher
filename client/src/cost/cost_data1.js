import moment from "moment";
export var appliancesArr = [
  "All",
  "Kitchen",
  "Living Room",
  "Master Bedroom",
  "Guest Bedroom",
  "Bathroom",
  "Other",
];

// today data

export var todayArr_0 = [
  0.9, 0.7, 0.8, 0.8, 0.6, 0.5, 0.5, 0.5, 0.9, 0.8, 0.7, 0.8, 0.3, 0.3, 0.3,
  0.4, 0.7, 1, 1, 0.6, 0.8, 0.7, 0.7, 0.7,
];

export var todayArr_1 = [
  0.1, 0.1, 0.2, 0.2, 0.1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1, 0.1, 0.3, 0.3,
  0.1, 0.1, 0.2, 0.2, 0.2,
];

export var todayArr_2 = [
  0.2, 0, 0, 0, 0, 0, 0, 0, 0.4, 0.3, 0.3, 0.4, 0, 0, 0, 0, 0.3, 0.3, 0.3, 0.1,
  0.1, 0, 0, 0,
];

export var todayArr_3 = [
  0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2,
  0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2,
];

export var todayArr_4 = [
  0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.1, 0.1, 0.1, 0.1, 0.1,
  0.1, 0.1, 0.1, 0.1, 0.1, 0.3, 0.3, 0.3, 0.3,
];

export var todayArr_5 = [
  0.1, 0.1, 0.1, 0.1, 0, 0, 0, 0, 0, 0, 0.1, 0.1, 0, 0, 0, 0, 0, 0.1, 0.1, 0.1,
  0.1, 0, 0, 0,
];

// yesterday data

var yDayArr_0 = [
  1.1, 1.1, 0.9, 0.9, 0.7, 0.7, 0.7, 0.5, 1, 0.8, 0.7, 0.8, 0.4, 0.4, 0.4, 0.5,
  0.7, 1, 1, 0.6, 1, 0.7, 0.7, 0.7,
];

var yDayArr_1 = [
  0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0, 0, 0, 0, 0, 0, 0, 0, 0.1, 0.1, 0.3, 0.3,
  0.1, 0.2, 0.2, 0.2, 0.2,
];

var yDayArr_2 = [
  0.2, 0.2, 0, 0, 0, 0, 0, 0, 0.5, 0.3, 0.3, 0.4, 0, 0, 0, 0, 0.3, 0.3, 0.3,
  0.1, 0.2, 0, 0, 0,
];

var yDayArr_3 = [
  0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2,
  0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2,
];

var yDayArr_4 = [
  0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.1, 0.1, 0.2, 0.2, 0.2,
  0.2, 0.1, 0.1, 0.1, 0.1, 0.3, 0.3, 0.3, 0.3,
];

var yDayArr_5 = [
  0.2, 0.2, 0.2, 0.2, 0, 0, 0, 0, 0, 0, 0.1, 0.1, 0, 0, 0, 0, 0, 0.1, 0.1, 0.1,
  0.1, 0, 0, 0,
];

// current month data

var monthDataArr_0 = [
  14.8, 14.5, 15.4, 15.4, 14.9, 15.3, 15.1, 14.7, 14.8, 15.3, 14.9, 15.3, 14.3,
  14.9, 15, 14.8, 14.7, 14.7, 14.9, 14.5, 14.4, 14.7, 15.1, 14.6, 14.7, 15.1,
  14.5, 14.8, 14.7, 14.8, 14.4,
];

var monthDataArr_1 = [
  2, 2, 2.3, 2.3, 2.3, 2.1, 2.2, 2, 2.1, 2.3, 2.2, 2.1, 2, 2.4, 2, 2, 2, 2.2,
  2.3, 2.1, 2, 2, 2.2, 2.1, 2, 2.2, 2.1, 2.1, 2, 2.2, 2.1,
];

var monthDataArr_2 = [
  2.7, 2.3, 2.5, 2.3, 2.3, 2.6, 2.5, 2.5, 2.3, 2.7, 2.6, 2.5, 2.2, 2.4, 2.4,
  2.2, 2.3, 2.3, 2.2, 2.3, 2.3, 2.3, 2.6, 2.3, 2.3, 2.5, 2.2, 2.2, 2.2, 2.2,
  2.2,
];

var monthDataArr_3 = [
  4.3, 4.3, 4.6, 4.8, 4.3, 4.7, 4.6, 4.3, 4.6, 4.3, 4.3, 4.8, 4.3, 4.3, 4.6,
  4.5, 4.6, 4.3, 4.3, 4.3, 4.3, 4.5, 4.3, 4.3, 4.6, 4.3, 4.4, 4.6, 4.3, 4.6,
  4.3,
];

var monthDataArr_4 = [
  5, 5.1, 5, 5, 5.2, 5.1, 5, 5.1, 5, 5.2, 5, 5, 5, 5, 5.2, 5.1, 5, 5.1, 5.2, 5,
  5, 5.1, 5.2, 5, 5, 5.2, 5, 5.1, 5.2, 5, 5,
];

var monthDataArr_5 = [
  0.8, 0.8, 1, 1, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.9, 0.8, 0.8, 0.8, 1, 0.8,
  0.8, 0.9, 0.8, 0.8, 0.8, 0.8, 0.9, 0.8, 0.9, 0.8, 0.8, 1, 0.8, 0.8,
];

// last month data

var lMonthDataArr_0 = [
  15.8, 14.5, 15.7, 15.4, 15.1, 15.3, 15.6, 14.7, 14.7, 15.3, 15, 15.6, 15.3,
  15.1, 15.3, 15.6, 15, 15.2, 16, 14.7, 15.6, 15, 15.7, 15.1, 15.3, 15.6, 15.1,
  15.5, 15.2, 15.9, 16.1,
];

var lMonthDataArr_1 = [
  2, 2, 2.3, 2.3, 2.3, 2.1, 2.2, 2, 2.1, 2.3, 2.3, 2.1, 2, 2.4, 2, 2, 2, 2.2,
  2.3, 2.3, 2, 2.3, 2.2, 2.3, 2, 2.2, 2.3, 2.3, 2, 2.3, 2.3,
];

var lMonthDataArr_2 = [
  2.7, 2.3, 2.5, 2.3, 2.3, 2.6, 2.5, 2.5, 2.7, 2.7, 2.6, 2.5, 2.7, 2.4, 2.7,
  2.7, 2.3, 2.3, 2.7, 2.3, 2.7, 2.3, 2.7, 2.3, 2.7, 2.5, 2.2, 2.7, 2.7, 2.7,
  2.7,
];

var lMonthDataArr_3 = [
  4.8, 4.3, 4.6, 4.8, 4.3, 4.7, 4.8, 4.3, 4.6, 4.3, 4.3, 4.8, 4.8, 4.3, 4.6,
  4.8, 4.6, 4.8, 4.8, 4.3, 4.8, 4.5, 4.8, 4.3, 4.6, 4.8, 4.8, 4.6, 4.3, 4.8,
  4.8,
];

var lMonthDataArr_4 = [
  5.3, 5.1, 5, 5, 5.2, 5.1, 5.3, 5.1, 5, 5.2, 5, 5.3, 5, 5, 5.2, 5.1, 5.3, 5.1,
  5.2, 5, 5.3, 5, 5.2, 5.3, 5, 5.2, 5, 5.1, 5.2, 5.3, 5.3,
];

var lMonthDataArr_5 = [
  1, 0.8, 1, 1, 1, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.9, 0.8, 1, 0.8, 1, 0.8, 0.8,
  1, 0.8, 0.8, 0.8, 0.8, 0.8, 1, 0.9, 0.8, 0.8, 1, 0.8, 1,
];

// current year data

var yearDataArr_0 = [
  460, 440.6, 457.6, 460.1, 436.6, 451.9, 454.3, 441.6, 451.4, 447.6, 438.7,
  442.6,
];

var yearDataArr_1 = [
  65.9, 62.2, 66.2, 65.9, 62.2, 65.9, 67.3, 62.2, 65.9, 62.2, 62.2, 62.2,
];

var yearDataArr_2 = [
  73.4, 71.3, 76.2, 73.4, 71.3, 73.9, 73.4, 71.3, 73.4, 71.3, 73.4, 71.3,
];

var yearDataArr_3 = [
  137.6, 129.1, 136.2, 138.1, 129.1, 134.1, 137.6, 129.1, 134.1, 138.1, 129.1,
  129.1,
];

var yearDataArr_4 = [
  157.1, 155, 151, 157.7, 151, 155, 151, 151, 155, 151, 151, 155,
];

var yearDataArr_5 = [26, 23, 28, 25, 23, 23, 25, 28, 23, 25, 23, 25];

// last year's data

var pYearDataArr_0 = [
  438.8, 435.7, 447, 442.6, 436.6, 451.9, 447.3, 427.4, 440.1, 437.8, 434.4,
  435.4,
];

var pYearDataArr_1 = [
  58.9, 62.2, 66.2, 58.9, 62.2, 65.9, 67.3, 58.9, 58.9, 58.9, 62.2, 58.9,
];

var pYearDataArr_2 = [
  69.1, 66.4, 76.2, 69.1, 71.3, 73.9, 66.4, 66.4, 69.1, 71.3, 69.1, 66.4,
];

var pYearDataArr_3 = [
  131.6, 129.1, 131.6, 131.6, 129.1, 134.1, 137.6, 129.1, 134.1, 131.6, 129.1,
  129.1,
];

var pYearDataArr_4 = [
  157.2, 155, 151, 158, 151, 155, 151, 151, 155, 151, 151, 155,
];

var pYearDataArr_5 = [22, 23, 22, 25, 23, 23, 25, 22, 23, 25, 23, 26];

var appliancechart1 = {
  type: "stackedarea2d",
  width: "100%",
  id: "mychart21",
  height: 500,
  dataSource: buildDataThisMonth1("Guest Bedroom"),
};

export default appliancechart1;
//export { refrigeration_last_month };

function buildDataToday1(appName) {
  var index = appliancesArr.indexOf(appName);

  var dataArr = eval("todayArr_" + index);

  var catArr = [];
  for (var i = 0; i < 24; i++) {
    catArr.push({ label: i + " hrs" });
  }

  var elecDataArr = [];

  for (var i = 0; i < 24; i++) {
    if (i < moment().format("H")) {
      elecDataArr.push({ value: Math.round(0.6 * dataArr[i] * 100) / 100 });
    } else {
      elecDataArr.push({
        value: Math.round(0.6 * dataArr[i] * 100) / 100,
        alpha: "30",
        toolText:
          "<div><i>Predicted: $seriesName<br>$label: $dataValue</i></div>",
      });
    }
  }

  var gasDataArr = [];

  for (var i = 0; i < 24; i++) {
    if (i < moment().format("H")) {
      gasDataArr.push({ value: Math.round(0.4 * dataArr[i] * 100) / 100 });
    } else {
      gasDataArr.push({
        value: Math.round(0.4 * dataArr[i] * 100) / 100,
        alpha: "30",
        toolText:
          "<div><i>Predicted: $seriesName<br>$label: $dataValue</i></div>",
      });
    }
  }

  var today_data = {
    chart: {
      bgColor: "#1D1B41",
      bgAlpha: "0",
      canvasBgAlpha: "0",
      showBorder: "0",
      showCanvasBorder: "0",
      showValues: "0",
      showAlternateHGridColor: "0",
      legendBgAlpha: "0",
      usePlotGradientColor: "0",
      paletteColors: "#48DFBA, #F7E332",
      drawCustomLegendIcon: "1",
      baseFontSize: "14",
      baseFontColor: "#FDFDFD",
      showPlotBorder: "0",
      baseFont: "Nunito Sans Light",
      legendBorderAlpha: "0",
      numberPrefix: "€",
      toolTipBgcolor: "#484E69",
      toolTipPadding: "5",
      toolTipBorderRadius: "2",
      toolTipBorderAlpha: "30",
      tooltipBorderThickness: "0.7",
      toolTipColor: "#FDFDFD",
      showXAxisLine: "1",
      showYAxisLine: "1",
      xAxisLineColor: "#9092A4",
      yAxisLineColor: "#9092A4",
      xAxisLineThickness: "1.5",
      yAxisLineThickness: "1.5",
      divLineColor: "#414761",
      divLineAlpha: "100",
      divLineThickness: "1.5",
      divLineDashed: "1",
      divLineDashGap: "2",
      divlineDashLen: "3",
      transposeAxis: "1",
      scrollHeight: "8",
      scrollColor: "#FDFDFD",
      flatScrollBars: "1",
      scrollShowButtons: "0",
      chartLeftMargin: "0",
      chartRightMargin: "0",
      canvasLeftMargin: "0",
      canvasRightMargin: "0",
    },
    categories: [{ category: catArr }],
    dataset: [
      { seriesname: "Day", data: elecDataArr },
      { seriesname: "Night", data: gasDataArr },
    ],
  };
  return today_data;
}

export { buildDataToday1 };

function buildDataYesterday1(appName) {
  var index = appliancesArr.indexOf(appName);

  var dataArr = eval("yDayArr_" + index);

  var catArr = [];

  for (var i = 0; i < 24; i++) {
    catArr.push({ label: i + " hrs" });
  }

  var elecDataArr = [];

  for (var i = 0; i < 24; i++) {
    elecDataArr.push({ value: Math.round(0.6 * dataArr[i] * 100) / 100 });
  }

  var gasDataArr = [];

  for (var i = 0; i < 24; i++) {
    gasDataArr.push({ value: Math.round(0.4 * dataArr[i] * 100) / 100 });
  }

  var yesterday_data = {
    chart: {
      bgColor: "#1D1B41",
      bgAlpha: "0",
      canvasBgAlpha: "0",
      showBorder: "0",
      showCanvasBorder: "0",
      showValues: "0",
      showAlternateHGridColor: "0",
      legendBgAlpha: "0",
      usePlotGradientColor: "0",
      paletteColors: "#48DFBA, #F7E332",
      drawCustomLegendIcon: "1",
      baseFontSize: "14",
      baseFontColor: "#FDFDFD",
      showPlotBorder: "0",
      baseFont: "Nunito Sans Light",
      legendBorderAlpha: "0",
      numberPrefix: "€",
      toolTipBgcolor: "#484E69",
      toolTipPadding: "5",
      toolTipBorderRadius: "2",
      toolTipBorderAlpha: "30",
      tooltipBorderThickness: "0.7",
      toolTipColor: "#FDFDFD",
      showXAxisLine: "1",
      showYAxisLine: "1",
      xAxisLineColor: "#9092A4",
      yAxisLineColor: "#9092A4",
      xAxisLineThickness: "1.5",
      yAxisLineThickness: "1.5",
      divLineColor: "#414761",
      divLineAlpha: "100",
      divLineThickness: "1.5",
      divLineDashed: "1",
      divLineDashGap: "2",
      divlineDashLen: "3",
      transposeAxis: "1",
      scrollHeight: "8",
      scrollColor: "#FDFDFD",
      flatScrollBars: "1",
      scrollShowButtons: "0",
      chartLeftMargin: "0",
      chartRightMargin: "0",
      canvasLeftMargin: "0",
      canvasRightMargin: "0",
    },
    categories: [{ category: catArr }],
    dataset: [
      { seriesname: "Day", data: elecDataArr },
      { seriesname: "Night", data: gasDataArr },
    ],
  };
  return yesterday_data;
}

export { buildDataYesterday1 };

function buildDataThisMonth1(appName) {
  var index = appliancesArr.indexOf(appName);

  var dataArr = eval("monthDataArr_" + index);

  var catArr = [];
  for (var i = 0; i < moment().daysInMonth(); i++) {
    catArr.push({ label: moment().format("MMM") + " " + (i + 1) });
  }

  var elecDataArr = [];

  for (var i = 0; i < moment().daysInMonth(); i++) {
    if (i < parseInt(moment().format("D"))) {
      elecDataArr.push({ value: Math.round(0.6 * dataArr[i] * 100) / 100 });
    } else {
      elecDataArr.push({
        value: Math.round(0.6 * dataArr[i] * 100) / 100,
        alpha: "30",
        toolText:
          "<div><i>Predicted: $seriesName<br>$label: $dataValue</i></div>",
      });
    }
  }

  var gasDataArr = [];

  for (var i = 0; i < moment().daysInMonth(); i++) {
    if (i < parseInt(moment().format("D"))) {
      gasDataArr.push({ value: Math.round(0.4 * dataArr[i] * 100) / 100 });
    } else {
      gasDataArr.push({
        value: Math.round(0.4 * dataArr[i] * 100) / 100,
        alpha: "30",
        toolText:
          "<div><i>Predicted: $seriesName<br>$label: $dataValue</i></div>",
      });
    }
  }

  var this_month_data = {
    chart: {
      bgColor: "#1D1B41",
      bgAlpha: "0",
      canvasBgAlpha: "0",
      showBorder: "0",
      showCanvasBorder: "0",
      showValues: "0",
      showAlternateHGridColor: "0",
      legendBgAlpha: "0",
      usePlotGradientColor: "0",
      paletteColors: "#48DFBA, #F7E332",
      drawCustomLegendIcon: "1",
      baseFontSize: "14",
      baseFontColor: "#FDFDFD",
      showPlotBorder: "0",
      baseFont: "Nunito Sans Light",
      legendBorderAlpha: "0",
      numberPrefix: "€",
      toolTipBgcolor: "#484E69",
      toolTipPadding: "5",
      toolTipBorderRadius: "2",
      toolTipBorderAlpha: "30",
      tooltipBorderThickness: "0.7",
      toolTipColor: "#FDFDFD",
      showXAxisLine: "1",
      showYAxisLine: "1",
      xAxisLineColor: "#9092A4",
      yAxisLineColor: "#9092A4",
      xAxisLineThickness: "1.5",
      yAxisLineThickness: "1.5",
      divLineColor: "#414761",
      divLineAlpha: "100",
      divLineThickness: "1.5",
      divLineDashed: "1",
      divLineDashGap: "2",
      divlineDashLen: "3",
      rotateLables: "1",
      transposeAxis: "1",
      scrollHeight: "8",
      scrollColor: "#FDFDFD",
      flatScrollBars: "1",
      scrollShowButtons: "0",
      chartLeftMargin: "0",
      chartRightMargin: "0",
      canvasLeftMargin: "0",
      canvasRightMargin: "0",
    },
    categories: [{ category: catArr }],
    dataset: [
      { seriesname: "Day", data: elecDataArr },
      { seriesname: "Night", data: gasDataArr },
    ],
  };

  return this_month_data;
}

export { buildDataThisMonth1 };

function buildDataLastMonth1(appName) {
  var index = appliancesArr.indexOf(appName);

  var dataArr = eval("lMonthDataArr_" + index);

  var catArr = [];

  for (var i = 0; i < moment().subtract(1, "month").daysInMonth(); i++) {
    catArr.push({
      label: moment().subtract(1, "month").format("MMM") + " " + (i + 1),
    });
  }

  var elecDataArr = [];

  for (var i = 0; i < moment().subtract(1, "month").daysInMonth(); i++) {
    elecDataArr.push({ value: Math.round(0.6 * dataArr[i] * 100) / 100 });
  }

  var gasDataArr = [];

  for (var i = 0; i < moment().subtract(1, "month").daysInMonth(); i++) {
    gasDataArr.push({ value: Math.round(0.4 * dataArr[i] * 100) / 100 });
  }

  var last_month_data = {
    chart: {
      bgColor: "#1D1B41",
      bgAlpha: "0",
      canvasBgAlpha: "0",
      showBorder: "0",
      showCanvasBorder: "0",
      showValues: "0",
      showAlternateHGridColor: "0",
      legendBgAlpha: "0",
      usePlotGradientColor: "0",
      paletteColors: "#48DFBA, #F7E332",
      drawCustomLegendIcon: "1",
      baseFontSize: "14",
      baseFontColor: "#FDFDFD",
      showPlotBorder: "0",
      baseFont: "Nunito Sans Light",
      legendBorderAlpha: "0",
      numberPrefix: "€",
      toolTipBgcolor: "#484E69",
      toolTipPadding: "5",
      toolTipBorderRadius: "2",
      toolTipBorderAlpha: "30",
      tooltipBorderThickness: "0.7",
      toolTipColor: "#FDFDFD",
      showXAxisLine: "1",
      showYAxisLine: "1",
      xAxisLineColor: "#9092A4",
      yAxisLineColor: "#9092A4",
      xAxisLineThickness: "1.5",
      yAxisLineThickness: "1.5",
      divLineColor: "#414761",
      divLineAlpha: "100",
      divLineThickness: "1.5",
      divLineDashed: "1",
      divLineDashGap: "2",
      divlineDashLen: "3",
      rotateLabels: "1",
      transposeAxis: "1",
      scrollHeight: "8",
      scrollColor: "#FDFDFD",
      flatScrollBars: "1",
      scrollShowButtons: "0",
      chartLeftMargin: "0",
      chartRightMargin: "0",
      canvasLeftMargin: "0",
      canvasRightMargin: "0",
    },
    categories: [{ category: catArr }],
    dataset: [
      { seriesname: "Day", data: elecDataArr },
      { seriesname: "Night", data: gasDataArr },
    ],
  };

  return last_month_data;
}

export { buildDataLastMonth1 };

function buildDataThisYear1(appName) {
  var index = appliancesArr.indexOf(appName);

  var dataArr = eval("yearDataArr_" + index);

  var catArr = [];

  for (var i = 0; i < 12; i++) {
    catArr.push({ label: moment().month(i).format("MMM") });
  }

  var elecDataArr = [];

  for (var i = 0; i < 12; i++) {
    if (i < parseInt(moment().format("M"))) {
      elecDataArr.push({ value: Math.round(0.6 * dataArr[i] * 100) / 100 });
    } else {
      elecDataArr.push({
        value: Math.round(0.6 * dataArr[i] * 100) / 100,
        alpha: "30",
        toolText:
          "<div><i>Predicted: $seriesName<br>$label: $dataValue</i></div>",
      });
    }
  }

  var gasDataArr = [];

  for (var i = 0; i < 12; i++) {
    if (i < parseInt(moment().format("M"))) {
      gasDataArr.push({ value: Math.round(0.4 * dataArr[i] * 100) / 100 });
    } else {
      gasDataArr.push({
        value: Math.round(0.4 * dataArr[i] * 100) / 100,
        alpha: "30",
        toolText:
          "<div><i>Predicted: $seriesName<br>$label: $dataValue</i></div>",
      });
    }
  }

  var this_year_data = {
    chart: {
      bgColor: "#1D1B41",
      bgAlpha: "0",
      canvasBgAlpha: "0",
      showBorder: "0",
      showCanvasBorder: "0",
      showValues: "0",
      showAlternateHGridColor: "0",
      legendBgAlpha: "0",
      usePlotGradientColor: "0",
      paletteColors: "#48DFBA, #F7E332",
      drawCustomLegendIcon: "1",
      baseFontSize: "14",
      baseFontColor: "#FDFDFD",
      showPlotBorder: "0",
      baseFont: "Nunito Sans Light",
      legendBorderAlpha: "0",
      numberPrefix: "€",
      toolTipBgcolor: "#484E69",
      toolTipPadding: "5",
      toolTipBorderRadius: "2",
      toolTipBorderAlpha: "30",
      tooltipBorderThickness: "0.7",
      toolTipColor: "#FDFDFD",
      showXAxisLine: "1",
      showYAxisLine: "1",
      xAxisLineColor: "#9092A4",
      yAxisLineColor: "#9092A4",
      xAxisLineThickness: "1.5",
      yAxisLineThickness: "1.5",
      divLineColor: "#414761",
      divLineAlpha: "100",
      divLineThickness: "1.5",
      divLineDashed: "1",
      divLineDashGap: "2",
      divlineDashLen: "3",
      transposeAxis: "1",
      scrollHeight: "8",
      scrollColor: "#FDFDFD",
      flatScrollBars: "1",
      scrollShowButtons: "0",
      chartLeftMargin: "0",
      chartRightMargin: "0",
      canvasLeftMargin: "0",
      canvasRightMargin: "0",
    },
    categories: [{ category: catArr }],
    dataset: [
      { seriesname: "Day", data: elecDataArr },
      { seriesname: "Night", data: gasDataArr },
    ],
  };

  return this_year_data;
}

export { buildDataThisYear1 };

function buildDataLastYear1(appName) {
  var index = appliancesArr.indexOf(appName);

  var dataArr = eval("pYearDataArr_" + index);

  var catArr = [];

  for (var i = 0; i < 12; i++) {
    catArr.push({ label: moment().month(i).format("MMM") });
  }

  var elecDataArr = [];

  for (var i = 0; i < 12; i++) {
    elecDataArr.push({ value: Math.round(0.6 * dataArr[i] * 100) / 100 });
  }

  var gasDataArr = [];

  for (var i = 0; i < 12; i++) {
    gasDataArr.push({ value: Math.round(0.4 * dataArr[i] * 100) / 100 });
  }

  var last_year_data = {
    chart: {
      bgColor: "#1D1B41",
      bgAlpha: "0",
      canvasBgAlpha: "0",
      showBorder: "0",
      showCanvasBorder: "0",
      showValues: "0",
      showAlternateHGridColor: "0",
      legendBgAlpha: "0",
      usePlotGradientColor: "0",
      paletteColors: "#48DFBA, #F7E332",
      drawCustomLegendIcon: "1",
      baseFontSize: "14",
      baseFontColor: "#FDFDFD",
      showPlotBorder: "0",
      baseFont: "Nunito Sans Light",
      legendBorderAlpha: "0",
      numberPrefix: "€",
      toolTipBgcolor: "#484E69",
      toolTipPadding: "5",
      toolTipBorderRadius: "2",
      toolTipBorderAlpha: "30",
      tooltipBorderThickness: "0.7",
      toolTipColor: "#FDFDFD",
      showXAxisLine: "1",
      showYAxisLine: "1",
      xAxisLineColor: "#9092A4",
      yAxisLineColor: "#9092A4",
      xAxisLineThickness: "1.5",
      yAxisLineThickness: "1.5",
      divLineColor: "#414761",
      divLineAlpha: "100",
      divLineThickness: "1.5",
      divLineDashed: "1",
      divLineDashGap: "2",
      divlineDashLen: "3",
      transposeAxis: "1",
      scrollHeight: "8",
      scrollColor: "#FDFDFD",
      flatScrollBars: "1",
      scrollShowButtons: "0",
      chartLeftMargin: "0",
      chartRightMargin: "0",
      canvasLeftMargin: "0",
      canvasRightMargin: "0",
    },
    categories: [{ category: catArr }],
    dataset: [
      { seriesname: "Day", data: elecDataArr },
      { seriesname: "Night", data: gasDataArr },
    ],
  };

  return last_year_data;
}

export { buildDataLastYear1 };
