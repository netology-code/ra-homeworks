const Archive = ({ logs }) => (
  <div className="container">
    {logs
      .filter(log => log.length >= 300)
      .map(log => (
        <div className="alert alert-dark mt-3" key={log}>
          Архивная запись: {log}
        </div>
      ))
    }
  </div>
);
