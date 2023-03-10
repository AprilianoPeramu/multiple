import { useEffect, useState, useRef } from "react";
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
 
  const [data, setData] = useState(0);

  const width = useRef(window.innerWidth);

  console.log(width);

  useEffect(() => {
    //Should Refresh page so it can be responsive
    if (window.innerWidth >= 1024 ) {
      
      setData(6);
      
    } else if (window.innerWidth >= 425 && window.innerWidth <= 767 ) {
      setData(2);
      
    } else {
      setData(5);
    }

  },[data]);


  return (
    <div className="App"> 
        <Avatar variant='outline' img={a} data={data} b={a.length} />   
    </div>
  );
}

export default App;
