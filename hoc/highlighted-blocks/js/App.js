'use strict';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    type: 'video',
                    url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
                    views: 50
                },
                {
                    type: 'video',
                    url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
                    views: 12
                },
                {
                    type: 'article',
                    title: 'Невероятные события в неизвестном поселке...',
                    views: 175
                },
                {
                    type: 'article',
                    title: 'Секретные данные были раскрыты!',
                    views: 1532
                },
                {
                    type: 'video',
                    url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
                    views: 4253
                },
                {
                    type: 'article',
                    title: 'Кот Бегемот обладает невероятной...',
                    views: 12,
                },
            ]
        };
    }

    render() {
        return (
            <List list={this.state.list} />
        );
    }
}