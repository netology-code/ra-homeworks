class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Menu/>
          <div className="page">
            <Route path="/" exact component={HomePage} />
            <Route path="/drift" component={DriftPage} />
            <Route path="/timeattack" component={TimeAttackPage} />
            <Route path="/forza" component={ForzaPage} />
          </div>
        </div>
      </Router>
    );
  }
}