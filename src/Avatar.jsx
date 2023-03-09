import "./Avatar.css";

const Avatar = (props) => {
  return (
    <div className="defaultClass">
        <img style={{ width : "100px", height : "100px"}}  src={props.img} alt={props.nama} />
    </div>
  )
};
export default Avatar;
