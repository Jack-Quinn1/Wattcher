import React from "react";
import ReactFC from "react-fusioncharts";
import ReactDOM from "react-dom";
import moment from "moment";
import {
  cost_last_month,
  cost_this_month,
  cost_this_day,
  cost_last_day,
  cost_last_year,
  cost_this_year,
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

    this.onClickbutton1 = this.onClickbutton1.bind(this);
    this.onClickbutton2 = this.onClickbutton2.bind(this);
  }

  componentDidMount() {
    document.getElementById("c1").click();
  }

  onClickbutton1() {
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
    var dataSource1;

    if (window.selectedperiod === "today") {
      dataSource = cost_this_day;
      dataSource1 = cost_this_day1;
      document.getElementById("co-tablecell-title1").innerHTML = moment()
        .subtract(1, "day")
        .format("MMM Do YYYY");
      document.getElementById("co-tablecell-value1").innerHTML =
        todayArr[1] + "kWh";

      var sftVal = 0;

      for (var i = 0; i < parseInt(moment().format("H")); i++) {
        sftVal =
          sftVal + parseFloat(todayDateCon[i]) + parseFloat(todayNightCon[i]);
      }
      sftVal = Math.round(sftVal * 100) / 100;

      document.getElementById("co-tablecell-title2").innerHTML = "So Far Today";
      document.getElementById("co-tablecell-value2").innerHTML = sftVal + "kWh";

      document.getElementById("co-tablecell-title3").innerHTML =
        "Predicted Today";
      document.getElementById("co-tablecell-value3").innerHTML =
        todayArr[2] + "kWh";

      document.getElementById("co-tablecell-title4").style.display = "block";
      document.getElementById("co-tablecell-value4").style.display = "block";

      document.getElementById("co-tablecell-title4").innerHTML =
        "Estimated Savings";
      document.getElementById("co-tablecell-value4").innerHTML =
        Math.round((todayArr[1] - todayArr[2]) * 100) / 100 + "kWh";
    } else if (window.selectedperiod === "month") {
      dataSource = cost_this_month;
      dataSource1 = cost_this_month1;

      document.getElementById("co-tablecell-title1").innerHTML = moment()
        .subtract(1, "month")
        .format("MMMM");
      document.getElementById("co-tablecell-value1").innerHTML =
        monthArr[1] + "kWh";

      var sfmVal = 0;

      for (var i = 0; i < parseInt(moment().format("D")); i++) {
        sfmVal = sfmVal + parseFloat(mElecSplit[i]) + parseFloat(mGasSplit[i]);
      }
      sfmVal = Math.round(sfmVal * 100) / 100;

      document.getElementById("co-tablecell-title2").innerHTML =
        "So Far This Month";
      document.getElementById("co-tablecell-value2").innerHTML = sfmVal + "kWh";

      document.getElementById("co-tablecell-title3").innerHTML =
        "Predicted This Month";
      document.getElementById("co-tablecell-value3").innerHTML =
        monthArr[2] + "kWh";

      document.getElementById("co-tablecell-title4").style.display = "block";
      document.getElementById("co-tablecell-value4").style.display = "block";

      document.getElementById("co-tablecell-title4").innerHTML =
        "Estimated savings";
      document.getElementById("co-tablecell-value4").innerHTML =
        Math.round((monthArr[2] - monthArr[1]) * 100) / 100 + "kWh";
    } else {
      dataSource = cost_this_year;
      dataSource1 = cost_this_year1;

      document.getElementById("co-tablecell-title1").innerHTML = moment()
        .subtract(1, "year")
        .format("YYYY");
      document.getElementById("co-tablecell-value1").innerHTML =
        yearArr[1] + "kWh";

      var styVal = 0;

      for (var i = 0; i < parseInt(moment().format("M")); i++) {
        styVal = styVal + parseFloat(yElecSplit[i]) + parseFloat(yGasSplit[i]);
      }
      styVal = Math.round(styVal * 100) / 100;

      document.getElementById("co-tablecell-title2").innerHTML =
        "So Far This Year";
      document.getElementById("co-tablecell-value2").innerHTML = styVal + "kWh";

      document.getElementById("co-tablecell-title3").innerHTML =
        "Predicted This Year";
      document.getElementById("co-tablecell-value3").innerHTML =
        yearArr[2] + "kWh";

      document.getElementById("co-tablecell-title4").style.display = "block";
      document.getElementById("co-tablecell-value4").style.display = "block";

      document.getElementById("co-tablecell-title4").innerHTML =
        "Estimated Savings";
      document.getElementById("co-tablecell-value4").innerHTML =
        Math.round((yearArr[1] - yearArr[2]) * 100) / 100 + "kWh";
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
  onClickbutton2() {
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
    } else if (window.selectedperiod === "month") {
      dataSource = cost_last_month;
      dataSource1 = cost_last_month1;

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

      var savings_value = Math.round((monthArr[1] - monthArr[0]) * 100) / 100;

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
