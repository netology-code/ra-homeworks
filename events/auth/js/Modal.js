'use strict';

const Modal = props => {
  if (props.isHidden) {
    return null;
  }
  return (
    <div className="Modal">
      {props.children}
    </div>
  );
};

const ModalResult = props => {
  if (props.isHidden) {
    return null;
  }
  return (
    <div className="Modal ModalResult">
      {props.children}
    </div>
  );
};
