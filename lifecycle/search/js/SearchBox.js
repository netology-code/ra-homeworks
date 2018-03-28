class SearchBox extends React.Component {

    state = {
        fixed: false,
    }

    render () {
        return (
            <input
                className={`search-box ${this.state.fixed ? 'search-box_fixed' : null}`}
                placeholder="Поиск"
            >
            </input>
        );
    }

    checkOffsetTop = () => undefined
    setPosition = () => undefined
}
