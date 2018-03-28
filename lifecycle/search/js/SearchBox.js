class SearchBox extends React.Component {

    componentWillMount() {
        this.setState({
            fixed: false,
        })
    }

    render () {
        return (
            <section className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <input
                            className={`search-box ${this.state.fixed ? 'search-box_fixed' : null}`}
                            placeholder="Поиск"
                        >
                        </input>
                    </div>
                </div>
            </section>
        );
    }

    checkOffsetTop() {
        return undefined;
    }

    setPosition() {
        return undefined;
    }
}
