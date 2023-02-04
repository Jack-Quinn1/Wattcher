import moment from "moment";
// today chart
//var dayDetail = moment().format('MMMM, Do YYYY');
//var dayLen = 24;
var timeFlag = moment().format("a");
var currentHour;

if (timeFlag == "pm") {
  currentHour = parseInt(moment().format("h")) + 12;
} else {
  currentHour = moment().format("h");
}

var categoryArr = [];
for (var i = 1; i <= 23; i++) {
  if (i != currentHour) {
    if (i % 4 != 0) {
      categoryArr.push({ label: i + " hrs", showLabel: "0" });
    } else {
      categoryArr.push({ label: i + " hrs" });
    }
  } else {
    categoryArr.push({ label: currentHour + " hrs" });
    categoryArr.push({
      vline: "true",
      color: "#707C92",
      dashed: "1",
      linePosition: "0",
      labelPosition: "0",
    });
  }
}

var dayValueArr = [
  0, 1, 1.3, 1.8, 2.6, 3.1, 3.9, 4.3, 4.8, 5.6, 5.9, 6.2, 7.3, 7.8, 8.3, 8.7,
  9.2, 9.8, 10.6, 11.8, 12.3, 13.9, 14.4, 15.1,
];

var activeArr = [];

for (var i = 1; i <= 23; i++) {
  if (i <= currentHour) {
    if (i % 4 != 0) {
      activeArr.push({ value: dayValueArr[i - 1], anchorAlpha: "0" });
    } else {
      activeArr.push({ value: dayValueArr[i - 1] });
    }
  } else {
    activeArr.push({ value: null, anchorAlpha: "0" });
  }
}

var inActiveArr = [];

for (var i = 1; i <= 23; i++) {
  if (i <= currentHour) {
    inActiveArr.push({ value: dayValueArr[i - 1], anchorAlpha: "0" });
  } else {
    if (i % 4 != 0) {
      inActiveArr.push({ value: dayValueArr[i - 1], anchorAlpha: "0" });
    } else {
      inActiveArr.push({ value: dayValueArr[i - 1] });
    }
  }
}

var third_chart_month = {
  chart: {
    showBorder: "0",
    showCanvasBorder: "0",
    placeValuesInside: "0",
    showAlternateVGridColor: "0",
    canvasBgAlpha: "0",
    bgColor: "#1D1B41",
    bgAlpha: "0",
    baseFont: "Nunito Sans Light",
    baseFontColor: "#FDFDFD",
    baseFontSize: "14",
    showDivLineValues: "0",
    divLineAlpha: "0",
    showLimits: "0",
    baseFontBold: "0",
    usePlotGradientColor: "0",
    numberSuffix: " kWh",
    yAxisMaxValue: "3",
    paletteColors: "#AB26C2, #9326BF, #7625B9, #5E24B6, #4424B1, #3123AE",
    labelFontColor: "#C6C4C4",
    labelFontBold: "0",
    labelFontSize: "16",
    plotBorderAlpha: "0",
    plotFillAlpha: "100",
    valueFontBold: "1",
    valueFontColor: "#FDFDFD",
    valueFontSize: "13",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "7",
    toolTipBorderRadius: "3",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    canvasLeftMargin: "0",
    canvasRightMargin: "40",
    canvasBottomMargin: "20",
    canvasTopMargin: "20",
    showHoverEffect: "1",
  },

  data: [
    {
      label: "Kitchen",
      value: "4.5",
      toolText: "$Label: 31.8%",
    },
    {
      label: "Living Room",
      value: "1.6",
      toolText: "$Label: 20.4%",
    },
    {
      label: "Master Bedroom",
      value: "0.8",
      toolText: "$Label: 18.1%",
    },
    {
      label: "Guest Bedroom",
      value: "0.7",
      toolText: "$Label: 15.9%",
    },
    {
      label: "Bathroom",
      value: "3.2",
      toolText: "$Label: 9%",
    },
    {
      label: "Others",
      value: "0.7",
      toolText: "$Label: 4.5%",
    },
  ],
};

