// Converted 1:1 from the WordPress theme markup (born2be-media). Edit freely.
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/components/forms/ContactForm';

export default function JournalPage() {
  return (
    <>
    <main className="page journal">
      {" "}
      {" "}
      <section className="journal-hero">
        {" "}
        <div className="journal-hero__container _container">
          {" "}
          <div className="journal-hero__body">
            {" "}
            <h1 className="journal-hero__title">
              {"Journal"}
            </h1>
            {" "}
            <p className="journal-hero__text">
              {"Read to discover, learn to explore. Expand your mind, one article at a time!"}
            </p>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="journal-articles">
        {" "}
        <div className="journal-articles__container _container">
          {" "}
          <div className="journal-articles__body">
            {" "}
            <article className="journal-articles__article">
              {" "}
              <Link href="/why-business-needs-negative-reviews/" className="journal-articles__image">
                <Image src="/wp-content/uploads/2023/11/article-04.png" alt="" width={1752} height={977} className="attachment-post-thumbnail size-post-thumbnail wp-post-image" loading="eager" fetchPriority="high" />
              </Link>
              {" "}
              <Link href="/why-business-needs-negative-reviews/" className="journal-articles__title">
                <h2>
                  {"Why Business Needs Negative Reviews"}
                </h2>
              </Link>
              {" "}
              <div className="journal-articles__bottom">
                {" "}
                <div className="journal-articles__date">
                  {"November 29, 2023"}
                </div>
                {" "}
                <div className="journal-articles__category">
                  {"SERM"}
                </div>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="journal-articles__article">
              {" "}
              <Link href="/what-is-serm-everything-you-need-to-know/" className="journal-articles__image">
                <Image src="/wp-content/uploads/2023/11/article-03.png" alt="" width={1752} height={977} className="attachment-post-thumbnail size-post-thumbnail wp-post-image" loading="eager" />
              </Link>
              {" "}
              <Link href="/what-is-serm-everything-you-need-to-know/" className="journal-articles__title">
                <h2>
                  {"What Is SERM? Everything You Need to Know"}
                </h2>
              </Link>
              {" "}
              <div className="journal-articles__bottom">
                {" "}
                <div className="journal-articles__date">
                  {"November 29, 2023"}
                </div>
                {" "}
                <div className="journal-articles__category">
                  {"SERM"}
                </div>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="journal-articles__article">
              {" "}
              <Link href="/how-to-build-a-solid-employer-reputation/" className="journal-articles__image">
                <Image src="/wp-content/uploads/2023/11/article-02.png" alt="" width={1752} height={977} className="attachment-post-thumbnail size-post-thumbnail wp-post-image" loading="eager" />
              </Link>
              {" "}
              <Link href="/how-to-build-a-solid-employer-reputation/" className="journal-articles__title">
                <h2>
                  {"How to Build a Solid Employer Reputation"}
                </h2>
              </Link>
              {" "}
              <div className="journal-articles__bottom">
                {" "}
                <div className="journal-articles__date">
                  {"November 29, 2023"}
                </div>
                {" "}
                <div className="journal-articles__category">
                  {"SERM"}
                </div>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article className="journal-articles__article">
              {" "}
              <Link href="/what-is-sentiment-analysis/" className="journal-articles__image">
                <Image src="/wp-content/uploads/2023/11/article-01.png" alt="" width={2336} height={1302} className="attachment-post-thumbnail size-post-thumbnail wp-post-image" loading="eager" />
              </Link>
              {" "}
              <Link href="/what-is-sentiment-analysis/" className="journal-articles__title">
                <h2>
                  {"What Is Sentiment Analysis?"}
                </h2>
              </Link>
              {" "}
              <div className="journal-articles__bottom">
                {" "}
                <div className="journal-articles__date">
                  {"November 29, 2023"}
                </div>
                {" "}
                <div className="journal-articles__category">
                  {"UI/UX"}
                </div>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="journal-contacts">
        {" "}
        <div className="journal-contacts__container _container">
          {" "}
          <div className="journal-contacts__body">
            {" "}
            <div className="journal-contacts__form">
              {" "}
              <div className="form-contact">
                {" "}
                <div className="form-contact__col-01">
                  {" "}
                  <h2 className="form-contact__title-form">
                    {"Contact an "}
                    <br />
                    {" "}
                    <span>
                      {"expert"}
                    </span>
                    {" for advice"}
                  </h2>
                  {" "}
                  <div className="form-contact__form">
                    {" "}
                    <ContactForm />
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="form-contact__col-02">
                  {" "}
                  <Link href="/career" className="form-contact__link">
                    {" "}
                    <h2 className="form-contact__title">
                      {"Do you want "}
                      <br />
                      {" to join us?"}
                    </h2>
                    {" "}
                    <span className="form-contact__link-bottom">
                      {" "}
                      <span>
                        {"Explore open job offers!"}
                      </span>
                      {" "}
                      <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {" "}
                        <path fillRule="evenodd" clipRule="evenodd" d="M28.6406 2.28915C28.6406 1.87475 28.476 1.47733 28.183 1.1843C27.89 0.891274 27.4925 0.726654 27.0781 0.726654H8.32812C7.91372 0.726654 7.5163 0.891274 7.22327 1.1843C6.93025 1.47733 6.76562 1.87475 6.76562 2.28915C6.76562 2.70355 6.93025 3.10098 7.22327 3.39401C7.5163 3.68703 7.91372 3.85165 8.32812 3.85165H23.3073L0.973957 26.185C0.820444 26.328 0.697315 26.5005 0.611916 26.6922C0.526516 26.8839 0.480597 27.0908 0.476894 27.3006C0.473194 27.5104 0.511786 27.7188 0.59037 27.9133C0.668955 28.1079 0.785925 28.2846 0.934298 28.433C1.08267 28.5814 1.25941 28.6983 1.45397 28.7769C1.64853 28.8555 1.85692 28.8941 2.06671 28.8904C2.27651 28.8867 2.48342 28.8408 2.67508 28.7554C2.86675 28.67 3.03925 28.5468 3.18229 28.3933L25.5156 6.05999V21.0392C25.5156 21.4536 25.6802 21.851 25.9733 22.144C26.2663 22.437 26.6637 22.6017 27.0781 22.6017C27.4925 22.6017 27.89 22.437 28.183 22.144C28.476 21.851 28.6406 21.4536 28.6406 21.0392V2.28915Z" fill="black"></path>
                        {" "}
                      </svg>
                      {" "}
                    </span>
                    {" "}
                  </Link>
                  {" "}
                  <Image src="/wp-content/uploads/2023/11/Mask-group-4-1.png" alt="image" width={484} height={434} className="img-float" />
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <Image src="/wp-content/uploads/2023/12/ellipse-01.png" alt="image" width={1601} height={1601} className="float-ellipce-01" loading="eager" unoptimized />
        {" "}
        <Image src="/wp-content/uploads/2023/12/ellipse-02.png" alt="image" width={1401} height={1401} className="float-ellipce-02" loading="eager" unoptimized />
        {" "}
        <Image src="/wp-content/uploads/2023/12/ellipse-03.png" alt="image" width={1801} height={1801} className="float-ellipce-03" loading="eager" unoptimized />
        {" "}
        <Image src="/wp-content/uploads/2023/12/ellipse-04.png" alt="image" width={901} height={901} className="float-ellipce-04" loading="eager" unoptimized />
        {" "}
        <Image src="/wp-content/uploads/2023/12/ellipse-05.png" alt="image" width={904} height={959} className="float-ellipce-05" loading="eager" unoptimized />
        {" "}
        <Image src="/wp-content/uploads/2023/12/ellipse-06.png" alt="image" width={901} height={901} className="float-ellipce-06" loading="eager" unoptimized />
        {" "}
      </section>
      {" "}
    </main>
    </>
  );
}
