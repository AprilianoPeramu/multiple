import "./Avatar.css";

const Avatar = (props) => {
  
  return (
    
    <div className="App">
      <div className="container">
        <div className="card">
      {props.img.map((item, i) => i < props.data && (
      <div className="defaultClass">
        <img style={{width: props.size}} className="pic"  src={item.img} alt={props.nama} />
      </div>
     ))}
     <div className="oke" >
             <h1>+{props.b - props.data}</h1>
      </div>
      </div>
    </div>
    </div>
  )
};
export default Avatar;
