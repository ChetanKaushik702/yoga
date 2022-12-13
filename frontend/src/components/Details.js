import { useState } from "react";
import { Country, State } from "country-state-city";
import axios from "axios";

const Details = (props) => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [pincode, setPincode] = useState("");
  const [gender, setGender] = useState("");
  const [batch, setBatch] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDOB] = useState("");

  async function temp() {
    return await axios.post(
      "https://ck-yoga.onrender.com/api/v1/person/register",
      {
        fName,
        lName,
        email,
        password,
        phone,
        city,
        state,
        district,
        pincode,
        country,
        gender,
        batch,
        dob,
      }
    );
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await temp();
    if (data.data.success) {
      alert("Successfully registered");
      console.log(data.data);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center border border-dark">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="fName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            value={fName}
            name="fName"
            onChange={(e) => setFName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            value={lName}
            name="lName"
            onChange={(e) => setLName(e.target.value)}
            required
            //   placeholder="Enter your last name"
          />{" "}
        </div>
        <div className="mb-3">
          <label htmlFor="dob" className="form-label">
            Date-of-Birth
          </label>
          <input
            type="date"
            value={dob}
            name="dob"
            onChange={(e) => setDOB(e.target.value)}
            required
            placeholder="Enter date-of-birth"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            value={password}
            name="password"
            required
            // placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="number"
            value={phone}
            name="phone"
            required
            // placeholder="Enter phoneno"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <select
          className="form-select"
          id="gender"
          name="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <select
          className="form-select"
          id="batch"
          name="batch"
          value={batch}
          onChange={(e) => setBatch(e.target.value)}
        >
          <option value="">Batch</option>
          <option value="6-7AM">6-7AM</option>
          <option value="7-8AM">7-8AM</option>
          <option value="8-9AM">8-9AM</option>
          <option value="5-6PM">5-6PM</option>
        </select>
        <select
          className="form-select"
          required
          name="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="">Country</option>
          {Country &&
            Country.getAllCountries().map((country) => (
              <option key={country.isoCode} value={country.isoCode}>
                {country.name}
              </option>
            ))}
        </select>
        {country && (
          <select
            className="form-select"
            required
            name="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            <option value="">State</option>
            {State &&
              State.getStatesOfCountry(country).map((state) => (
                <option key={state.isoCode} value={state.name}>
                  {state.name}
                </option>
              ))}
          </select>
        )}
        <div className="mb-3">
          <label htmlFor="district" className="form-label">
            District
          </label>
          <input
            type="text"
            value={district}
            name="district"
            required
            placeholder="Enter district name"
            onChange={(e) => setDistrict(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input
            type="text"
            value={city}
            name="city"
            required
            placeholder="Enter city name"
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pincode" className="form-label">
            Pincode
          </label>
          <input
            type="number"
            value={pincode}
            name="pincode"
            required
            placeholder="Enter pincode"
            onChange={(e) => setPincode(e.target.value)}
          />
        </div>
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Details;
