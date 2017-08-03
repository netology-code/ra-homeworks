'use strict';

const Icon = props => {
  const { name, size } = props;
  return (
    <i className="material-icons" style={{fontSize: size}}>
      {name}
    </i>
  );
};
