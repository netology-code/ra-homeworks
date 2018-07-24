class Map extends React.Component {
  render() {
    return (
      <div>
        Карта
        {this.props.points.map(office => <p>{JSON.stringify(office)}</p>)}
      </div>
    );
  }
}
