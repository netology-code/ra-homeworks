'use strict';

const IconSwitch = props => {
  const {icon, onSwitch} = props;
  return (
    <div className="switch-view" onClick={onSwitch}>
      <Icon size={42} name={icon}/>
    </div>
  );
};
