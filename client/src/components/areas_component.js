import React from "react";
import ReactFC from "react-fusioncharts";
import ReactDOM from "react-dom";
import jwt_decode from "jwt-decode";
import {
  usage_today,
  usage_yesterday,
  usage_thismonth,
  usage_lastmonth,
  usage_thisyear,
  usage_lastyear,
} from "../areas/areas_data1";

class AreaComponent extends React.Component {
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
    document.getElementById("u1").click();
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

    // document.getElementById("u2").style.borderBottom = "none";
    //document.getElementById("u1").style.borderBottom = "solid 3px white";

    //document.getElementById("u2").style.borderBottom = "none";
    //document.getElementById("u2").style.color = "#FDFDFD";
    //document.getElementById("u2").style.opacity = "0.5";
    document.getElementById("u1").style.color = "#FDFDFD";
    document.getElementById("u1").style.opacity = "1";
    document.getElementById("u1").style.borderBottom = "solid 2px #FDFDFD";
    document.getElementById("u1").style.textTransform = "uppercase";
    //document.getElementById("u2").style.textTransform = "uppercase";
    const locNames = [];
    for (var i = 0; i < loc.length; i++) {
      locNames.push(loc[i].name);
    }
    var dataSource;
    if (window.selectedperiod === "today") {
      dataSource = usage_today;

      dataSource.rows.row.length = 0;
      locNames.forEach((location, index) => {
        dataSource.rows.row.push({
          id: index.toString(),
          label: location,
        });
      });
    } else if (window.selectedperiod === "month") {
      dataSource = usage_thismonth;
    } else {
      dataSource = usage_thisyear;
    }

    var chartconfig = { ...this.props.usagechart };
    chartconfig.dataSource = dataSource;

    const chart = <ReactFC {...chartconfig} />;

    ReactDOM.unmountComponentAtNode(
      document.getElementById("us-chart-container")
    );

    ReactDOM.render(chart, document.getElementById("us-chart-container"));
  }
  onClickbutton2() {
    window.b2selected = true;

    //  document.getElementById("u1").style.borderBottom = "none";
    // document.getElementById("u2").style.borderBottom = "solid 3px white";

    document.getElementById("u1").style.borderBottom = "none";
    document.getElementById("u1").style.color = "#FDFDFD";
    document.getElementById("u1").style.opacity = "0.5";
    document.getElementById("u2").style.color = "#FDFDFD";
    document.getElementById("u2").style.opacity = "1";
    document.getElementById("u2").style.borderBottom = "solid 2px #FDFDFD";
    document.getElementById("u1").style.textTransform = "uppercase";
    document.getElementById("u2").style.textTransform = "uppercase";

    var dataSource;

    if (window.selectedperiod === "today") {
      dataSource = usage_yesterday;
    } else if (window.selectedperiod === "month") {
      dataSource = usage_lastmonth;
    } else {
      dataSource = usage_lastyear;
    }

    var chartconfig = { ...this.props.usagechart };
    chartconfig.dataSource = dataSource;

    const chart = <ReactFC {...chartconfig} />;

    ReactDOM.unmountComponentAtNode(
      document.getElementById("us-chart-container")
    );
    ReactDOM.render(chart, document.getElementById("us-chart-container"));
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row pl-5 pr-5 pt-5 pb-0 time-control">
            <div
              className="col-xs-6 mr-4 ml-4 pl-1 pr-1"
              id="u1"
              onClick={this.onClickbutton1}
            >
              TODAY
            </div>

            {/* <div className="col-xs-6 mr-4 ml-4 pl-1 pr-1" id="u2" onClick={this.onClickbutton2}>
                        YESTERDAY
                </div> */}
          </div>
        </div>
        <br />
        <div className="res-chart--parent pt-1 pb-5 pr-5 pl-5">
          <div className="res-chart">
            <div id="us-chart-container" className="pl-2 pr-2 pb-3 pt-4" />
          </div>
        </div>
      </div>
    );
  }
}

export default AreaComponent;
