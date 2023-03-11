import "./Avatar.css";

const Avatar = (props) => {
  let time = new Date().toLocaleTimeString();
  let date = new Date().getUTCHours();
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="time">
            <h2>{time}</h2>
            <h2>GMT +{date} Indonesia</h2>
          </div>
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
