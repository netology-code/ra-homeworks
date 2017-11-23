const Book = ({book, filterBooks}) => {
    let backgroundImage = book.imageLinks && `url(${book.imageLinks.thumbnail})`;
    let style = {
        width: 128,
        height: 193,
        backgroundImage: backgroundImage
    };
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={style}/>
            </div>
            <div className="book-title">{book.title}</div>
            {book.authors && 
                <div className="book-authors">
                    {book.authors.map(author => <button value={author} onClick={() => filterBooks(author)} className="book-author">{author}</button>)}
                </div>
            }
        </div>
    );
};
