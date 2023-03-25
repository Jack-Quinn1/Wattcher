import React from "react";
import OptionList from "../containers/optionlist";
import ChartDetail from "../containers/chart";
import "./App.css";
import { connect } from "react-redux";
import FusionCharts from "fusioncharts";

class home extends React.Component {
  componentDidMount() {
    var todayElem = document.getElementById("today");
    var monthElem = document.getElementById("month");
    var yearElem = document.getElementById("year");

    monthElem.addEventListener("click", function () {
      monthElem.classList.add("active");
      yearElem.classList.remove("active");
      todayElem.classList.remove("active");
    });

    yearElem.addEventListener("click", function () {
      monthElem.classList.remove("active");
      yearElem.classList.add("active");
      todayElem.classList.remove("active");
    });

    todayElem.addEventListener("click", function () {
      monthElem.classList.remove("active");
      yearElem.classList.remove("active");
      todayElem.classList.add("active");
    });

    document.getElementById("Home").click();
    document.getElementById("today").click();
  }

  componentDidUpdate() {}

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row flex-xl-nowrap">
            <div id="content-body" className="col-12  pl-4 pr-4 bd-content">
              <div className="row">
                <div className="col-md-4 pt-4 mt-3">
                  <h2>Welcome!</h2>
                </div>
                <div
                  className="col-md-7 pt-4 mt-3 text-right date-indicator"
                  id="date"
                >
                  Date
                </div>
                <div className="col-md-1 pt-4 mt-2 text-right date-indicator">
                  <a href="/profile" class="btn customButton large">
                    Profile
                  </a>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-8 text-left">
                  <div className="collapse bd-links" id="bd-docs-nav">
                    <OptionList />
                  </div>
                </div>
                <div className="col-md-4 text-right">
                  <ul className="buttonwrapper">
                    <li id="today" className="active">
                      <label id="l1">TODAY</label>
                    </li>
                    <li id="month">
                      <label id="l2">MONTH</label>
                    </li>
                    <li id="year">
                      <label id="l3">YEAR</label>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row mt-3 db-chart">
                <div id="parent1" className="col-lg-12">
                  <div className="chart-card mb-4">
                    <div className="chart-title" id="text1">
                      COST
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-12 text-right">
                        <div id="chart1" className="chart">
                          Rendering chart 1 here
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="parent2" className="col-lg-12">
                  <div className="chart-card mb-4">
                    <div className="chart-title" id="text2">
                      COST
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-12 text-right">
                        <div id="chart2" className="chart">
                          Chart 2
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="parent3" className="col-lg-12">
                  <div className="chart-card mb-4">
                    <div className="chart-title" id="text3">
                      AREAS
                    </div>
                    <div id="chart3" className="chart">
                      <div className="col-md-12">Chart 3</div>
                    </div>
                  </div>
                </div>
                <div id="parent4" className="col-lg-12">
                  <div className="chart-card mb-4">
                    <div className="chart-title" id="text4">
                      REAL TIME LIVE
                    </div>
                    <div id="chart4" className="chart">
                      Chart 4
                    </div>
                    <stockPriceChart />
                  </div>
                </div>
                <div id="parent5" className="col-lg-12">
                  <div className="chart-card mb-4">
                    <div className="chart-title" id="text5">
                      TIPS & RECOMMENDATIONS
                    </div>
                    <div className="col-md-12 d-flex align-items-left justify-content-center flex-column">
                      <div id="rec1">
                        • Your energy consumption is primarily used in day time,
                        try to increase night time consumption
                      </div>
                      <div id="rec1">
                        • There was a high consumption rate at 14:36 in the
                        living room, please check details
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ChartDetail />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.activeUser,
  };
}

const date = new Date();
var time = date.toLocaleTimeString("en-US", {
  hour12: false,
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

FusionCharts.ready(function () {
  var energyConsumption = new FusionCharts({
    id: "mychart4",
    type: "realtimeline",
    renderAt: "chart4",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
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
        refreshinterval: "5",
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
    },
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
          chartRef.feedData(strData);
        }

        var myVar = setInterval(function () {
          updateData();
        }, 5000);
      },
    },
  }).render();
});

export default connect(mapStateToProps)(home);
