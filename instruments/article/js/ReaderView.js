const ReaderView = ({ toNextPage, toPrevPage, currentPageNumber, totalPages, page }) => (
  <section className="row content">
    <section className="col-sm-12 col-lg-12">
      <article className="article">
        <h2 className="article__name">Сборник: "Самые важные рефераты современности"</h2>
        <h3>{page.title}</h3>
        {page.content.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
      </article>
    </section>

    <section className="col-lg-6">
      <button className="button" onClick={toNextPage}>назад</button>
    </section>
    <section className="col-lg-6">
      <button className="button" onClick={toPrevPage}>вперед</button>
    </section>
  </section>
);
