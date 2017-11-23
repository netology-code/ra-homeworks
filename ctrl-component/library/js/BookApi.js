const api = "https://www.googleapis.com/books/v1";
const headers = {
    'Accept': 'application/json'
};

class BookApi {

    /**
     * Performs a book search and maps the result to an array of book info + id.
     * Reference https://developers.google.com/books/docs/v1/reference/volumes/list
     * @param query
     * @returns {Promise.<TResult>}
     */
    static query (query) {
        return fetch(`${api}/volumes?q=${query}`, {headers})
            .then(res => res.json())
            .then(data => {
                return data.items ? data.items.map(item => {
                    let book = item.volumeInfo;
                    book.id = item.id;
                    return book;
                }) : [];
            });
    }
}