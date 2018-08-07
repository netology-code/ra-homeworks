const Current = ({ logs }) => (
  <div className="container">
    {logs
      .filter(log => log.length < 300)
      .map(log => (
        <div className="card mt-3" key={log}>
          <div className="card-body">
            <p className="card-text">{log}</p>
          </div>
        </div>
      ))
    }
  </div>
);
