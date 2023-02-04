// import FusionCharts from "fusioncharts";

// var fourth_chart_month = {
//   chart: {
//     caption: "Real-time stock price monitor",
//     subCaption: "Harry's SuperMart",
//     xAxisName: "Time",
//     yAxisName: "Stock Price",
//     numberPrefix: "$",
//     refreshinterval: "5",
//     yaxisminvalue: "35",
//     yaxismaxvalue: "36",
//     numdisplaysets: "10",
//     labeldisplay: "rotate",
//     showRealTimeValue: "0",
//     theme: "fusion",
//   },

//   categories: [
//     {
//       category: [
//         {
//           label: "Day Start",
//         },
//       ],
//     },
//   ],
//   dataset: [
//     {
//       data: [
//         {
//           value: "35.27",
//         },
//       ],
//     },
//   ],
// };

// //   chart: {
// //     showBorder: "0",
// //     showCanvasBorder: "0",
// //     placeValuesInside: "0",
// //     showAlternateVGridColor: "0",
// //     canvasBgAlpha: "0",
// //     bgColor: "#1D1B41",
// //     bgAlpha: "0",
// //     baseFont: "Nunito Sans Light",
// //     baseFontColor: "#FDFDFD",
// //     baseFontSize: "14",
// //     showDivLineValues: "0",
// //     divLineAlpha: "0",
// //     showLimits: "0",
// //     baseFontBold: "0",
// //     usePlotGradientColor: "0",
// //     numberSuffix: " kWh",
// //     yAxisMaxValue: "3",
// //     paletteColors: "#AB26C2, #9326BF, #7625B9, #5E24B6, #4424B1, #3123AE",
// //     labelFontColor: "#C6C4C4",
// //     labelFontBold: "0",
// //     labelFontSize: "16",
// //     plotBorderAlpha: "0",
// //     plotFillAlpha: "100",
// //     valueFontBold: "1",
// //     valueFontColor: "#FDFDFD",
// //     valueFontSize: "13",
// //     toolTipBgcolor: "#484E69",
// //     toolTipPadding: "7",
// //     toolTipBorderRadius: "3",
// //     toolTipBorderAlpha: "30",
// //     tooltipBorderThickness: "0.7",
// //     toolTipColor: "#FDFDFD",
// //     canvasLeftMargin: "0",
// //     canvasRightMargin: "40",
// //     canvasBottomMargin: "20",
// //     canvasTopMargin: "20",
// //     showHoverEffect: "1"
// //   },

// //   annotations: {
// //     groups: [
// //       {
// //         items: [
// //           {
// //             id: "info",
// //             type: "text",
// //             text: "Top 3 appliances<br>make up 70.3%<br>of the net usage.",
// //             align: "right",
// //             color: "#FDFDFD",
// //             font: "Nunito Sans Light",
// //             fontSize: "15",
// //             bold: "0",
// //             x: "$canvasEndX + 30",
// //             y: "$canvasEndY - 25"
// //           }
// //         ]
// //       }
// //     ]
// //   },

// //   data: [
// //     {
// //       label: "Heating & AC",
// //       value: "1.4",
// //       toolText: "$Label: 31.8%"
// //     },
// //     {
// //       label: "EV Charge",
// //       value: "0.9",
// //       toolText: "$Label: 20.4%"
// //     },
// //     {
// //       label: "Plug Loads",
// //       value: "0.8",
// //       toolText: "$Label: 18.1%"
// //     },
// //     {
// //       label: "Refrigeration",
// //       value: "0.7",
// //       toolText: "$Label: 15.9%"
// //     },
// //     {
// //       label: "Lighting",
// //       value: "0.4",
// //       toolText: "$Label: 9%"
// //     },
// //     {
// //       label: "Others",
// //       value: "0.2",
// //       toolText: "$Label: 4.5%"
// //     }
// //   ]
// // };
// var fourth_chart_today = fourth_chart_month;
// var fourth_chart_year = fourth_chart_month;

// var chartConfigs4 = {
//   type: "realtimeline",
//   className: "fc-realtimeline",
//   id: "mychart4",
//   dataFormat: "JSON",
//   width: "100%",
//   height: "300",
//   dataSource: fourth_chart_month,
//   events: {
//     initialized: function (e) {
//       function addLeadingZero(num) {
//         return num <= 9 ? "0" + num : num;
//       }

//       function updateData() {
//         // Get reference to the chart using its ID
//         var chartRef = FusionCharts("chart4"),
//           // We need to create a querystring format incremental update, containing
//           // label in hh:mm:ss format
//           // and a value (random).
//           currDate = new Date(),
//           label =
//             addLeadingZero(currDate.getHours()) +
//             ":" +
//             addLeadingZero(currDate.getMinutes()) +
//             ":" +
//             addLeadingZero(currDate.getSeconds()),
//           // Get random number between 35.25 & 35.75 - rounded to 2 decimal places
//           randomValue = Math.floor(Math.random() * 50) / 100 + 35.25,
//           // Build Data String in format &label=...&value=...
//           strData = "&label=" + label + "&value=" + randomValue;
//         // Feed it to chart.
//         chartRef.feedData(strData);
//       }

//       var myVar = setInterval(function () {
//         updateData();
//       }, 5000);
//     },
//   },
// };

// export default chartConfigs4;
// export { fourth_chart_today };
// export { fourth_chart_month };
// export { fourth_chart_year };
