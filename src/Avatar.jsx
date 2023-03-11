import "./Avatar.css";

const Avatar = ({ data, b, width, height, nama, img }) => {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          {img.map(
            (item, i) =>
              i < data && (
                <div className="defaultClass" key={item.id}>
                  <img
                    style={{
                      width: width,
                      height: height,
                    }}
                    className="pic"
                    src={item.img}
                    alt={nama}
                  />
                </div>
              )
          )}
          <div
            className="oke"
            style={{
              width: width,
              height: height,
            }}
          >
            <h1>+{b - data}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Avatar;
