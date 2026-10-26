export default function NotFound() {
  return (
    <section className="page-intro" aria-labelledby="not-found-title">
      <div className="content-inner not-found-content">
        <p className="section-label">Page not found</p>
        <h1 id="not-found-title">We could not find that page.</h1>
        <p className="page-intro-copy">The address may have changed or the page may not exist.</p>
        <a className="button button-green" href="/">Return to the homepage</a>
      </div>
    </section>
  );
}
