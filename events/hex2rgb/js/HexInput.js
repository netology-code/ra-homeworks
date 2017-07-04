'use strict';

const HexInput = props => {
  function onChange() {
    props.onChange(this.value);
  }

  return (
    <input
      value={props.value}
      onChange={onChange}
      type="text"
      className="hex-field js-hex-field"
      placeholder="#000000" />
  );
};
