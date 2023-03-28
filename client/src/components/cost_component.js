import React from "react";
import ReactFC from "react-fusioncharts";
import ReactDOM from "react-dom";
import moment from "moment";
import "./App.scss";
import jwt_decode from "jwt-decode";
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

    this.state = {
      locations: [],
      loc: null,
    };

    this.populateProfile = this.populateProfile.bind(this);
    this.onClickbutton1 = this.onClickbutton1.bind(this);
    this.onClickbutton2 = this.onClickbutton2.bind(this);
  }

  async componentDidMount() {
    document.getElementById("a1").click();
    window.selectedUsage = "all";
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt_decode(token);
      this.populateProfile(user);
    }
    const user = jwt_decode(localStorage.getItem("token"));
    await this.populateProfile(user);
    const loc = this.state.locations;
    this.setState({ loc });
    const yes = 0;
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
    const locNames = [];
    const costDayToday = [];
    const costNightToday = [];
    const costDayTodayAll = [];
    const costNightTodayAll = [];
    const costDayMonth = [];
    const costNightMonth = [];
    const costDayMonthAll = [];
    const costNightMonthAll = [];
    const costDayYear = [];
    const costNightYear = [];
    const costDayYearAll = [];
    const costNightYearAll = [];
    const currentDate = new Date(Date.now()).toISOString();
    const currentDate1 = new Date().toISOString().slice(0, 10);
    const currentDate2 = new Date().toISOString().slice(0, 7);
    const currentDate3 = new Date().toISOString().slice(0, 4);

    for (var i = 0; i < loc.length; i++) {
      locNames.push(loc[i].name.toLowerCase());
    }

    for (var z = 0; z < locNames.length; z++) {
      if (
        window.selectedperiod === "today" &&
        window.selectedUsage === locNames[z]
      ) {
        for (var i = 0; i < loc.length; i++) {
          for (var j = 0; j < loc[i].sensors.length; j++) {
            for (var k = 0; k < loc[i].sensors[j].data.length; k++) {
              if (
                loc[i].name.toLowerCase() === locNames[z] &&
                currentDate.slice(0, 10) ===
                  loc[i].sensors[j].data[k].timestamp.slice(0, 10) &&
                new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() >
                  5 &&
                new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() < 23
              )
                costDayToday.push(loc[i].sensors[j].data[k]);
              if (
                loc[i].name.toLowerCase() === locNames[z] &&
                new Date(loc[i].sensors[j].data[k].timestamp)
                  .toISOString()
                  .slice(0, 10) === currentDate1
              )
                if (
                  new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() <=
                    5 ||
                  new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() >=
                    23
                )
                  costNightToday.push(loc[i].sensors[j].data[k]);
            }
          }
        }

        let costDayTodaySum = 0;
        let costNightTodaySum = 0;
        let costTotalTodaySum = 0;
        for (let i = 0; i < costDayToday.length; i++) {
          costDayTodaySum += costDayToday[i].value;
        }
        costDayTodaySum = costDayTodaySum.toFixed(2);
        for (let i = 0; i < costNightToday.length; i++) {
          costNightTodaySum += costNightToday[i].value;
        }
        costNightTodaySum = costNightTodaySum.toFixed(2);
        costTotalTodaySum =
          parseFloat(costDayTodaySum) + parseFloat(costNightTodaySum);
        const rounded = costTotalTodaySum.toFixed(2);

        dataSource = buildDataToday("Guest Bedroom");
        dataSource1 = buildDataToday1("Guest Bedroom");
        document.getElementById("stats").innerHTML = "€" + rounded;
        document.getElementById("elecvalue").innerHTML = "€" + costDayTodaySum;
        document.getElementById("gasvalue").innerHTML = "€" + costNightTodaySum;

        for (var i = 0; i < dataSource.dataset.length; i++) {
          dataSource.dataset[i].data.length = 0;
        }

        const sumsByTimestamp = {};
        for (let i = 0; i < costDayToday.length; i++) {
          const { timestamp, value } = costDayToday[i];
          if (sumsByTimestamp[timestamp]) {
            sumsByTimestamp[timestamp] += value;
          } else {
            sumsByTimestamp[timestamp] = value;
          }
        }

        const sumsByTimestamp1 = {};
        for (let i = 0; i < costNightToday.length; i++) {
          const { timestamp, value } = costNightToday[i];
          if (sumsByTimestamp1[timestamp]) {
            sumsByTimestamp1[timestamp] += value;
          } else {
            sumsByTimestamp1[timestamp] = value;
          }
        }

        const res = Object.entries(sumsByTimestamp).map(
          ([timestamp, value]) => ({
            timestamp,
            value,
          })
        );
        const res1 = Object.entries(sumsByTimestamp1).map(
          ([timestamp, value]) => ({
            timestamp,
            value,
          })
        );

        costDayToday.length = [];
        costNightToday.length = [];

        for (var i = 0; i < res.length; i++) {
          costDayToday.push(res[i].value.toFixed(2));
        }
        for (var i = 0; i < res1.length; i++) {
          costNightToday.push(res1[i].value.toFixed(2));
        }

        const numZeroesAtStart = 6;
        const numZeroesAtEnd = 1;
        const numZeroes = 17; // Number of zeroes to insert
        const index = 6;
        for (let i = 0; i < numZeroesAtStart; i++) {
          costDayToday.unshift(0);
        }

        costNightToday.splice(index, 0, ...Array(numZeroes).fill(0));

        // Add zeroes at the end of the array
        for (let i = 0; i < numZeroesAtEnd; i++) {
          costDayToday.push(0);
        }

        const dayArrObjects = costDayToday.map((value) => {
          return { value };
        });
        const nightArrObjects = costNightToday.map((value) => {
          return { value };
        });

        dataSource.dataset[0].data = dayArrObjects;
        dataSource.dataset[1].data = nightArrObjects;
      } else if (
        window.selectedperiod === "month" &&
        window.selectedUsage === locNames[z]
      ) {
        for (var i = 0; i < loc.length; i++) {
          for (var j = 0; j < loc[i].sensors.length; j++) {
            for (var k = 0; k < loc[i].sensors[j].data.length; k++) {
              if (
                loc[i].name.toLowerCase() === locNames[z] &&
                currentDate.slice(0, 7) ===
                  loc[i].sensors[j].data[k].timestamp.slice(0, 7) &&
                new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() >
                  5 &&
                new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() < 23
              )
                costDayMonth.push(loc[i].sensors[j].data[k]);
              if (
                loc[i].name.toLowerCase() === locNames[z] &&
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
                  costNightMonth.push(loc[i].sensors[j].data[k]);
            }
          }
        }

        let costDayMonthSum = 0;
        let costNightMonthSum = 0;
        let costTotalMonthSum = 0;
        for (let i = 0; i < costDayMonth.length; i++) {
          costDayMonthSum += costDayMonth[i].value;
        }
        costDayMonthSum = costDayMonthSum.toFixed(2);
        for (let i = 0; i < costNightMonth.length; i++) {
          costNightMonthSum += costNightMonth[i].value;
        }
        costNightMonthSum = costNightMonthSum.toFixed(2);
        costTotalMonthSum =
          parseFloat(costDayMonthSum) + parseFloat(costNightMonthSum);
        const rounded = costTotalMonthSum.toFixed(2);

        dataSource = buildDataThisMonth("Guest Bedroom");
        dataSource1 = buildDataThisMonth1("Guest Bedroom");
        document.getElementById("stats").innerHTML = "€" + rounded;
        document.getElementById("elecvalue").innerHTML = "€" + costDayMonthSum;
        document.getElementById("gasvalue").innerHTML = "€" + costNightMonthSum;

        for (var i = 0; i < dataSource.dataset.length; i++) {
          dataSource.dataset[i].data.length = 0;
        }

        const sumsByDay = costDayMonth.reduce((acc, curr) => {
          const currDay = new Date(curr.timestamp).getDate();
          if (!acc[currDay]) {
            acc[currDay] = { day: currDay, value: curr.value };
          } else {
            acc[currDay].value += curr.value;
          }
          return acc;
        }, {});
        const sumsByDayArray = Object.values(sumsByDay);

        const sumsByDay1 = costNightMonth.reduce((acc, curr) => {
          const currDay = new Date(curr.timestamp).getDate();
          if (!acc[currDay]) {
            acc[currDay] = { day: currDay, value: curr.value };
          } else {
            acc[currDay].value += curr.value;
          }
          return acc;
        }, {});
        const sumsByDayArray1 = Object.values(sumsByDay1);

        costDayMonth.length = [];
        costNightMonth.length = [];

        for (var i = 0; i < sumsByDayArray.length; i++) {
          costDayMonth.push(sumsByDayArray[i].value.toFixed(2));
        }
        for (var i = 0; i < sumsByDayArray1.length; i++) {
          costNightMonth.push(sumsByDayArray1[i].value.toFixed(2));
        }

        const monthArrObjects = costDayMonth.map((value) => {
          return { value };
        });
        const monthArrObjects1 = costNightMonth.map((value) => {
          return { value };
        });

        dataSource.dataset[0].data = monthArrObjects;
        dataSource.dataset[1].data = monthArrObjects1;
      } else if (
        window.selectedperiod === "year" &&
        window.selectedUsage === locNames[z]
      ) {
        for (var i = 0; i < loc.length; i++) {
          for (var j = 0; j < loc[i].sensors.length; j++) {
            for (var k = 0; k < loc[i].sensors[j].data.length; k++) {
              if (
                loc[i].name.toLowerCase() === locNames[z] &&
                currentDate.slice(0, 4) ===
                  loc[i].sensors[j].data[k].timestamp.slice(0, 4) &&
                new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() >
                  5 &&
                new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() < 23
              )
                costDayYear.push(loc[i].sensors[j].data[k]);
              if (
                loc[i].name.toLowerCase() === locNames[z] &&
                new Date(loc[i].sensors[j].data[k].timestamp)
                  .toISOString()
                  .slice(0, 4) === currentDate3
              )
                if (
                  new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() <=
                    5 ||
                  new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() >=
                    23
                )
                  costNightYear.push(loc[i].sensors[j].data[k]);
            }
          }
        }

        let costDayYearSum = 0;
        let costNightYearSum = 0;
        let costTotalYearSum = 0;
        for (let i = 0; i < costDayYear.length; i++) {
          costDayYearSum += costDayYear[i].value;
        }
        costDayYearSum = costDayYearSum.toFixed(2);
        for (let i = 0; i < costNightYear.length; i++) {
          costNightYearSum += costNightYear[i].value;
        }
        costNightYearSum = costNightYearSum.toFixed(2);
        costTotalYearSum =
          parseFloat(costDayYearSum) + parseFloat(costNightYearSum);
        const rounded = costTotalYearSum.toFixed(2);

        dataSource = buildDataThisYear("Guest Bedroom");
        dataSource1 = buildDataThisYear1("Guest Bedroom");
        document.getElementById("stats").innerHTML = "€" + rounded;
        document.getElementById("elecvalue").innerHTML = "€" + costDayYearSum;
        document.getElementById("gasvalue").innerHTML = "€" + costNightYearSum;

        for (var i = 0; i < dataSource.dataset.length; i++) {
          dataSource.dataset[i].data.length = 0;
        }

        const sumsByMonth = {};
        const currentDate10 = new Date();
        for (let i = 0; i < costDayYear.length; i++) {
          const date = new Date(costDayYear[i].timestamp);
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
            sumsByMonth[monthKey] += costDayYear[i].value;
          }
        }
        const sumsByMonthArray = Object.values(sumsByMonth);

        const sumsByMonth1 = {};
        const currentDate11 = new Date();
        for (let i = 0; i < costNightYear.length; i++) {
          const date = new Date(costNightYear[i].timestamp);
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
            sumsByMonth1[monthKey] += costNightYear[i].value;
          }
        }
        const sumsByMonthArray1 = Object.values(sumsByMonth1);

        costDayYear.length = [];
        costNightYear.length = [];

        for (var i = 0; i < sumsByMonthArray.length; i++) {
          costDayYear.push(sumsByMonthArray[i].toFixed(2));
        }
        for (var i = 0; i < sumsByMonthArray1.length; i++) {
          costNightYear.push(sumsByMonthArray1[i].toFixed(2));
        }

        const yearArrObjects = costDayYear.map((value) => {
          return { value };
        });
        const yearArrObjects1 = costNightYear.map((value) => {
          return { value };
        });

        dataSource.dataset[0].data = yearArrObjects;
        dataSource.dataset[1].data = yearArrObjects1;
      }
    }
    if (window.selectedperiod === "today" && window.selectedUsage === "all") {
      for (var i = 0; i < loc.length; i++) {
        for (var j = 0; j < loc[i].sensors.length; j++) {
          for (var k = 0; k < loc[i].sensors[j].data.length; k++) {
            if (
              currentDate.slice(0, 10) ===
                loc[i].sensors[j].data[k].timestamp.slice(0, 10) &&
              new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() > 5 &&
              new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() < 23
            )
              costDayTodayAll.push(loc[i].sensors[j].data[k]);
            if (
              new Date(loc[i].sensors[j].data[k].timestamp)
                .toISOString()
                .slice(0, 10) === currentDate1
            )
              if (
                new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() <=
                  5 ||
                new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() >=
                  23
              )
                costNightTodayAll.push(loc[i].sensors[j].data[k]);
          }
        }
      }

      let costDayTodayAllSum = 0;
      let costNightTodayAllSum = 0;
      let costTotalTodayAllSum = 0;
      for (let i = 0; i < costDayTodayAll.length; i++) {
        costDayTodayAllSum += costDayTodayAll[i].value;
      }
      costDayTodayAllSum = costDayTodayAllSum.toFixed(2);
      for (let i = 0; i < costNightTodayAll.length; i++) {
        costNightTodayAllSum += costNightTodayAll[i].value;
      }
      costNightTodayAllSum = costNightTodayAllSum.toFixed(2);
      costTotalTodayAllSum =
        parseFloat(costDayTodayAllSum) + parseFloat(costNightTodayAllSum);
      const rounded = costTotalTodayAllSum.toFixed(2);

      dataSource = buildDataToday("Guest Bedroom");
      dataSource1 = buildDataToday1("Guest Bedroom");
      document.getElementById("stats").innerHTML = "€" + rounded;
      document.getElementById("elecvalue").innerHTML = "€" + costDayTodayAllSum;
      document.getElementById("gasvalue").innerHTML =
        "€" + costNightTodayAllSum;

      for (var i = 0; i < dataSource.dataset.length; i++) {
        dataSource.dataset[i].data.length = 0;
      }

      const sumsByTimestamp = {};
      for (let i = 0; i < costDayTodayAll.length; i++) {
        const { timestamp, value } = costDayTodayAll[i];
        if (sumsByTimestamp[timestamp]) {
          sumsByTimestamp[timestamp] += value;
        } else {
          sumsByTimestamp[timestamp] = value;
        }
      }

      const sumsByTimestamp1 = {};
      for (let i = 0; i < costNightTodayAll.length; i++) {
        const { timestamp, value } = costNightTodayAll[i];
        if (sumsByTimestamp1[timestamp]) {
          sumsByTimestamp1[timestamp] += value;
        } else {
          sumsByTimestamp1[timestamp] = value;
        }
      }

      const res = Object.entries(sumsByTimestamp).map(([timestamp, value]) => ({
        timestamp,
        value,
      }));
      const res1 = Object.entries(sumsByTimestamp1).map(
        ([timestamp, value]) => ({
          timestamp,
          value,
        })
      );

      costDayTodayAll.length = [];
      costNightTodayAll.length = [];

      for (var i = 0; i < res.length; i++) {
        costDayTodayAll.push(res[i].value.toFixed(2));
      }
      for (var i = 0; i < res1.length; i++) {
        costNightTodayAll.push(res1[i].value.toFixed(2));
      }

      const numZeroesAtStart = 6;
      const numZeroesAtEnd = 1;
      const numZeroes = 17; // Number of zeroes to insert
      const index = 6;
      for (let i = 0; i < numZeroesAtStart; i++) {
        costDayTodayAll.unshift(0);
      }

      costNightTodayAll.splice(index, 0, ...Array(numZeroes).fill(0));

      // Add zeroes at the end of the array
      for (let i = 0; i < numZeroesAtEnd; i++) {
        costDayTodayAll.push(0);
      }

      const dayArrObjects = costDayTodayAll.map((value) => {
        return { value };
      });
      const nightArrObjects = costNightTodayAll.map((value) => {
        return { value };
      });

      dataSource.dataset[0].data = dayArrObjects;
      dataSource.dataset[1].data = nightArrObjects;
    }
    if (window.selectedperiod === "month" && window.selectedUsage === "all") {
      for (var i = 0; i < loc.length; i++) {
        for (var j = 0; j < loc[i].sensors.length; j++) {
          for (var k = 0; k < loc[i].sensors[j].data.length; k++) {
            if (
              currentDate.slice(0, 7) ===
                loc[i].sensors[j].data[k].timestamp.slice(0, 7) &&
              new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() > 5 &&
              new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() < 23
            )
              costDayMonthAll.push(loc[i].sensors[j].data[k]);
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
                costNightMonthAll.push(loc[i].sensors[j].data[k]);
          }
        }
      }

      let costDayMonthAllSum = 0;
      let costNightMonthAllSum = 0;
      let costTotalMonthAllSum = 0;
      for (let i = 0; i < costDayMonthAll.length; i++) {
        costDayMonthAllSum += costDayMonthAll[i].value;
      }
      costDayMonthAllSum = costDayMonthAllSum.toFixed(2);
      for (let i = 0; i < costNightMonthAll.length; i++) {
        costNightMonthAllSum += costNightMonthAll[i].value;
      }
      costNightMonthAllSum = costNightMonthAllSum.toFixed(2);
      costTotalMonthAllSum =
        parseFloat(costDayMonthAllSum) + parseFloat(costNightMonthAllSum);
      const rounded = costTotalMonthAllSum.toFixed(2);

      dataSource = buildDataThisMonth("Guest Bedroom");
      dataSource1 = buildDataThisMonth1("Guest Bedroom");
      document.getElementById("stats").innerHTML = "€" + rounded;
      document.getElementById("elecvalue").innerHTML = "€" + costDayMonthAllSum;
      document.getElementById("gasvalue").innerHTML =
        "€" + costNightMonthAllSum;

      for (var i = 0; i < dataSource.dataset.length; i++) {
        dataSource.dataset[i].data.length = 0;
      }

      const sumsByDay = costDayMonthAll.reduce((acc, curr) => {
        const currDay = new Date(curr.timestamp).getDate();
        if (!acc[currDay]) {
          acc[currDay] = { day: currDay, value: curr.value };
        } else {
          acc[currDay].value += curr.value;
        }
        return acc;
      }, {});
      const sumsByDayArray = Object.values(sumsByDay);

      const sumsByDay1 = costNightMonthAll.reduce((acc, curr) => {
        const currDay = new Date(curr.timestamp).getDate();
        if (!acc[currDay]) {
          acc[currDay] = { day: currDay, value: curr.value };
        } else {
          acc[currDay].value += curr.value;
        }
        return acc;
      }, {});
      const sumsByDayArray1 = Object.values(sumsByDay1);

      costDayMonthAll.length = [];
      costNightMonthAll.length = [];

      for (var i = 0; i < sumsByDayArray.length; i++) {
        costDayMonthAll.push(sumsByDayArray[i].value.toFixed(2));
      }
      for (var i = 0; i < sumsByDayArray1.length; i++) {
        costNightMonthAll.push(sumsByDayArray1[i].value.toFixed(2));
      }

      const monthArrObjects = costDayMonthAll.map((value) => {
        return { value };
      });
      const monthArrObjects1 = costNightMonthAll.map((value) => {
        return { value };
      });

      dataSource.dataset[0].data = monthArrObjects;
      dataSource.dataset[1].data = monthArrObjects1;
    }
    if (window.selectedperiod === "year" && window.selectedUsage === "all") {
      for (var i = 0; i < loc.length; i++) {
        for (var j = 0; j < loc[i].sensors.length; j++) {
          for (var k = 0; k < loc[i].sensors[j].data.length; k++) {
            if (
              currentDate.slice(0, 4) ===
                loc[i].sensors[j].data[k].timestamp.slice(0, 4) &&
              new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() > 5 &&
              new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() < 23
            )
              costDayYearAll.push(loc[i].sensors[j].data[k]);
            if (
              new Date(loc[i].sensors[j].data[k].timestamp)
                .toISOString()
                .slice(0, 4) === currentDate3
            )
              if (
                new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() <=
                  5 ||
                new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() >=
                  23
              )
                costNightYearAll.push(loc[i].sensors[j].data[k]);
          }
        }
      }

      let costDayYearAllSum = 0;
      let costNightYearAllSum = 0;
      let costTotalYearAllSum = 0;
      for (let i = 0; i < costDayYearAll.length; i++) {
        costDayYearAllSum += costDayYearAll[i].value;
      }
      costDayYearAllSum = costDayYearAllSum.toFixed(2);
      for (let i = 0; i < costNightYearAll.length; i++) {
        costNightYearAllSum += costNightYearAll[i].value;
      }
      costNightYearAllSum = costNightYearAllSum.toFixed(2);
      costTotalYearAllSum =
        parseFloat(costDayYearAllSum) + parseFloat(costNightYearAllSum);
      const rounded = costTotalYearAllSum.toFixed(2);

      dataSource = buildDataThisYear("Guest Bedroom");
      dataSource1 = buildDataThisYear1("Guest Bedroom");
      document.getElementById("stats").innerHTML = "€" + rounded;
      document.getElementById("elecvalue").innerHTML = "€" + costDayYearAllSum;
      document.getElementById("gasvalue").innerHTML = "€" + costNightYearAllSum;

      for (var i = 0; i < dataSource.dataset.length; i++) {
        dataSource.dataset[i].data.length = 0;
      }

      const sumsByMonth = {};
      const currentDate10 = new Date();
      for (let i = 0; i < costDayYearAll.length; i++) {
        const date = new Date(costDayYearAll[i].timestamp);
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
          sumsByMonth[monthKey] += costDayYearAll[i].value;
        }
      }
      const sumsByMonthArray = Object.values(sumsByMonth);

      const sumsByMonth1 = {};
      const currentDate11 = new Date();
      for (let i = 0; i < costNightYearAll.length; i++) {
        const date = new Date(costNightYearAll[i].timestamp);
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
          sumsByMonth1[monthKey] += costNightYearAll[i].value;
        }
      }
      const sumsByMonthArray1 = Object.values(sumsByMonth1);

      costDayYearAll.length = [];
      costNightYearAll.length = [];

      for (var i = 0; i < sumsByMonthArray.length; i++) {
        costDayYearAll.push(sumsByMonthArray[i].toFixed(2));
      }
      for (var i = 0; i < sumsByMonthArray1.length; i++) {
        costNightYearAll.push(sumsByMonthArray1[i].toFixed(2));
      }

      const yearArrObjects = costDayYearAll.map((value) => {
        return { value };
      });
      const yearArrObjects1 = costNightYearAll.map((value) => {
        return { value };
      });

      dataSource.dataset[0].data = yearArrObjects;
      dataSource.dataset[1].data = yearArrObjects1;
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

  async onClickbutton2() {
    const user = jwt_decode(localStorage.getItem("token"));
    await this.populateProfile(user);
    const loc = this.state.locations;

    window.b2selected = true;

    document.getElementById("a1").style.borderBottom = "none";
    document.getElementById("a1").style.color = "#FDFDFD";
    document.getElementById("a1").style.opacity = "0.5";
    document.getElementById("a2").style.color = "#FDFDFD";
    document.getElementById("a2").style.opacity = "1";
    document.getElementById("a2").style.borderBottom = "solid 2px #FDFDFD";

    var dataSource;
    const locNames = [];
    const costDayToday = [];
    const costNightToday = [];
    const costDayTodayAll = [];
    const costNightTodayAll = [];
    const costDayMonth = [];
    const costNightMonth = [];
    const costDayMonthAll = [];
    const costNightMonthAll = [];
    const costDayYear = [];
    const costNightYear = [];
    const costDayYearAll = [];
    const costNightYearAll = [];
    const currentDate = new Date(Date.now()).toISOString();
    const yesterday = new Date();
    const lastMonthDate = new Date();
    const lastYearDate = new Date();
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

    const currentDate1 = yesterdayDate.slice(0, 10);
    const currentDate2 = lastMonthDate2.slice(0, 7);
    const currentDate3 = lastYearDate2.slice(0, 4);

    for (var i = 0; i < loc.length; i++) {
      locNames.push(loc[i].name.toLowerCase());
    }
    for (var z = 0; z < locNames.length; z++) {
      if (
        window.selectedperiod === "today" &&
        window.selectedUsage === locNames[z]
      ) {
        for (var i = 0; i < loc.length; i++) {
          for (var j = 0; j < loc[i].sensors.length; j++) {
            for (var k = 0; k < loc[i].sensors[j].data.length; k++) {
              if (
                loc[i].name.toLowerCase() === locNames[z] &&
                yesterdayDate.slice(0, 10) ===
                  loc[i].sensors[j].data[k].timestamp.slice(0, 10) &&
                new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() >
                  5 &&
                new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() < 23
              )
                costDayToday.push(loc[i].sensors[j].data[k]);
              if (
                loc[i].name.toLowerCase() === locNames[z] &&
                new Date(loc[i].sensors[j].data[k].timestamp)
                  .toISOString()
                  .slice(0, 10) === currentDate1
              )
                if (
                  new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() <=
                    5 ||
                  new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() >=
                    23
                )
                  costNightToday.push(loc[i].sensors[j].data[k]);
            }
          }
        }
        let costDayTodaySum = 0;
        let costNightTodaySum = 0;
        let costTotalTodaySum = 0;
        for (let i = 0; i < costDayToday.length; i++) {
          costDayTodaySum += costDayToday[i].value;
        }
        costDayTodaySum = costDayTodaySum.toFixed(2);
        for (let i = 0; i < costNightToday.length; i++) {
          costNightTodaySum += costNightToday[i].value;
        }
        costNightTodaySum = costNightTodaySum.toFixed(2);
        costTotalTodaySum =
          parseFloat(costDayTodaySum) + parseFloat(costNightTodaySum);
        const rounded = costTotalTodaySum.toFixed(2);

        dataSource = buildDataYesterday("Guest Bedroom");
        document.getElementById("stats").innerHTML = "€" + rounded;
        document.getElementById("elecvalue").innerHTML = "€" + costDayTodaySum;
        document.getElementById("gasvalue").innerHTML = "€" + costNightTodaySum;

        for (var i = 0; i < dataSource.dataset.length; i++) {
          dataSource.dataset[i].data.length = 0;
        }

        const sumsByTimestamp = {};
        for (let i = 0; i < costDayToday.length; i++) {
          const { timestamp, value } = costDayToday[i];
          if (sumsByTimestamp[timestamp]) {
            sumsByTimestamp[timestamp] += value;
          } else {
            sumsByTimestamp[timestamp] = value;
          }
        }

        const sumsByTimestamp1 = {};
        for (let i = 0; i < costNightToday.length; i++) {
          const { timestamp, value } = costNightToday[i];
          if (sumsByTimestamp1[timestamp]) {
            sumsByTimestamp1[timestamp] += value;
          } else {
            sumsByTimestamp1[timestamp] = value;
          }
        }

        const res = Object.entries(sumsByTimestamp).map(
          ([timestamp, value]) => ({
            timestamp,
            value,
          })
        );
        const res1 = Object.entries(sumsByTimestamp1).map(
          ([timestamp, value]) => ({
            timestamp,
            value,
          })
        );

        costDayToday.length = [];
        costNightToday.length = [];

        for (var i = 0; i < res.length; i++) {
          costDayToday.push(res[i].value.toFixed(2));
        }
        for (var i = 0; i < res1.length; i++) {
          costNightToday.push(res1[i].value.toFixed(2));
        }

        const numZeroesAtStart = 6;
        const numZeroesAtEnd = 1;
        const numZeroes = 17; // Number of zeroes to insert
        const index = 6;
        for (let i = 0; i < numZeroesAtStart; i++) {
          costDayToday.unshift(0);
        }

        costNightToday.splice(index, 0, ...Array(numZeroes).fill(0));

        // Add zeroes at the end of the array
        for (let i = 0; i < numZeroesAtEnd; i++) {
          costDayToday.push(0);
        }

        const dayArrObjects = costDayToday.map((value) => {
          return { value };
        });
        const nightArrObjects = costNightToday.map((value) => {
          return { value };
        });

        dataSource.dataset[0].data = dayArrObjects;
        dataSource.dataset[1].data = nightArrObjects;
      } else if (
        window.selectedperiod === "month" &&
        window.selectedUsage === locNames[z]
      ) {
        for (var i = 0; i < loc.length; i++) {
          for (var j = 0; j < loc[i].sensors.length; j++) {
            for (var k = 0; k < loc[i].sensors[j].data.length; k++) {
              if (
                loc[i].name.toLowerCase() === locNames[z] &&
                lastMonthDate2.slice(0, 7) ===
                  loc[i].sensors[j].data[k].timestamp.slice(0, 7) &&
                new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() >
                  5 &&
                new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() < 23
              )
                costDayMonth.push(loc[i].sensors[j].data[k]);
              if (
                loc[i].name.toLowerCase() === locNames[z] &&
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
                  costNightMonth.push(loc[i].sensors[j].data[k]);
            }
          }
        }
        let costDayMonthSum = 0;
        let costNightMonthSum = 0;
        let costTotalMonthSum = 0;
        for (let i = 0; i < costDayMonth.length; i++) {
          costDayMonthSum += costDayMonth[i].value;
        }
        costDayMonthSum = costDayMonthSum.toFixed(2);
        for (let i = 0; i < costNightMonth.length; i++) {
          costNightMonthSum += costNightMonth[i].value;
        }
        costNightMonthSum = costNightMonthSum.toFixed(2);
        costTotalMonthSum =
          parseFloat(costDayMonthSum) + parseFloat(costNightMonthSum);
        const rounded = costTotalMonthSum.toFixed(2);

        dataSource = buildDataLastMonth("Guest Bedroom");
        document.getElementById("stats").innerHTML = "€" + rounded;
        document.getElementById("elecvalue").innerHTML = "€" + costDayMonthSum;
        document.getElementById("gasvalue").innerHTML = "€" + costNightMonthSum;

        for (var i = 0; i < dataSource.dataset.length; i++) {
          dataSource.dataset[i].data.length = 0;
        }

        const sumsByDay = costDayMonth.reduce((acc, curr) => {
          const currDay = new Date(curr.timestamp).getDate();
          if (!acc[currDay]) {
            acc[currDay] = { day: currDay, value: curr.value };
          } else {
            acc[currDay].value += curr.value;
          }
          return acc;
        }, {});
        const sumsByDayArray = Object.values(sumsByDay);

        const sumsByDay1 = costNightMonth.reduce((acc, curr) => {
          const currDay = new Date(curr.timestamp).getDate();
          if (!acc[currDay]) {
            acc[currDay] = { day: currDay, value: curr.value };
          } else {
            acc[currDay].value += curr.value;
          }
          return acc;
        }, {});
        const sumsByDayArray1 = Object.values(sumsByDay1);

        costDayMonth.length = [];
        costNightMonth.length = [];

        for (var i = 0; i < sumsByDayArray.length; i++) {
          costDayMonth.push(sumsByDayArray[i].value.toFixed(2));
        }
        for (var i = 0; i < sumsByDayArray1.length; i++) {
          costNightMonth.push(sumsByDayArray1[i].value.toFixed(2));
        }

        const monthArrObjects = costDayMonth.map((value) => {
          return { value };
        });
        const monthArrObjects1 = costNightMonth.map((value) => {
          return { value };
        });

        dataSource.dataset[0].data = monthArrObjects;
        dataSource.dataset[1].data = monthArrObjects1;
      } else if (
        window.selectedperiod === "year" &&
        window.selectedUsage === locNames[z]
      ) {
        for (var i = 0; i < loc.length; i++) {
          for (var j = 0; j < loc[i].sensors.length; j++) {
            for (var k = 0; k < loc[i].sensors[j].data.length; k++) {
              if (
                loc[i].name.toLowerCase() === locNames[z] &&
                lastYearDate2.slice(0, 4) ===
                  loc[i].sensors[j].data[k].timestamp.slice(0, 4) &&
                new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() >
                  5 &&
                new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() < 23
              )
                costDayYear.push(loc[i].sensors[j].data[k]);
              if (
                loc[i].name.toLowerCase() === locNames[z] &&
                new Date(loc[i].sensors[j].data[k].timestamp)
                  .toISOString()
                  .slice(0, 4) === currentDate3
              )
                if (
                  new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() <=
                    5 ||
                  new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() >=
                    23
                )
                  costNightYear.push(loc[i].sensors[j].data[k]);
            }
          }
        }
        let costDayYearSum = 0;
        let costNightYearSum = 0;
        let costTotalYearSum = 0;
        for (let i = 0; i < costDayYear.length; i++) {
          costDayYearSum += costDayYear[i].value;
        }
        costDayYearSum = costDayYearSum.toFixed(2);
        for (let i = 0; i < costNightYear.length; i++) {
          costNightYearSum += costNightYear[i].value;
        }
        costNightYearSum = costNightYearSum.toFixed(2);
        costTotalYearSum =
          parseFloat(costDayYearSum) + parseFloat(costNightYearSum);
        const rounded = costTotalYearSum.toFixed(2);

        dataSource = buildDataLastYear("Guest Bedroom");
        document.getElementById("stats").innerHTML = "€" + rounded;
        document.getElementById("elecvalue").innerHTML = "€" + costDayYearSum;
        document.getElementById("gasvalue").innerHTML = "€" + costNightYearSum;

        for (var i = 0; i < dataSource.dataset.length; i++) {
          dataSource.dataset[i].data.length = 0;
        }

        const sumsByMonth = costDayYear.reduce((acc, curr) => {
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

        const sumsByMonth1 = costNightYear.reduce((acc, curr) => {
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

        costDayYear.length = [];
        costNightYear.length = [];

        for (var i = 0; i < sumsByMonthArray.length; i++) {
          costDayYear.push(sumsByMonthArray[i].toFixed(2));
        }
        for (var i = 0; i < sumsByMonthArray1.length; i++) {
          costNightYear.push(sumsByMonthArray1[i].toFixed(2));
        }

        const yearArrObjects = costDayYear.map((value) => {
          return { value };
        });
        const yearArrObjects1 = costNightYear.map((value) => {
          return { value };
        });

        dataSource.dataset[0].data = yearArrObjects;
        dataSource.dataset[1].data = yearArrObjects1;
      }
    }

    if (window.selectedperiod === "today" && window.selectedUsage === "all") {
      for (var i = 0; i < loc.length; i++) {
        for (var j = 0; j < loc[i].sensors.length; j++) {
          for (var k = 0; k < loc[i].sensors[j].data.length; k++) {
            if (
              yesterdayDate.slice(0, 10) ===
                loc[i].sensors[j].data[k].timestamp.slice(0, 10) &&
              new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() > 5 &&
              new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() < 23
            )
              costDayTodayAll.push(loc[i].sensors[j].data[k]);
            if (
              new Date(loc[i].sensors[j].data[k].timestamp)
                .toISOString()
                .slice(0, 10) === currentDate1
            )
              if (
                new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() <=
                  5 ||
                new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() >=
                  23
              )
                costNightTodayAll.push(loc[i].sensors[j].data[k]);
          }
        }
      }
      let costDayTodayAllSum = 0;
      let costNightTodayAllSum = 0;
      let costTotalTodayAllSum = 0;
      for (let i = 0; i < costDayTodayAll.length; i++) {
        costDayTodayAllSum += costDayTodayAll[i].value;
      }
      costDayTodayAllSum = costDayTodayAllSum.toFixed(2);
      for (let i = 0; i < costNightTodayAll.length; i++) {
        costNightTodayAllSum += costNightTodayAll[i].value;
      }
      costNightTodayAllSum = costNightTodayAllSum.toFixed(2);
      costTotalTodayAllSum =
        parseFloat(costDayTodayAllSum) + parseFloat(costNightTodayAllSum);
      const rounded = costTotalTodayAllSum.toFixed(2);

      dataSource = buildDataYesterday("Guest Bedroom");
      document.getElementById("stats").innerHTML = "€" + rounded;
      document.getElementById("elecvalue").innerHTML = "€" + costDayTodayAllSum;
      document.getElementById("gasvalue").innerHTML =
        "€" + costNightTodayAllSum;

      for (var i = 0; i < dataSource.dataset.length; i++) {
        dataSource.dataset[i].data.length = 0;
      }

      const sumsByTimestamp = {};
      for (let i = 0; i < costDayTodayAll.length; i++) {
        const { timestamp, value } = costDayTodayAll[i];
        if (sumsByTimestamp[timestamp]) {
          sumsByTimestamp[timestamp] += value;
        } else {
          sumsByTimestamp[timestamp] = value;
        }
      }

      const sumsByTimestamp1 = {};
      for (let i = 0; i < costNightTodayAll.length; i++) {
        const { timestamp, value } = costNightTodayAll[i];
        if (sumsByTimestamp1[timestamp]) {
          sumsByTimestamp1[timestamp] += value;
        } else {
          sumsByTimestamp1[timestamp] = value;
        }
      }

      const res = Object.entries(sumsByTimestamp).map(([timestamp, value]) => ({
        timestamp,
        value,
      }));
      const res1 = Object.entries(sumsByTimestamp1).map(
        ([timestamp, value]) => ({
          timestamp,
          value,
        })
      );

      costDayTodayAll.length = [];
      costNightTodayAll.length = [];

      for (var i = 0; i < res.length; i++) {
        costDayTodayAll.push(res[i].value.toFixed(2));
      }
      for (var i = 0; i < res1.length; i++) {
        costNightTodayAll.push(res1[i].value.toFixed(2));
      }

      const numZeroesAtStart = 6;
      const numZeroesAtEnd = 1;
      const numZeroes = 17; // Number of zeroes to insert
      const index = 6;
      for (let i = 0; i < numZeroesAtStart; i++) {
        costDayTodayAll.unshift(0);
      }

      costNightTodayAll.splice(index, 0, ...Array(numZeroes).fill(0));

      // Add zeroes at the end of the array
      for (let i = 0; i < numZeroesAtEnd; i++) {
        costDayTodayAll.push(0);
      }

      const dayArrObjects = costDayTodayAll.map((value) => {
        return { value };
      });
      const nightArrObjects = costNightTodayAll.map((value) => {
        return { value };
      });

      dataSource.dataset[0].data = dayArrObjects;
      dataSource.dataset[1].data = nightArrObjects;
    }
    if (window.selectedperiod === "month" && window.selectedUsage === "all") {
      for (var i = 0; i < loc.length; i++) {
        for (var j = 0; j < loc[i].sensors.length; j++) {
          for (var k = 0; k < loc[i].sensors[j].data.length; k++) {
            if (
              lastMonthDate2.slice(0, 7) ===
                loc[i].sensors[j].data[k].timestamp.slice(0, 7) &&
              new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() > 5 &&
              new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() < 23
            )
              costDayMonthAll.push(loc[i].sensors[j].data[k]);
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
                costNightMonthAll.push(loc[i].sensors[j].data[k]);
          }
        }
      }
      let costDayMonthAllSum = 0;
      let costNightMonthAllSum = 0;
      let costTotalMonthAllSum = 0;
      for (let i = 0; i < costDayMonthAll.length; i++) {
        costDayMonthAllSum += costDayMonthAll[i].value;
      }
      costDayMonthAllSum = costDayMonthAllSum.toFixed(2);
      for (let i = 0; i < costNightMonthAll.length; i++) {
        costNightMonthAllSum += costNightMonthAll[i].value;
      }
      costNightMonthAllSum = costNightMonthAllSum.toFixed(2);
      costTotalMonthAllSum =
        parseFloat(costDayMonthAllSum) + parseFloat(costNightMonthAllSum);
      const rounded = costTotalMonthAllSum.toFixed(2);

      dataSource = buildDataLastMonth("Guest Bedroom");
      document.getElementById("stats").innerHTML = "€" + rounded;
      document.getElementById("elecvalue").innerHTML = "€" + costDayMonthAllSum;
      document.getElementById("gasvalue").innerHTML =
        "€" + costNightMonthAllSum;

      for (var i = 0; i < dataSource.dataset.length; i++) {
        dataSource.dataset[i].data.length = 0;
      }

      const sumsByDay = costDayMonthAll.reduce((acc, curr) => {
        const currDay = new Date(curr.timestamp).getDate();
        if (!acc[currDay]) {
          acc[currDay] = { day: currDay, value: curr.value };
        } else {
          acc[currDay].value += curr.value;
        }
        return acc;
      }, {});
      const sumsByDayArray = Object.values(sumsByDay);

      const sumsByDay1 = costNightMonthAll.reduce((acc, curr) => {
        const currDay = new Date(curr.timestamp).getDate();
        if (!acc[currDay]) {
          acc[currDay] = { day: currDay, value: curr.value };
        } else {
          acc[currDay].value += curr.value;
        }
        return acc;
      }, {});
      const sumsByDayArray1 = Object.values(sumsByDay1);

      costDayMonthAll.length = [];
      costNightMonthAll.length = [];

      for (var i = 0; i < sumsByDayArray.length; i++) {
        costDayMonthAll.push(sumsByDayArray[i].value.toFixed(2));
      }
      for (var i = 0; i < sumsByDayArray1.length; i++) {
        costNightMonthAll.push(sumsByDayArray1[i].value.toFixed(2));
      }

      const monthArrObjects = costDayMonthAll.map((value) => {
        return { value };
      });
      const monthArrObjects1 = costNightMonthAll.map((value) => {
        return { value };
      });

      dataSource.dataset[0].data = monthArrObjects;
      dataSource.dataset[1].data = monthArrObjects1;
    }

    if (window.selectedperiod === "year" && window.selectedUsage === "all") {
      for (var i = 0; i < loc.length; i++) {
        for (var j = 0; j < loc[i].sensors.length; j++) {
          for (var k = 0; k < loc[i].sensors[j].data.length; k++) {
            if (
              lastYearDate2.slice(0, 4) ===
                loc[i].sensors[j].data[k].timestamp.slice(0, 4) &&
              new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() > 5 &&
              new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() < 23
            )
              costDayYearAll.push(loc[i].sensors[j].data[k]);
            if (
              new Date(loc[i].sensors[j].data[k].timestamp)
                .toISOString()
                .slice(0, 4) === currentDate3
            )
              if (
                new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() <=
                  5 ||
                new Date(loc[i].sensors[j].data[k].timestamp).getUTCHours() >=
                  23
              )
                costNightYearAll.push(loc[i].sensors[j].data[k]);
          }
        }
      }
      let costDayYearAllSum = 0;
      let costNightYearAllSum = 0;
      let costTotalYearAllSum = 0;
      for (let i = 0; i < costDayYearAll.length; i++) {
        costDayYearAllSum += costDayYearAll[i].value;
      }
      costDayYearAllSum = costDayYearAllSum.toFixed(2);
      for (let i = 0; i < costNightYearAll.length; i++) {
        costNightYearAllSum += costNightYearAll[i].value;
      }
      costNightYearAllSum = costNightYearAllSum.toFixed(2);
      costTotalYearAllSum =
        parseFloat(costDayYearAllSum) + parseFloat(costNightYearAllSum);
      const rounded = costTotalYearAllSum.toFixed(2);

      dataSource = buildDataLastYear("Guest Bedroom");
      document.getElementById("stats").innerHTML = "€" + rounded;
      document.getElementById("elecvalue").innerHTML = "€" + costDayYearAllSum;
      document.getElementById("gasvalue").innerHTML = "€" + costNightYearAllSum;

      for (var i = 0; i < dataSource.dataset.length; i++) {
        dataSource.dataset[i].data.length = 0;
      }

      const sumsByMonth = costDayYear.reduce((acc, curr) => {
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

      const sumsByMonth1 = costNightYear.reduce((acc, curr) => {
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

      costDayYearAll.length = [];
      costNightYearAll.length = [];

      for (var i = 0; i < sumsByMonthArray.length; i++) {
        costDayYearAll.push(sumsByMonthArray[i].toFixed(2));
      }
      for (var i = 0; i < sumsByMonthArray1.length; i++) {
        costNightYearAll.push(sumsByMonthArray1[i].toFixed(2));
      }

      const yearArrObjects = costDayYearAll.map((value) => {
        return { value };
      });
      const yearArrObjects1 = costNightYearAll.map((value) => {
        return { value };
      });

      dataSource.dataset[0].data = yearArrObjects;
      dataSource.dataset[1].data = yearArrObjects1;
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

  async getLocations() {
    const user = jwt_decode(localStorage.getItem("token"));
    await this.populateProfile(user);
    const loc = this.state.locations;
  }

  render() {
    const { loc } = this.state;
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
                {loc &&
                  loc.map((item) => <option key={item.id}>{item.name}</option>)}
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
