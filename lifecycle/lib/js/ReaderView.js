const ReaderView = ({ toNextPage, toPrevPage, currentPageNumber, totalPages, page }) => (
  <section className="row content">
    <section className="col-sm-12 col-md-2 col-lg-2">
      <button className="button" onClick={toNextPage}>назад</button>

      <div className="progress-container">
        <ProgressBar total={totalPages} completed={currentPageNumber} />
      </div>

      <button className="button" onClick={toPrevPage}>вперед</button>
    </section>

    <section className="col-sm-12 col-md-10 col-lg-10">
      <article className="article">
        <h2 className="article__name">Сборник: "Самые важные рефераты современности"</h2>
        <h3>{page.title}</h3>
        {page.content.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
      </article>
    </section>
  </section>
);
