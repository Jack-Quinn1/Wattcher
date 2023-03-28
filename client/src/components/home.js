import React from "react";
import OptionList from "../containers/optionlist";
import ChartDetail from "../containers/chart";
import "./App.scss";
import { connect } from "react-redux";
import FusionCharts from "fusioncharts";
import chartConfigs4 from "../chart-configs/home_fourth_chart";
import ReactFC from "react-fusioncharts";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";

class home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      locations: [],
      loading: true,
    };

    this.populateProfile = this.populateProfile.bind(this);
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
    }
    if (token) {
      const user = jwt_decode(token);
      this.populateProfile(user);
    }
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

    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 5000);
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
        loading: false,
      });
    } else {
      alert(data.error);
      this.setState({ loading: false });
    }
    console.log(data);
  }

  componentDidUpdate() {
    const loc = this.state.locations;
    console.log(loc);
  }

  render() {
    function logout() {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
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
                  <button onClick={logout} class="btn customButton large">
                    Logout
                  </button>
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
                    <div id="chart4" className="chart"></div>
                  </div>
                </div>
                <div id="parent5" className="col-lg-12">
                  <div className="chart-card mb-4">
                    <div className="chart-title" id="text5">
                      TIPS & RECOMMENDATIONS
                    </div>
                    <div
                      className="col-md-12 d-flex align-items-left justify-content-center flex-column"
                      id="recText"
                    >
                      {this.state.loading ? (
                        <div>Loading recommendations...</div>
                      ) : (
                        this.state.locations.length > 0 &&
                        this.generateRecommendations(this.state.locations).map(
                          (rec, index) => (
                            <div
                              key={index}
                              style={{ color: rec.color }}
                            >{`• ${rec.text}`}</div>
                          )
                        )
                      )}
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

  formatHour(hourString) {
    const hour = parseInt(hourString.split(":")[0], 10);
    const ampm = hour >= 12 ? "PM" : "AM";
    const hour12 = hour % 12 || 12;
    return `${hour12}:00 ${ampm}`;
  }

  generateRecommendations(locations) {
    const goodRecommendations = [];
    const badRecommendations = [];
    const currentDate = new Date(Date.now()).toISOString();
    let highUsageCount = 0;
    const timeOccurrences = new Map();
    const locationConsumption = new Map();
    const currentDate1 = new Date();
    const currentDate2 = new Date();
    const day = currentDate1.getDay();
    const startOfWeek = currentDate1.getDate() - (day === 0 ? 6 : day - 1); // Calculate the start of the week (Sunday)
    const weekStartDate = new Date(
      currentDate1.setDate(startOfWeek)
    ).toISOString();
    const now = new Date().toISOString();
    const yesterdayDate = new Date(currentDate2);
    yesterdayDate.setDate(yesterdayDate.getDate() - 1);
    const yesterdayDateString = yesterdayDate.toISOString().slice(0, 10);
    let totalConsumptionYesterday = 0;
    const oneMonthAgoDate = new Date(currentDate2);
    oneMonthAgoDate.setMonth(oneMonthAgoDate.getMonth() - 1);
    const dangerThresholds = [15, 20, 25, 30];
    const dangerLevels = dangerThresholds.map((threshold) => ({
      threshold,
      count: 0,
    }));
    const dailyConsumptionMap = new Map();
    const lastMonthDate = new Date(currentDate2);
    lastMonthDate.setMonth(lastMonthDate.getMonth() - 1);
    const twoMonthsAgoDate = new Date(lastMonthDate);
    twoMonthsAgoDate.setMonth(twoMonthsAgoDate.getMonth() - 1);
    let lastMonthConsumption = 0;
    let previousMonthConsumption = 0;

    const dailyConsumption = new Map([
      ["Monday", 0],
      ["Tuesday", 0],
      ["Wednesday", 0],
      ["Thursday", 0],
      ["Friday", 0],
      ["Saturday", 0],
      ["Sunday", 0],
    ]);
    const dayNames = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    const hourlyConsumption = new Map(
      Array.from({ length: 24 }, (_, i) => [`${i}:00`, { sum: 0, count: 0 }])
    );

    locations.forEach((location) => {
      let locationTotal = 0;
      location.sensors.forEach((sensor) => {
        sensor.data.forEach((dataPoint) => {
          const hourOfDay = new Date(dataPoint.timestamp).getHours();
          const currentHourStats = hourlyConsumption.get(`${hourOfDay}:00`) || {
            sum: 0,
            count: 0,
          };
          currentHourStats.sum += dataPoint.value;
          currentHourStats.count += 1;
          hourlyConsumption.set(`${hourOfDay}:00`, currentHourStats);

          if (dataPoint.timestamp.slice(0, 10) === yesterdayDateString) {
            totalConsumptionYesterday += dataPoint.value;
          }

          const dataPointDate = dataPoint.timestamp.slice(0, 10);
          if (
            dataPointDate >= oneMonthAgoDate.toISOString().slice(0, 10) &&
            dataPointDate <= currentDate2.toISOString().slice(0, 10)
          ) {
            const previousValue = dailyConsumptionMap.get(dataPointDate) || 0;
            dailyConsumptionMap.set(
              dataPointDate,
              previousValue + dataPoint.value
            );
          }

          const dataPointDate1 = dataPoint.timestamp.slice(0, 10);
          if (
            dataPointDate1 >= twoMonthsAgoDate.toISOString().slice(0, 10) &&
            dataPointDate1 <= currentDate2.toISOString().slice(0, 10)
          ) {
            if (dataPointDate1 >= lastMonthDate.toISOString().slice(0, 10)) {
              lastMonthConsumption += dataPoint.value;
            } else {
              previousMonthConsumption += dataPoint.value;
            }
          }
        });

        const thisWeekDataPoints = sensor.data.filter((e) => {
          const dataDate = new Date(e.timestamp);
          const dataDay = dataDate.getDay();
          const dataWeekStart =
            dataDate.getDate() - (dataDay === 0 ? 6 : dataDay - 1);
          const dataWeekStartDate = new Date(
            dataDate.setDate(dataWeekStart)
          ).toISOString();
          return (
            dataWeekStartDate.slice(0, 10) === weekStartDate.slice(0, 10) &&
            e.timestamp <= now
          );
        });

        thisWeekDataPoints.forEach((dataPoint) => {
          const dayOfWeek = dayNames[new Date(dataPoint.timestamp).getDay()];
          const currentConsumption = dailyConsumption.get(dayOfWeek) || 0;
          dailyConsumption.set(dayOfWeek, currentConsumption + dataPoint.value);
        });
        // Example: High consumption at a specific time
        const highConsumptionDataPoints = sensor.data.filter(
          (e) =>
            e.value > 0.12 &&
            e.timestamp.slice(0, 10) === currentDate.slice(0, 10)
        );
        const highConsumptionDataPointsLocation = sensor.data.filter(
          (e) => e.timestamp.slice(0, 10) === currentDate.slice(0, 10)
        );

        highUsageCount += highConsumptionDataPoints.length;

        highConsumptionDataPoints.forEach((dataPoint) => {
          const time = new Date(dataPoint.timestamp).toLocaleTimeString(); // Format the timestamp to display time

          // Increment occurrences of the specific time
          const count = timeOccurrences.get(time) || 0;
          timeOccurrences.set(time, count + 1);
        });
        highConsumptionDataPointsLocation.forEach((dataPoint) => {
          const time = new Date(dataPoint.timestamp).toLocaleTimeString(); // Format the timestamp to display time

          // Increment occurrences of the specific time
          const count = timeOccurrences.get(time) || 0;
          timeOccurrences.set(time, count + 1);

          locationTotal += dataPoint.value;
        });
      });
      locationConsumption.set(location.name, locationTotal);
    });

    // Find the most frequent time
    let mostFrequentTime = "";
    let maxOccurrences = 0;

    timeOccurrences.forEach((count, time) => {
      if (count > maxOccurrences) {
        maxOccurrences = count;
        mostFrequentTime = time;
      }
    });

    let highestConsumingLocation = "";
    let maxConsumption = 0;

    locationConsumption.forEach((total, locationName) => {
      if (total > maxConsumption) {
        maxConsumption = total;
        highestConsumingLocation = locationName;
      }
    });

    let highestConsumingDay = "";
    let lowestConsumingDay = "";
    let maxConsumption1 = -Infinity;
    let minConsumption = Infinity;

    dailyConsumption.forEach((total, dayName) => {
      if (total > maxConsumption1) {
        maxConsumption1 = total;
        highestConsumingDay = dayName;
      }
      if (total < minConsumption) {
        minConsumption = total;
        lowestConsumingDay = dayName;
      }
    });

    // Calculate average consumption for each hour
    const hourlyAverageConsumption = new Map();
    hourlyConsumption.forEach((stats, hour) => {
      hourlyAverageConsumption.set(hour, stats.sum / stats.count);
    });

    // Find the lowest average consumption hour
    let lowestAverageConsumptionHour = "";
    let minAverageConsumption = Infinity;

    hourlyAverageConsumption.forEach((average, hour) => {
      if (average < minAverageConsumption) {
        minAverageConsumption = average;
        lowestAverageConsumptionHour = hour;
      }
    });

    dailyConsumptionMap.forEach((dailyTotal) => {
      dangerLevels.forEach((level) => {
        if (dailyTotal > level.threshold) {
          level.count += 1;
        }
      });
    });

    function pickRandomRecommendations(array, count) {
      const result = [];
      for (let i = 0; i < count; i++) {
        if (array.length > 0) {
          const randomIndex = Math.floor(Math.random() * array.length);
          result.push(array[randomIndex]);
          array.splice(randomIndex, 1);
        }
      }
      return result;
    }
    // Create the general statement

    if (highUsageCount > 0) {
      badRecommendations.push({
        text: `Your usage went high ${highUsageCount} times today across sensors. It occurred most frequently around ${mostFrequentTime}. Consider reducing your usage during this time.`,
        color: "#f09500",
      });
    }

    if (highestConsumingLocation) {
      badRecommendations.push({
        text: `The highest energy consumption today is at ${highestConsumingLocation} with a total of ${maxConsumption.toFixed(
          2
        )}.`,
        color: "#f09500",
      });
    }

    if (highestConsumingDay && lowestConsumingDay) {
      badRecommendations.push({
        text: `This week so far, ${highestConsumingDay} has the highest energy consumption with a total of ${maxConsumption1.toFixed(
          2
        )}, while ${lowestConsumingDay} has the lowest consumption with a total of ${minConsumption.toFixed(
          2
        )}. Consider adjusting your energy usage patterns to balance consumption throughout the week.`,
        color: "#f09500",
      });
    }

    if (lowestAverageConsumptionHour) {
      badRecommendations.push({
        text: `The lowest average energy consumption occurs around ${lowestAverageConsumptionHour}. Consider adjusting your energy usage patterns to take advantage of this low-usage period.`,
        color: "#f09500",
      });
    }

    if (totalConsumptionYesterday <= 12) {
      goodRecommendations.push({
        text: `Good job! Your energy consumption yesterday was below the threshold of ${12}kW/h. Keep up the efficient energy usage!`,
        color: "green",
      });
    } else {
      badRecommendations.push({
        text: `Your energy consumption yesterday was above the threshold of ${12}kW/h. Consider taking steps to reduce your energy usage.`,
        color: "#f09500",
      });
    }

    dangerLevels.forEach((level) => {
      if (level.count > 0) {
        badRecommendations.push({
          text: `In the past month, your daily energy consumption exceeded the danger threshold of ${level.threshold} on ${level.count} days. Consider taking steps to reduce your energy usage to avoid reaching this danger level.`,
          color: "#f09500",
        });
      }
    });

    if (lastMonthConsumption > previousMonthConsumption) {
      const increasePercentage = Math.round(
        ((lastMonthConsumption - previousMonthConsumption) /
          previousMonthConsumption) *
          100
      );
      badRecommendations.push({
        text: `Your energy consumption increased by ${increasePercentage}% in the last month compared to the previous month. Consider taking steps to reduce your energy usage.`,
        color: "#f09500",
      });
    } else {
      const decreasePercentage = Math.round(
        ((previousMonthConsumption - lastMonthConsumption) /
          previousMonthConsumption) *
          100
      );
      goodRecommendations.push({
        text: `Great job! Your energy consumption decreased by ${decreasePercentage}% in the last month compared to the previous month. Keep up the efficient energy usage!`,
        color: "green",
      });
    }

    const pickedGoodRecommendations = pickRandomRecommendations(
      goodRecommendations,
      2
    );
    const pickedBadRecommendations = pickRandomRecommendations(
      badRecommendations,
      2
    );

    const recommendations = [
      ...pickedGoodRecommendations,
      ...pickedBadRecommendations,
    ];

    return recommendations;
  }
}

function mapStateToProps(state) {
  return {
    user: state.activeUser,
  };
}

export default connect(mapStateToProps)(home);
