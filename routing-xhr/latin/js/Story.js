class Story extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: [],
    };
  }

  componentDidMount() {
    this.fetchContent(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.fetchContent(nextProps);
  }

  fetchContent({ match }) {
    const fetchCount = parseInt(match.params.id, 10) ** 2;

    fetch(`https://baconipsum.com/api/?type=meat-and-filler&paras=${fetchCount}`)
      .then(response => response.json())
      .then(content => this.setState({ content }));
  }

  render() {
    return (
      <div className="container mt-5">
        <h1>Рассказ №{this.props.match.params.id}</h1>

        {this.state.content.map(text => <p key={text}>{text}</p>)}  
      </div>
    );
  }
}
