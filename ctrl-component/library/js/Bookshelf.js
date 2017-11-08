'use strict'

const Bookshelf = ({books, filterBooks}) => {
    return (
        <div className="bookshelf">
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map(book => (<li key={`book-${book.id}`}><Book book={book} filterBooks={filterBooks}/></li>))}
                </ol>
            </div>
        </div>
    );
};