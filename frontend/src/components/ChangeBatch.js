import { useState } from "react";
import axios from "axios";

const ChangeBatch = (props) => {
  const [newBatch, setNewBatch] = useState("");
  const [personId, setPersonId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await axios.put(
      "https://ck-yoga.onrender.com/api/v1/person/changeBatch",
      {
        personId,
        newBatch,
      }
    );

    if (data.data.success) {
      alert("successfully changed batch");
    } else {
      alert(data.data.message);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center border border-dark">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="personId" className="form-label">
            PersonId
          </label>
          <input
            type="text"
            value={personId}
            name="personId"
            onChange={(e) => setPersonId(e.target.value)}
            required
          />
        </div>
        <select
          className="form-select"
          name="newBatch"
          value={newBatch}
          onChange={(e) => setNewBatch(e.target.value)}
        >
          <option value="">Batch</option>
          <option value="6-7AM">6-7AM</option>
          <option value="7-8AM">7-8AM</option>
          <option value="8-9AM">8-9AM</option>
          <option value="5-6PM">5-6PM</option>
        </select>
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ChangeBatch;