// annotations: {
//   groups: [
//     {
//       items: [
//         //     {
//         //     "id": "1",
//         //     "type": "text",
//         //     "text": dayDetail,
//         //     "align": "left",
//         //     "font": "Nunito Sans",
//         //     "bold": "0",
//         //     "fontSize": "14",
//         //     "color": "#FDFDFD",
//         //     "x": "$chartStartX + 15",
//         //     "y": "$chartEndY - 18"
//         // },
//         {
//           id: "2",
//           type: "text",
//           text: "Till Now:",
//           align: "left",
//           font: "Nunito Sans",
//           bold: "0",
//           fontSize: "12.5",
//           color: "#FDFDFD",
//           x: "$canvasStartX - 20",
//           y: "$canvasStartY - 35",
//         },
//         {
//           id: "3",
//           type: "text",
//           text: dayValueArr[currentHour - 1].toString() + " kWh",
//           align: "left",
//           font: "Nunito Sans",
//           bold: "1",
//           fontSize: "13",
//           color: "#FDFDFD",
//           x: "$canvasStartX + 30",
//           y: "$canvasStartY - 35",
//         },
//         {
//           id: "4",
//           type: "text",
//           text: "Predicted:",
//           align: "left",
//           font: "Nunito Sans",
//           bold: "0",
//           fontSize: "12.5",
//           color: "#FDFDFD",
//           x: "$canvasEndX - 116",
//           y: "$canvasStartY - 35",
//         },
//         {
//           id: "5",
//           type: "text",
//           text: dayValueArr[dayValueArr.length - 1].toString() + " kWh",
//           align: "left",
//           font: "Nunito Sans",
//           bold: "1",
//           fontSize: "13",
//           color: "#FDFDFD",
//           x: "$canvasEndX - 60",
//           y: "$canvasStartY - 35",
//         },
//       ],
//     },
//   ],
// },

// categories: [
//   {
//     category: categoryArr,
//   },
// ],

// dataset: [
//   {
//     seriesname: null,
//     data: activeArr,
//   },
//   {
//     seriesname: null,
//     alpha: "20",
//     data: inActiveArr,
//   },
// ],
// };

// // month chart
// //var monthDetail = moment().format('MMMM YYYY');
// var monthLen = moment().daysInMonth();
//
// var currentDay = moment().format("D");

// var monthValueArr = [
//   15.1, 32.4, 45.2, 82.3, 91.5, 111.4, 120.16, 130.26, 137.7, 142, 149.3, 155.8,
//   164.1, 178.4, 198.7, 214, 228.8, 245.1, 259, 270.5, 287, 300, 315.9, 332.4,
//   347.2, 360.7, 377.2, 394.1, 427.1, 439, 460,
// ];

// var monthCatArr = [];
//
// for (var i = 0; i < monthLen; i++) {
//
//   if (i != currentDay) {
//
//     if (i % 7 != 0) {
//       monthCatArr.push({
//         label: moment()
//           .date(i + 1)
//           .format("MMM D"),
//         showLabel: "1",
//       });
//     } else {
//       monthCatArr.push({
//         label: moment()
//           .date(i + 1)
//           .format("MMM D"),
//         showLabel: "1",
//       });
//     }
//   } else {
//     monthCatArr.push({
//       vline: "true",
//       color: "#707C92",
//       dashed: "1",
//       linePosition: "0",
//       labelPosition: "0",
//     });
//     monthCatArr.push({
//       label: moment()
//         .date(i + 1)
//         .format("MMM D"),
//     });
//   }
// }

// var dayActiveArr = [];
//
// for (var i = 1; i <= monthLen; i++) {
//   currentDay = moment().format("D");
//   if (i <= currentDay) {
//
//     if (i % 7 != 0) {
//       dayActiveArr.push({ value: monthValueArr[i - 1], anchorAlpha: "0" });
//     } else {
//       dayActiveArr.push({ value: monthValueArr[i - 1] });
//     }
//   } else {
//     dayActiveArr.push({ value: null, anchorAlpha: "0" });
//   }
// }

// var dayInActiveArr = [];
//
// for (var i = 1; i <= monthLen; i++) {
//   if (i <= currentDay) {
//     dayInActiveArr.push({ value: monthValueArr[i - 1], anchorAlpha: "0" });
//   } else {
//
//     if (i % 7 != 0) {
//       dayInActiveArr.push({ value: monthValueArr[i - 1], anchorAlpha: "0" });
//     } else {
//       dayInActiveArr.push({ value: monthValueArr[i - 1] });
//     }
//   }
// }

