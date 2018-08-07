class ArticlePage extends React.Component {
  render() {
    const article = articles.find(a => a.id === parseInt(window.location.search.split('=')[1], 10))

    return (
      <div>
        <Nav />
        <article className="container m-5">
          <h1>{article.title}</h1>
          {article.body.split('\n').map(text => <p key={text}>{text}</p>)}
        </article>
      </div>
    );
  }
}
