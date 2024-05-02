import { useState } from "react";
import "./index.css";

function App() {
  const [rows, setRows] = useState(3);
  const [columns, setColumns] = useState(3);
  return (
    <div className="bg-red-100">
      <div>
        <label>
          Rows:
          <input type="number" value={rows} onChange={(e) => setRows(parseInt(e.target.value, 10))} />
        </label>
      </div>
      <div>
        <label>
          Columns:
          <input type="number" value={columns} onChange={(e) => setColumns(parseInt(e.target.value, 10))} />
        </label>
      </div>
      {Array.from({ length: rows }, (_, i) => (
        <div key={i} style={{ display: "flex" }}>
          {Array.from({ length: columns }, (_, j) => (
            <div key={j} style={{ border: "1px solid black", width: "50px", height: "50px" }}></div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
