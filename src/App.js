import { useEffect, useState } from "react";
import "./App.css";
import Avatar from "./Avatar";

let a = [
  {
    id: 1,
    img: require("./asset/0001.jpg"),
  },
  {
    id: 2,
    img: require("./asset/0001.jpg"),
  },
  {
    id: 3,
    img: require("./asset/0001.jpg"),
  },
  {
    id: 4,
    img: require("./asset/0001.jpg"),
  },
  {
    id: 5,
    img: require("./asset/0001.jpg"),
  },
  {
    id: 6,
    img: require("./asset/0001.jpg"),
  },
  {
    id: 7,
    img: require("./asset/0001.jpg"),
  },
  {
    id: 8,
    img: require("./asset/0001.jpg"),
  },
];

function App() {
  const [data, setData] = useState(0);
  const [size, setSize] = useState({ width: "", height: "" });

  // get dynamic size
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  // useEffect avatar
  useEffect(() => {
    //Should Refresh page so it can be responsive
    if (window.innerWidth >= 1024) {
      setData(6);
      setSize({ width: "100px", height: "100px" });
    } else if (window.innerWidth >= 320 && window.innerWidth <= 767) {
      setData(2);
      setSize({ width: "90px", height: "90px" });
    } else {
      setData(5);
      setSize({ width: "90px", height: "90px" });
    }
  }, [screenSize.dynamicWidth]);

  return (
    <div className="App">
      <Avatar img={a} data={data} b={a.length} size={size} />
    </div>
  );
}

export default App;
