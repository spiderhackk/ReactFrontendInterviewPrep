import "./styles.css";

export default function App() {
  const percentage = [0, 10, 30, 50, 75, 90, 100];
  const data = 90;
  return (
    <div className="App">
      <div className="outer">
        {data != 0 ? (
          <div className="inner" style={{ width: `${data}%` }}>
            {data}%
          </div>
        ) : (
          <div>{data}%</div>
        )}
      </div>
    </div>
  );
}
