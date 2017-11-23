const PictureFont = ({text, path}) => (
    <div className="picture-font grid">
        {text.split("").map((char, i) => {
            return char === " "
                ? <div className="space" key={`space-${i}`}/>
                : <div className="char" key={`${char}-${i}`}>
                    <img className="font-img" src={`${path}/${char}.jpg`} alt={char}/>
                </div>
        })}
    </div>
);

