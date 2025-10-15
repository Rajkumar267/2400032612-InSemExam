import { useState } from 'react';
import './App.css';

function App() {
  const [presentCount, setPresentCount] = useState(0);
  const [checked, setChecked] = useState({
    Raj: false,
    Olive: false,
    Kumar: false,
    Tarun: false,
    Karan: false,
    Rohan: false,
    Arjun: false,
    Raman: false,
    Giri: false,
    Raja: false,
    Jayadeep: false,
  });

  function handleChange(e) {
    const name = e.target.name;
    const isChecked = e.target.checked;

    const newChecked = { ...checked, [name]: isChecked };
    setChecked(newChecked);

    let count = 0;
    for (let key in newChecked) {
      if (newChecked[key]) {
        count++;
      }
    }
    setPresentCount(count);
  }

  return (
    <div>
      <h1>Attendance Tracker</h1>
      <label>
        <input
          type="checkbox"
          name="Raj"
          checked={checked.Raj}
          onChange={handleChange}
        />
        2400032612 - Raj
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="Olive"
          checked={checked.Olive}
          onChange={handleChange}
        />
        2400030678  - Olive
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="Kumar"
          checked={checked.Kumar}
          onChange={handleChange}
        />
        2400037826  - Kumar
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="Tarun"
          checked={checked.Tarun}
          onChange={handleChange}
        />
        24000700645  - Tarun
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="Karan"
          checked={checked.Karan}
          onChange={handleChange}
        />
        2400032784  - Karan
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="Rohan"
          checked={checked.Rohan}
          onChange={handleChange}
        />
        2400032615  - Rohan
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="Arjun"
          checked={checked.Arjun}
          onChange={handleChange}
        />
        2400031145  - Arjun
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="Raman"
          checked={checked.Raman}
          onChange={handleChange}
        />
        2400070094  - Raman
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="Giri"
          checked={checked.Giri}
          onChange={handleChange}
        />
        2400031431  - Giri
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="Raja"
          checked={checked.Raja}
          onChange={handleChange}
        />
        2400032978  - Raja
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="Jayadeep"
          checked={checked.Jayadeep}
          onChange={handleChange}
        />
        2400030160  - Jayadeep
      </label>
      <br />
      <p>Total Present: {presentCount}</p>
    </div>
  );
}

export default App;
