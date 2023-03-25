import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const App = () => {
  const history = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dayRate, setDayRate] = useState("");
  const [nightRate, setNightRate] = useState("");
  //   const [country, setCountry] = useState("");
  //   const [currentProvider, setCurrentProvider] = useState("");
  const [tempName, setTempName] = useState("");
  const [tempEmail, setTempEmail] = useState("");
  const [tempDayRate, setTempDayRate] = useState("");
  const [tempNightRate, setTempNightRate] = useState("");
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

  async function populateProfile() {
    const req = await fetch("http://localhost:3001/api/update", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });
    const data = await req.json();
    if (data.status === "ok") {
      setName(data.name);
      setEmail(data.email);
      setDayRate(data.dayRate);
      setNightRate(data.nightRate);
      //   setCountry(data.country);
      //   setCurrentProvider(data.currentProvider);
    } else {
      alert(data.error);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt_decode(token);
      //   if (!user) {
      //     localStorage.removeItem("token");
      //     history.replace("./login");
      //   } else {
      populateProfile();
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
        name: tempName,
        email: tempEmail,
        dayRate: tempDayRate,
        nightRate: tempNightRate,
        locations: locations,
      }),
    });
    const data = await req.json();
    if (data.status === "ok") {
      setTempName("");
      setName(data.name);
      setTempEmail("");
      setEmail(data.email);
      setTempDayRate("");
      setDayRate(data.dayRate);
      setTempNightRate("");
      setNightRate(data.nightRate);
      setLocations(data.locations);
    } else {
      alert(data.error);
    }
  }

  function makeDataset() {
    const arr = [];

    const startDate = new Date("2022-01-01T00:00:00Z");

    for (let i = 0; i < 11005; i++) {
      const timestamp = new Date(startDate.getTime() + i * 60 * 60 * 1000);
      const hour = timestamp.getUTCHours();
      let num;

      if (hour >= 6 && hour < 23) {
        num = Math.random() * (0.54 - 0.4) + 0.4;
      } else {
        num = Math.random() * (0.2 - 0.15) + 0.15;
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
    <div>
      <h1>Update Profile</h1>
      <form>
        <label>Name: </label>
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
        <br />
        <label>Day Rate: </label>
        <input
          value={tempDayRate}
          onChange={(e) => setTempDayRate(e.target.value)}
          type="text"
          placeholder={dayRate}
          //required="true"
        />
        <br />
        <label>Night Rate: </label>
        <input
          value={tempNightRate}
          onChange={(e) => setTempNightRate(e.target.value)}
          type="text"
          placeholder={nightRate}
        />
        <br />
        <br />
        <div>
          {locations &&
            locations.map((location, locationIndex) => (
              <div key={locationIndex}>
                <input
                  type="text"
                  placeholder="Enter location name"
                  value={location.name}
                  onChange={(e) => handleLocationChange(locationIndex, e)}
                />
                <button onClick={(e) => handleAddSensor(locationIndex, e)}>
                  Add Sensor
                </button>
                <button onClick={() => handleDeleteLocation(locationIndex)}>
                  Delete Location
                </button>
                {location.sensors.map((sensor, sensorIndex) => (
                  <div key={`${locationIndex}-${sensorIndex}`}>
                    <input
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
                ))}
              </div>
            ))}
          <button onClick={(e) => handleAddLocation(e)}>Add Location</button>
        </div>
        <input type="submit" value="UpdateProfile" onClick={updateProfile} />
      </form>
      <div className="col-md-8 pt-4 mt-3">
        <a href="/dashboard" class="btn customButton large">
          Back
        </a>
      </div>
      <button onClick={makeDataset}>Make Dataset</button>
      <button onClick={handleUpdateLocation}>Update profile dataset</button>
    </div>
  );
};

export default App;
