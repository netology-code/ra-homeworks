class SearchBox extends React.Component {

    state = {
        fixed: false,
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

    checkOffsetTop = () => undefined
    setPosition = () => undefined
}
