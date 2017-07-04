'use strict';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isWarning: false,
      color: props.color,
      result: this.convert(props.color)
    };
  }

  convert(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) {
      return null;
    }
    result.shift();
    return result ? `rgb(${result.map(i => parseInt(i, 16)).join(', ')})` : null;
  }

  checkColor(color) {
    return /^#?([\da-f]{6})$/i.test(color);
  }

  fixColor(color) {
    return color[0] === '#' ? color.slice(0, 7) : `#${color.slice(0, 6)}`;
  }

  change(color) {
    if (this.checkColor(color)) {
      color = this.fixColor(color);
      this.setState({
        color,
        isWarning: false,
        result: this.convert(color)
      });
    } else {
      this.setState({
        isWarning: true,
        color: this.fixColor(color),
        result: 'Ошибка!'
      })
    }
  }
  
  render() {
    const props = {};
    if (this.state.isWarning) {
      props.className = 'warning';
    } else {
      props.style = {
        backgroundColor: this.state.color
      };
    }
    console.log(props);
    return (
      <figure {...props}>
        <HexInput
          value={this.state.color}
          onChange={this.change.bind(this)} />
        <div className="message js-message">{this.state.result}</div>
      </figure>
    );
  }
}
