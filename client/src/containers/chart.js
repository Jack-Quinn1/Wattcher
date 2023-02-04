import React, { Component } from "react";
import { connect } from "react-redux";
import ReactDOM from "react-dom";
import moment from "moment";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import widgets from "fusioncharts/fusioncharts.widgets";
import powercharts from "fusioncharts/fusioncharts.powercharts";
import theme from "fusioncharts/themes/fusioncharts.theme.ocean";
import ReactFC from "react-fusioncharts";

import chartConfigs1, {
  first_chart_today,
  first_chart_month,
  first_chart_year,
} from "../chart-configs/home_first_chart";
import chartConfigs2, {
  second_chart_today,
  second_chart_month,
  second_chart_year,
} from "../chart-configs/home_second_chart.js";
import chartConfigs3, {
  third_chart_today,
  third_chart_month,
  third_chart_year,
} from "../chart-configs/home_third_chart";
import chartConfigs4, {
  fourth_chart_today,
  fourth_chart_month,
  fourth_chart_year,
} from "../chart-configs/home_fourth_chart";
import usagechart, {
  usage_today,
  usage_yesterday,
  usage_thismonth,
  usage_lastmonth,
  usage_thisyear,
  usage_lastyear,
} from "../areas/areas_data1";
import costchart, {
  cost_last_month,
  cost_this_month,
  cost_last_day,
  cost_this_day,
  cost_last_year,
  cost_this_year,
} from "../consumption/consumption_data1";
import costchart1, {
  cost_last_month1,
  cost_this_month1,
  cost_last_day1,
  cost_this_day1,
  cost_last_year1,
  cost_this_year1,
} from "../consumption/consumption_data2";
import UsageComponent from "../components/areas_component";
import {
  todayArr,
  todayDateCon,
  todayNightCon,
  monthArr,
  mElecSplit,
  mGasSplit,
  yearArr,
  yElecSplit,
  yGasSplit,
} from "../consumption/consumption_data1";
import CostComponent from "../components/consumption_component";
import AppliancesComponent from "../components/cost_component";
import appliancechart, {
  buildDataYesterday,
  buildDataLastMonth,
  buildDataThisMonth,
  buildDataLastYear,
  buildDataThisYear,
} from "../cost/cost_data";
import appliancechart1, {
  buildDataYesterday1,
  buildDataLastMonth1,
  buildDataThisMonth1,
  buildDataLastYear1,
  buildDataThisYear1,
} from "../cost/cost_data1";
import { buildDataToday } from "../cost/cost_data";
import { buildDataToday1 } from "../cost/cost_data1";

import * as utils from "../utils/utils";
charts(FusionCharts);
widgets(FusionCharts);
powercharts(FusionCharts);
theme(FusionCharts);

FusionCharts.options.creditLabel = false;

class ChartDetail extends Component {
  componentDidMount() {
    document.getElementById("today").click();
    setTimeout(function () {
      document.getElementById("today").click();
    }, 300);
  }

