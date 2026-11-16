 
// Converted 1:1 from the WordPress theme markup (born2be-media). Edit freely.
import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <>
    <main id="primary" className="site-main">
      {" "}
      <section className="error-404 not-found">
        {" "}
        <header className="page-header">
          {" "}
          <h1 className="page-title">
            {"Oops! That page can’t be found."}
          </h1>
          {" "}
        </header>
        {" "}
        <div className="page-content">
          {" "}
          <p>
            {"It looks like nothing was found at this location. Maybe try one of the links below or a search?"}
          </p>
          {" "}
          <form role="search" method="get" className="search-form" action="/">
            {" "}
            <label>
              {" "}
              <span className="screen-reader-text">
                {"Search for:"}
              </span>
              {" "}
              <input type="search" className="search-field" placeholder="Search …" defaultValue="" name="s" />
              {" "}
            </label>
            {" "}
            <input type="submit" className="search-submit" defaultValue="Search" />
            {" "}
          </form>
          {" "}
          <div className="widget widget_recent_entries">
            {" "}
            <h2 className="widgettitle">
              {"Recent Posts"}
            </h2>
            {" "}
            <ul>
              {" "}
              <li>
                {" "}
                <Link href="/why-business-needs-negative-reviews/">
                  {"Why Business Needs Negative Reviews"}
                </Link>
                {" "}
              </li>
              {" "}
              <li>
                {" "}
                <Link href="/what-is-serm-everything-you-need-to-know/">
                  {"What Is SERM? Everything You Need to Know"}
                </Link>
                {" "}
              </li>
              {" "}
              <li>
                {" "}
                <Link href="/how-to-build-a-solid-employer-reputation/">
                  {"How to Build a Solid Employer Reputation"}
                </Link>
                {" "}
              </li>
              {" "}
              <li>
                {" "}
                <Link href="/what-is-sentiment-analysis/">
                  {"What Is Sentiment Analysis?"}
                </Link>
                {" "}
              </li>
              {" "}
            </ul>
            {" "}
          </div>
          {" "}
          <div className="widget widget_categories">
            {" "}
            <h2 className="widget-title">
              {"Most Used Categories"}
            </h2>
            {" "}
            <ul>
              {" "}
              <li className="cat-item cat-item-7">
                <Link href="/category/serm/">
                  {"SERM"}
                </Link>
                {" (3) "}
              </li>
              {" "}
              <li className="cat-item cat-item-8">
                <Link href="/category/ui-ux/">
                  {"UI/UX"}
                </Link>
                {" (1) "}
              </li>
              {" "}
            </ul>
            {" "}
          </div>
          {" "}
          <div className="widget widget_archive">
            <h2 className="widgettitle">
              {"Archives"}
            </h2>
            <p>
              {"Try looking in the monthly archives. 🙂"}
            </p>
            {" "}
            <label className="screen-reader-text" htmlFor="archives-dropdown--1">
              {"Archives"}
            </label>
            {" "}
            <select id="archives-dropdown--1" name="archive-dropdown">
              {" "}
              <option defaultValue="">
                {"Select Month"}
              </option>
              {" "}
              <option defaultValue="https://born2be.media/2023/11/">
                {" November 2023 "}
              </option>
              {" "}
            </select>
            {" "}
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
    </main>
    </>
  );
}
