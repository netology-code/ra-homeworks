'use strict';

const List = props => {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <Video {...item} />
                );

            case 'article':
                return (
                    <Article {...item} />
                );
        }
    });
};
