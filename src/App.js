import { useEffect, useState } from "react";
import "./App.css";
import Avatar from "./Avatar";


let a = [
  {
    id: 1,
    img: require('./asset/Picture.png')
  },
  {
    id: 2,
    img: require('./asset/Picture.png')
  },
  {
    id: 3,
    img: require('./asset/Picture.png')
  },
  {
    id: 4,
    img: require('./asset/Picture.png')
  },
  {
    id: 5,
    img: require('./asset/Picture.png')
  },
  {
    id: 6,
    img: require('./asset/Picture.png')
  },
  {
    id: 7,
    img: require('./asset/Picture.png')
  },
  {
    id: 8,
    img: require('./asset/Picture.png')
  },
];

function App() {
 
  let [data, setData] = useState(0);

  const width = window.innerWidth;

  useEffect(() => {
    
    if (width >= 1024 ) {
      
      setData(6);
      
    } else if (width >= 425 && width <= 767 ) {
      setData(2);
      
    }else{
      setData(5);
    }

  },[width, data]);

  return (
    <div className="App">
      {a.map((a, i) => i < data && (
        <Avatar img={a.img} /> 
        ))}
         <div className="oke">
            <h1>+{a.length - data}</h1>
         </div>
    </div>
  );
}

export default App;
