'use strict';

const Button = props => {
  const { label } = props;
  return (
    <button className="btn">
      {label}
      <span className="bg"/>
    </button>
  );
};
