import "./Avatar.css";

const Avatar = (props) => {
  console.log(props.size);
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          {props.img.map(
            (item, i) =>
              i < props.data && (
                <div className="defaultClass" key={item.id}>
                  <img
                    style={{
                      width: props.size.width,
                      height: props.size.height,
                    }}
                    className="pic"
                    src={item.img}
                    alt={props.nama}
                  />
                </div>
              )
          )}
          <div
            className="oke"
            style={{
              width: props.size.width,
              height: props.size.height,
            }}
          >
            <h1>+{props.b - props.data}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Avatar;