// var third_chart_month = {
//   chart: {
//     showBorder: "0",
//     showCanvasBorder: "0",
//     showAlternateHGridColor: "0",
//     bgColor: "#1D1B41",
//     bgAlpha: "0",
//     canvasBgAlpha: "0",
//     baseFontSize: "13",
//     baseFont: "Nunito Sans Light",
//     baseFontColor: "#FDFDFD",
//     divLineThickness: "2",
//     showValues: "0",
//     showLegend: "0",
//     toolTipBgcolor: "#484E69",
//     toolTipPadding: "7",
//     toolTipBorderRadius: "3",
//     toolTipBorderAlpha: "30",
//     tooltipBorderThickness: "0.7",
//     toolTipColor: "#FDFDFD",
//     paletteColors: "#FA394E, #4B53FF",
//     usePlotGradientColor: "0",
//     yAxisMinValue: "0",
//     yAxisMaxValue: "500",
//     plotFillAlpha: "100",
//     drawAnchors: "1",
//     anchorBgColor: "#FA394E",
//     anchorBorderColor: "#FDFDFD",
//     anchorRadius: "5",
//     anchorBorderThickness: "1.9",
//     showPlotBorder: "0",
//     showToolTip: "1",
//     canvasTopMargin: "75",
//     canvasBottomMargin: "75",
//     canvasLeftMargin: "30",
//     canvasRightMargin: "30",
//     labelDisplay: "ROTATE",
//     yAxisName: "kWh",
//     transposeAnimation: "1",
//     labelStep: "7",
//   },

//   annotations: {
//     groups: [
//       {
//         items: [
//           //     {
//           //     "id": "1",
//           //     "type": "text",
//           //     "text": monthDetail,
//           //     "align": "left",
//           //     "font": "Nunito Sans",
//           //     "bold": "0",
//           //     "fontSize": "14",
//           //     "color": "#FDFDFD",
//           //     "x": "$chartStartX + 15",
//           //     "y": "$chartEndY - 18"
//           // },
//           {
//             id: "2",
//             type: "text",
//             text: "Till Now:",
//             align: "left",
//             font: "Nunito Sans",
//             bold: "0",
//             fontSize: "12.5",
//             color: "#FDFDFD",
//             x: "$canvasStartX - 20",
//             y: "$canvasStartY - 35",
//           },
//           {
//             id: "3",
//             type: "text",
//             text: monthValueArr[currentDay - 1].toString() + " kWh",
//             align: "left",
//             font: "Nunito Sans",
//             bold: "1",
//             fontSize: "13",
//             color: "#FDFDFD",
//             x: "$canvasStartX + 30",
//             y: "$canvasStartY - 35",
//           },
//           {
//             id: "4",
//             type: "text",
//             text: "Predicted:",
//             align: "left",
//             font: "Nunito Sans",
//             bold: "0",
//             fontSize: "12.5",
//             color: "#FDFDFD",
//             x: "$canvasEndX - 116",
//             y: "$canvasStartY - 35",
//           },
//           {
//             id: "5",
//             type: "text",
//             text: monthValueArr[monthLen - 1].toString() + " kWh",
//             align: "left",
//             font: "Nunito Sans",
//             bold: "1",
//             fontSize: "13",
//             color: "#FDFDFD",
//             x: "$canvasEndX - 60",
//             y: "$canvasStartY - 35",
//           },
//         ],
//       },
//     ],
//   },

//   categories: [
//     {
//       category: monthCatArr,
//     },
//   ],

//   dataset: [
//     {
//       seriesname: null,
//       data: dayActiveArr,
//     },
//     {
//       seriesname: null,
//       alpha: "20",
//       data: dayInActiveArr,
//     },
//   ],
// };

// // year chart
// //var yearDetail = moment().format('YYYY');
// var yearLen = 12;
//
// var currentMonth = parseInt(moment().format("M")) - 1;

// var yearValueArr = [
//   420, 810, 1270, 1726, 2176, 2624, 3063, 3553, 4026, 4488, 4943, 5383,
// ];

// var yearCatArr = [];
//
// for (var i = 0; i < yearLen; i++) {
//
//   if (i != currentMonth) {
//
//     if (i % 3 != 0) {
//       yearCatArr.push({
//         label: moment().month(i).format("MMM"),
//         showLabel: "0",
//       });
//     } else {
//       yearCatArr.push({ label: moment().month(i).format("MMM") });
//     }
//   } else {
//     yearCatArr.push({ label: moment().month(i).format("MMM") });
//     yearCatArr.push({
//       vline: "true",
//       color: "#707C92",
//       dashed: "1",
//       linePosition: "0",
//       labelPosition: "0",
//     });
//   }
// }

// var monthActiveArr = [];
//
// for (var i = 0; i < yearLen; i++) {
//   if (i <= currentMonth) {
//
//     if (i % 3 != 0) {
//       monthActiveArr.push({ value: yearValueArr[i], anchorAlpha: "0" });
//     } else {
//       monthActiveArr.push({ value: yearValueArr[i] });
//     }
//   } else {
//     monthActiveArr.push({ value: null, anchorAlpha: "0" });
//   }
// }

