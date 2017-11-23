'use strict';

class App extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            fonts: [],
            selectedFont: null,
            text: ""
        }
    }

    componentDidMount () {
        this.setState({fonts: AbcApi.getFonts()});
    }

    selectFont = (selectedFont) => {
        this.setState({selectedFont});
    }

    renderLines () {
        if (!this.state.selectedFont) return null;
        return this.state.text.split("\n").map((line, i) => {
            return (
                <div className="grid" key={`line-${i}`}>
                    <PictureFont text={line} path={this.state.selectedFont.path}/>
                </div>
            )
        });
    };

    render () {
        return (
            <div className="App">
                <div className="select-font">
                    <h2 className={this.state.selectedFont ? 'hidden' : ''}>Выберите шрифт</h2>
                    <FontSelector fonts={this.state.fonts} onSelect={this.selectFont}
                                  selected={this.state.selectedFont}/>
                </div>
                {this.state.selectedFont
                && <TextRenderLine value={this.state.text} onChange={this.setText}/>
                    }
                {this.state.text && (
                    <div className="render-result">
                        {this.renderLines()}
                    </div>
                )}
            </div>
        );
    }

    setText = (text) => {
        this.setState({text});
    }
}
