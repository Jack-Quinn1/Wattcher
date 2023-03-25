import ReactFC from "react-fusioncharts";
import ReactDOM from "react-dom";
import moment from "moment";
import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import {
  cost_last_month,
  cost_this_month,
  cost_this_day,
  cost_last_day,
  cost_last_year,
  cost_this_year,
  yesterdayElecSplit,
} from "../consumption/consumption_data1";
import CostTableComponent from "./consumption_table_component";
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
import chartConfigs3, {
  third_chart_today,
  third_chart_month,
  third_chart_year,
} from "../chart-configs/home_third_chart";
import chartConfigs12, {
  cost_last_month1,
  cost_this_month1,
  cost_this_day1,
  cost_last_day1,
  cost_last_year1,
  cost_this_year1,
} from "../consumption/consumption_data2";

class CostComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      locations: [],
    };

    this.populateProfile = this.populateProfile.bind(this);
    this.onClickbutton1 = this.onClickbutton1.bind(this);
    this.onClickbutton2 = this.onClickbutton2.bind(this);
  }

  componentDidMount() {
    document.getElementById("c1").click();
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt_decode(token);
      this.populateProfile(user);
    }
  }

  async populateProfile(user, event) {
    //event.preventDefault();
    const req = await fetch("http://localhost:3001/api/data", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });
    const data = await req.json();
    if (data.status === "ok") {
      this.setState({
        locations: data.locations,
      });
    } else {
      alert(data.error);
    }
    console.log(data);
  }

  async onClickbutton1() {
    const user = jwt_decode(localStorage.getItem("token"));
    await this.populateProfile(user);
    const loc = this.state.locations;

    window.b2selected = false;

    document.getElementById("c2").style.borderBottom = "none";
    document.getElementById("c2").style.color = "#FDFDFD";
    document.getElementById("c2").style.opacity = "0.5";
    document.getElementById("c1").style.color = "#FDFDFD";
    document.getElementById("c1").style.opacity = "1";
    document.getElementById("c1").style.borderBottom = "solid 2px #FDFDFD";
    document.getElementById("c1").style.textTransform = "uppercase";
    document.getElementById("c2").style.textTransform = "uppercase";

    var dataSource;
    const yesData = [];
    const lastMonth = [];
    const lastYear = [];
    const soFarToday = [];
    const soFarMonth = [];
    const soFarYear = [];
    const predictedToday = [];
    const predictedMonth = [];
    const predictedYear = [];
    const dayArray = [];
    const nightArray = [];
    const monthDayArray = [];
    const monthNightArray = [];
    const yearDayArray = [];
    const yearNightArray = [];
    const currentDate = new Date(Date.now()).toISOString();
    const yesterday = new Date();
    const lastMonthDate = new Date();
    const lasyYearDate = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const lastMonthDate1 = new Date(
      lastMonthDate.getFullYear(),
      lastMonthDate.getMonth() - 1,
      lastMonthDate.getDate(),
      lastMonthDate.getHours(),
      lastMonthDate.getMinutes(),
      lastMonthDate.getSeconds(),
      lastMonthDate.getMilliseconds()
    );
    const lastYearDate1 = new Date(
      lastMonthDate.getFullYear() - 1,
      lastMonthDate.getMonth(),
      lastMonthDate.getDate(),
      lastMonthDate.getHours(),
      lastMonthDate.getMinutes(),
      lastMonthDate.getSeconds(),
      lastMonthDate.getMilliseconds()
    );
    const yesterdayDate = yesterday.toISOString();
    const lastMonthDate2 = lastMonthDate1.toISOString();
    const lastYearDate2 = lastYearDate1.toISOString();
    for (var i = 0; i < loc.length; i++) {
      for (var j = 0; j < loc[i].sensors.length; j++) {
        for (var k = 0; k < loc[i].sensors[j].data.length; k++) {
          if (
            yesterdayDate.slice(0, 10) ===
            loc[i].sensors[j].data[k].timestamp.slice(0, 10)
          )
            yesData.push(loc[i].sensors[j].data[k].value);
          if (
            lastMonthDate2.slice(0, 7) ===
            loc[i].sensors[j].data[k].timestamp.slice(0, 7)
          )
            lastMonth.push(loc[i].sensors[j].data[k].value);
          if (
            lastYearDate2.slice(0, 4) ===
            loc[i].sensors[j].data[k].timestamp.slice(0, 4)
          )
            lastYear.push(loc[i].sensors[j].data[k].value);
        }
      }
    }
    let yesterdayConSum = 0;
    let lastMonthConSum = 0;
    let lastYearConSum = 0;
    for (let i = 0; i < yesData.length; i++) {
      yesterdayConSum += yesData[i];
    }
    yesterdayConSum = yesterdayConSum.toFixed(2);
    for (let i = 0; i < lastMonth.length; i++) {
      lastMonthConSum += lastMonth[i];
    }
    lastMonthConSum = lastMonthConSum.toFixed(2);
    for (let i = 0; i < lastYear.length; i++) {
      lastYearConSum += lastYear[i];
    }
    lastYearConSum = lastYearConSum.toFixed(2);

    for (var i = 0; i < loc.length; i++) {
      for (var j = 0; j < loc[i].sensors.length; j++) {
        for (var k = 0; k < loc[i].sensors[j].data.length; k++) {
          if (
            currentDate.slice(0, 10) ===
              loc[i].sensors[j].data[k].timestamp.slice(0, 10) &&
            currentDate.slice(11, 13) >
              loc[i].sensors[j].data[k].timestamp.slice(11, 13)
          )
            soFarToday.push(loc[i].sensors[j].data[k].value);
          if (
            currentDate.slice(0, 7) ===
              loc[i].sensors[j].data[k].timestamp.slice(0, 7) &&
            currentDate.slice(9, 10) >
              loc[i].sensors[j].data[k].timestamp.slice(9, 10)
          )
            soFarMonth.push(loc[i].sensors[j].data[k].value);
          if (
            currentDate.slice(0, 4) ===
              loc[i].sensors[j].data[k].timestamp.slice(0, 4) &&
            currentDate.slice(6, 7) >
              loc[i].sensors[j].data[k].timestamp.slice(6, 7)
          )
            soFarYear.push(loc[i].sensors[j].data[k].value);
        }
      }
    }

    let soFarTodaySum = 0;
    let soFarMonthSum = 0;
    let soFarYearSum = 0;
    for (let i = 0; i < soFarToday.length; i++) {
      soFarTodaySum += soFarToday[i];
    }
    soFarTodaySum = soFarTodaySum.toFixed(2);
    for (let i = 0; i < soFarMonth.length; i++) {
      soFarMonthSum += soFarMonth[i];
    }
    soFarMonthSum = soFarMonthSum.toFixed(2);
    for (let i = 0; i < soFarYear.length; i++) {
      soFarYearSum += soFarYear[i];
    }
    soFarYearSum = soFarYearSum.toFixed(2);

    const dayNames = [0, 1, 2, 3, 4, 5, 6];
    const monthNames = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const samp = new Date(Date.now());
    const samp1 = samp.getDay();
    const samp2 = samp.getMonth();
    const samp3 = samp.getFullYear();
    const numOfSensors = [];
    for (var i = 0; i < loc.length; i++) {
      numOfSensors.push(loc[i].sensors);
    }

    for (var i = 0; i < loc.length; i++) {
      for (var j = 0; j < loc[i].sensors.length; j++) {
        for (var k = 0; k < loc[i].sensors[j].data.length; k++) {
          if (
            dayNames[samp1] ===
            dayNames[
              new Date(
                new Date(loc[i].sensors[j].data[k].timestamp).getTime()
              ).getDay()
            ]
          )
            predictedToday.push(loc[i].sensors[j].data[k].value);
          if (
            monthNames[samp2] ===
            monthNames[
              new Date(
                new Date(loc[i].sensors[j].data[k].timestamp).getTime()
              ).getMonth()
            ]
          )
            predictedMonth.push(loc[i].sensors[j].data[k].value);
          if (
            samp3 !==
            new Date(loc[i].sensors[j].data[k].timestamp).getFullYear()
          ) {
            predictedYear.push(loc[i].sensors[j].data[k].value);
          }
        }
      }
    }

    let predictedTodaySum = 0;
    let predictedMonthSum = 0;
    let predictedYearSum = 0;
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const daysInMonth = new Date(year, month, 0).getDate();
    for (let i = 0; i < predictedToday.length; i++) {
      predictedTodaySum += predictedToday[i];
    }
    predictedTodaySum = (
      (predictedTodaySum / predictedToday.length) *
      24 *
      numOfSensors.length
    ).toFixed(2);
    for (let i = 0; i < predictedMonth.length; i++) {
      predictedMonthSum += predictedMonth[i];
    }
    predictedMonthSum = (
      (predictedMonthSum / predictedMonth.length) *
      daysInMonth *
      24 *
      numOfSensors.length
    ).toFixed(2);
    for (let i = 0; i < predictedYear.length; i++) {
      predictedYearSum += predictedYear[i];
    }
    predictedYearSum = (
      (predictedYearSum / predictedYear.length) *
      365 *
      24 *
      numOfSensors.length
    ).toFixed(2);
    //const filterYesDate = loc;

    if (window.selectedperiod === "today") {
      dataSource = cost_this_day;
      document.getElementById("co-tablecell-title1").innerHTML = moment()
        .subtract(1, "day")
        .format("MMM Do YYYY");
      document.getElementById("co-tablecell-value1").innerHTML =
        yesterdayConSum + "kWh";

      var sftVal = 0;

      for (var i = 0; i < parseInt(moment().format("H")); i++) {
        sftVal =
          sftVal + parseFloat(todayDateCon[i]) + parseFloat(todayNightCon[i]);
      }
      sftVal = Math.round(sftVal * 100) / 100;

      document.getElementById("co-tablecell-title2").innerHTML = "So Far Today";
      document.getElementById("co-tablecell-value2").innerHTML =
        soFarTodaySum + "kWh";

      document.getElementById("co-tablecell-title3").innerHTML =
        "Predicted Today";
      document.getElementById("co-tablecell-value3").innerHTML =
        predictedTodaySum + "kWh";

      document.getElementById("co-tablecell-title4").style.display = "block";
      document.getElementById("co-tablecell-value4").style.display = "block";

      document.getElementById("co-tablecell-title4").innerHTML =
        "Estimated Savings";
      document.getElementById("co-tablecell-value4").innerHTML =
        Math.round((yesterdayConSum - predictedTodaySum) * 100) / 100 + "kWh";
    } else if (window.selectedperiod === "month") {
      dataSource = cost_this_month;

      document.getElementById("co-tablecell-title1").innerHTML = moment()
        .subtract(1, "month")
        .format("MMMM");
      document.getElementById("co-tablecell-value1").innerHTML =
        lastMonthConSum + "kWh";

      var sfmVal = 0;

      for (var i = 0; i < parseInt(moment().format("D")); i++) {
        sfmVal = sfmVal + parseFloat(mElecSplit[i]) + parseFloat(mGasSplit[i]);
      }
      sfmVal = Math.round(sfmVal * 100) / 100;

      document.getElementById("co-tablecell-title2").innerHTML =
        "So Far This Month";
      document.getElementById("co-tablecell-value2").innerHTML =
        soFarMonthSum + "kWh";

      document.getElementById("co-tablecell-title3").innerHTML =
        "Predicted This Month";
      document.getElementById("co-tablecell-value3").innerHTML =
        predictedMonthSum + "kWh";

      document.getElementById("co-tablecell-title4").style.display = "block";
      document.getElementById("co-tablecell-value4").style.display = "block";

      document.getElementById("co-tablecell-title4").innerHTML =
        "Estimated savings";
      document.getElementById("co-tablecell-value4").innerHTML =
        Math.round((lastMonthConSum - predictedMonthSum) * 100) / 100 + "kWh";
    } else {
      dataSource = cost_this_year;

      document.getElementById("co-tablecell-title1").innerHTML = moment()
        .subtract(1, "year")
        .format("YYYY");
      document.getElementById("co-tablecell-value1").innerHTML =
        lastYearConSum + "kWh";

      var styVal = 0;

      for (var i = 0; i < parseInt(moment().format("M")); i++) {
        styVal = styVal + parseFloat(yElecSplit[i]) + parseFloat(yGasSplit[i]);
      }
      styVal = Math.round(styVal * 100) / 100;

      document.getElementById("co-tablecell-title2").innerHTML =
        "So Far This Year";
      document.getElementById("co-tablecell-value2").innerHTML =
        soFarYearSum + "kWh";

      document.getElementById("co-tablecell-title3").innerHTML =
        "Predicted This Year";
      document.getElementById("co-tablecell-value3").innerHTML =
        predictedYearSum + "kWh";

      document.getElementById("co-tablecell-title4").style.display = "block";
      document.getElementById("co-tablecell-value4").style.display = "block";

      document.getElementById("co-tablecell-title4").innerHTML =
        "Estimated Savings";
      document.getElementById("co-tablecell-value4").innerHTML =
        Math.round((lastYearConSum - predictedYearSum) * 100) / 100 + "kWh";
    }

    for (var i = 0; i < dataSource.dataset.length; i++) {
      dataSource.dataset[i].data.length = 0;
    }

    const currentDate1 = new Date().toISOString().slice(0, 10);
    const currentDate2 = new Date().toISOString().slice(0, 7);
    const currentDate3 = new Date().toISOString().slice(0, 4);

    for (var i = 0; i < loc.length; i++) {
      for (var j = 0; j < loc[i].sensors.length; j++) {
        for (var k = 0; k < loc[i].sensors[j].data.length; k++) {
          if (
            currentDate.slice(0, 10) ===
              loc[i].sensors[j].data[k].timestamp.slice(0, 10) &&
            new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() > 5 &&
            new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() < 23
          )
            dayArray.push(loc[i].sensors[j].data[k]);
          if (
            new Date(loc[i].sensors[j].data[k].timestamp)
              .toISOString()
              .slice(0, 10) === currentDate1
          )
            if (
              new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() <=
                5 ||
              new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() >= 23
            )
              nightArray.push(loc[i].sensors[j].data[k]);
          if (
            currentDate.slice(0, 7) ===
              loc[i].sensors[j].data[k].timestamp.slice(0, 7) &&
            new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() > 5 &&
            new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() < 23
          )
            monthDayArray.push(loc[i].sensors[j].data[k]);
          if (
            new Date(loc[i].sensors[j].data[k].timestamp)
              .toISOString()
              .slice(0, 7) === currentDate2
          )
            if (
              new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() <=
                5 ||
              new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() >= 23
            )
              monthNightArray.push(loc[i].sensors[j].data[k]);
          if (
            currentDate.slice(0, 4) ===
              loc[i].sensors[j].data[k].timestamp.slice(0, 4) &&
            new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() > 5 &&
            new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() < 23
          )
            yearDayArray.push(loc[i].sensors[j].data[k]);
          if (
            new Date(loc[i].sensors[j].data[k].timestamp)
              .toISOString()
              .slice(0, 4) === currentDate3
          )
            if (
              new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() <=
                5 ||
              new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() >= 23
            )
              yearNightArray.push(loc[i].sensors[j].data[k]);
        }
      }
    }

    const sumsByTimestamp = {};
    for (let i = 0; i < dayArray.length; i++) {
      const { timestamp, value } = dayArray[i];
      if (sumsByTimestamp[timestamp]) {
        sumsByTimestamp[timestamp] += value;
      } else {
        sumsByTimestamp[timestamp] = value;
      }
    }

    const sumsByDay = monthDayArray.reduce((acc, curr) => {
      const currDay = new Date(curr.timestamp).getDate();
      if (!acc[currDay]) {
        acc[currDay] = { day: currDay, value: curr.value };
      } else {
        acc[currDay].value += curr.value;
      }
      return acc;
    }, {});
    const sumsByDayArray = Object.values(sumsByDay);

    const sumsByMonth = {};
    const currentDate10 = new Date();
    for (let i = 0; i < yearDayArray.length; i++) {
      const date = new Date(yearDayArray[i].timestamp);
      if (
        date.getMonth() < currentDate10.getMonth() &&
        date.getFullYear() <= currentDate10.getFullYear()
      ) {
        const monthKey =
          date.toLocaleString("default", { month: "short" }) +
          " " +
          date.getFullYear();
        if (!sumsByMonth[monthKey]) {
          sumsByMonth[monthKey] = 0;
        }
        sumsByMonth[monthKey] += yearDayArray[i].value;
      }
    }
    const sumsByMonthArray = Object.values(sumsByMonth);

    const sumsByTimestamp1 = {};
    for (let i = 0; i < nightArray.length; i++) {
      const { timestamp, value } = nightArray[i];
      if (sumsByTimestamp1[timestamp]) {
        sumsByTimestamp1[timestamp] += value;
      } else {
        sumsByTimestamp1[timestamp] = value;
      }
    }

    const sumsByDay1 = monthNightArray.reduce((acc, curr) => {
      const currDay = new Date(curr.timestamp).getDate();
      if (!acc[currDay]) {
        acc[currDay] = { day: currDay, value: curr.value };
      } else {
        acc[currDay].value += curr.value;
      }
      return acc;
    }, {});
    const sumsByDayArray1 = Object.values(sumsByDay1);

    const sumsByMonth1 = {};
    const currentDate11 = new Date();
    for (let i = 0; i < yearNightArray.length; i++) {
      const date = new Date(yearNightArray[i].timestamp);
      if (
        date.getMonth() < currentDate11.getMonth() &&
        date.getFullYear() <= currentDate11.getFullYear()
      ) {
        const monthKey =
          date.toLocaleString("default", { month: "short" }) +
          " " +
          date.getFullYear();
        if (!sumsByMonth1[monthKey]) {
          sumsByMonth1[monthKey] = 0;
        }
        sumsByMonth1[monthKey] += yearNightArray[i].value;
      }
    }
    const sumsByMonthArray1 = Object.values(sumsByMonth1);

    const res = Object.entries(sumsByTimestamp).map(([timestamp, value]) => ({
      timestamp,
      value,
    }));
    const res1 = Object.entries(sumsByTimestamp1).map(([timestamp, value]) => ({
      timestamp,
      value,
    }));
    dayArray.length = [];
    nightArray.length = [];
    monthDayArray.length = [];
    monthNightArray.length = [];
    yearDayArray.length = [];
    yearNightArray.length = [];
    for (var i = 0; i < res.length; i++) {
      dayArray.push(res[i].value.toFixed(2));
    }
    for (var i = 0; i < sumsByDayArray.length; i++) {
      monthDayArray.push(sumsByDayArray[i].value.toFixed(2));
    }
    for (var i = 0; i < sumsByMonthArray.length; i++) {
      yearDayArray.push(sumsByMonthArray[i].toFixed(2));
    }
    for (var i = 0; i < res1.length; i++) {
      nightArray.push(res1[i].value.toFixed(2));
    }
    for (var i = 0; i < sumsByDayArray1.length; i++) {
      monthNightArray.push(sumsByDayArray1[i].value.toFixed(2));
    }
    for (var i = 0; i < sumsByMonthArray1.length; i++) {
      yearNightArray.push(sumsByMonthArray1[i].toFixed(2));
    }
    const numZeroesAtStart = 6;
    const numZeroesAtEnd = 1;
    const numZeroes = 17; // Number of zeroes to insert
    const index = 6;
    for (let i = 0; i < numZeroesAtStart; i++) {
      dayArray.unshift(0);
    }

    nightArray.splice(index, 0, ...Array(numZeroes).fill(0));

    // Add zeroes at the end of the array
    for (let i = 0; i < numZeroesAtEnd; i++) {
      dayArray.push(0);
    }

    const dayArrObjects = dayArray.map((value) => {
      return { value };
    });
    const monthArrObjects = monthDayArray.map((value) => {
      return { value };
    });
    const yearArrObjects = yearDayArray.map((value) => {
      return { value };
    });
    const nightArrObjects = nightArray.map((value) => {
      return { value };
    });
    const monthArrObjects1 = monthNightArray.map((value) => {
      return { value };
    });
    const yearArrObjects1 = yearNightArray.map((value) => {
      return { value };
    });

    if (dataSource.categories[0].category.length === 24) {
      dataSource.dataset[0].data = dayArrObjects;
      dataSource.dataset[1].data = nightArrObjects;
    }
    if (
      dataSource.categories[0].category.length > 27 &&
      dataSource.categories[0].category.length < 32
    ) {
      dataSource.dataset[0].data = monthArrObjects;
      dataSource.dataset[1].data = monthArrObjects1;
    }
    if (dataSource.categories[0].category.length === 12) {
      dataSource.dataset[0].data = yearArrObjects;
      dataSource.dataset[1].data = yearArrObjects1;
    }

    var chartconfig = { ...this.props.costchart };
    chartconfig.dataSource = dataSource;

    var chartconfig2 = { ...this.props.costchart1 };
    chartconfig2.dataSource = dataSource;

    const chart = <ReactFC {...chartconfig} />;

    const chart1 = <ReactFC {...chartconfig2} />;

    ReactDOM.unmountComponentAtNode(
      document.getElementById("co-chart-container")
    );
    ReactDOM.unmountComponentAtNode(
      document.getElementById("co-chart-container1")
    );

    ReactDOM.render(chart, document.getElementById("co-chart-container"));

    ReactDOM.render(chart1, document.getElementById("co-chart-container1"));
  }
  async onClickbutton2() {
    const user = jwt_decode(localStorage.getItem("token"));
    await this.populateProfile(user);
    const loc = this.state.locations;

    const yesData = [];
    const yesData1 = [];
    const lastMonth = [];
    const lastMonth1 = [];
    const lastYear = [];
    const lastYear1 = [];
    const dayArray = [];
    const nightArray = [];
    const monthDayArray = [];
    const monthNightArray = [];
    const yearDayArray = [];
    const yearNightArray = [];
    const currentDate = new Date(Date.now()).toISOString();
    const yesterday = new Date();
    const yesterday1 = new Date();
    const lastMonthDate = new Date();
    const lastMonthDate3 = new Date();
    const lastYearDate = new Date();
    const lastYearDate3 = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    yesterday1.setDate(yesterday1.getDate() - 2);
    const lastMonthDate1 = new Date(
      lastMonthDate.getFullYear(),
      lastMonthDate.getMonth() - 1,
      lastMonthDate.getDate(),
      lastMonthDate.getHours(),
      lastMonthDate.getMinutes(),
      lastMonthDate.getSeconds(),
      lastMonthDate.getMilliseconds()
    );
    const lastYearDate1 = new Date(
      lastMonthDate.getFullYear() - 1,
      lastMonthDate.getMonth(),
      lastMonthDate.getDate(),
      lastMonthDate.getHours(),
      lastMonthDate.getMinutes(),
      lastMonthDate.getSeconds(),
      lastMonthDate.getMilliseconds()
    );
    const lastMonthDate4 = new Date(
      lastMonthDate3.getFullYear(),
      lastMonthDate3.getMonth() - 2,
      lastMonthDate3.getDate()
    );
    const lastYearDate4 = new Date(
      lastMonthDate3.getFullYear() - 2,
      lastMonthDate3.getMonth(),
      lastMonthDate3.getDate()
    );
    const yesterdayDate = yesterday.toISOString();
    const yesterdayDate1 = yesterday1.toISOString();
    const lastMonthDate2 = lastMonthDate1.toISOString();
    const lastMonthDate5 = lastMonthDate4.toISOString();
    const lastYearDate2 = lastYearDate1.toISOString();
    const lastYearDate5 = lastYearDate4.toISOString();
    for (var i = 0; i < loc.length; i++) {
      for (var j = 0; j < loc[i].sensors.length; j++) {
        for (var k = 0; k < loc[i].sensors[j].data.length; k++) {
          if (
            yesterdayDate.slice(0, 10) ===
            loc[i].sensors[j].data[k].timestamp.slice(0, 10)
          )
            yesData.push(loc[i].sensors[j].data[k].value);
          if (
            lastMonthDate2.slice(0, 7) ===
            loc[i].sensors[j].data[k].timestamp.slice(0, 7)
          )
            lastMonth.push(loc[i].sensors[j].data[k].value);
          if (
            lastYearDate2.slice(0, 4) ===
            loc[i].sensors[j].data[k].timestamp.slice(0, 4)
          )
            lastYear.push(loc[i].sensors[j].data[k].value);
        }
      }
    }
    let yesterdayConSum = 0;
    let lastMonthConSum = 0;
    let lastYearConSum = 0;
    for (let i = 0; i < yesData.length; i++) {
      yesterdayConSum += yesData[i];
    }
    yesterdayConSum = yesterdayConSum.toFixed(2);
    for (let i = 0; i < lastMonth.length; i++) {
      lastMonthConSum += lastMonth[i];
    }
    lastMonthConSum = lastMonthConSum.toFixed(2);
    for (let i = 0; i < lastYear.length; i++) {
      lastYearConSum += lastYear[i];
    }
    lastYearConSum = lastYearConSum.toFixed(2);

    for (var i = 0; i < loc.length; i++) {
      for (var j = 0; j < loc[i].sensors.length; j++) {
        for (var k = 0; k < loc[i].sensors[j].data.length; k++) {
          if (
            yesterdayDate1.slice(0, 10) ===
            loc[i].sensors[j].data[k].timestamp.slice(0, 10)
          )
            yesData1.push(loc[i].sensors[j].data[k].value);
          if (
            lastMonthDate5.slice(0, 7) ===
            loc[i].sensors[j].data[k].timestamp.slice(0, 7)
          )
            lastMonth1.push(loc[i].sensors[j].data[k].value);
          if (
            lastYearDate5.slice(0, 4) ===
            loc[i].sensors[j].data[k].timestamp.slice(0, 4)
          )
            lastYear1.push(loc[i].sensors[j].data[k].value);
        }
      }
    }
    let yesterdayConSum1 = 0;
    let lastMonthConSum1 = 0;
    let lastYearConSum1 = 0;
    for (let i = 0; i < yesData1.length; i++) {
      yesterdayConSum1 += yesData1[i];
    }
    yesterdayConSum1 = yesterdayConSum1.toFixed(2);
    for (let i = 0; i < lastMonth1.length; i++) {
      lastMonthConSum1 += lastMonth1[i];
    }
    lastMonthConSum1 = lastMonthConSum1.toFixed(2);
    for (let i = 0; i < lastYear1.length; i++) {
      lastYearConSum1 += lastYear1[i];
    }
    lastYearConSum1 = lastYearConSum1.toFixed(2);

    window.b2selected = true;

    document.getElementById("c1").style.borderBottom = "none";
    document.getElementById("c1").style.color = "#FDFDFD";
    document.getElementById("c1").style.opacity = "0.5";
    document.getElementById("c2").style.color = "#FDFDFD";
    document.getElementById("c2").style.opacity = "1";
    document.getElementById("c2").style.borderBottom = "solid 2px #FDFDFD";

    var dataSource;
    var dataSource1;

    if (window.selectedperiod === "today") {
      dataSource = cost_last_day;
      dataSource1 = cost_last_day1;

      document.getElementById("co-tablecell-title1").innerHTML = moment()
        .subtract(2, "day")
        .format("MMM Do YYYY");
      document.getElementById("co-tablecell-value1").innerHTML =
        yesterdayConSum1 + "kWh";

      document.getElementById("co-tablecell-title2").innerHTML = moment()
        .subtract(1, "day")
        .format("MMM Do YYYY");
      document.getElementById("co-tablecell-value2").innerHTML =
        yesterdayConSum + "kWh";

      document.getElementById("co-tablecell-title3").innerHTML = "Savings";
      document.getElementById("co-tablecell-value3").innerHTML =
        Math.round((yesterdayConSum1 - yesterdayConSum) * 100) / 100 + "kWh";

      document.getElementById("co-tablecell-title4").style.display = "none";
      document.getElementById("co-tablecell-value4").style.display = "none";
    } else if (window.selectedperiod === "month") {
      dataSource = cost_last_month;
      dataSource1 = cost_last_month1;

      document.getElementById("co-tablecell-title1").innerHTML = moment()
        .subtract(2, "month")
        .format("MMMM");
      document.getElementById("co-tablecell-value1").innerHTML =
        lastMonthConSum1 + "kWh";

      document.getElementById("co-tablecell-title2").innerHTML = moment()
        .subtract(1, "month")
        .format("MMMM");
      document.getElementById("co-tablecell-value2").innerHTML =
        lastMonthConSum + "kWh";

      var savings_value =
        Math.round((lastMonthConSum1 - lastMonthConSum) * 100) / 100;

      if (savings_value < 0) {
        savings_value = Math.abs(savings_value);
        console.log(savings_value);
        document.getElementById("co-tablecell-title3").innerHTML = "Savings";
        document.getElementById("co-tablecell-value3").innerHTML =
          "-" + savings_value + "kWh";
      } else {
        document.getElementById("co-tablecell-title3").innerHTML = "Savings";
        document.getElementById("co-tablecell-value3").innerHTML =
          savings_value + "kWh";
      }

      document.getElementById("co-tablecell-title4").style.display = "none";
      document.getElementById("co-tablecell-value4").style.display = "none";
    } else {
      dataSource = cost_last_year;
      dataSource1 = cost_last_year1;
      document.getElementById("co-tablecell-title1").innerHTML = moment()
        .subtract(2, "year")
        .format("YYYY");
      document.getElementById("co-tablecell-value1").innerHTML =
        lastYearConSum1 + "kWh";

      document.getElementById("co-tablecell-title2").innerHTML = moment()
        .subtract(1, "year")
        .format("YYYY");
      document.getElementById("co-tablecell-value2").innerHTML =
        lastYearConSum + "kWh";

      document.getElementById("co-tablecell-title3").innerHTML = "Savings";
      document.getElementById("co-tablecell-value3").innerHTML =
        Math.round((lastYearConSum1 - lastYearConSum) * 100) / 100 + "kWh";

      document.getElementById("co-tablecell-title4").style.display = "none";
      document.getElementById("co-tablecell-value4").style.display = "none";
    }

    for (var i = 0; i < dataSource.dataset.length; i++) {
      dataSource.dataset[i].data.length = 0;
    }

    const currentDate1 = yesterdayDate.slice(0, 10);
    const currentDate2 = lastMonthDate2.slice(0, 7);
    const currentDate3 = lastYearDate2.slice(0, 4);

    for (var i = 0; i < loc.length; i++) {
      for (var j = 0; j < loc[i].sensors.length; j++) {
        for (var k = 0; k < loc[i].sensors[j].data.length; k++) {
          if (
            yesterdayDate.slice(0, 10) ===
              loc[i].sensors[j].data[k].timestamp.slice(0, 10) &&
            new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() > 5 &&
            new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() < 23
          )
            dayArray.push(loc[i].sensors[j].data[k]);
          if (
            new Date(loc[i].sensors[j].data[k].timestamp)
              .toISOString()
              .slice(0, 10) === currentDate1
          ) {
            if (
              new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() <=
                5 ||
              new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() >= 23
            ) {
              nightArray.push(loc[i].sensors[j].data[k]);
              if (
                lastMonthDate2.slice(0, 7) ===
                loc[i].sensors[j].data[k].timestamp.slice(0, 7)
                // new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() >
                //   5 &&
                // new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() < 23
              )
                monthDayArray.push(loc[i].sensors[j].data[k]);
              if (
                new Date(loc[i].sensors[j].data[k].timestamp)
                  .toISOString()
                  .slice(0, 7) === currentDate2
              )
                if (
                  new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() <=
                    5 ||
                  new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() >=
                    23
                )
                  monthNightArray.push(loc[i].sensors[j].data[k]);
            }
          }
        }
      }
    }

    for (var i = 0; i < loc.length; i++) {
      for (var j = 0; j < loc[i].sensors.length; j++) {
        for (var k = 0; k < loc[i].sensors[j].data.length; k++) {
          if (
            lastMonthDate2.slice(0, 7) ===
              loc[i].sensors[j].data[k].timestamp.slice(0, 7) &&
            new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() > 5 &&
            new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() < 23
          )
            monthDayArray.push(loc[i].sensors[j].data[k]);
          if (
            new Date(loc[i].sensors[j].data[k].timestamp)
              .toISOString()
              .slice(0, 7) === currentDate2
          )
            if (
              new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() <=
                5 ||
              new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() >= 23
            )
              monthNightArray.push(loc[i].sensors[j].data[k]);
          if (
            lastYearDate2.slice(0, 4) ===
              loc[i].sensors[j].data[k].timestamp.slice(0, 4) &&
            new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() > 5 &&
            new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() < 23
          )
            yearDayArray.push(loc[i].sensors[j].data[k]);
          if (
            new Date(loc[i].sensors[j].data[k].timestamp)
              .toISOString()
              .slice(0, 4) === currentDate3
          )
            if (
              new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() <=
                5 ||
              new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() >= 23
            )
              yearNightArray.push(loc[i].sensors[j].data[k]);
        }
      }
    }

    const sumsByTimestamp = {};
    for (let i = 0; i < dayArray.length; i++) {
      const { timestamp, value } = dayArray[i];
      if (sumsByTimestamp[timestamp]) {
        sumsByTimestamp[timestamp] += value;
      } else {
        sumsByTimestamp[timestamp] = value;
      }
    }

    const sumsByDay = monthDayArray.reduce((acc, curr) => {
      const currDay = new Date(curr.timestamp).getDate();
      if (!acc[currDay]) {
        acc[currDay] = { day: currDay, value: curr.value };
      } else {
        acc[currDay].value += curr.value;
      }
      return acc;
    }, {});
    const sumsByDayArray = Object.values(sumsByDay);

    const sumsByTimestamp1 = {};
    for (let i = 0; i < nightArray.length; i++) {
      const { timestamp, value } = nightArray[i];
      if (sumsByTimestamp1[timestamp]) {
        sumsByTimestamp1[timestamp] += value;
      } else {
        sumsByTimestamp1[timestamp] = value;
      }
    }

    const sumsByMonth = yearDayArray.reduce((acc, curr) => {
      const date = new Date(curr.timestamp);
      const month = date.getMonth();
      const year = date.getFullYear();
      const key = `${year}-${month}`;

      if (!acc[key]) {
        acc[key] = { month, year, value: curr.value };
      } else {
        acc[key].value += curr.value;
      }

      return acc;
    }, {});
    const sumsByMonthArray = Object.values(sumsByMonth);

    const sumsByDay1 = monthNightArray.reduce((acc, curr) => {
      const currDay = new Date(curr.timestamp).getDate();
      if (!acc[currDay]) {
        acc[currDay] = { day: currDay, value: curr.value };
      } else {
        acc[currDay].value += curr.value;
      }
      return acc;
    }, {});
    const sumsByDayArray1 = Object.values(sumsByDay1);

    const sumsByMonth1 = yearNightArray.reduce((acc, curr) => {
      const date = new Date(curr.timestamp);
      const month = date.getMonth();
      const year = date.getFullYear();
      const key = `${year}-${month}`;

      if (!acc[key]) {
        acc[key] = { month, year, value: curr.value };
      } else {
        acc[key].value += curr.value;
      }

      return acc;
    }, {});
    const sumsByMonthArray1 = Object.values(sumsByMonth1);

    const res = Object.entries(sumsByTimestamp).map(([timestamp, value]) => ({
      timestamp,
      value,
    }));
    const res1 = Object.entries(sumsByTimestamp1).map(([timestamp, value]) => ({
      timestamp,
      value,
    }));
    dayArray.length = [];
    nightArray.length = [];
    monthDayArray.length = [];
    monthNightArray.length = [];
    yearDayArray.length = [];
    yearNightArray.length = [];
    for (var i = 0; i < res.length; i++) {
      dayArray.push(res[i].value.toFixed(2));
    }
    for (var i = 0; i < sumsByDayArray.length; i++) {
      monthDayArray.push(sumsByDayArray[i].value.toFixed(2));
    }
    for (var i = 0; i < sumsByMonthArray.length; i++) {
      yearDayArray.push(sumsByMonthArray[i].value.toFixed(2));
    }
    for (var i = 0; i < res1.length; i++) {
      nightArray.push(res1[i].value.toFixed(2));
    }
    for (var i = 0; i < sumsByDayArray1.length; i++) {
      monthNightArray.push(sumsByDayArray1[i].value.toFixed(2));
    }
    for (var i = 0; i < sumsByMonthArray1.length; i++) {
      yearNightArray.push(sumsByMonthArray1[i].value.toFixed(2));
    }
    const numZeroesAtStart = 6;
    const numZeroesAtEnd = 1;
    const numZeroes = 17; // Number of zeroes to insert
    const index = 6;
    for (let i = 0; i < numZeroesAtStart; i++) {
      dayArray.unshift(0);
    }

    nightArray.splice(index, 0, ...Array(numZeroes).fill(0));

    // Add zeroes at the end of the array
    for (let i = 0; i < numZeroesAtEnd; i++) {
      dayArray.push(0);
    }

    const dayArrObjects = dayArray.map((value) => {
      return { value };
    });
    const monthArrObjects = monthDayArray.map((value) => {
      return { value };
    });
    const yearArrObjects = yearDayArray.map((value) => {
      return { value };
    });
    const nightArrObjects = nightArray.map((value) => {
      return { value };
    });
    const monthArrObjects1 = monthNightArray.map((value) => {
      return { value };
    });
    const yearArrObjects1 = yearNightArray.map((value) => {
      return { value };
    });

    if (dataSource.categories[0].category.length === 24) {
      dataSource.dataset[0].data = dayArrObjects;
      dataSource.dataset[1].data = nightArrObjects;
    }
    if (
      dataSource.categories[0].category.length > 27 &&
      dataSource.categories[0].category.length < 32
    ) {
      dataSource.dataset[0].data = monthArrObjects;
      dataSource.dataset[1].data = monthArrObjects1;
    }
    if (dataSource.categories[0].category.length === 12) {
      dataSource.dataset[0].data = yearArrObjects;
      dataSource.dataset[1].data = yearArrObjects1;
    }

    var chartconfig = { ...this.props.costchart };
    chartconfig.dataSource = dataSource;

    var chartconfig2 = { ...this.props.costchart1 };
    chartconfig2.dataSource = dataSource;

    const chart = <ReactFC {...chartconfig} />;

    const chart1 = <ReactFC {...chartconfig2} />;

    ReactDOM.unmountComponentAtNode(
      document.getElementById("co-chart-container")
    );
    ReactDOM.unmountComponentAtNode(
      document.getElementById("co-chart-container1")
    );
    ReactDOM.render(chart, document.getElementById("co-chart-container"));

    ReactDOM.render(chart1, document.getElementById("co-chart-container1"));
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="container-fluid">
            <div className="row pl-5 pr-5 pt-5 pb-0 time-control">
              <div
                className="col-xs-6 mr-4 ml-4 pl-1 pr-1"
                id="c1"
                onClick={this.onClickbutton1}
              >
                THIS MONTH
              </div>
              <div
                className="col-xs-6 mr-4 ml-4 pl-1 pr-1"
                id="c2"
                onClick={this.onClickbutton2}
              >
                LAST MONTH
              </div>
            </div>
          </div>
        </div>
        <br />
        <CostTableComponent />
        <br />
        <div id="co-chart-container" className="pt-3 pb-3 pr-5 pl-5" />
        <div id="co-chart-container1" className="pt-3 pb-3 pr-5 pl-5" />
      </div>
    );
  }
}

export default CostComponent;