  componentDidUpdate() {
    var t = document.getElementById("today");
    var m = document.getElementById("month");
    var y = document.getElementById("year");

    if (this.props.user.id === 1) {
      setTimeout(function () {
        document.getElementById("today").click();
      }, 300);

      document.getElementById("text1").innerHTML = "Total Consumption";

      document
        .getElementById("Home")
        .setAttribute("class", "left-option active");
      document.getElementById("Cost").setAttribute("class", "left-option");
      document.getElementById("Cost").setAttribute("class", "left-option");
      document.getElementById("Areas").setAttribute("class", "left-option");

      document
        .getElementById("bd-docs-nav")
        .setAttribute("class", "bd-links collapse");

      ReactDOM.unmountComponentAtNode(document.getElementById("chart2"));
      document.getElementById("parent2").style.display = "block";
      document.getElementById("parent2").style.width = "auto";
      document.getElementById("parent2").style.height = "auto";

      ReactDOM.unmountComponentAtNode(document.getElementById("chart3"));
      document.getElementById("parent3").style.display = "block";
      document.getElementById("parent3").style.width = "auto";
      document.getElementById("parent3").style.height = "auto";

      ReactDOM.unmountComponentAtNode(document.getElementById("chart4"));
      document.getElementById("parent4").style.display = "block";
      document.getElementById("parent4").style.width = "auto";
      document.getElementById("parent4").style.height = "auto";

      document.getElementById("parent5").style.display = "block";
      document.getElementById("parent5").style.width = "auto";
      document.getElementById("parent5").style.height = "auto";

      ReactDOM.render(
        <ReactFC {...chartConfigs1} />,
        document.getElementById("chart1")
      );

      ReactDOM.render(
        <ReactFC {...chartConfigs2} />,
        document.getElementById("chart2")
      );

      ReactDOM.render(
        <ReactFC {...chartConfigs3} />,
        document.getElementById("chart3")
      );

      ReactDOM.render(
        <ReactFC {...chartConfigs4} />,
        document.getElementById("chart4")
      );

      t.onclick = function () {
        document.getElementById("date").innerHTML =
          moment().format("MMMM, Do YYYY");

        var todaynewdata1 = first_chart_today;
        var todaynewdata2 = second_chart_today;
        var todaynewdata3 = third_chart_today;
        var todaynewdata4 = fourth_chart_today;

        FusionCharts.items["mychart1"].setJSONData(todaynewdata1);
        FusionCharts.items["mychart2"].setJSONData(todaynewdata2);
        FusionCharts.items["mychart3"].setJSONData(todaynewdata3);
      };

      m.onclick = function () {
        document.getElementById("date").innerHTML =
          moment().format("MMMM YYYY");

        var monthnewdata1 = first_chart_month;
        var monthnewdata2 = second_chart_month;
        var monthnewdata3 = third_chart_month;
        var monthnewdata4 = fourth_chart_month;

        FusionCharts.items["mychart1"].setJSONData(monthnewdata1);
        FusionCharts.items["mychart2"].setJSONData(monthnewdata2);
        FusionCharts.items["mychart3"].setJSONData(monthnewdata3);
      };

      setTimeout(function () {
        document.getElementById("today").click();
      });

      y.onclick = function () {
        document.getElementById("date").innerHTML = moment().format("YYYY");

        var yearnewdata1 = first_chart_year;
        var yearnewdata2 = second_chart_year;
        var yearnewdata3 = third_chart_year;
        var yearnewdata4 = fourth_chart_year;

        FusionCharts.items["mychart1"].setJSONData(yearnewdata1);
        FusionCharts.items["mychart2"].setJSONData(yearnewdata2);
        FusionCharts.items["mychart3"].setJSONData(yearnewdata3);
        FusionCharts.items["mychart4"].setJSONData(yearnewdata4);
      };
    } else if (this.props.user.id === 2) {
      utils.disposeChart(FusionCharts, "mychart8");
      utils.disposeChart(FusionCharts, "mychart20");

      ReactDOM.unmountComponentAtNode(document.getElementById("chart1"));

      document.getElementById("Home").setAttribute("class", "left-option");
      document
        .getElementById("Consumption")
        .setAttribute("class", "left-option active");
      document.getElementById("Cost").setAttribute("class", "left-option");
      document.getElementById("Areas").setAttribute("class", "left-option");

      document
        .getElementById("bd-docs-nav")
        .setAttribute("class", "bd-links collapse");

      document
        .getElementById("parent1")
        .setAttribute("class", "chart1-co col-lg-12 col-xl-12");
      document.getElementById("text1").innerHTML = "Consumption";

      ReactDOM.unmountComponentAtNode(document.getElementById("chart2"));

      document.getElementById("parent2").style.display = "none";
      document.getElementById("parent2").style.width = "0px";
      document.getElementById("parent2").style.height = "0px";

      ReactDOM.unmountComponentAtNode(document.getElementById("chart3"));
      document.getElementById("parent3").style.display = "none";
      document.getElementById("parent3").style.width = "0px";
      document.getElementById("parent3").style.height = "0px";

      ReactDOM.unmountComponentAtNode(document.getElementById("chart4"));
      document.getElementById("parent4").style.display = "none";
      document.getElementById("parent4").style.width = "0px";
      document.getElementById("parent4").style.height = "0px";

      //ReactDOM.unmountComponentAtNode(document.getElementById("chart5"));
      document.getElementById("parent5").style.display = "none";
      document.getElementById("parent5").style.width = "0px";
      document.getElementById("parent5").style.height = "0px";

      //   ReactDOM.unmountComponentAtNode(document.getElementById("chart6"));
      //   document.getElementById("parent6").style.display = "none";
      //   document.getElementById("parent6").style.width = "0px";
      //   document.getElementById("parent6").style.height = "0px";

      //   ReactDOM.unmountComponentAtNode(document.getElementById("chart7"));
      //   document.getElementById("parent6").style.display = "none";
      //   document.getElementById("parent6").style.width = "0px";
      //   document.getElementById("parent6").style.height = "0px";

      ReactDOM.render(
        <CostComponent costchart={costchart} costchart1={costchart1} />,
        document.getElementById("chart1")
      );

      // logic for today button

      t.onclick = function () {
        window.selectedperiod = "today";
        document.getElementById("date").innerHTML =
          moment().format("MMMM, Do YYYY");

        document.getElementById("c2").innerHTML = "Yesterday";
        document.getElementById("c1").innerHTML = "Today";
        //document.getElementById("c3").innerHTML = "Today";
        //document.getElementById("c4").innerHTML = "Yesterday";
        if (window.b2selected) {
          var cotoday2 = cost_last_day;
          var cotoday3 = cost_last_day1;
          FusionCharts.items["mychart8"].setJSONData(cotoday2);
          FusionCharts.items["mychart20"].setJSONData(cotoday3);
          // document.getElementById("cost-elements").style.paddingLeft = "200px";

          document.getElementById("co-tablecell-title1").innerHTML = moment()
            .subtract(2, "day")
            .format("MMM Do YYYY");
          document.getElementById("co-tablecell-value1").innerHTML =
            todayArr[0] + "kWh";

          document.getElementById("co-tablecell-title2").innerHTML = moment()
            .subtract(1, "day")
            .format("MMM Do YYYY");
          document.getElementById("co-tablecell-value2").innerHTML =
            todayArr[1] + "kWh";

          document.getElementById("co-tablecell-title3").innerHTML = "Savings";
          document.getElementById("co-tablecell-value3").innerHTML =
            Math.round((todayArr[0] - todayArr[1]) * 100) / 100 + "kWh";

          document.getElementById("co-tablecell-title4").style.display = "none";
          document.getElementById("co-tablecell-value4").style.display = "none";
        } else {
          var cotoday = cost_this_day;
          var cotoday1 = cost_this_day1;
          FusionCharts.items["mychart8"].setJSONData(cotoday);
          FusionCharts.items["mychart20"].setJSONData(cotoday1);
          //  document.getElementById("cost-elements").style.paddingLeft = "0px";

          document.getElementById("co-tablecell-title1").innerHTML = moment()
            .subtract(1, "day")
            .format("MMM Do YYYY");
          document.getElementById("co-tablecell-value1").innerHTML =
            todayArr[1] + "kWh";

          var sftVal = 0;

          for (var i = 0; i < parseInt(moment().format("H")); i++) {
            sftVal =
              sftVal +
              parseFloat(todayDateCon[i]) +
              parseFloat(todayNightCon[i]);
          }
          sftVal = Math.round(sftVal * 100) / 100;

          document.getElementById("co-tablecell-title2").innerHTML =
            "So Far Today";
          document.getElementById("co-tablecell-value2").innerHTML =
            sftVal + "kWh";

          document.getElementById("co-tablecell-title3").innerHTML =
            "Predicted Today";
          document.getElementById("co-tablecell-value3").innerHTML =
            todayArr[2] + "kWh";

          document.getElementById("co-tablecell-title4").style.display =
            "block";
          document.getElementById("co-tablecell-value4").style.display =
            "block";

          document.getElementById("co-tablecell-title4").innerHTML =
            "Estimated Savings";
          document.getElementById("co-tablecell-value4").innerHTML =
            Math.round((todayArr[1] - todayArr[2]) * 100) / 100 + "kWh";
        }
      };

      // var m1 = document.getElementById("month");

      m.onclick = function () {
        window.selectedperiod = "month";

        document.getElementById("date").innerHTML =
          moment().format("MMMM YYYY");

        document.getElementById("c2").innerHTML = "Last Month";
        document.getElementById("c1").innerHTML = "This Month";

        if (window.b2selected) {
          var comonth2 = cost_last_month;
          var comonth3 = cost_last_month1;
          FusionCharts.items["mychart8"].setJSONData(comonth2);
          FusionCharts.items["mychart20"].setJSONData(comonth3);
          //  document.getElementById("cost-elements").style.paddingLeft = "200px";

          document.getElementById("co-tablecell-title1").innerHTML = moment()
            .subtract(2, "month")
            .format("MMMM");
          document.getElementById("co-tablecell-value1").innerHTML =
            monthArr[0] + "kWh";

          document.getElementById("co-tablecell-title2").innerHTML = moment()
            .subtract(1, "month")
            .format("MMMM");
          document.getElementById("co-tablecell-value2").innerHTML =
            monthArr[1] + "kWh";

          var savings_value =
            Math.round((monthArr[1] - monthArr[0]) * 100) / 100;

          if (savings_value < 0) {
            savings_value = Math.abs(savings_value);
            document.getElementById("co-tablecell-title3").innerHTML =
              "Savings";
            document.getElementById("co-tablecell-value3").innerHTML =
              "-" + savings_value + "kWh";
          } else {
            document.getElementById("co-tablecell-title3").innerHTML =
              "Savings";
            document.getElementById("co-tablecell-value3").innerHTML =
              savings_value + "kWh";
          }

          document.getElementById("co-tablecell-title4").style.display = "none";
          document.getElementById("co-tablecell-value4").style.display = "none";
        } else {
          var comonth = cost_this_month;
          var comonth1 = cost_this_month1;

          FusionCharts.items["mychart8"].setJSONData(comonth);
          FusionCharts.items["mychart20"].setJSONData(comonth1);

          //  document.getElementById("cost-elements").style.paddingLeft = "0px";
          document.getElementById("co-tablecell-title1").innerHTML = moment()
            .subtract(1, "month")
            .format("MMMM");
          document.getElementById("co-tablecell-value1").innerHTML =
            monthArr[1] + "kWh";

          var sfmVal = 0;

          for (var i = 0; i < parseInt(moment().format("D")); i++) {
            sfmVal =
              sfmVal + parseFloat(mElecSplit[i]) + parseFloat(mGasSplit[i]);
          }
          sfmVal = Math.round(sfmVal * 100) / 100;

          document.getElementById("co-tablecell-title2").innerHTML =
            "So Far This Month";
          document.getElementById("co-tablecell-value2").innerHTML =
            sfmVal + "kWh";

          document.getElementById("co-tablecell-title3").innerHTML =
            "Predicted This Month";
          document.getElementById("co-tablecell-value3").innerHTML =
            monthArr[2] + "kWh";

          document.getElementById("co-tablecell-title4").style.display =
            "block";
          document.getElementById("co-tablecell-value4").style.display =
            "block";

          document.getElementById("co-tablecell-title4").innerHTML =
            "Estimated savings";
          document.getElementById("co-tablecell-value4").innerHTML =
            Math.round((monthArr[2] - monthArr[1]) * 100) / 100 + "kWh";
        }
      };
      setTimeout(function () {
        document.getElementById("today").click();
      });
      // var y1 = document.getElementById("year");

      y.onclick = function () {
        window.selectedperiod = "year";
        document.getElementById("date").innerHTML = moment().format("YYYY");

        document.getElementById("c2").innerHTML = "Previous Year";
        document.getElementById("c1").innerHTML = "This Year";

        // document.getElementById("co-tablecell-value1").style.paddingLeft = "20px";
        // document.getElementById("co-tablecell-value2").style.paddingLeft = "20px";

        if (window.b2selected) {
          var coyear2 = cost_last_year;
          var coyear3 = cost_last_year1;
          FusionCharts.items["mychart8"].setJSONData(coyear2);
          FusionCharts.items["mychart20"].setJSONData(coyear3);

          //  document.getElementById("cost-elements").style.paddingLeft = "200px";

          document.getElementById("co-tablecell-title1").innerHTML = moment()
            .subtract(2, "year")
            .format("YYYY");
          document.getElementById("co-tablecell-value1").innerHTML =
            yearArr[0] + "kWh";

          document.getElementById("co-tablecell-title2").innerHTML = moment()
            .subtract(1, "year")
            .format("YYYY");
          document.getElementById("co-tablecell-value2").innerHTML =
            yearArr[1] + "kWh";

          document.getElementById("co-tablecell-title3").innerHTML = "Savings";
          document.getElementById("co-tablecell-value3").innerHTML =
            Math.round((yearArr[0] - yearArr[1]) * 100) / 100 + "kWh";

          document.getElementById("co-tablecell-title4").style.display = "none";
          document.getElementById("co-tablecell-value4").style.display = "none";
        } else {
          var coyear = cost_this_year;
          var coyear1 = cost_this_year1;
          FusionCharts.items["mychart8"].setJSONData(coyear);
          FusionCharts.items["mychart20"].setJSONData(coyear1);

          //   document.getElementById("cost-elements").style.paddingLeft = "0px";

          document.getElementById("co-tablecell-title1").innerHTML = moment()
            .subtract(1, "year")
            .format("YYYY");
          document.getElementById("co-tablecell-value1").innerHTML =
            yearArr[1] + "kWh";

          var styVal = 0;

          for (var i = 0; i < parseInt(moment().format("M")); i++) {
            styVal =
              styVal + parseFloat(yElecSplit[i]) + parseFloat(yGasSplit[i]);
          }
          styVal = Math.round(styVal * 100) / 100;

          document.getElementById("co-tablecell-title2").innerHTML =
            "So Far This Year";
          document.getElementById("co-tablecell-value2").innerHTML =
            styVal + "kWh";

          document.getElementById("co-tablecell-title3").innerHTML =
            "Predicted This Year";
          document.getElementById("co-tablecell-value3").innerHTML =
            yearArr[2] + "kWh";

          document.getElementById("co-tablecell-title4").style.display =
            "block";
          document.getElementById("co-tablecell-value4").style.display =
            "block";

          document.getElementById("co-tablecell-title4").innerHTML =
            "Estimated Savings";
          document.getElementById("co-tablecell-value4").innerHTML =
            Math.round((yearArr[1] - yearArr[2]) * 100) / 100 + "kWh";
        }
      };
    } else if (this.props.user.id === 3) {
      utils.disposeChart(FusionCharts, "mychart12");
      utils.disposeChart(FusionCharts, "mychart21");

      ReactDOM.unmountComponentAtNode(document.getElementById("chart1"));

      document
        .getElementById("parent1")
        .setAttribute("class", "chart1-app col-lg-12 col-xl-12");
      document.getElementById("text1").innerHTML = "Cost";

      document.getElementById("Home").setAttribute("class", "left-option");
      document
        .getElementById("Consumption")
        .setAttribute("class", "left-option");
      document
        .getElementById("Cost")
        .setAttribute("class", "left-option active");
      document.getElementById("Areas").setAttribute("class", "left-option");
      //document.getElementById("Emissions").setAttribute("class", "left-option");

      document
        .getElementById("bd-docs-nav")
        .setAttribute("class", "bd-links collapse");

      ReactDOM.unmountComponentAtNode(document.getElementById("chart2"));
      document.getElementById("parent2").style.display = "none";
      document.getElementById("parent2").style.width = "0px";
      document.getElementById("parent2").style.height = "0px";

      ReactDOM.unmountComponentAtNode(document.getElementById("chart3"));
      document.getElementById("parent3").style.display = "none";
      document.getElementById("parent3").style.width = "0px";
      document.getElementById("parent3").style.height = "0px";

      ReactDOM.unmountComponentAtNode(document.getElementById("chart4"));
      document.getElementById("parent4").style.display = "none";
      document.getElementById("parent4").style.width = "0px";
      document.getElementById("parent4").style.height = "0px";

      // ReactDOM.unmountComponentAtNode(document.getElementById("chart5"));
      document.getElementById("parent5").style.display = "none";
      document.getElementById("parent5").style.width = "0px";
      document.getElementById("parent5").style.height = "0px";

      //   ReactDOM.unmountComponentAtNode(document.getElementById("chart6"));
      //   document.getElementById("parent6").style.display = "none";
      //   document.getElementById("parent6").style.width = "0px";
      //   document.getElementById("parent6").style.height = "0px";

      //   ReactDOM.unmountComponentAtNode(document.getElementById("chart7"));
      //   document.getElementById("parent6").style.display = "none";
      //   document.getElementById("parent6").style.width = "0px";
      //   document.getElementById("parent6").style.height = "0px";

      // to be written

      ReactDOM.render(
        <AppliancesComponent
          appliancechart={appliancechart}
          appliancechart1={appliancechart1}
        />,
        document.getElementById("chart1")
      );

      t.onclick = function () {
        window.selectedperiod = "today";
        document.getElementById("date").innerHTML =
          moment().format("MMMM, Do YYYY");
        document.getElementById("a1").innerHTML = "TODAY";
        document.getElementById("a2").innerHTML = "YESTERDAY";

        if (window.b2selected) {
          if (window.selectedUsage === "guest bedroom") {
            var yDayArr_4 = [
              0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.1, 0.1, 0.2,
              0.2, 0.2, 0.2, 0.1, 0.1, 0.1, 0.1, 0.3, 0.3, 0.3, 0.3,
            ];

            var dataArr = eval("yDayArr_" + 4);
            var tecVal = 0;
            for (var i = 0; i < dataArr.length; i++) {
              tecVal = tecVal + dataArr[i];
            }
            var eVal = 0;
            var gVal = 0;

            for (var i = 0; i < dataArr.length; i++) {
              eVal = eVal + 0.6 * dataArr[i];
              gVal = gVal + 0.4 * dataArr[i];
            }
            var reflastday = buildDataYesterday("Guest Bedroom");
            var reflastday1 = buildDataYesterday1("Guest Bedroom");
            FusionCharts.items["mychart12"].setJSONData(reflastday);
            FusionCharts.items["mychart21"].setJSONData(reflastday1);
            document.getElementById("stats").innerHTML =
              "€" + Math.round(tecVal * 100) / 100;
            document.getElementById("elecvalue").innerHTML =
              "€" + Math.round(eVal * 100) / 100;
            document.getElementById("gasvalue").innerHTML =
              "€" + Math.round(gVal * 100) / 100;
          } else if (window.selectedUsage === "kitchen") {
            var yDayArr_1 = [
              0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0, 0, 0, 0, 0, 0, 0, 0, 0.1,
              0.1, 0.3, 0.3, 0.1, 0.2, 0.2, 0.2, 0.2,
            ];

            var dataArr = eval("yDayArr_" + 1);

            var tecVal = 0;

            for (var i = 0; i < dataArr.length; i++) {
              tecVal = tecVal + dataArr[i];
            }

            var eVal = 0;

            var gVal = 0;

            for (var i = 0; i < dataArr.length; i++) {
              eVal = eVal + 0.6 * dataArr[i];
              gVal = gVal + 0.4 * dataArr[i];
            }
            var hclastday = buildDataYesterday("Kitchen");
            var hclastday1 = buildDataYesterday1("Kitchen");
            FusionCharts.items["mychart12"].setJSONData(hclastday);
            FusionCharts.items["mychart21"].setJSONData(hclastday1);
            document.getElementById("stats").innerHTML =
              "€" + Math.round(tecVal * 100) / 100;
            document.getElementById("elecvalue").innerHTML =
              "€" + Math.round(eVal * 100) / 100;
            document.getElementById("gasvalue").innerHTML =
              "€" + Math.round(gVal * 100) / 100;
          } else if (window.selectedUsage === "all") {
            var yDayArr_0 = [
              1.1, 1.1, 0.9, 0.9, 0.7, 0.7, 0.7, 0.5, 1, 0.8, 0.7, 0.8, 0.4,
              0.4, 0.4, 0.5, 0.7, 1, 1, 0.6, 1, 0.7, 0.7, 0.7,
            ];

            var dataArr = eval("yDayArr_" + 0);

            var tecVal = 0;

            for (var i = 0; i < dataArr.length; i++) {
              tecVal = tecVal + dataArr[i];
            }

            var eVal = 0;

            var gVal = 0;

            for (var i = 0; i < dataArr.length; i++) {
              eVal = eVal + 0.6 * dataArr[i];
              gVal = gVal + 0.4 * dataArr[i];
            }
            var alllastday = buildDataYesterday("All");
            var alllastday1 = buildDataYesterday1("All");
            FusionCharts.items["mychart12"].setJSONData(alllastday);
            FusionCharts.items["mychart21"].setJSONData(alllastday1);
            document.getElementById("stats").innerHTML =
              "€" + Math.round(tecVal * 100) / 100;
            document.getElementById("elecvalue").innerHTML =
              "€" + Math.round(eVal * 100) / 100;
            document.getElementById("gasvalue").innerHTML =
              "€" + Math.round(gVal * 100) / 100;
          } else if (window.selectedUsage === "living room") {
            var yDayArr_2 = [
              0.2, 0.2, 0, 0, 0, 0, 0, 0, 0.5, 0.3, 0.3, 0.4, 0, 0, 0, 0, 0.3,
              0.3, 0.3, 0.1, 0.2, 0, 0, 0,
            ];

            var dataArr = eval("yDayArr_" + 2);

            var tecVal = 0;

            for (var i = 0; i < dataArr.length; i++) {
              tecVal = tecVal + dataArr[i];
            }

            var eVal = 0;

            var gVal = 0;

            for (var i = 0; i < dataArr.length; i++) {
              eVal = eVal + 0.6 * dataArr[i];
              gVal = gVal + 0.4 * dataArr[i];
            }
            var lightinglastday = buildDataYesterday("Living Room");
            var lightinglastday1 = buildDataYesterday1("Living Room");
            FusionCharts.items["mychart12"].setJSONData(lightinglastday);
            FusionCharts.items["mychart21"].setJSONData(lightinglastday1);
            document.getElementById("stats").innerHTML =
              "€" + Math.round(tecVal * 100) / 100;
            document.getElementById("elecvalue").innerHTML =
              "€" + Math.round(eVal * 100) / 100;
            document.getElementById("gasvalue").innerHTML =
              "€" + Math.round(gVal * 100) / 100;
          } else if (window.selectedUsage === "master bedroom") {
            var yDayArr_3 = [
              0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2,
              0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2,
            ];

            var dataArr = eval("yDayArr_" + 3);

            var tecVal = 0;

            for (var i = 0; i < dataArr.length; i++) {
              tecVal = tecVal + dataArr[i];
            }

            var eVal = 0;

            var gVal = 0;

            for (var i = 0; i < dataArr.length; i++) {
              eVal = eVal + 0.6 * dataArr[i];
              gVal = gVal + 0.4 * dataArr[i];
            }
            var pllastday = buildDataYesterday("Master Bedroom");
            var pllastday1 = buildDataYesterday1("Master Bedroom");
            FusionCharts.items["mychart12"].setJSONData(pllastday);
            FusionCharts.items["mychart21"].setJSONData(pllastday1);
            document.getElementById("stats").innerHTML =
              "€" + Math.round(tecVal * 100) / 100;
            document.getElementById("elecvalue").innerHTML =
              "€" + Math.round(eVal * 100) / 100;
            document.getElementById("gasvalue").innerHTML =
              "€" + Math.round(gVal * 100) / 100;
          } else if (window.selectedUsage === "bathroom") {
            var yDayArr_5 = [
              0.2, 0.2, 0.2, 0.2, 0, 0, 0, 0, 0, 0, 0.1, 0.1, 0, 0, 0, 0, 0,
              0.1, 0.1, 0.1, 0.1, 0, 0, 0,
            ];

            var dataArr = eval("yDayArr_" + 5);

            var tecVal = 0;

            for (var i = 0; i < dataArr.length; i++) {
              tecVal = tecVal + dataArr[i];
            }

            var eVal = 0;

            var gVal = 0;

            for (var i = 0; i < dataArr.length; i++) {
              eVal = eVal + 0.6 * dataArr[i];
              gVal = gVal + 0.4 * dataArr[i];
            }
            var otherlastday = buildDataYesterday("Bathroom");
            var otherlastday1 = buildDataYesterday1("Bathroom");
            FusionCharts.items["mychart12"].setJSONData(otherlastday);
            FusionCharts.items["mychart21"].setJSONData(otherlastday1);
            document.getElementById("stats").innerHTML =
              "€" + Math.round(tecVal * 100) / 100;
            document.getElementById("elecvalue").innerHTML =
              "€" + Math.round(eVal * 100) / 100;
            document.getElementById("gasvalue").innerHTML =
              "€" + Math.round(gVal * 100) / 100;
          }
        } else {
          if (window.selectedUsage === "guest bedroom") {
            var todayArr_4 = [
              0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.1, 0.1, 0.1,
              0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.3, 0.3, 0.3, 0.3,
            ];

            var dataArr = eval("todayArr_" + 4);

            var tecVal = 0;

            for (var i = 0; i < dataArr.length; i++) {
              tecVal = tecVal + dataArr[i];
            }

            var eVal = 0;

            var gVal = 0;

            for (var i = 0; i < dataArr.length; i++) {
              eVal = eVal + 0.6 * dataArr[i];
              gVal = gVal + 0.4 * dataArr[i];
            }
            var refthisday = buildDataToday("Guest Bedroom");
            var refthisday1 = buildDataToday1("Guest Bedroom");
            FusionCharts.items["mychart12"].setJSONData(refthisday);
            FusionCharts.items["mychart21"].setJSONData(refthisday1);
            document.getElementById("stats").innerHTML =
              "€" + Math.round(tecVal * 100) / 100;
            document.getElementById("elecvalue").innerHTML =
              "€" + Math.round(eVal * 100) / 100;
            document.getElementById("gasvalue").innerHTML =
              "€" + Math.round(gVal * 100) / 100;
          } else if (window.selectedUsage === "kitchen") {
            var todayArr_1 = [
              0.1, 0.1, 0.2, 0.2, 0.1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1, 0.1,
              0.3, 0.3, 0.1, 0.1, 0.2, 0.2, 0.2,
            ];

            var dataArr = eval("todayArr_" + 1);

            var tecVal = 0;

            for (var i = 0; i < dataArr.length; i++) {
              tecVal = tecVal + dataArr[i];
            }

            var eVal = 0;

            var gVal = 0;

            for (var i = 0; i < dataArr.length; i++) {
              eVal = eVal + 0.6 * dataArr[i];
              gVal = gVal + 0.4 * dataArr[i];
            }
            var hcthisday = buildDataToday("Kitchen");
            var hcthisday1 = buildDataToday1("Kitchen");
            FusionCharts.items["mychart12"].setJSONData(hcthisday);
            FusionCharts.items["mychart21"].setJSONData(hcthisday1);
            document.getElementById("stats").innerHTML =
              "€" + Math.round(tecVal * 100) / 100;
            document.getElementById("elecvalue").innerHTML =
              "€" + Math.round(eVal * 100) / 100;
            document.getElementById("gasvalue").innerHTML =
              "€" + Math.round(gVal * 100) / 100;
          } else if (window.selectedUsage === "all") {
            var todayArr_0 = [
              0.9, 0.7, 0.8, 0.8, 0.6, 0.5, 0.5, 0.5, 0.9, 0.8, 0.7, 0.8, 0.3,
              0.3, 0.3, 0.4, 0.7, 1, 1, 0.6, 0.8, 0.7, 0.7, 0.7,
            ];

            var dataArr = eval("todayArr_" + 0);

            var tecVal = 0;

            for (var i = 0; i < dataArr.length; i++) {
              tecVal = tecVal + dataArr[i];
            }

            var eVal = 0;

            var gVal = 0;

            for (var i = 0; i < dataArr.length; i++) {
              eVal = eVal + 0.6 * dataArr[i];
              gVal = gVal + 0.4 * dataArr[i];
            }
            var allthisday = buildDataToday("All");
            var allthisday1 = buildDataToday1("All");
            FusionCharts.items["mychart12"].setJSONData(allthisday);
            FusionCharts.items["mychart21"].setJSONData(allthisday1);
            document.getElementById("stats").innerHTML =
              "€" + Math.round(tecVal * 100) / 100;
            document.getElementById("elecvalue").innerHTML =
              "€" + Math.round(eVal * 100) / 100;
            document.getElementById("gasvalue").innerHTML =
              "€" + Math.round(gVal * 100) / 100;
          } else if (window.selectedUsage === "living room") {
            var todayArr_2 = [
              0.2, 0, 0, 0, 0, 0, 0, 0, 0.4, 0.3, 0.3, 0.4, 0, 0, 0, 0, 0.3,
              0.3, 0.3, 0.1, 0.1, 0, 0, 0,
            ];

            var dataArr = eval("todayArr_" + 2);

            var tecVal = 0;

            for (var i = 0; i < dataArr.length; i++) {
              tecVal = tecVal + dataArr[i];
            }

            var eVal = 0;

            var gVal = 0;

            for (var i = 0; i < dataArr.length; i++) {
              eVal = eVal + 0.6 * dataArr[i];
              gVal = gVal + 0.4 * dataArr[i];
            }
            var lightthisday = buildDataToday("Living Room");
            var lightthisday1 = buildDataToday1("Living Room");
            FusionCharts.items["mychart12"].setJSONData(lightthisday);
            FusionCharts.items["mychart21"].setJSONData(lightthisday1);
            document.getElementById("stats").innerHTML =
              "€" + Math.round(tecVal * 100) / 100;
            document.getElementById("elecvalue").innerHTML =
              "€" + Math.round(eVal * 100) / 100;
            document.getElementById("gasvalue").innerHTML =
              "€" + Math.round(gVal * 100) / 100;
          } else if (window.selectedUsage === "master bedroom") {
            var todayArr_3 = [
              0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2,
              0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2,
            ];

            var dataArr = eval("todayArr_" + 3);

            var tecVal = 0;

            for (var i = 0; i < dataArr.length; i++) {
              tecVal = tecVal + dataArr[i];
            }

            var eVal = 0;

            var gVal = 0;

            for (var i = 0; i < dataArr.length; i++) {
              eVal = eVal + 0.6 * dataArr[i];
              gVal = gVal + 0.4 * dataArr[i];
            }
            var plthisday = buildDataToday("Master Bedroom");
            var plthisday1 = buildDataToday1("Master Bedroom");
            FusionCharts.items["mychart12"].setJSONData(plthisday);
            FusionCharts.items["mychart21"].setJSONData(plthisday1);
            document.getElementById("stats").innerHTML =
              "€" + Math.round(tecVal * 100) / 100;
            document.getElementById("elecvalue").innerHTML =
              "€" + Math.round(eVal * 100) / 100;
            document.getElementById("gasvalue").innerHTML =
              "€" + Math.round(gVal * 100) / 100;
          } else if (window.selectedUsage === "bathroom") {
            var todayArr_5 = [
              0.1, 0.1, 0.1, 0.1, 0, 0, 0, 0, 0, 0, 0.1, 0.1, 0, 0, 0, 0, 0,
              0.1, 0.1, 0.1, 0.1, 0, 0, 0,
            ];

            var dataArr = eval("todayArr_" + 5);

            var tecVal = 0;

            for (var i = 0; i < dataArr.length; i++) {
              tecVal = tecVal + dataArr[i];
            }

            var eVal = 0;

            var gVal = 0;

            for (var i = 0; i < dataArr.length; i++) {
              eVal = eVal + 0.6 * dataArr[i];
              gVal = gVal + 0.4 * dataArr[i];
            }
            var otherthisday = buildDataToday("Bathroom");
            var otherthisday1 = buildDataToday1("Bathroom");
            FusionCharts.items["mychart12"].setJSONData(otherthisday);
            FusionCharts.items["mychart21"].setJSONData(otherthisday1);
            document.getElementById("stats").innerHTML =
              "€" + Math.round(tecVal * 100) / 100;
            document.getElementById("elecvalue").innerHTML =
              "€" + Math.round(eVal * 100) / 100;
            document.getElementById("gasvalue").innerHTML =
              "€" + Math.round(gVal * 100) / 100;
          }
        }
      };

      m.onclick = function () {
        window.selectedperiod = "month";

        document.getElementById("date").innerHTML =
          moment().format("MMMM YYYY");

        document.getElementById("a1").innerHTML = "THIS MONTH";
        document.getElementById("a2").innerHTML = "LAST MONTH";

        if (window.b2selected) {
          if (window.selectedUsage === "guest bedroom") {
            var lMonthDataArr_4 = [
              5.3, 5.1, 5, 5, 5.2, 5.1, 5.3, 5.1, 5, 5.2, 5, 5.3, 5, 5, 5.2,
              5.1, 5.3, 5.1, 5.2, 5, 5.3, 5, 5.2, 5.3, 5, 5.2, 5, 5.1, 5.2, 5.3,
              5.3,
            ];

            var dataArr = eval("lMonthDataArr_" + 4);

            var tecVal = 0;

            for (var i = 0; i < moment().daysInMonth(); i++) {
              tecVal = tecVal + dataArr[i];
            }

            var eVal = 0;

            var gVal = 0;

            for (
              var i = 0;
              i < moment().subtract(1, "month").daysInMonth();
              i++
            ) {
              eVal = eVal + 0.6 * dataArr[i];
              gVal = gVal + 0.4 * dataArr[i];
            }
            var reflastmonth = buildDataLastMonth("Guest Bedroom");
            var reflastmonth1 = buildDataLastMonth1("Guest Bedroom");
            FusionCharts.items["mychart12"].setJSONData(reflastmonth);
            FusionCharts.items["mychart21"].setJSONData(reflastmonth1);
            document.getElementById("stats").innerHTML =
              "€" + Math.round(tecVal * 100) / 100;
            document.getElementById("elecvalue").innerHTML =
              "€" + Math.round(eVal * 100) / 100;
            document.getElementById("gasvalue").innerHTML =
              "€" + Math.round(gVal * 100) / 100;
          } else if (window.selectedUsage === "kitchen") {
            var lMonthDataArr_1 = [
              2, 2, 2.3, 2.3, 2.3, 2.1, 2.2, 2, 2.1, 2.3, 2.3, 2.1, 2, 2.4, 2,
              2, 2, 2.2, 2.3, 2.3, 2, 2.3, 2.2, 2.3, 2, 2.2, 2.3, 2.3, 2, 2.3,
              2.3,
            ];

            var dataArr = eval("lMonthDataArr_" + 1);

            var tecVal = 0;

            for (var i = 0; i < moment().daysInMonth(); i++) {
              tecVal = tecVal + dataArr[i];
            }

            var eVal = 0;

            var gVal = 0;

            for (
              var i = 0;
              i < moment().subtract(1, "month").daysInMonth();
              i++
            ) {
              eVal = eVal + 0.6 * dataArr[i];
              gVal = gVal + 0.4 * dataArr[i];
            }
            var hclastmonth = buildDataLastMonth("Kitchen");
            var hclastmonth1 = buildDataLastMonth1("Kitchen");
            FusionCharts.items["mychart12"].setJSONData(hclastmonth);
            FusionCharts.items["mychart21"].setJSONData(hclastmonth1);
            document.getElementById("stats").innerHTML =
              "€" + Math.round(tecVal * 100) / 100;
            document.getElementById("elecvalue").innerHTML =
              "€" + Math.round(eVal * 100) / 100;
            document.getElementById("gasvalue").innerHTML =
              "€" + Math.round(gVal * 100) / 100;
          } else if (window.selectedUsage === "all") {
            var lMonthDataArr_0 = [
              15.8, 14.5, 15.7, 15.4, 15.1, 15.3, 15.6, 14.7, 14.7, 15.3, 15,
              15.6, 15.3, 15.1, 15.3, 15.6, 15, 15.2, 16, 14.7, 15.6, 15, 15.7,
              15.1, 15.3, 15.6, 15.1, 15.5, 15.2, 15.9, 16.1,
            ];

            var dataArr = eval("lMonthDataArr_" + 0);

            var tecVal = 0;

            for (var i = 0; i < moment().daysInMonth(); i++) {
              tecVal = tecVal + dataArr[i];
            }

            var eVal = 0;

            var gVal = 0;

            for (
              var i = 0;
              i < moment().subtract(1, "month").daysInMonth();
              i++
            ) {
              eVal = eVal + 0.6 * dataArr[i];
              gVal = gVal + 0.4 * dataArr[i];
            }
            var alllastmonth = buildDataLastMonth("All");
            var alllastmonth1 = buildDataLastMonth1("All");
            FusionCharts.items["mychart12"].setJSONData(alllastmonth);
            FusionCharts.items["mychart21"].setJSONData(alllastmonth1);
            document.getElementById("stats").innerHTML =
              "€" + Math.round(tecVal * 100) / 100;
            document.getElementById("elecvalue").innerHTML =
              "€" + Math.round(eVal * 100) / 100;
            document.getElementById("gasvalue").innerHTML =
              "€" + Math.round(gVal * 100) / 100;
          } else if (window.selectedUsage === "living room") {
            var lMonthDataArr_2 = [
              2.7, 2.3, 2.5, 2.3, 2.3, 2.6, 2.5, 2.5, 2.7, 2.7, 2.6, 2.5, 2.7,
              2.4, 2.7, 2.7, 2.3, 2.3, 2.7, 2.3, 2.7, 2.3, 2.7, 2.3, 2.7, 2.5,
              2.2, 2.7, 2.7, 2.7, 2.7,
            ];

            var dataArr = eval("lMonthDataArr_" + 2);

            var tecVal = 0;

            for (var i = 0; i < moment().daysInMonth(); i++) {
              tecVal = tecVal + dataArr[i];
            }

            var eVal = 0;

            var gVal = 0;

            for (
              var i = 0;
              i < moment().subtract(1, "month").daysInMonth();
              i++
            ) {
              eVal = eVal + 0.6 * dataArr[i];
              gVal = gVal + 0.4 * dataArr[i];
            }
            var lightinglastmonth = buildDataLastMonth("Living Room");
            var lightinglastmonth1 = buildDataLastMonth1("Living Room");
            FusionCharts.items["mychart12"].setJSONData(lightinglastmonth);
            FusionCharts.items["mychart21"].setJSONData(lightinglastmonth1);
            document.getElementById("stats").innerHTML =
              "€" + Math.round(tecVal * 100) / 100;
            document.getElementById("elecvalue").innerHTML =
              "€" + Math.round(eVal * 100) / 100;
            document.getElementById("gasvalue").innerHTML =
              "€" + Math.round(gVal * 100) / 100;
          } else if (window.selectedUsage === "master bedroom") {
            var lMonthDataArr_3 = [
              4.8, 4.3, 4.6, 4.8, 4.3, 4.7, 4.8, 4.3, 4.6, 4.3, 4.3, 4.8, 4.8,
              4.3, 4.6, 4.8, 4.6, 4.8, 4.8, 4.3, 4.8, 4.5, 4.8, 4.3, 4.6, 4.8,
              4.8, 4.6, 4.3, 4.8, 4.8,
            ];

            var dataArr = eval("lMonthDataArr_" + 3);

            var tecVal = 0;

            for (var i = 0; i < moment().daysInMonth(); i++) {
              tecVal = tecVal + dataArr[i];
            }

            var eVal = 0;

            var gVal = 0;

            for (
              var i = 0;
              i < moment().subtract(1, "month").daysInMonth();
              i++
            ) {
              eVal = eVal + 0.6 * dataArr[i];
              gVal = gVal + 0.4 * dataArr[i];
            }
            var pllastmonth = buildDataLastMonth("Master Bedroom");
            var pllastmonth1 = buildDataLastMonth1("Master Bedroom");
            FusionCharts.items["mychart12"].setJSONData(pllastmonth);
            FusionCharts.items["mychart21"].setJSONData(pllastmonth1);
            document.getElementById("stats").innerHTML =
              "€" + Math.round(tecVal * 100) / 100;
            document.getElementById("elecvalue").innerHTML =
              "€" + Math.round(eVal * 100) / 100;
            document.getElementById("gasvalue").innerHTML =
              "€" + Math.round(gVal * 100) / 100;
          } else if (window.selectedUsage === "bathroom") {
            var lMonthDataArr_5 = [
              1, 0.8, 1, 1, 1, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.9, 0.8, 1, 0.8,
              1, 0.8, 0.8, 1, 0.8, 0.8, 0.8, 0.8, 0.8, 1, 0.9, 0.8, 0.8, 1, 0.8,
              1,
            ];

            var dataArr = eval("lMonthDataArr_" + 5);

            var tecVal = 0;

            for (var i = 0; i < moment().daysInMonth(); i++) {
              tecVal = tecVal + dataArr[i];
            }

            var eVal = 0;

            var gVal = 0;

            for (
              var i = 0;
              i < moment().subtract(1, "month").daysInMonth();
              i++
            ) {
              eVal = eVal + 0.6 * dataArr[i];
              gVal = gVal + 0.4 * dataArr[i];
            }
            var otherlastmonth = buildDataLastMonth("Bathroom");
            var otherlastmonth1 = buildDataLastMonth1("Bathroom");
            FusionCharts.items["mychart12"].setJSONData(otherlastmonth);
            FusionCharts.items["mychart21"].setJSONData(otherlastmonth1);
            document.getElementById("stats").innerHTML =
              "€" + Math.round(tecVal * 100) / 100;
            document.getElementById("elecvalue").innerHTML =
              "€" + Math.round(eVal * 100) / 100;
            document.getElementById("gasvalue").innerHTML =
              "€" + Math.round(gVal * 100) / 100;
          }
        } else {
          if (window.selectedUsage === "guest bedroom") {
            var monthDataArr_4 = [
              5, 5.1, 5, 5, 5.2, 5.1, 5, 5.1, 5, 5.2, 5, 5, 5, 5, 5.2, 5.1, 5,
              5.1, 5.2, 5, 5, 5.1, 5.2, 5, 5, 5.2, 5, 5.1, 5.2, 5, 5,
            ];

            var dataArr = eval("monthDataArr_" + 4);

            var tecVal = 0;

            for (var i = 0; i < moment().daysInMonth(); i++) {
              tecVal = tecVal + dataArr[i];
            }

            var eVal = 0;

            var gVal = 0;

            for (var i = 0; i < moment().daysInMonth(); i++) {
              eVal = eVal + 0.6 * dataArr[i];
              gVal = gVal + 0.4 * dataArr[i];
            }
            var refthismonth = buildDataThisMonth("Guest Bedroom");
            var refthismonth1 = buildDataThisMonth1("Guest Bedroom");
            FusionCharts.items["mychart12"].setJSONData(refthismonth);
            FusionCharts.items["mychart21"].setJSONData(refthismonth1);
            document.getElementById("stats").innerHTML =
              "€" + Math.round(tecVal * 100) / 100;
            document.getElementById("elecvalue").innerHTML =
              "€" + Math.round(eVal * 100) / 100;
            document.getElementById("gasvalue").innerHTML =
              "€" + Math.round(gVal * 100) / 100;
          } else if (window.selectedUsage === "kitchen") {
            var monthDataArr_1 = [
              2, 2, 2.3, 2.3, 2.3, 2.1, 2.2, 2, 2.1, 2.3, 2.2, 2.1, 2, 2.4, 2,
              2, 2, 2.2, 2.3, 2.1, 2, 2, 2.2, 2.1, 2, 2.2, 2.1, 2.1, 2, 2.2,
              2.1,
            ];

            var dataArr = eval("monthDataArr_" + 1);

            var tecVal = 0;

            for (var i = 0; i < moment().daysInMonth(); i++) {
              tecVal = tecVal + dataArr[i];
            }

            var eVal = 0;

            var gVal = 0;

            for (var i = 0; i < moment().daysInMonth(); i++) {
              eVal = eVal + 0.6 * dataArr[i];
              gVal = gVal + 0.4 * dataArr[i];
            }
            var hcthismonth = buildDataThisMonth("Kitchen");
            var hcthismonth1 = buildDataThisMonth1("Kitchen");
            FusionCharts.items["mychart12"].setJSONData(hcthismonth);
            FusionCharts.items["mychart21"].setJSONData(hcthismonth1);
            document.getElementById("stats").innerHTML =
              "€" + Math.round(tecVal * 100) / 100;
            document.getElementById("elecvalue").innerHTML =
              "€" + Math.round(eVal * 100) / 100;
            document.getElementById("gasvalue").innerHTML =
              "€" + Math.round(gVal * 100) / 100;
          } else if (window.selectedUsage === "all") {
            var monthDataArr_0 = [
              14.8, 14.5, 15.4, 15.4, 14.9, 15.3, 15.1, 14.7, 14.8, 15.3, 14.9,
              15.3, 14.3, 14.9, 15, 14.8, 14.7, 14.7, 14.9, 14.5, 14.4, 14.7,
              15.1, 14.6, 14.7, 15.1, 14.5, 14.8, 14.7, 14.8, 14.4,
            ];

            var dataArr = eval("monthDataArr_" + 0);

            var tecVal = 0;

            for (var i = 0; i < moment().daysInMonth(); i++) {
              tecVal = tecVal + dataArr[i];
            }

            var eVal = 0;

            var gVal = 0;

            for (var i = 0; i < moment().daysInMonth(); i++) {
              eVal = eVal + 0.6 * dataArr[i];
              gVal = gVal + 0.4 * dataArr[i];
            }
            var allthisday = buildDataThisMonth("All");
            var allthisday1 = buildDataThisMonth1("All");
            FusionCharts.items["mychart12"].setJSONData(allthisday);
            FusionCharts.items["mychart21"].setJSONData(allthisday1);
            document.getElementById("stats").innerHTML =
              "€" + Math.round(tecVal * 100) / 100;
            document.getElementById("elecvalue").innerHTML =
              "€" + Math.round(eVal * 100) / 100;
            document.getElementById("gasvalue").innerHTML =
              "€" + Math.round(gVal * 100) / 100;
          } else if (window.selectedUsage === "living room") {
            var monthDataArr_2 = [
              2.7, 2.3, 2.5, 2.3, 2.3, 2.6, 2.5, 2.5, 2.3, 2.7, 2.6, 2.5, 2.2,
              2.4, 2.4, 2.2, 2.3, 2.3, 2.2, 2.3, 2.3, 2.3, 2.6, 2.3, 2.3, 2.5,
              2.2, 2.2, 2.2, 2.2, 2.2,
            ];

            var dataArr = eval("monthDataArr_" + 2);

            var tecVal = 0;

            for (var i = 0; i < moment().daysInMonth(); i++) {
              tecVal = tecVal + dataArr[i];
            }

            var eVal = 0;

            var gVal = 0;

            for (var i = 0; i < moment().daysInMonth(); i++) {
              eVal = eVal + 0.6 * dataArr[i];
              gVal = gVal + 0.4 * dataArr[i];
            }
            var lightthisday = buildDataThisMonth("Living Room");
            var lightthisday1 = buildDataThisMonth1("Living Room");
            FusionCharts.items["mychart12"].setJSONData(lightthisday);
            FusionCharts.items["mychart21"].setJSONData(lightthisday1);
            document.getElementById("stats").innerHTML =
              "€" + Math.round(tecVal * 100) / 100;
            document.getElementById("elecvalue").innerHTML =
              "€" + Math.round(eVal * 100) / 100;
            document.getElementById("gasvalue").innerHTML =
              "€" + Math.round(gVal * 100) / 100;
          } else if (window.selectedUsage === "master bedroom") {
            var monthDataArr_3 = [
              4.3, 4.3, 4.6, 4.8, 4.3, 4.7, 4.6, 4.3, 4.6, 4.3, 4.3, 4.8, 4.3,
              4.3, 4.6, 4.5, 4.6, 4.3, 4.3, 4.3, 4.3, 4.5, 4.3, 4.3, 4.6, 4.3,
              4.4, 4.6, 4.3, 4.6, 4.3,
            ];

            var dataArr = eval("monthDataArr_" + 3);

            var tecVal = 0;

            for (var i = 0; i < moment().daysInMonth(); i++) {
              tecVal = tecVal + dataArr[i];
            }

            var eVal = 0;

            var gVal = 0;

            for (var i = 0; i < moment().daysInMonth(); i++) {
              eVal = eVal + 0.6 * dataArr[i];
              gVal = gVal + 0.4 * dataArr[i];
            }
            var plthisday = buildDataThisMonth("Master Bedroom");
            var plthisday1 = buildDataThisMonth1("Master Bedroom");
            FusionCharts.items["mychart12"].setJSONData(plthisday);
            FusionCharts.items["mychart21"].setJSONData(plthisday1);
            document.getElementById("stats").innerHTML =
              "€" + Math.round(tecVal * 100) / 100;
            document.getElementById("elecvalue").innerHTML =
              "€" + Math.round(eVal * 100) / 100;
            document.getElementById("gasvalue").innerHTML =
              "€" + Math.round(gVal * 100) / 100;
          } else if (window.selectedUsage === "bathroom") {
            var monthDataArr_5 = [
              0.8, 0.8, 1, 1, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.9, 0.8, 0.8,
              0.8, 1, 0.8, 0.8, 0.9, 0.8, 0.8, 0.8, 0.8, 0.9, 0.8, 0.9, 0.8,
              0.8, 1, 0.8, 0.8,
            ];

            var dataArr = eval("monthDataArr_" + 5);

            var tecVal = 0;

            for (var i = 0; i < moment().daysInMonth(); i++) {
              tecVal = tecVal + dataArr[i];
            }

            var eVal = 0;

            var gVal = 0;

            for (var i = 0; i < moment().daysInMonth(); i++) {
              eVal = eVal + 0.6 * dataArr[i];
              gVal = gVal + 0.4 * dataArr[i];
            }
            var otherthisday = buildDataThisMonth("Bathroom");
            var otherthisday1 = buildDataThisMonth1("Bathroom");
            FusionCharts.items["mychart12"].setJSONData(otherthisday);
            FusionCharts.items["mychart21"].setJSONData(otherthisday1);
            document.getElementById("stats").innerHTML =
              "€" + Math.round(tecVal * 100) / 100;
            document.getElementById("elecvalue").innerHTML =
              "€" + Math.round(eVal * 100) / 100;
            document.getElementById("gasvalue").innerHTML =
              "€" + Math.round(gVal * 100) / 100;
          }
        }
      };

      setTimeout(function () {
        document.getElementById("today").click();
      });

      y.onclick = function () {
        window.selectedperiod = "year";

        document.getElementById("date").innerHTML = moment().format("YYYY");

        document.getElementById("a1").innerHTML = "THIS YEAR";
        document.getElementById("a2").innerHTML = "LAST YEAR";

        if (window.b2selected) {
          if (window.selectedUsage === "guest bedroom") {
            var pYearDataArr_4 = [
              157.2, 155, 151, 158, 151, 155, 151, 151, 155, 151, 151, 155,
            ];

            var dataArr = eval("pYearDataArr_" + 4);

            var tecVal = 0;

            for (var i = 0; i < 12; i++) {
              tecVal = tecVal + dataArr[i];
            }

            var eVal = 0;

            var gVal = 0;

            for (var i = 0; i < 12; i++) {
              eVal = eVal + 0.6 * dataArr[i];
              gVal = gVal + 0.4 * dataArr[i];
            }
            var reflastmonth = buildDataLastYear("Guest Bedroom");
            var reflastmonth1 = buildDataLastYear1("Guest Bedroom");
            FusionCharts.items["mychart12"].setJSONData(reflastmonth);
            FusionCharts.items["mychart21"].setJSONData(reflastmonth1);
            document.getElementById("stats").innerHTML =
              "€" + Math.round(tecVal * 100) / 100;
            document.getElementById("elecvalue").innerHTML =
              "€" + Math.round(eVal * 100) / 100;
            document.getElementById("gasvalue").innerHTML =
              "€" + Math.round(gVal * 100) / 100;
          } else if (window.selectedUsage === "kitchen") {
            var pYearDataArr_1 = [
              58.9, 62.2, 66.2, 58.9, 62.2, 65.9, 67.3, 58.9, 58.9, 58.9, 62.2,
              58.9,
            ];

            var dataArr = eval("pYearDataArr_" + 1);

            var tecVal = 0;

            for (var i = 0; i < 12; i++) {
              tecVal = tecVal + dataArr[i];
            }

            var eVal = 0;

            var gVal = 0;

            for (var i = 0; i < 12; i++) {
              eVal = eVal + 0.6 * dataArr[i];
              gVal = gVal + 0.4 * dataArr[i];
            }
            var hclastmonth = buildDataLastYear("Kitchen");
            var hclastmonth1 = buildDataLastYear1("Kitchen");
            FusionCharts.items["mychart12"].setJSONData(hclastmonth);
            FusionCharts.items["mychart21"].setJSONData(hclastmonth1);
            document.getElementById("stats").innerHTML =
              "€" + Math.round(tecVal * 100) / 100;
            document.getElementById("elecvalue").innerHTML =
              "€" + Math.round(eVal * 100) / 100;
            document.getElementById("gasvalue").innerHTML =
              "€" + Math.round(gVal * 100) / 100;
          } else if (window.selectedUsage === "all") {
            var pYearDataArr_0 = [
              438.8, 435.7, 447, 442.6, 436.6, 451.9, 447.3, 427.4, 440.1,
              437.8, 434.4, 435.4,
            ];

            var dataArr = eval("pYearDataArr_" + 0);

            var tecVal = 0;

            for (var i = 0; i < 12; i++) {
              tecVal = tecVal + dataArr[i];
            }

            var eVal = 0;

            var gVal = 0;

            for (var i = 0; i < 12; i++) {
              eVal = eVal + 0.6 * dataArr[i];
              gVal = gVal + 0.4 * dataArr[i];
            }
            var hclastday = buildDataLastYear("All");
            var hclastday1 = buildDataLastYear1("All");
            FusionCharts.items["mychart12"].setJSONData(hclastday);
            FusionCharts.items["mychart21"].setJSONData(hclastday1);
            document.getElementById("stats").innerHTML =
              "€" + Math.round(tecVal * 100) / 100;
            document.getElementById("elecvalue").innerHTML =
              "€" + Math.round(eVal * 100) / 100;
            document.getElementById("gasvalue").innerHTML =
              "€" + Math.round(gVal * 100) / 100;
          } else if (window.selectedUsage === "living room") {
            var pYearDataArr_2 = [
              69.1, 66.4, 76.2, 69.1, 71.3, 73.9, 66.4, 66.4, 69.1, 71.3, 69.1,
              66.4,
            ];

            var dataArr = eval("pYearDataArr_" + 2);

            var tecVal = 0;

            for (var i = 0; i < 12; i++) {
              tecVal = tecVal + dataArr[i];
            }

            var eVal = 0;

            var gVal = 0;

            for (var i = 0; i < 12; i++) {
              eVal = eVal + 0.6 * dataArr[i];
              gVal = gVal + 0.4 * dataArr[i];
            }
            var lightinglastday = buildDataLastYear("Living Room");
            var lightinglastday1 = buildDataLastYear1("Living Room");
            FusionCharts.items["mychart12"].setJSONData(lightinglastday);
            FusionCharts.items["mychart21"].setJSONData(lightinglastday1);
            document.getElementById("stats").innerHTML =
              "€" + Math.round(tecVal * 100) / 100;
            document.getElementById("elecvalue").innerHTML =
              "€" + Math.round(eVal * 100) / 100;
            document.getElementById("gasvalue").innerHTML =
              "€" + Math.round(gVal * 100) / 100;
          } else if (window.selectedUsage === "master bedroom") {
            var pYearDataArr_3 = [
              131.6, 129.1, 131.6, 131.6, 129.1, 134.1, 137.6, 129.1, 134.1,
              131.6, 129.1, 129.1,
            ];

            var dataArr = eval("pYearDataArr_" + 3);

            var tecVal = 0;

            for (var i = 0; i < 12; i++) {
              tecVal = tecVal + dataArr[i];
            }

            var eVal = 0;

            var gVal = 0;

            for (var i = 0; i < 12; i++) {
              eVal = eVal + 0.6 * dataArr[i];
              gVal = gVal + 0.4 * dataArr[i];
            }
            var pllastday = buildDataLastYear("Master Bedroom");
            var pllastday1 = buildDataLastYear1("Master Bedroom");
            FusionCharts.items["mychart12"].setJSONData(pllastday);
            FusionCharts.items["mychart21"].setJSONData(pllastday1);
            document.getElementById("stats").innerHTML =
              "€" + Math.round(tecVal * 100) / 100;
            document.getElementById("elecvalue").innerHTML =
              "€" + Math.round(eVal * 100) / 100;
            document.getElementById("gasvalue").innerHTML =
              "€" + Math.round(gVal * 100) / 100;
          } else if (window.selectedUsage === "bathroom") {
            var pYearDataArr_5 = [
              22, 23, 22, 25, 23, 23, 25, 22, 23, 25, 23, 26,
            ];

            var dataArr = eval("pYearDataArr_" + 5);

            var tecVal = 0;

            for (var i = 0; i < 12; i++) {
              tecVal = tecVal + dataArr[i];
            }

            var eVal = 0;

            var gVal = 0;

            for (var i = 0; i < 12; i++) {
              eVal = eVal + 0.6 * dataArr[i];
              gVal = gVal + 0.4 * dataArr[i];
            }
            var otherlastday = buildDataLastYear("Bathroom");
            var otherlastday1 = buildDataLastYear1("Bathroom");
            FusionCharts.items["mychart12"].setJSONData(otherlastday);
            FusionCharts.items["mychart21"].setJSONData(otherlastday1);
            document.getElementById("stats").innerHTML =
              "€" + Math.round(tecVal * 100) / 100;
            document.getElementById("elecvalue").innerHTML =
              "€" + Math.round(eVal * 100) / 100;
            document.getElementById("gasvalue").innerHTML =
              "€" + Math.round(gVal * 100) / 100;
          }
        } else {
          if (window.selectedUsage === "guest bedroom") {
            var yearDataArr_4 = [
              157.1, 155, 151, 157.7, 151, 155, 151, 151, 155, 151, 151, 155,
            ];

            var dataArr = eval("yearDataArr_" + 4);

            var tecVal = 0;

            for (var i = 0; i < 12; i++) {
              tecVal = tecVal + dataArr[i];
            }

            var eVal = 0;

            var gVal = 0;

            for (var i = 0; i < 12; i++) {
              eVal = eVal + 0.6 * dataArr[i];
              gVal = gVal + 0.4 * dataArr[i];
            }
            var refthismonth = buildDataThisYear("Guest Bedroom");
            var refthismonth1 = buildDataThisYear1("Guest Bedroom");
            FusionCharts.items["mychart12"].setJSONData(refthismonth);
            FusionCharts.items["mychart21"].setJSONData(refthismonth1);
            document.getElementById("stats").innerHTML =
              "€" + Math.round(tecVal * 100) / 100;
            document.getElementById("elecvalue").innerHTML =
              "€" + Math.round(eVal * 100) / 100;
            document.getElementById("gasvalue").innerHTML =
              "€" + Math.round(gVal * 100) / 100;
          } else if (window.selectedUsage === "kitchen") {
            var yearDataArr_1 = [
              65.9, 62.2, 66.2, 65.9, 62.2, 65.9, 67.3, 62.2, 65.9, 62.2, 62.2,
              62.2,
            ];

            var dataArr = eval("yearDataArr_" + 1);

            var tecVal = 0;

            for (var i = 0; i < 12; i++) {
              tecVal = tecVal + dataArr[i];
            }

            var eVal = 0;

            var gVal = 0;

            for (var i = 0; i < 12; i++) {
              eVal = eVal + 0.6 * dataArr[i];
              gVal = gVal + 0.4 * dataArr[i];
            }
            var hcthismonth = buildDataThisYear("Kitchen");
            var hcthismonth1 = buildDataThisYear1("Kitchen");
            FusionCharts.items["mychart12"].setJSONData(hcthismonth);
            FusionCharts.items["mychart21"].setJSONData(hcthismonth1);
            document.getElementById("stats").innerHTML =
              "€" + Math.round(tecVal * 100) / 100;
            document.getElementById("elecvalue").innerHTML =
              "€" + Math.round(eVal * 100) / 100;
            document.getElementById("gasvalue").innerHTML =
              "€" + Math.round(gVal * 100) / 100;
          } else if (window.selectedUsage === "all") {
            var yearDataArr_0 = [
              460, 440.6, 457.6, 460.1, 436.6, 451.9, 454.3, 441.6, 451.4,
              447.6, 438.7, 442.6,
            ];

            var dataArr = eval("yearDataArr_" + 0);

            var tecVal = 0;

            for (var i = 0; i < 12; i++) {
              tecVal = tecVal + dataArr[i];
            }

            var eVal = 0;

            var gVal = 0;

            for (var i = 0; i < 12; i++) {
              eVal = eVal + 0.6 * dataArr[i];
              gVal = gVal + 0.4 * dataArr[i];
            }
            var allthisday = buildDataThisYear("All");
            var allthisday1 = buildDataThisYear1("All");
            FusionCharts.items["mychart12"].setJSONData(allthisday);
            FusionCharts.items["mychart21"].setJSONData(allthisday1);
            document.getElementById("stats").innerHTML =
              "€" + Math.round(tecVal * 100) / 100;
            document.getElementById("elecvalue").innerHTML =
              "€" + Math.round(eVal * 100) / 100;
            document.getElementById("gasvalue").innerHTML =
              "€" + Math.round(gVal * 100) / 100;
          } else if (window.selectedUsage === "living room") {
            var yearDataArr_2 = [
              73.4, 71.3, 76.2, 73.4, 71.3, 73.9, 73.4, 71.3, 73.4, 71.3, 73.4,
              71.3,
            ];

            var dataArr = eval("yearDataArr_" + 2);

            var tecVal = 0;

            for (var i = 0; i < 12; i++) {
              tecVal = tecVal + dataArr[i];
            }

            var eVal = 0;

            var gVal = 0;

            for (var i = 0; i < 12; i++) {
              eVal = eVal + 0.6 * dataArr[i];
              gVal = gVal + 0.4 * dataArr[i];
            }
            var lightthisday = buildDataThisYear("Living Room");
            var lightthisday1 = buildDataThisYear1("Living Room");
            FusionCharts.items["mychart12"].setJSONData(lightthisday);
            FusionCharts.items["mychart21"].setJSONData(lightthisday1);
            document.getElementById("stats").innerHTML =
              "€" + Math.round(tecVal * 100) / 100;
            document.getElementById("elecvalue").innerHTML =
              "€" + Math.round(eVal * 100) / 100;
            document.getElementById("gasvalue").innerHTML =
              "€" + Math.round(gVal * 100) / 100;
          } else if (window.selectedUsage === "master bedroom") {
            var yearDataArr_3 = [
              137.6, 129.1, 136.2, 138.1, 129.1, 134.1, 137.6, 129.1, 134.1,
              138.1, 129.1, 129.1,
            ];

            var dataArr = eval("yearDataArr_" + 3);

            var tecVal = 0;

            for (var i = 0; i < 12; i++) {
              tecVal = tecVal + dataArr[i];
            }

            var eVal = 0;

            var gVal = 0;

            for (var i = 0; i < 12; i++) {
              eVal = eVal + 0.6 * dataArr[i];
              gVal = gVal + 0.4 * dataArr[i];
            }
            var plthisday = buildDataThisYear("Master Bedroom");
            var plthisday1 = buildDataThisYear1("Master Bedroom");
            FusionCharts.items["mychart12"].setJSONData(plthisday);
            FusionCharts.items["mychart21"].setJSONData(plthisday1);
            document.getElementById("stats").innerHTML =
              "€" + Math.round(tecVal * 100) / 100;
            document.getElementById("elecvalue").innerHTML =
              "€" + Math.round(eVal * 100) / 100;
            document.getElementById("gasvalue").innerHTML =
              "€" + Math.round(gVal * 100) / 100;
          } else if (window.selectedUsage === "bathroom") {
            var yearDataArr_5 = [
              26, 23, 28, 25, 23, 23, 25, 28, 23, 25, 23, 25,
            ];

            var dataArr = eval("yearDataArr_" + 5);

            var tecVal = 0;

            for (var i = 0; i < 12; i++) {
              tecVal = tecVal + dataArr[i];
            }

            var eVal = 0;

            var gVal = 0;

            for (var i = 0; i < 12; i++) {
              eVal = eVal + 0.6 * dataArr[i];
              gVal = gVal + 0.4 * dataArr[i];
            }
            var otherthisday = buildDataThisYear("Bathroom");
            var otherthisday1 = buildDataThisYear1("Bathroom");
            FusionCharts.items["mychart12"].setJSONData(otherthisday);
            FusionCharts.items["mychart21"].setJSONData(otherthisday1);
            document.getElementById("stats").innerHTML =
              "€" + Math.round(tecVal * 100) / 100;
            document.getElementById("elecvalue").innerHTML =
              "€" + Math.round(eVal * 100) / 100;
            document.getElementById("gasvalue").innerHTML =
              "€" + Math.round(gVal * 100) / 100;
          }
        }
      };
    } else if (this.props.user.id === 4) {
      utils.disposeChart(FusionCharts, "mychart9");
      ReactDOM.unmountComponentAtNode(document.getElementById("chart1"));
      //document.getElementById("date").style.display = "none";
      document
        .getElementById("parent1")
        .setAttribute("class", "chart1-us col-lg-12 col-xl-12");
      document.getElementById("text1").innerHTML = "Areas";

      document.getElementById("Home").setAttribute("class", "left-option");
      document
        .getElementById("Consumption")
        .setAttribute("class", "left-option");
      document.getElementById("Cost").setAttribute("class", "left-option");
      document
        .getElementById("Areas")
        .setAttribute("class", "left-option active");
      //document.getElementById("Emissions").setAttribute("class", "left-option");

      document
        .getElementById("bd-docs-nav")
        .setAttribute("class", "bd-links collapse");

      ReactDOM.unmountComponentAtNode(document.getElementById("chart2"));
      document.getElementById("parent2").style.display = "none";
      document.getElementById("parent2").style.width = "0px";
      document.getElementById("parent2").style.height = "0px";

      ReactDOM.unmountComponentAtNode(document.getElementById("chart3"));
      document.getElementById("parent3").style.display = "none";
      document.getElementById("parent3").style.width = "0px";
      document.getElementById("parent3").style.height = "0px";

      ReactDOM.unmountComponentAtNode(document.getElementById("chart4"));
      document.getElementById("parent4").style.display = "none";
      document.getElementById("parent4").style.width = "0px";
      document.getElementById("parent4").style.height = "0px";

      //ReactDOM.unmountComponentAtNode(document.getElementById("chart5"));
      document.getElementById("parent5").style.display = "none";
      document.getElementById("parent5").style.width = "0px";
      document.getElementById("parent5").style.height = "0px";

      //   ReactDOM.unmountComponentAtNode(document.getElementById("chart6"));
      //   document.getElementById("parent6").style.display = "none";
      //   document.getElementById("parent6").style.width = "0px";
      //   document.getElementById("parent6").style.height = "0px";

      //   ReactDOM.unmountComponentAtNode(document.getElementById("chart7"));
      //   document.getElementById("parent6").style.display = "none";
      //   document.getElementById("parent6").style.width = "0px";
      //   document.getElementById("parent6").style.height = "0px";

      ReactDOM.render(
        <UsageComponent usagechart={usagechart} />,
        document.getElementById("chart1")
      );

      t.onclick = function () {
        document.getElementById("date").innerHTML =
          moment().format("MMMM, Do YYYY");
        window.selectedperiod = "today";

        document.getElementById("u1").innerHTML = "TODAY";
        //document.getElementById("u2").innerHTML = "YESTERDAY";

        if (window.b2selected) {
          var usageyesterday = usage_yesterday;
          FusionCharts.items["mychart9"].setJSONData(usageyesterday);
        } else {
          var usagetoday = usage_today;
          FusionCharts.items["mychart9"].setJSONData(usagetoday);
        }
      };

      m.onclick = function () {
        window.selectedperiod = "month";
        document.getElementById("date").innerHTML =
          moment().format("MMMM YYYY");
        document.getElementById("u1").innerHTML = "THIS MONTH";
        // document.getElementById("u2").innerHTML = "LAST MONTH";

        if (window.b2selected) {
          var usagelastmonth = usage_lastmonth;
          FusionCharts.items["mychart9"].setJSONData(usagelastmonth);
        } else {
          var usagethismonth = usage_thismonth;
          FusionCharts.items["mychart9"].setJSONData(usagethismonth);
        }
      };

      setTimeout(function () {
        document.getElementById("today").click();
      });

      y.onclick = function () {
        window.selectedperiod = "year";
        document.getElementById("date").innerHTML = moment().format("YYYY");
        document.getElementById("u1").innerHTML = "THIS YEAR";
        //document.getElementById("u2").innerHTML = "LAST YEAR";

        if (window.b2selected) {
          var usagelastyear = usage_lastyear;
          FusionCharts.items["mychart9"].setJSONData(usagelastyear);
        } else {
          var usagethisyear = usage_thisyear;
          FusionCharts.items["mychart9"].setJSONData(usagethisyear);
        }
      };
    }
  }

  render() {
    return <div></div>;
  }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
  return {
    user: state.activeUser,
  };
}

export default connect(mapStateToProps)(ChartDetail);