// var monthInactiveArr = [];
//
// for (var i = 0; i < yearLen; i++) {
//
//   if (i <= currentMonth) {
//     monthInactiveArr.push({ value: yearValueArr[i], anchorAlpha: "0" });
//   } else {
//
//     if (i % 3 != 0) {
//       monthInactiveArr.push({ value: yearValueArr[i], anchorAlpha: "0" });
//     } else {
//       monthInactiveArr.push({ value: yearValueArr[i] });
//     }
//   }
// }

// var third_chart_year = {
//   chart: {
//     showBorder: "0",
//     showCanvasBorder: "0",
//     showAlternateHGridColor: "0",
//     bgColor: "#1D1B41",
//     bgAlpha: "0",
//     canvasBgAlpha: "0",
//     baseFontSize: "13",
//     baseFont: "Nunito Sans",
//     baseFontColor: "#FDFDFD",
//     divLineThickness: "2",
//     showValues: "0",
//     showLegend: "0",
//     toolTipBgcolor: "#484E69",
//     toolTipPadding: "7",
//     toolTipBorderRadius: "3",
//     toolTipBorderAlpha: "30",
//     tooltipBorderThickness: "0.7",
//     toolTipColor: "#FDFDFD",
//     paletteColors: "#FA394E, #4B53FF",
//     usePlotGradientColor: "0",
//     yAxisMinValue: "0",
//     yAxisMaxValue: "500",
//     plotFillAlpha: "100",
//     drawAnchors: "1",
//     anchorBgColor: "#FA394E",
//     anchorBorderColor: "#FDFDFD",
//     anchorRadius: "5",
//     anchorBorderThickness: "1.9",
//     showPlotBorder: "0",
//     showToolTip: "1",
//     canvasTopMargin: "75",
//     canvasBottomMargin: "75",
//     canvasLeftMargin: "30",
//     canvasRightMargin: "30",
//     labelDisplay: "ROTATE",
//     yAxisName: "kWh",
//     transposeAnimation: "1",
//   },

//   annotations: {
//     groups: [
//       {
//         items: [
//           //     {
//           //     "id": "1",
//           //     "type": "text",
//           //     "text": yearDetail,
//           //     "align": "left",
//           //     "font": "Nunito Sans",
//           //     "bold": "0",
//           //     "fontSize": "14",
//           //     "color": "#FDFDFD",
//           //     "x": "$chartStartX + 15",
//           //     "y": "$chartEndY - 18"
//           // },
//           {
//             id: "2",
//             type: "text",
//             text: "Till Now:",
//             align: "left",
//             font: "Nunito Sans",
//             bold: "0",
//             fontSize: "12.5",
//             color: "#FDFDFD",
//             x: "$canvasStartX - 20",
//             y: "$canvasStartY - 35",
//           },
//           {
//             id: "3",
//             type: "text",
//             text: yearValueArr[currentMonth].toString() + " kWh",
//             align: "left",
//             font: "Nunito Sans",
//             bold: "1",
//             fontSize: "13",
//             color: "#FDFDFD",
//             x: "$canvasStartX + 30",
//             y: "$canvasStartY - 35",
//           },
//           {
//             id: "4",
//             type: "text",
//             text: "Predicted:",
//             align: "left",
//             font: "Nunito Sans",
//             bold: "0",
//             fontSize: "12.5",
//             color: "#FDFDFD",
//             x: "$canvasEndX - 116",
//             y: "$canvasStartY - 35",
//           },
//           {
//             id: "5",
//             type: "text",
//             text: yearValueArr[yearLen - 1].toString() + " kWh",
//             align: "left",
//             font: "Nunito Sans",
//             bold: "1",
//             fontSize: "13",
//             color: "#FDFDFD",
//             x: "$canvasEndX - 60",
//             y: "$canvasStartY - 35",
//           },
//         ],
//       },
//     ],
//   },

//   categories: [
//     {
//       category: yearCatArr,
//     },
//   ],

//   dataset: [
//     {
//       seriesname: null,
//       data: monthActiveArr,
//     },
//     {
//       seriesname: null,
//       alpha: "20",
//       data: monthInactiveArr,
//     },
//   ],
// };

var third_chart_today = third_chart_month;
var third_chart_year = third_chart_month;

var chartConfigs3 = {
  // type: "msarea",
  // className: "fc-mssplinearea",
  type: "bar2d",
  className: "fc-bar2d",
  id: "mychart3",
  dataFormat: "JSON",
  width: "100%",
  height: "300",
  dataSource: third_chart_month,
};

export default chartConfigs3;
export { third_chart_today };
export { third_chart_month };
export { third_chart_year };
