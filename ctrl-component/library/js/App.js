'use strict';

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            query: "React",
            books: []
        }
    }

    componentDidMount () {
        BookApi.query(this.state.query).then(books => {
            this.setState({books})
        })
    }

    filterBooks = (query) => {
        this.setState({query, books:[]});
        BookApi.query(query).then(books => {
            this.setState({books})
        });
    }

    render () {
        return (
            <div className="App">
                <div className="search-books">
                    <div className="search-books-bar">
                        <div className="search-books-input-wrapper">
                            <SearchBox value={this.state.query}
                                filterBooks={this.filterBooks}/>
                        </div>
                    </div>

                    <div className="search-books-results">
                        <Bookshelf books={this.state.books} filterBooks={this.filterBooks}/>
                    </div>
                </div>
            </div>
        );
    }
}
