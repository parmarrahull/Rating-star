import React, { useEffect, useState } from "react";

const App = () => {
  const [number, setNumber] = useState(null);
  const [list, setList] = useState([]);
  const handleChange = (value) => {
    let num = parseFloat(value);
    num = Math.round(num * 2) / 2;
    const arr = [];
    if (num <= 5) {
      for (let i = 1; i <= num; i++) {
        arr.push("full");
      }
      if (num % 1 !== 0) {
        arr.push("half");
      }

      if (arr.length < 5) {
        let tmp = 5 - arr.length;
        for (let i = 1; i <= tmp; i++) {
          arr.push("empty");
        }
      }
    }
    setList(arr);
  };
  return (
    <>
      <input type="number" onChange={(e) => handleChange(e.target.value)} />
      <h1>Rating: {number}</h1>

      <div style={{ display: "flex", flexDirection: "col" }}>
        {list.map((listValue) => (
          <div>
            {listValue === "full" && (
              <img
                src="https://pngimg.com/uploads/star/star_PNG1592.png"
                height="50"
                width="50"
              />
            )}
            {listValue === "half" && (
              <img
                src="https://www.pngfind.com/pngs/m/536-5360626_file-star-half-svg-star-half-hd-png.png"
                height="50"
                width="50"
              />
            )}
            {listValue === "empty" && (
              <img
                src="https://png.pngtree.com/png-clipart/20190705/original/pngtree-vector-star-icon-png-image_4187383.jpg"
                height="50"
                width="50"
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default App;