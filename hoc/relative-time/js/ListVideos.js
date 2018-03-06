'use strict';

const ListVideos = props => {
    return props.list.map(item => <Video url={item.url} date={item.date} />);
};