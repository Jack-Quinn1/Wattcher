import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const App = () => {
  const history = useNavigate();
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  const [dayRate, setDayRate] = useState("");
  const [nightRate, setNightRate] = useState("");
  //   const [country, setCountry] = useState("");
  //   const [currentProvider, setCurrentProvider] = useState("");
  // const [tempName, setTempName] = useState("");
  // const [tempEmail, setTempEmail] = useState("");
  // const [tempDayRate, setTempDayRate] = useState("");
  // const [tempNightRate, setTempNightRate] = useState("");
  //   const [tempCountry, setTempCountry] = useState("");
  //   const [tempCurrentProvider, setTempCurrentProvider] = useState("");
  const [locations, setLocations] = useState([{ name: "", sensors: [] }]);

  const handleLocationChange = (index, e) => {
    const newLocations = [...locations];
    newLocations[index].name = e.target.value;
    setLocations(newLocations);
  };

  const handleSensorChange = (locationIndex, sensorIndex, e) => {
    const newLocations = [...locations];
    newLocations[locationIndex].sensors[sensorIndex].number = e.target.value;
    setLocations(newLocations);
  };

  const handleAddLocation = (e) => {
    e.preventDefault();
    const newLocations = [...locations, { name: "", sensors: [] }];
    setLocations(newLocations);
  };

  const handleAddSensor = (index, e) => {
    e.preventDefault();
    const newLocations = [...locations];
    newLocations[index].sensors.push({ number: "", data: makeDataset() });
    setLocations(newLocations);
    console.log(newLocations);
  };

  const handleDeleteLocation = (index) => {
    const newLocations = [...locations];
    newLocations.splice(index, 1);
    setLocations(newLocations);
  };

  const handleDeleteSensor = (locationIndex, sensorIndex) => {
    const newLocations = [...locations];
    newLocations[locationIndex].sensors.splice(sensorIndex, 1);
    setLocations(newLocations);
  };

  // async function populateProfile() {
  //   const req = await fetch("http://localhost:3001/api/update", {
  //     headers: {
  //       "x-access-token": localStorage.getItem("token"),
  //     },
  //   });
  //   const data = await req.json();
  //   if (data.status === "ok") {
  //     setName(data.name);
  //     setEmail(data.email);
  //     setDayRate(data.dayRate);
  //     setNightRate(data.nightRate);
  //     //   setCountry(data.country);
  //     //   setCurrentProvider(data.currentProvider);
  //   } else {
  //     alert(data.error);
  //   }
  // }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
    }
    if (token) {
      const user = jwt_decode(token);
      //   if (!user) {
      //     localStorage.removeItem("token");
      //     history.replace("./login");
      //   } else {
      //populateProfile();
      //}
    }
  }, []);

  async function updateProfile(event) {
    event.preventDefault();
    const req = await fetch("http://localhost:3001/api/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        // name: tempName,
        // email: tempEmail,
        dayRate,
        nightRate,
        locations: locations,
      }),
    });
    const data = await req.json();
    if (data.status === "ok") {
      // setTempName("");
      // setName(data.name);
      // setTempEmail("");
      // setEmail(data.email);
      // setTempDayRate("");
      // setDayRate(data.dayRate);
      // setTempNightRate("");
      // setNightRate(data.nightRate);
      setLocations(data.locations);
      window.location.href = "/dashboard";
    } else {
      alert(data.error);
    }
  }

  function makeDataset() {
    const arr = [];

    const startDate = new Date("2022-01-01T00:00:00Z");

    for (let i = 0; i < 11003; i++) {
      const timestamp = new Date(startDate.getTime() + i * 60 * 60 * 1000);
      const hour = timestamp.getUTCHours();
      let num;

      if (hour >= 6 && hour < 23) {
        num = Math.random() * (0.0425 - 0.125) + 0.125;
      } else {
        num = Math.random() * (0.0015 - 0.0125) + 0.0125;
      }

      arr.push({ value: num, timestamp: timestamp.toISOString() });
    }

    console.log(arr);
    return arr;
  }

  const handleUpdateLocation = (locationIndex, e) => {
    e.preventDefault();
    const newLocations = [...locations];
    const arr = makeDataset();
    newLocations[locationIndex].data = arr;
    setLocations(newLocations);
  };

  return (
    <div className="profile-container">
      <div className="profile-form-wrapper">
        <form className="profile-form">
          <h1>Setup Profile</h1>
          {/* <label>Name: </label>
          <input
            type="text"
            placeholder={name}
            value={tempName}
            onChange={(e) => setTempName(e.target.value)}
          />
          <br />
          <label>Email: </label>
          <input
            value={tempEmail}
            onChange={(e) => setTempEmail(e.target.value)}
            type="email"
            placeholder={email}
          />
          <br /> */}
          {/* <label>Day Rate: </label> */}
          <input
            value={dayRate}
            onChange={(e) => setDayRate(e.target.value)}
            type="text"
            // placeholder={dayRate}
            //required="true"
            placeholder="Day Rate"
            className="profile-input"
          />
          {/* <br />
          <label>Night Rate: </label> */}
          <input
            value={nightRate}
            onChange={(e) => setNightRate(e.target.value)}
            type="text"
            //placeholder={nightRate}
            placeholder="Night Rate"
            className="profile-input"
          />
          <div className="first">
            {locations &&
              locations.map((location, locationIndex) => (
                <div key={locationIndex} className="location-container">
                  <div className="location-input-wrapper">
                    <input
                      type="text"
                      placeholder="Enter location name"
                      value={location.name}
                      onChange={(e) => handleLocationChange(locationIndex, e)}
                      className="profile-input-location"
                    />
                    <div className="location-buttons">
                      <button
                        onClick={(e) => handleAddSensor(locationIndex, e)}
                      >
                        Add Sensor
                      </button>
                      <button
                        onClick={() => handleDeleteLocation(locationIndex)}
                      >
                        Delete Location
                      </button>
                    </div>
                  </div>
                  {location.sensors.map((sensor, sensorIndex) => (
                    <div
                      key={`${locationIndex}-${sensorIndex}`}
                      className="sensor-wrapper"
                    >
                      <div className="sensor-container">
                        <input
                          className="profile-input-sensor"
                          type="text"
                          placeholder="Enter sensor number"
                          value={sensor.number}
                          onChange={(e) =>
                            handleSensorChange(locationIndex, sensorIndex, e)
                          }
                        />
                        <button
                          onClick={() =>
                            handleDeleteSensor(locationIndex, sensorIndex)
                          }
                        >
                          Delete Sensor
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            <button onClick={(e) => handleAddLocation(e)}>Add Location</button>
          </div>
          <input
            type="submit"
            value="Update Profile"
            onClick={updateProfile}
            className="profile-submit"
          />
        </form>
        {/* <div className="col-md-8 pt-4 mt-3">
        <a href="/dashboard" class="btn customButton large">
          Back
        </a>
      </div> */}
        {/* <button onClick={makeDataset}>Make Dataset</button>
      <button onClick={handleUpdateLocation}>Update profile dataset</button> */}
      </div>
    </div>
  );
};

export default App;
