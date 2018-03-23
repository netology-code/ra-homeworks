'use strict';

const Popular = props => {
    return (
        <div className="wrap-item wrap-item-popular">
        <span className="label">Popular!</span>
        {props.children}
        </div>
    )
};
