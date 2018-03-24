'use strict';

const New = props => {
    return (
        <div className="wrap-item wrap-item-new">
        <span className="label">New!</span>
        {props.children}
        </div>
    )
};
