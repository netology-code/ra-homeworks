const ReaderView = ({ toNextPage, toPrevPage, currentPageNumber, totalPages, page }) => (
  <section className="row content">
    <section className="col-sm-12 col-lg-10 offset-lg-1">
      <article className="article">
        <h2 className="article__name">Сборник: "Самые важные рефераты современности"</h2>
        <h3>{page.title}</h3>
        {page.content.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
      </article>
    </section>

    <section className="col-sm-6 col-lg-5 offset-lg-1">
      <button className="button" onClick={toNextPage}>назад</button>
    </section>
    <section className="col-sm-6 col-lg-5">
      <button className="button" onClick={toPrevPage}>вперед</button>
    </section>
  </section>
);
