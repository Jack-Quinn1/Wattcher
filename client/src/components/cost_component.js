import React from "react";
import ReactFC from "react-fusioncharts";
import ReactDOM from "react-dom";
import moment from "moment";
import "./app.css";
import {
  buildDataThisMonth,
  buildDataThisYear,
  buildDataLastMonth,
  buildDataLastYear,
} from "../cost/cost_data";
import {
  buildDataThisMonth1,
  buildDataThisYear1,
  buildDataLastMonth1,
  buildDataLastYear1,
  buildDataToday1,
} from "../cost/cost_data1";
import { buildDataToday } from "../cost/cost_data";
import { buildDataYesterday } from "../cost/cost_data";

class AppliancesComponent extends React.Component {
  constructor(props) {
    super(props);

    this.onClickbutton1 = this.onClickbutton1.bind(this);
    this.onClickbutton2 = this.onClickbutton2.bind(this);
  }

  componentDidMount() {
    document.getElementById("a1").click();
    window.selectedUsage = "all";
  }

  onClickbutton1() {
    window.b2selected = false;

    document.getElementById("a2").style.borderBottom = "none";
    document.getElementById("a2").style.color = "#FDFDFD";
    document.getElementById("a2").style.opacity = "0.5";
    document.getElementById("a1").style.color = "#FDFDFD";
    document.getElementById("a1").style.opacity = "1";
    document.getElementById("a1").style.borderBottom = "solid 2px #FDFDFD";
    document.getElementById("a1").style.textTransform = "uppercase";
    document.getElementById("a2").style.textTransform = "uppercase";

    var dataSource;
    var dataSource1;
    if (
      window.selectedperiod === "today" &&
      window.selectedUsage === "guest bedroom"
    ) {
      var todayArr_4 = [
        0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.1, 0.1, 0.1, 0.1,
        0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.3, 0.3, 0.3, 0.3,
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
      dataSource = buildDataToday("Guest Bedroom");
      dataSource1 = buildDataToday1("Guest Bedroom");
      document.getElementById("stats").innerHTML =
        "€" + Math.round(tecVal * 100) / 100;
      document.getElementById("elecvalue").innerHTML =
        "€" + Math.round(eVal * 100) / 100;
      document.getElementById("gasvalue").innerHTML =
        "€" + Math.round(gVal * 100) / 100;
    } else if (
      window.selectedperiod === "today" &&
      window.selectedUsage === "kitchen"
    ) {
      var todayArr_1 = [
        0.1, 0.1, 0.2, 0.2, 0.1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1, 0.1, 0.3,
        0.3, 0.1, 0.1, 0.2, 0.2, 0.2,
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
      dataSource = buildDataToday("Kitchen");
      dataSource1 = buildDataToday1("Kitchen");
      document.getElementById("stats").innerHTML =
        "€" + Math.round(tecVal * 100) / 100;
      document.getElementById("elecvalue").innerHTML =
        "€" + Math.round(eVal * 100) / 100;
      document.getElementById("gasvalue").innerHTML =
        "€" + Math.round(gVal * 100) / 100;
    } else if (
      window.selectedperiod === "today" &&
      window.selectedUsage === "all"
    ) {
      var todayArr_0 = [
        0.9, 0.7, 0.8, 0.8, 0.6, 0.5, 0.5, 0.5, 0.9, 0.8, 0.7, 0.8, 0.3, 0.3,
        0.3, 0.4, 0.7, 1, 1, 0.6, 0.8, 0.7, 0.7, 0.7,
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

      dataSource = buildDataToday("All");
      dataSource1 = buildDataToday1("All");
      document.getElementById("stats").innerHTML =
        "€" + Math.round(tecVal * 100) / 100;
      document.getElementById("elecvalue").innerHTML =
        "€" + Math.round(eVal * 100) / 100;
      document.getElementById("gasvalue").innerHTML =
        "€" + Math.round(gVal * 100) / 100;
    } else if (
      window.selectedperiod === "today" &&
      window.selectedUsage === "living room"
    ) {
      var todayArr_2 = [
        0.2, 0, 0, 0, 0, 0, 0, 0, 0.4, 0.3, 0.3, 0.4, 0, 0, 0, 0, 0.3, 0.3, 0.3,
        0.1, 0.1, 0, 0, 0,
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
      dataSource = buildDataToday("Living Room");
      dataSource1 = buildDataToday1("Living Room");
      document.getElementById("stats").innerHTML =
        "€" + Math.round(tecVal * 100) / 100;
      document.getElementById("elecvalue").innerHTML =
        "€" + Math.round(eVal * 100) / 100;
      document.getElementById("gasvalue").innerHTML =
        "€" + Math.round(gVal * 100) / 100;
    } else if (
      window.selectedperiod === "today" &&
      window.selectedUsage === "master bedroom"
    ) {
      var todayArr_3 = [
        0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2,
        0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2,
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
      dataSource = buildDataToday("Master Bedroom");
      dataSource1 = buildDataToday1("Master Bedroom");
      document.getElementById("stats").innerHTML =
        "€" + Math.round(tecVal * 100) / 100;
      document.getElementById("elecvalue").innerHTML =
        "€" + Math.round(eVal * 100) / 100;
      document.getElementById("gasvalue").innerHTML =
        "€" + Math.round(gVal * 100) / 100;
    } else if (
      window.selectedperiod === "today" &&
      window.selectedUsage === "bathroom"
    ) {
      var todayArr_5 = [
        0.1, 0.1, 0.1, 0.1, 0, 0, 0, 0, 0, 0, 0.1, 0.1, 0, 0, 0, 0, 0, 0.1, 0.1,
        0.1, 0.1, 0, 0, 0,
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
      dataSource = buildDataToday("Bathroom");
      dataSource1 = buildDataToday1("Bathroom");
      document.getElementById("stats").innerHTML =
        "€" + Math.round(tecVal * 100) / 100;
      document.getElementById("elecvalue").innerHTML =
        "€" + Math.round(eVal * 100) / 100;
      document.getElementById("gasvalue").innerHTML =
        "€" + Math.round(gVal * 100) / 100;
    } else if (
      window.selectedperiod === "month" &&
      window.selectedUsage === "guest bedroom"
    ) {
      var monthDataArr_4 = [
        5, 5.1, 5, 5, 5.2, 5.1, 5, 5.1, 5, 5.2, 5, 5, 5, 5, 5.2, 5.1, 5, 5.1,
        5.2, 5, 5, 5.1, 5.2, 5, 5, 5.2, 5, 5.1, 5.2, 5, 5,
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
      dataSource = buildDataThisMonth("Guest Bedroom");
      dataSource1 = buildDataThisMonth1("Guest Bedroom");
      document.getElementById("stats").innerHTML =
        "€" + Math.round(tecVal * 100) / 100;
      document.getElementById("elecvalue").innerHTML =
        "€" + Math.round(eVal * 100) / 100;
      document.getElementById("gasvalue").innerHTML =
        "€" + Math.round(gVal * 100) / 100;
    } else if (
      window.selectedperiod === "month" &&
      window.selectedUsage === "kitchen"
    ) {
      var monthDataArr_1 = [
        2, 2, 2.3, 2.3, 2.3, 2.1, 2.2, 2, 2.1, 2.3, 2.2, 2.1, 2, 2.4, 2, 2, 2,
        2.2, 2.3, 2.1, 2, 2, 2.2, 2.1, 2, 2.2, 2.1, 2.1, 2, 2.2, 2.1,
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
      dataSource = buildDataThisMonth("Kitchen");
      dataSource1 = buildDataThisMonth1("Kitchen");
      document.getElementById("stats").innerHTML =
        "€" + Math.round(tecVal * 100) / 100;
      document.getElementById("elecvalue").innerHTML =
        "€" + Math.round(eVal * 100) / 100;
      document.getElementById("gasvalue").innerHTML =
        "€" + Math.round(gVal * 100) / 100;
    } else if (
      window.selectedperiod === "month" &&
      window.selectedUsage === "all"
    ) {
      var monthDataArr_0 = [
        14.8, 14.5, 15.4, 15.4, 14.9, 15.3, 15.1, 14.7, 14.8, 15.3, 14.9, 15.3,
        14.3, 14.9, 15, 14.8, 14.7, 14.7, 14.9, 14.5, 14.4, 14.7, 15.1, 14.6,
        14.7, 15.1, 14.5, 14.8, 14.7, 14.8, 14.4,
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
      dataSource = buildDataThisMonth("All");
      dataSource1 = buildDataThisMonth1("All");
      document.getElementById("stats").innerHTML =
        "€" + Math.round(tecVal * 100) / 100;
      document.getElementById("elecvalue").innerHTML =
        "€" + Math.round(eVal * 100) / 100;
      document.getElementById("gasvalue").innerHTML =
        "€" + Math.round(gVal * 100) / 100;
    } else if (
      window.selectedperiod === "month" &&
      window.selectedUsage === "living room"
    ) {
      var monthDataArr_2 = [
        2.7, 2.3, 2.5, 2.3, 2.3, 2.6, 2.5, 2.5, 2.3, 2.7, 2.6, 2.5, 2.2, 2.4,
        2.4, 2.2, 2.3, 2.3, 2.2, 2.3, 2.3, 2.3, 2.6, 2.3, 2.3, 2.5, 2.2, 2.2,
        2.2, 2.2, 2.2,
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
      dataSource = buildDataThisMonth("Living Room");
      dataSource1 = buildDataThisMonth1("Living Room");
      document.getElementById("stats").innerHTML =
        "€" + Math.round(tecVal * 100) / 100;
      document.getElementById("elecvalue").innerHTML =
        "€" + Math.round(eVal * 100) / 100;
      document.getElementById("gasvalue").innerHTML =
        "€" + Math.round(gVal * 100) / 100;
    } else if (
      window.selectedperiod === "month" &&
      window.selectedUsage === "master bedroom"
    ) {
      var monthDataArr_3 = [
        4.3, 4.3, 4.6, 4.8, 4.3, 4.7, 4.6, 4.3, 4.6, 4.3, 4.3, 4.8, 4.3, 4.3,
        4.6, 4.5, 4.6, 4.3, 4.3, 4.3, 4.3, 4.5, 4.3, 4.3, 4.6, 4.3, 4.4, 4.6,
        4.3, 4.6, 4.3,
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
      dataSource = buildDataThisMonth("Master Bedroom");
      dataSource1 = buildDataThisMonth1("Master Bedroom");
      document.getElementById("stats").innerHTML =
        "€" + Math.round(tecVal * 100) / 100;
      document.getElementById("elecvalue").innerHTML =
        "€" + Math.round(eVal * 100) / 100;
      document.getElementById("gasvalue").innerHTML =
        "€" + Math.round(gVal * 100) / 100;
    } else if (
      window.selectedperiod === "month" &&
      window.selectedUsage === "bathroom"
    ) {
      var monthDataArr_5 = [
        0.8, 0.8, 1, 1, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.9, 0.8, 0.8, 0.8,
        1, 0.8, 0.8, 0.9, 0.8, 0.8, 0.8, 0.8, 0.9, 0.8, 0.9, 0.8, 0.8, 1, 0.8,
        0.8,
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
      dataSource = buildDataThisMonth("Bathroom");
      dataSource1 = buildDataThisMonth1("Bathroom");
      document.getElementById("stats").innerHTML =
        "€" + Math.round(tecVal * 100) / 100;
      document.getElementById("elecvalue").innerHTML =
        "€" + Math.round(eVal * 100) / 100;
      document.getElementById("gasvalue").innerHTML =
        "€" + Math.round(gVal * 100) / 100;
    } else if (
      window.selectedperiod === "year" &&
      window.selectedUsage === "guest bedroom"
    ) {
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
      dataSource = buildDataThisYear("Guest Bedroom");
      dataSource1 = buildDataThisYear1("Guest Bedroom");
      document.getElementById("stats").innerHTML =
        "€" + Math.round(tecVal * 100) / 100;
      document.getElementById("elecvalue").innerHTML =
        "€" + Math.round(eVal * 100) / 100;
      document.getElementById("gasvalue").innerHTML =
        "€" + Math.round(gVal * 100) / 100;
    } else if (
      window.selectedperiod === "year" &&
      window.selectedUsage === "kitchen"
    ) {
      var yearDataArr_1 = [
        65.9, 62.2, 66.2, 65.9, 62.2, 65.9, 67.3, 62.2, 65.9, 62.2, 62.2, 62.2,
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
      dataSource = buildDataThisYear("Kitchen");
      dataSource1 = buildDataThisYear1("Kitchen");
      document.getElementById("stats").innerHTML =
        "€" + Math.round(tecVal * 100) / 100;
      document.getElementById("elecvalue").innerHTML =
        "€" + Math.round(eVal * 100) / 100;
      document.getElementById("gasvalue").innerHTML =
        "€" + Math.round(gVal * 100) / 100;
    } else if (
      window.selectedperiod === "year" &&
      window.selectedUsage === "all"
    ) {
      var yearDataArr_0 = [
        460, 440.6, 457.6, 460.1, 436.6, 451.9, 454.3, 441.6, 451.4, 447.6,
        438.7, 442.6,
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
      dataSource = buildDataThisYear("All");
      dataSource1 = buildDataThisYear1("All");
      document.getElementById("stats").innerHTML =
        "€" + Math.round(tecVal * 100) / 100;
      document.getElementById("elecvalue").innerHTML =
        "€" + Math.round(eVal * 100) / 100;
      document.getElementById("gasvalue").innerHTML =
        "€" + Math.round(gVal * 100) / 100;
    } else if (
      window.selectedperiod === "year" &&
      window.selectedUsage === "living room"
    ) {
      var yearDataArr_2 = [
        73.4, 71.3, 76.2, 73.4, 71.3, 73.9, 73.4, 71.3, 73.4, 71.3, 73.4, 71.3,
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
      dataSource = buildDataThisYear("Living Room");
      dataSource1 = buildDataThisYear1("Living Room");
      document.getElementById("stats").innerHTML =
        "€" + Math.round(tecVal * 100) / 100;
      document.getElementById("elecvalue").innerHTML =
        "€" + Math.round(eVal * 100) / 100;
      document.getElementById("gasvalue").innerHTML =
        "€" + Math.round(gVal * 100) / 100;
    } else if (
      window.selectedperiod === "year" &&
      window.selectedUsage === "master bedroom"
    ) {
      var yearDataArr_3 = [
        137.6, 129.1, 136.2, 138.1, 129.1, 134.1, 137.6, 129.1, 134.1, 138.1,
        129.1, 129.1,
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
      dataSource = buildDataThisYear("Master Bedroom");
      dataSource1 = buildDataThisYear1("Master Bedroom");
      document.getElementById("stats").innerHTML =
        "€" + Math.round(tecVal * 100) / 100;
      document.getElementById("elecvalue").innerHTML =
        "€" + Math.round(eVal * 100) / 100;
      document.getElementById("gasvalue").innerHTML =
        "€" + Math.round(gVal * 100) / 100;
    } else if (
      window.selectedperiod === "year" &&
      window.selectedUsage === "bathroom"
    ) {
      var yearDataArr_5 = [26, 23, 28, 25, 23, 23, 25, 28, 23, 25, 23, 25];

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
      dataSource = buildDataThisYear("Bathroom");
      dataSource1 = buildDataThisYear1("Bathroom");
      document.getElementById("stats").innerHTML =
        "€" + Math.round(tecVal * 100) / 100;
      document.getElementById("elecvalue").innerHTML =
        "€" + Math.round(eVal * 100) / 100;
      document.getElementById("gasvalue").innerHTML =
        "€" + Math.round(gVal * 100) / 100;
    }

    var chartconfig = { ...this.props.appliancechart };
    chartconfig.dataSource = dataSource;

    var chartconfig2 = { ...this.props.appliancechart1 };
    chartconfig2.dataSource = dataSource;

    const chart = <ReactFC {...chartconfig} />;

    const chart1 = <ReactFC {...chartconfig2} />;

    ReactDOM.unmountComponentAtNode(
      document.getElementById("app-chart-container")
    );

    ReactDOM.unmountComponentAtNode(
      document.getElementById("app-chart-container1")
    );

    ReactDOM.render(chart, document.getElementById("app-chart-container"));

    ReactDOM.render(chart1, document.getElementById("app-chart-container1"));
  }

  onClickbutton2() {
    window.b2selected = true;

    document.getElementById("a1").style.borderBottom = "none";
    document.getElementById("a1").style.color = "#FDFDFD";
    document.getElementById("a1").style.opacity = "0.5";
    document.getElementById("a2").style.color = "#FDFDFD";
    document.getElementById("a2").style.opacity = "1";
    document.getElementById("a2").style.borderBottom = "solid 2px #FDFDFD";

    var dataSource;

    if (
      window.selectedperiod === "today" &&
      window.selectedUsage === "guest bedroom"
    ) {
      var yDayArr_4 = [
        0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.1, 0.1, 0.2, 0.2,
        0.2, 0.2, 0.1, 0.1, 0.1, 0.1, 0.3, 0.3, 0.3, 0.3,
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
      dataSource = buildDataYesterday("Guest Bedroom");
      document.getElementById("stats").innerHTML =
        "€" + Math.round(tecVal * 100) / 100;
      document.getElementById("elecvalue").innerHTML =
        "€" + Math.round(eVal * 100) / 100;
      document.getElementById("gasvalue").innerHTML =
        "€" + Math.round(gVal * 100) / 100;
    } else if (
      window.selectedperiod === "today" &&
      window.selectedUsage === "kitchen"
    ) {
      var yDayArr_1 = [
        0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0, 0, 0, 0, 0, 0, 0, 0, 0.1, 0.1,
        0.3, 0.3, 0.1, 0.2, 0.2, 0.2, 0.2,
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
      dataSource = buildDataYesterday("Kitchen");
      document.getElementById("stats").innerHTML =
        "€" + Math.round(tecVal * 100) / 100;
      document.getElementById("elecvalue").innerHTML =
        "€" + Math.round(eVal * 100) / 100;
      document.getElementById("gasvalue").innerHTML =
        "€" + Math.round(gVal * 100) / 100;
    } else if (
      window.selectedperiod === "today" &&
      window.selectedUsage === "all"
    ) {
      var yDayArr_0 = [
        1.1, 1.1, 0.9, 0.9, 0.7, 0.7, 0.7, 0.5, 1, 0.8, 0.7, 0.8, 0.4, 0.4, 0.4,
        0.5, 0.7, 1, 1, 0.6, 1, 0.7, 0.7, 0.7,
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
      dataSource = buildDataYesterday("All");
      document.getElementById("stats").innerHTML =
        "€" + Math.round(tecVal * 100) / 100;
      document.getElementById("elecvalue").innerHTML =
        "€" + Math.round(eVal * 100) / 100;
      document.getElementById("gasvalue").innerHTML =
        "€" + Math.round(gVal * 100) / 100;
    } else if (
      window.selectedperiod === "today" &&
      window.selectedUsage === "living room"
    ) {
      var yDayArr_2 = [
        0.2, 0.2, 0, 0, 0, 0, 0, 0, 0.5, 0.3, 0.3, 0.4, 0, 0, 0, 0, 0.3, 0.3,
        0.3, 0.1, 0.2, 0, 0, 0,
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
      dataSource = buildDataYesterday("Living Room");
      document.getElementById("stats").innerHTML =
        "€" + Math.round(tecVal * 100) / 100;
      document.getElementById("elecvalue").innerHTML =
        "€" + Math.round(eVal * 100) / 100;
      document.getElementById("gasvalue").innerHTML =
        "€" + Math.round(gVal * 100) / 100;
    } else if (
      window.selectedperiod === "today" &&
      window.selectedUsage === "master bedroom"
    ) {
      var yDayArr_3 = [
        0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2,
        0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2,
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
      dataSource = buildDataYesterday("Master Bedroom");
      document.getElementById("stats").innerHTML =
        "€" + Math.round(tecVal * 100) / 100;
      document.getElementById("elecvalue").innerHTML =
        "€" + Math.round(eVal * 100) / 100;
      document.getElementById("gasvalue").innerHTML =
        "€" + Math.round(gVal * 100) / 100;
    } else if (
      window.selectedperiod === "today" &&
      window.selectedUsage === "bathroom"
    ) {
      var yDayArr_5 = [
        0.2, 0.2, 0.2, 0.2, 0, 0, 0, 0, 0, 0, 0.1, 0.1, 0, 0, 0, 0, 0, 0.1, 0.1,
        0.1, 0.1, 0, 0, 0,
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
      dataSource = buildDataYesterday("Bathroom");
      document.getElementById("stats").innerHTML =
        "€" + Math.round(tecVal * 100) / 100;
      document.getElementById("elecvalue").innerHTML =
        "€" + Math.round(eVal * 100) / 100;
      document.getElementById("gasvalue").innerHTML =
        "€" + Math.round(gVal * 100) / 100;
    } else if (
      window.selectedperiod === "month" &&
      window.selectedUsage === "guest bedroom"
    ) {
      var lMonthDataArr_4 = [
        5.3, 5.1, 5, 5, 5.2, 5.1, 5.3, 5.1, 5, 5.2, 5, 5.3, 5, 5, 5.2, 5.1, 5.3,
        5.1, 5.2, 5, 5.3, 5, 5.2, 5.3, 5, 5.2, 5, 5.1, 5.2, 5.3, 5.3,
      ];

      var dataArr = eval("lMonthDataArr_" + 4);

      var tecVal = 0;

      for (var i = 0; i < moment().daysInMonth(); i++) {
        tecVal = tecVal + dataArr[i];
      }

      var eVal = 0;

      var gVal = 0;

      for (var i = 0; i < moment().subtract(1, "month").daysInMonth(); i++) {
        eVal = eVal + 0.6 * dataArr[i];
        gVal = gVal + 0.4 * dataArr[i];
      }
      dataSource = buildDataLastMonth("Guest Bedroom");
      document.getElementById("stats").innerHTML =
        "€" + Math.round(tecVal * 100) / 100;
      document.getElementById("elecvalue").innerHTML =
        "€" + Math.round(eVal * 100) / 100;
      document.getElementById("gasvalue").innerHTML =
        "€" + Math.round(gVal * 100) / 100;
    } else if (
      window.selectedperiod === "month" &&
      window.selectedUsage === "kitchen"
    ) {
      var lMonthDataArr_1 = [
        2, 2, 2.3, 2.3, 2.3, 2.1, 2.2, 2, 2.1, 2.3, 2.3, 2.1, 2, 2.4, 2, 2, 2,
        2.2, 2.3, 2.3, 2, 2.3, 2.2, 2.3, 2, 2.2, 2.3, 2.3, 2, 2.3, 2.3,
      ];

      var dataArr = eval("lMonthDataArr_" + 1);

      var tecVal = 0;

      for (var i = 0; i < moment().daysInMonth(); i++) {
        tecVal = tecVal + dataArr[i];
      }

      var eVal = 0;

      var gVal = 0;

      for (var i = 0; i < moment().subtract(1, "month").daysInMonth(); i++) {
        eVal = eVal + 0.6 * dataArr[i];
        gVal = gVal + 0.4 * dataArr[i];
      }
      dataSource = buildDataLastMonth("Kitchen");
      document.getElementById("stats").innerHTML =
        "€" + Math.round(tecVal * 100) / 100;
      document.getElementById("elecvalue").innerHTML =
        "€" + Math.round(eVal * 100) / 100;
      document.getElementById("gasvalue").innerHTML =
        "€" + Math.round(gVal * 100) / 100;
    } else if (
      window.selectedperiod === "month" &&
      window.selectedUsage === "all"
    ) {
      var lMonthDataArr_0 = [
        15.8, 14.5, 15.7, 15.4, 15.1, 15.3, 15.6, 14.7, 14.7, 15.3, 15, 15.6,
        15.3, 15.1, 15.3, 15.6, 15, 15.2, 16, 14.7, 15.6, 15, 15.7, 15.1, 15.3,
        15.6, 15.1, 15.5, 15.2, 15.9, 16.1,
      ];

      var dataArr = eval("lMonthDataArr_" + 0);

      var tecVal = 0;

      for (var i = 0; i < moment().daysInMonth(); i++) {
        tecVal = tecVal + dataArr[i];
      }

      var eVal = 0;

      var gVal = 0;

      for (var i = 0; i < moment().subtract(1, "month").daysInMonth(); i++) {
        eVal = eVal + 0.6 * dataArr[i];
        gVal = gVal + 0.4 * dataArr[i];
      }
      dataSource = buildDataLastMonth("All");
      document.getElementById("stats").innerHTML =
        "€" + Math.round(tecVal * 100) / 100;
      document.getElementById("elecvalue").innerHTML =
        "€" + Math.round(eVal * 100) / 100;
      document.getElementById("gasvalue").innerHTML =
        "€" + Math.round(gVal * 100) / 100;
    } else if (
      window.selectedperiod === "month" &&
      window.selectedUsage === "living room"
    ) {
      var lMonthDataArr_2 = [
        2.7, 2.3, 2.5, 2.3, 2.3, 2.6, 2.5, 2.5, 2.7, 2.7, 2.6, 2.5, 2.7, 2.4,
        2.7, 2.7, 2.3, 2.3, 2.7, 2.3, 2.7, 2.3, 2.7, 2.3, 2.7, 2.5, 2.2, 2.7,
        2.7, 2.7, 2.7,
      ];

      var dataArr = eval("lMonthDataArr_" + 2);

      var tecVal = 0;

      for (var i = 0; i < moment().daysInMonth(); i++) {
        tecVal = tecVal + dataArr[i];
      }

      var eVal = 0;

      var gVal = 0;

      for (var i = 0; i < moment().subtract(1, "month").daysInMonth(); i++) {
        eVal = eVal + 0.6 * dataArr[i];
        gVal = gVal + 0.4 * dataArr[i];
      }
      dataSource = buildDataLastMonth("Living Room");
      document.getElementById("stats").innerHTML =
        "€" + Math.round(tecVal * 100) / 100;
      document.getElementById("elecvalue").innerHTML =
        "€" + Math.round(eVal * 100) / 100;
      document.getElementById("gasvalue").innerHTML =
        "€" + Math.round(gVal * 100) / 100;
    } else if (
      window.selectedperiod === "month" &&
      window.selectedUsage === "master bedroom"
    ) {
      var lMonthDataArr_3 = [
        4.8, 4.3, 4.6, 4.8, 4.3, 4.7, 4.8, 4.3, 4.6, 4.3, 4.3, 4.8, 4.8, 4.3,
        4.6, 4.8, 4.6, 4.8, 4.8, 4.3, 4.8, 4.5, 4.8, 4.3, 4.6, 4.8, 4.8, 4.6,
        4.3, 4.8, 4.8,
      ];

      var dataArr = eval("lMonthDataArr_" + 3);

      var tecVal = 0;

      for (var i = 0; i < moment().daysInMonth(); i++) {
        tecVal = tecVal + dataArr[i];
      }

      var eVal = 0;

      var gVal = 0;

      for (var i = 0; i < moment().subtract(1, "month").daysInMonth(); i++) {
        eVal = eVal + 0.6 * dataArr[i];
        gVal = gVal + 0.4 * dataArr[i];
      }
      dataSource = buildDataLastMonth("Master Bedroom");
      document.getElementById("stats").innerHTML =
        "€" + Math.round(tecVal * 100) / 100;
      document.getElementById("elecvalue").innerHTML =
        "€" + Math.round(eVal * 100) / 100;
      document.getElementById("gasvalue").innerHTML =
        "€" + Math.round(gVal * 100) / 100;
    } else if (
      window.selectedperiod === "month" &&
      window.selectedUsage === "bathroom"
    ) {
      var lMonthDataArr_5 = [
        1, 0.8, 1, 1, 1, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.9, 0.8, 1, 0.8, 1, 0.8,
        0.8, 1, 0.8, 0.8, 0.8, 0.8, 0.8, 1, 0.9, 0.8, 0.8, 1, 0.8, 1,
      ];

      var dataArr = eval("lMonthDataArr_" + 5);

      var tecVal = 0;

      for (var i = 0; i < moment().daysInMonth(); i++) {
        tecVal = tecVal + dataArr[i];
      }

      var eVal = 0;

      var gVal = 0;

      for (var i = 0; i < moment().subtract(1, "month").daysInMonth(); i++) {
        eVal = eVal + 0.6 * dataArr[i];
        gVal = gVal + 0.4 * dataArr[i];
      }
      dataSource = buildDataLastMonth("Bathroom");
      document.getElementById("stats").innerHTML =
        "€" + Math.round(tecVal * 100) / 100;
      document.getElementById("elecvalue").innerHTML =
        "€" + Math.round(eVal * 100) / 100;
      document.getElementById("gasvalue").innerHTML =
        "€" + Math.round(gVal * 100) / 100;
    } else if (
      window.selectedperiod === "year" &&
      window.selectedUsage === "guest bedroom"
    ) {
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
      dataSource = buildDataLastYear("Guest Bedroom");
      document.getElementById("stats").innerHTML =
        "€" + Math.round(tecVal * 100) / 100;
      document.getElementById("elecvalue").innerHTML =
        "€" + Math.round(eVal * 100) / 100;
      document.getElementById("gasvalue").innerHTML =
        "€" + Math.round(gVal * 100) / 100;
    } else if (
      window.selectedperiod === "year" &&
      window.selectedUsage === "kitchen"
    ) {
      var pYearDataArr_1 = [
        58.9, 62.2, 66.2, 58.9, 62.2, 65.9, 67.3, 58.9, 58.9, 58.9, 62.2, 58.9,
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
      dataSource = buildDataLastYear("Kitchen");
      document.getElementById("stats").innerHTML =
        "€" + Math.round(tecVal * 100) / 100;
      document.getElementById("elecvalue").innerHTML =
        "€" + Math.round(eVal * 100) / 100;
      document.getElementById("gasvalue").innerHTML =
        "€" + Math.round(gVal * 100) / 100;
    } else if (
      window.selectedperiod === "year" &&
      window.selectedUsage === "all"
    ) {
      var pYearDataArr_0 = [
        438.8, 435.7, 447, 442.6, 436.6, 451.9, 447.3, 427.4, 440.1, 437.8,
        434.4, 435.4,
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
      dataSource = buildDataLastYear("All");
      document.getElementById("stats").innerHTML =
        "€" + Math.round(tecVal * 100) / 100;
      document.getElementById("elecvalue").innerHTML =
        "€" + Math.round(eVal * 100) / 100;
      document.getElementById("gasvalue").innerHTML =
        "€" + Math.round(gVal * 100) / 100;
    } else if (
      window.selectedperiod === "year" &&
      window.selectedUsage === "living room"
    ) {
      var pYearDataArr_2 = [
        69.1, 66.4, 76.2, 69.1, 71.3, 73.9, 66.4, 66.4, 69.1, 71.3, 69.1, 66.4,
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
      dataSource = buildDataLastYear("Living Room");
      document.getElementById("stats").innerHTML =
        "€" + Math.round(tecVal * 100) / 100;
      document.getElementById("elecvalue").innerHTML =
        "€" + Math.round(eVal * 100) / 100;
      document.getElementById("gasvalue").innerHTML =
        "€" + Math.round(gVal * 100) / 100;
    } else if (
      window.selectedperiod === "year" &&
      window.selectedUsage === "master bedroom"
    ) {
      var pYearDataArr_3 = [
        131.6, 129.1, 131.6, 131.6, 129.1, 134.1, 137.6, 129.1, 134.1, 131.6,
        129.1, 129.1,
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
      dataSource = buildDataLastYear("Master Bedroom");
      document.getElementById("stats").innerHTML =
        "€" + Math.round(tecVal * 100) / 100;
      document.getElementById("elecvalue").innerHTML =
        "€" + Math.round(eVal * 100) / 100;
      document.getElementById("gasvalue").innerHTML =
        "€" + Math.round(gVal * 100) / 100;
    } else if (
      window.selectedperiod === "year" &&
      window.selectedUsage === "bathroom"
    ) {
      var pYearDataArr_5 = [22, 23, 22, 25, 23, 23, 25, 22, 23, 25, 23, 26];

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
      dataSource = buildDataLastYear("Bathroom");
      document.getElementById("stats").innerHTML =
        "€" + Math.round(tecVal * 100) / 100;
      document.getElementById("elecvalue").innerHTML =
        "€" + Math.round(eVal * 100) / 100;
      document.getElementById("gasvalue").innerHTML =
        "€" + Math.round(gVal * 100) / 100;
    }

    var chartconfig = { ...this.props.appliancechart };
    chartconfig.dataSource = dataSource;

    var chartconfig2 = { ...this.props.appliancechart1 };
    chartconfig2.dataSource = dataSource;

    const chart = <ReactFC {...chartconfig} />;

    const chart1 = <ReactFC {...chartconfig2} />;

    ReactDOM.unmountComponentAtNode(
      document.getElementById("app-chart-container")
    );

    ReactDOM.unmountComponentAtNode(
      document.getElementById("app-chart-container1")
    );

    ReactDOM.render(chart, document.getElementById("app-chart-container"));

    ReactDOM.render(chart1, document.getElementById("app-chart-container1"));
  }

  onChange(e) {
    window.selectedUsage = e.currentTarget.value.toString().toLowerCase();

    document.getElementById("a1").click();
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row pl-5 pr-5 pt-5 pb-0 mb-4 time-control">
            <div
              className="col-xs-6 mr-4 ml-4 pl-1 pr-1"
              id="a1"
              onClick={this.onClickbutton1}
            >
              THIS MONTH
            </div>

            <div
              className="col-xs-6 mr-4 ml-4 pl-1 pr-1"
              id="a2"
              onClick={this.onClickbutton2}
            >
              LAST MONTH
            </div>
          </div>
          <div className="row pl-5 pr-5 pt-0 pb-0">
            <div className="col-xl-4 offset-xl-4 col-lg-6 mb-3 text-center">
              <label className="label-info">Usage By: &nbsp;</label>
              <select id="appliance-select" onChange={this.onChange}>
                <option>All</option>
                <option>Kitchen</option>
                <option>Living Room</option>
                <option>Master Bedroom</option>
                <option>Guest Bedroom</option>
                <option>Bathroom</option>
                <option>Other</option>
              </select>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div id="usage-power-info" className="card-block">
                <div>
                  <p id="stats" className="t-head">
                    21 kwh
                  </p>
                </div>
                <div>
                  <p className="t-title">
                    Day
                    <span id="elecvalue" className="t-content">
                      12 kWh
                    </span>
                  </p>
                  <p className="t-title">
                    Night
                    <span id="gasvalue" className="t-content">
                      5 kWh
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div id="app-chart-container" className="pt-3 pb-3 pr-5 pl-5" />
        <div id="app-chart-container1" className="pt-3 pb-3 pr-5 pl-5" />
      </div>
    );
  }
}

export default AppliancesComponent;
