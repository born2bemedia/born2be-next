// Converted 1:1 from the WordPress theme markup (born2be-media). Edit freely.
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/components/forms/ContactForm';

export default function SermPage() {
  return (
    <>
    <main className="page serm">
      {" "}
      {" "}
      <section className="serm-head">
        {" "}
        <div className="serm-head__container _container">
          {" "}
          <div className="serm-head__body">
            {" "}
            <h2 className="serm-head__title">
              {" "}
              <svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                {" "}
                <path d="M73.1484 5.02588C70.8259 5.02588 68.8847 6.62463 68.3259 8.77588H59.2997C58.8847 8.77588 58.4972 8.98213 58.2647 9.32463L56.4084 12.0671C51.7372 9.46588 46.3647 7.97713 40.6484 7.97713C34.9322 7.97713 29.5597 9.46588 24.8884 12.0671L23.0322 9.32463C22.7997 8.98213 22.4122 8.77588 21.9972 8.77588H12.9709C12.4122 6.62463 10.4709 5.02588 8.14844 5.02588C5.39094 5.02588 3.14844 7.26838 3.14844 10.0259C3.14844 12.7834 5.39094 15.0259 8.14844 15.0259C10.4709 15.0259 12.4122 13.4271 12.9709 11.2759H21.3334L22.7497 13.3684C13.9597 19.1909 8.14844 29.1659 8.14844 40.4771C8.14844 52.0184 14.1997 62.1659 23.2909 67.9334L21.4384 69.7446H12.9709C12.4122 67.5934 10.4709 65.9946 8.14844 65.9946C5.39094 65.9946 3.14844 68.2371 3.14844 70.9946C3.14844 73.7521 5.39094 75.9946 8.14844 75.9946C10.4709 75.9946 12.4122 74.3959 12.9709 72.2446H21.9484C22.2747 72.2446 22.5884 72.1159 22.8222 71.8884L25.5347 69.2359C30.0534 71.6196 35.1934 72.9771 40.6484 72.9771C58.5684 72.9771 73.1484 58.3984 73.1484 40.4771C73.1484 29.1659 67.3372 19.1909 58.5472 13.3684L59.9634 11.2759H68.3259C68.8847 13.4271 70.8259 15.0259 73.1484 15.0259C75.9059 15.0259 78.1484 12.7834 78.1484 10.0259C78.1484 7.26838 75.9059 5.02588 73.1484 5.02588ZM8.14844 12.5259C6.76969 12.5259 5.64844 11.4046 5.64844 10.0259C5.64844 8.64713 6.76969 7.52588 8.14844 7.52588C9.52719 7.52588 10.6484 8.64713 10.6484 10.0259C10.6484 11.4046 9.52719 12.5259 8.14844 12.5259ZM8.14844 73.4946C6.76969 73.4946 5.64844 72.3734 5.64844 70.9946C5.64844 69.6159 6.76969 68.4946 8.14844 68.4946C9.52719 68.4946 10.6484 69.6159 10.6484 70.9946C10.6484 72.3734 9.52719 73.4946 8.14844 73.4946ZM24.1509 15.4396L25.9747 18.1346C26.3647 18.7096 27.1459 18.8534 27.7109 18.4696C28.2834 18.0821 28.4322 17.3059 28.0459 16.7334L26.2934 14.1434C30.2159 11.9959 34.6684 10.7046 39.3997 10.5096V39.2284H10.6797C11.0897 29.2959 16.3509 20.5971 24.1509 15.4396ZM27.4197 67.3946L30.1009 64.7734C30.5947 64.2909 30.6034 63.4996 30.1209 63.0059C29.6384 62.5121 28.8472 62.5034 28.3522 62.9859L25.1247 66.1409C16.7872 61.0796 11.1059 52.0709 10.6784 41.7284H40.1309L60.9472 62.5446C55.6009 67.4659 48.4709 70.4784 40.6484 70.4784C35.9022 70.4784 31.4134 69.3646 27.4197 67.3946ZM70.6484 40.4784C70.6484 48.3009 67.6359 55.4309 62.7147 60.7771L41.8984 39.9609V10.5096C46.6297 10.7046 51.0822 11.9959 55.0047 14.1434L53.2522 16.7334C52.8647 17.3059 53.0147 18.0821 53.5872 18.4696C54.1522 18.8534 54.9334 18.7109 55.3234 18.1346L57.1472 15.4396C65.2747 20.8121 70.6484 30.0271 70.6484 40.4784ZM73.1484 12.5271C71.7697 12.5271 70.6484 11.4059 70.6484 10.0271C70.6484 8.64838 71.7697 7.52713 73.1484 7.52713C74.5272 7.52713 75.6484 8.64838 75.6484 10.0271C75.6484 11.4059 74.5272 12.5271 73.1484 12.5271Z" fill="#D9D9D9"></path>
                {" "}
                <path d="M38.7918 49.8594H30.0293C29.3393 49.8594 28.7793 50.4181 28.7793 51.1094C28.7793 51.8006 29.3393 52.3594 30.0293 52.3594H38.7918C39.4818 52.3594 40.0418 51.8006 40.0418 51.1094C40.0418 50.4181 39.4818 49.8594 38.7918 49.8594Z" fill="#9848DF"></path>
                {" "}
                <path d="M38.7918 54.9819H30.0293C29.3393 54.9819 28.7793 55.5407 28.7793 56.2319C28.7793 56.9232 29.3393 57.4819 30.0293 57.4819H38.7918C39.4818 57.4819 40.0418 56.9232 40.0418 56.2319C40.0418 55.5407 39.4818 54.9819 38.7918 54.9819Z" fill="#D9D9D9"></path>
                {" "}
                <path d="M22.6289 27.6431H31.3914C32.0814 27.6431 32.6414 27.0843 32.6414 26.3931C32.6414 25.7018 32.0814 25.1431 31.3914 25.1431H22.6289C21.9389 25.1431 21.3789 25.7018 21.3789 26.3931C21.3789 27.0843 21.9389 27.6431 22.6289 27.6431Z" fill="#9848DF"></path>
                {" "}
                <path d="M22.6289 32.7671H31.3914C32.0814 32.7671 32.6414 32.2083 32.6414 31.5171C32.6414 30.8258 32.0814 30.2671 31.3914 30.2671H22.6289C21.9389 30.2671 21.3789 30.8258 21.3789 31.5171C21.3789 32.2083 21.9389 32.7671 22.6289 32.7671Z" fill="#D9D9D9"></path>
                {" "}
                <path d="M49.5215 31.5171C49.5215 32.2083 50.0815 32.7671 50.7715 32.7671H59.534C60.224 32.7671 60.784 32.2083 60.784 31.5171C60.784 30.8258 60.224 30.2671 59.534 30.2671H50.7715C50.0815 30.2671 49.5215 30.8258 49.5215 31.5171Z" fill="#9848DF"></path>
                {" "}
                <path d="M59.534 35.3906H50.7715C50.0815 35.3906 49.5215 35.9494 49.5215 36.6406C49.5215 37.3319 50.0815 37.8906 50.7715 37.8906H59.534C60.224 37.8906 60.784 37.3319 60.784 36.6406C60.784 35.9494 60.224 35.3906 59.534 35.3906Z" fill="#9848DF"></path>
                {" "}
              </svg>
              {" "}
              <span>
                {"SERM Marketing"}
              </span>
              {" "}
            </h2>
            {" "}
            <p className="serm-head__text">
              {"Prime SERM marketing solutions from Born2Be."}
            </p>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="serm-benefit">
        {" "}
        <div className="serm-benefit__container _container">
          {" "}
          <div className="serm-benefit__body">
            {" "}
            <div className="serm-benefit__col-01">
              {" "}
              <h2 className="serm-benefit__title">
                <span>
                  {"Benefits"}
                </span>
                {" you get"}
              </h2>
              {" "}
            </div>
            {" "}
            <div className="serm-benefit__col-02">
              {" "}
              <div className="serm-benefit__items">
                {" "}
                <div className="serm-benefit__item">
                  {" "}
                  <p className="serm-benefit__text">
                    {"Retaining "}
                    <br />
                    {" customers"}
                  </p>
                  {" "}
                </div>
                {" "}
                <div className="serm-benefit__item">
                  {" "}
                  <p className="serm-benefit__text">
                    {"Stimulating sales "}
                    <br />
                    {" growth"}
                  </p>
                  {" "}
                </div>
                {" "}
                <div className="serm-benefit__item">
                  {" "}
                  <p className="serm-benefit__text">
                    {"Attracting "}
                    <br />
                    {" new ones"}
                  </p>
                  {" "}
                </div>
                {" "}
                <div className="serm-benefit__item">
                  {" "}
                  <p className="serm-benefit__text">
                    {"Increasing "}
                    <br />
                    {" audience loyalty"}
                  </p>
                  {" "}
                </div>
                {" "}
                <div className="serm-benefit__item">
                  {" "}
                  <p className="serm-benefit__text">
                    {"Elevating interest in "}
                    <br />
                    {" your brand"}
                  </p>
                  {" "}
                </div>
                {" "}
                <div className="serm-benefit__item">
                  {" "}
                  <p className="serm-benefit__text">
                    {"Expanding company "}
                    <br />
                    {" influence"}
                  </p>
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
      </section>
      {" "}
      {" "}
      <section className="serm-solutions">
        {" "}
        <div className="serm-solutions__container _container">
          {" "}
          <div className="serm-solutions__body">
            {" "}
            <h2 className="serm-solutions__title">
              <span>
                {"SERM Solutions:"}
              </span>
              {" "}
              <br />
              {" Complex Packages"}
            </h2>
            {" "}
            <div className="serm-solutions__content">
              {" "}
              {" "}
              <div data-spollers="992,max" className="serm-solutions__spoller">
                {" "}
                <button data-spoller="" type="button" className="serm-solutions__subtitle">
                  {" "}
                  <span>
                    {"Basic Plan"}
                  </span>
                  {" "}
                  <svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {" "}
                    <rect y="0.152344" width="56" height="56" rx="28" fill="#FFC169"></rect>
                    {" "}
                    <path d="M19 27.1523H37M37 27.1523L28.5 18.6523M37 27.1523L28.5 35.6523" stroke="#282828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    {" "}
                  </svg>
                  {" "}
                </button>
                {" "}
                <div className="serm-solutions__desc">
                  {" "}
                  <div className="serm-solutions__wrapper">
                    {" "}
                    <ul className="serm-solutions__list">
                      {" "}
                      <li>
                        {"1. Deep online reputation audit"}
                      </li>
                      {" "}
                      <li>
                        {"2. Building a SERM strategy"}
                      </li>
                      {" "}
                      <li>
                        {"3. Creating a company account on review websites and forums relevant to your industry"}
                      </li>
                      {" "}
                      <li>
                        {"4. Creating a Google My Business account and ongoing management of customer interactions"}
                      </li>
                      {" "}
                    </ul>
                    {" "}
                    <ul className="serm-solutions__list">
                      {" "}
                      <li>
                        {"5. Getting your positive reviews and posts to the top of Google search"}
                      </li>
                      {" "}
                      <li>
                        {"6. SEO: improving the search engine ranking through keyword research, link building, and on-page optimization"}
                      </li>
                      {" "}
                      <li>
                        {"7. SMM: managing social media accounts to promote a positive online reputation"}
                      </li>
                      {" "}
                      <li>
                        {"8. Reporting and analytics"}
                      </li>
                      {" "}
                    </ul>
                    {" "}
                    <a href="#plan-serm" className="serm-solutions__link-plan mobile _popup-link" id="open_pop_up" data-pack="Basic Plan">
                      {" "}
                      <span>
                        {"BUY"}
                      </span>
                      {" "}
                      <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {" "}
                        <rect x="0.564941" y="0.5" width="56" height="56" rx="28" fill="#FFC169"></rect>
                        {" "}
                        <path d="M19.5649 27.5H37.5649M37.5649 27.5L29.0649 19M37.5649 27.5L29.0649 36" stroke="#282828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        {" "}
                      </svg>
                      {" "}
                    </a>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <a href="#plan-serm" className="serm-solutions__link-plan _popup-link" id="open_pop_up" data-pack="Basic Plan">
                  {" "}
                  <span>
                    {"BUY"}
                  </span>
                  {" "}
                  <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {" "}
                    <rect x="0.564941" y="0.5" width="56" height="56" rx="28" fill="#FFC169"></rect>
                    {" "}
                    <path d="M19.5649 27.5H37.5649M37.5649 27.5L29.0649 19M37.5649 27.5L29.0649 36" stroke="#282828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    {" "}
                  </svg>
                  {" "}
                </a>
                {" "}
              </div>
              {" "}
              {" "}
              <div data-spollers="992,max" className="serm-solutions__spoller">
                {" "}
                <button data-spoller="" type="button" className="serm-solutions__subtitle">
                  {" "}
                  <span>
                    {"Upgraded Plan"}
                  </span>
                  {" "}
                  <svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {" "}
                    <rect y="0.152344" width="56" height="56" rx="28" fill="#FFC169"></rect>
                    {" "}
                    <path d="M19 27.1523H37M37 27.1523L28.5 18.6523M37 27.1523L28.5 35.6523" stroke="#282828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    {" "}
                  </svg>
                  {" "}
                </button>
                {" "}
                <div className="serm-solutions__desc">
                  {" "}
                  <div className="serm-solutions__wrapper">
                    {" "}
                    <ul className="serm-solutions__list">
                      {" "}
                      <li>
                        {"1. Deep online reputation audit"}
                      </li>
                      {" "}
                      <li>
                        {"2. Building a SERM strategy"}
                      </li>
                      {" "}
                      <li>
                        {"3. Evaluation of the tone of voice for every query and region"}
                      </li>
                      {" "}
                      <li>
                        {"4. Screening the search results and tone of voice’s indices"}
                      </li>
                      {" "}
                      <li>
                        {"5. Creating a company account on review websites and forums relevant to your industry"}
                      </li>
                      {" "}
                      <li>
                        {"6. Creating a Google My Business account and ongoing management of customer interactions"}
                      </li>
                      {" "}
                      <li>
                        {"7. Getting your positive reviews and posts to the top of Google search"}
                      </li>
                      {" "}
                    </ul>
                    {" "}
                    <ul className="serm-solutions__list">
                      {" "}
                      <li>
                        {"8. SEO: improving the search engine ranking through keyword research, link building, and on-page optimization"}
                      </li>
                      {" "}
                      <li>
                        {"9. SMM: managing social media accounts to promote a positive online reputation"}
                      </li>
                      {" "}
                      <li>
                        {"10. Review website monitoring, removing the comments that violate their rules"}
                      </li>
                      {" "}
                      <li>
                        {"11. Providing recommendations to deal with negative reviews"}
                      </li>
                      {" "}
                      <li>
                        {"12. Dealing with customer loyalty: creating triggers and methods to get positive feedback for your brand"}
                      </li>
                      {" "}
                      <li>
                        {"13. Crisis management: developing and implementing a plan of action to mitigate the impact of a negative event or crisis"}
                      </li>
                      {" "}
                      <li>
                        {"14. Reporting and analytics"}
                      </li>
                      {" "}
                    </ul>
                    {" "}
                    <a href="#plan-serm" className="serm-solutions__link-plan mobile _popup-link" id="open_pop_up" data-pack="Upgraded Plan">
                      {" "}
                      <span>
                        {"BUY"}
                      </span>
                      {" "}
                      <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {" "}
                        <rect x="0.564941" y="0.5" width="56" height="56" rx="28" fill="#FFC169"></rect>
                        {" "}
                        <path d="M19.5649 27.5H37.5649M37.5649 27.5L29.0649 19M37.5649 27.5L29.0649 36" stroke="#282828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        {" "}
                      </svg>
                      {" "}
                    </a>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <a href="#plan-serm" className="serm-solutions__link-plan _popup-link" id="open_pop_up" data-pack="Upgraded Plan">
                  {" "}
                  <span>
                    {"BUY"}
                  </span>
                  {" "}
                  <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {" "}
                    <rect x="0.564941" y="0.5" width="56" height="56" rx="28" fill="#FFC169"></rect>
                    {" "}
                    <path d="M19.5649 27.5H37.5649M37.5649 27.5L29.0649 19M37.5649 27.5L29.0649 36" stroke="#282828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    {" "}
                  </svg>
                  {" "}
                </a>
                {" "}
              </div>
              {" "}
              {" "}
              <div data-spollers="992,max" className="serm-solutions__spoller">
                {" "}
                <button data-spoller="" type="button" className="serm-solutions__subtitle">
                  {" "}
                  <span>
                    {"Pro Plan"}
                  </span>
                  {" "}
                  <svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {" "}
                    <rect y="0.152344" width="56" height="56" rx="28" fill="#FFC169"></rect>
                    {" "}
                    <path d="M19 27.1523H37M37 27.1523L28.5 18.6523M37 27.1523L28.5 35.6523" stroke="#282828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    {" "}
                  </svg>
                  {" "}
                </button>
                {" "}
                <div className="serm-solutions__desc">
                  {" "}
                  <div className="serm-solutions__wrapper">
                    {" "}
                    <ul className="serm-solutions__list">
                      {" "}
                      <li>
                        {"1. Deep online reputation audit"}
                      </li>
                      {" "}
                      <li>
                        {"2. Building a SERM strategy"}
                      </li>
                      {" "}
                      <li>
                        {"3. Evaluation of the tone of voice for every query and region"}
                      </li>
                      {" "}
                      <li>
                        {"4. Screening the search results and tone of voice’s indices"}
                      </li>
                      {" "}
                      <li>
                        {"5. Creating a company account on review websites and forums relevant to your industry"}
                      </li>
                      {" "}
                      <li>
                        {"6. Creating a Google My Business account and ongoing management of customer interactions"}
                      </li>
                      {" "}
                      <li>
                        {"7. Getting your positive reviews and posts to the top of Google search"}
                      </li>
                      {" "}
                      <li>
                        {"8. SEO: improving the search engine ranking through keyword research, link building, and on-page optimization"}
                      </li>
                      {" "}
                      <li>
                        {"9. SMM: managing social media accounts to promote a positive online reputation"}
                      </li>
                      {" "}
                      <li>
                        {"10. Review website monitoring, removing the comments that violate their rules"}
                      </li>
                      {" "}
                    </ul>
                    {" "}
                    <ul className="serm-solutions__list">
                      {" "}
                      <li>
                        {"11. Working with external marketplaces: promoting positive and neutral customer reviews, removing and pushing down negative search results"}
                      </li>
                      {" "}
                      <li>
                        {"12. Regular monitoring of the overall public impression online to react on time"}
                      </li>
                      {" "}
                      <li>
                        {"13. Providing recommendations to deal with negative reviews"}
                      </li>
                      {" "}
                      <li>
                        {"14. Dealing with customer loyalty: creating triggers and methods to get positive feedback for your brand"}
                      </li>
                      {" "}
                      <li>
                        {"15. Regular reporting on search query changes, including the local one"}
                      </li>
                      {" "}
                      <li>
                        {"16. Crisis management: developing and implementing a plan of action to mitigate the impact of a negative event or crisis"}
                      </li>
                      {" "}
                      <li>
                        {"17. Brand monitoring solutions"}
                      </li>
                      {" "}
                      <li>
                        {"18. Online PR services"}
                      </li>
                      {" "}
                      <li>
                        {"19. Reporting and analytics"}
                      </li>
                      {" "}
                    </ul>
                    {" "}
                    <a href="#plan-serm" className="serm-solutions__link-plan mobile _popup-link" id="open_pop_up" data-pack="Pro Plan">
                      {" "}
                      <span>
                        {"BUY"}
                      </span>
                      {" "}
                      <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {" "}
                        <rect x="0.564941" y="0.5" width="56" height="56" rx="28" fill="#FFC169"></rect>
                        {" "}
                        <path d="M19.5649 27.5H37.5649M37.5649 27.5L29.0649 19M37.5649 27.5L29.0649 36" stroke="#282828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        {" "}
                      </svg>
                      {" "}
                    </a>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <a href="#plan-serm" className="serm-solutions__link-plan _popup-link" id="open_pop_up" data-pack="Pro Plan">
                  {" "}
                  <span>
                    {"BUY"}
                  </span>
                  {" "}
                  <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {" "}
                    <rect x="0.564941" y="0.5" width="56" height="56" rx="28" fill="#FFC169"></rect>
                    {" "}
                    <path d="M19.5649 27.5H37.5649M37.5649 27.5L29.0649 19M37.5649 27.5L29.0649 36" stroke="#282828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    {" "}
                  </svg>
                  {" "}
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="serm-social">
        {" "}
        <div className="serm-social__container _container">
          {" "}
          <div className="serm-social__body">
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="serm-philosophy">
        {" "}
        <div className="serm-philosophy__container _container">
          {" "}
          <div className="serm-philosophy__body">
            {" "}
            <div className="serm-philosophy__col-01">
              {" "}
              <h2 className="serm-philosophy__title">
                {"Our "}
                <br />
                {" "}
                <span>
                  {"philosophy"}
                </span>
              </h2>
              {" "}
            </div>
            {" "}
            <div className="serm-philosophy__col-02">
              {" "}
              <div className="serm-philosophy__items">
                {" "}
                <div className="serm-philosophy__item">
                  {" "}
                  <p className="serm-philosophy__number">
                    {"01"}
                  </p>
                  {" "}
                  <h3 className="serm-philosophy__item-title">
                    {"Monitoring online "}
                    <br />
                    {" reputation"}
                  </h3>
                  {" "}
                  <p className="serm-philosophy__text">
                    {"Born2Be regularly monitors the online reputation of your brand. It includes tracking search engine results, social media mentions, and reviews."}
                  </p>
                  {" "}
                </div>
                {" "}
                <div className="serm-philosophy__item">
                  {" "}
                  <p className="serm-philosophy__number">
                    {"02"}
                  </p>
                  {" "}
                  <h3 className="serm-philosophy__item-title">
                    {"Optimising online assets"}
                  </h3>
                  {" "}
                  <p className="serm-philosophy__text">
                    {"Our team optimises online assets such as websites, social media profiles, and other digital properties to improve search engine results. It includes using relevant keywords, creating high-quality content, and ensuring that online assets are user-friendly."}
                  </p>
                  {" "}
                </div>
                {" "}
                <div className="serm-philosophy__item">
                  {" "}
                  <p className="serm-philosophy__number">
                    {"03"}
                  </p>
                  {" "}
                  <h3 className="serm-philosophy__item-title">
                    {"Creating positive "}
                    <br />
                    {" content"}
                  </h3>
                  {" "}
                  <p className="serm-philosophy__text">
                    {"One of the most effective ways to improve search engine results is to create positive content highlighting the brand’s strengths, achievements, and values. Born2Be experts apply this through press releases, blog posts, and other types of content that showcase the brand in a positive light."}
                  </p>
                  {" "}
                </div>
                {" "}
                <div className="serm-philosophy__item">
                  {" "}
                  <p className="serm-philosophy__number">
                    {"04"}
                  </p>
                  {" "}
                  <h3 className="serm-philosophy__item-title">
                    {"Building quality "}
                    <br />
                    {" backlinks"}
                  </h3>
                  {" "}
                  <p className="serm-philosophy__text">
                    {"Quality backlinks from reputable sources can help improve search engine rankings and enhance the online reputation of a brand or individual. Our crew builds links from relevant websites, industry publications, and social media platforms."}
                  </p>
                  {" "}
                </div>
                {" "}
                <div className="serm-philosophy__item">
                  {" "}
                  <p className="serm-philosophy__number">
                    {"05"}
                  </p>
                  {" "}
                  <h3 className="serm-philosophy__item-title">
                    {"Responding to "}
                    <br />
                    {" negative feedback"}
                  </h3>
                  {" "}
                  <p className="serm-philosophy__text">
                    {"We respond to negative feedback promptly and professionally to mitigate potential damage to the brand’s online reputation. This includes addressing concerns, offering solutions, and taking corrective action where necessary."}
                  </p>
                  {" "}
                </div>
                {" "}
                <div className="serm-philosophy__item">
                  {" "}
                  <p className="serm-philosophy__number">
                    {"06"}
                  </p>
                  {" "}
                  <h3 className="serm-philosophy__item-title">
                    {"Using paid search"}
                  </h3>
                  {" "}
                  <p className="serm-philosophy__text">
                    {"Paid search can be an effective way to push down negative search engine results and promote positive content. Born2Be uses targeted keywords, creates high-quality ads, and optimises ad campaigns for maximum visibility."}
                  </p>
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
      </section>
      {" "}
      {" "}
      <section className="serm-platform">
        {" "}
        <div className="serm-platform__container _container">
          {" "}
          <div className="serm-platform__body">
            {" "}
            <div className="serm-platform__row-01">
              {" "}
              <h2 className="serm-platform__title">
                {"Reviews platforms we work with"}
              </h2>
              {" "}
              <Image src="/wp-content/uploads/2023/11/img-02.png" alt="image" width={1187} height={847} />
              {" "}
            </div>
            {" "}
            <div className="serm-platform__row-02">
              {" "}
              <div className="serm-platform-slider">
                <div className="marquee-track">
                  {" "}
                  <div className="serm-platform-slider__item">
                    <Image src="/wp-content/uploads/2023/11/marquee-img-03.svg" alt="image" width={1604} height={41} />
                  </div>
                  {" "}
                  <div className="serm-platform-slider__item">
                    <Image src="/wp-content/uploads/2023/11/marquee-img-03.svg" alt="image" width={1604} height={41} />
                  </div>
                  {" "}
                  {/* copies for a seamless loop */}
                  {" "}
                  <div className="serm-platform-slider__item" aria-hidden="true">
                    <Image src="/wp-content/uploads/2023/11/marquee-img-03.svg" alt="image" width={1604} height={41} />
                  </div>
                  {" "}
                  <div className="serm-platform-slider__item" aria-hidden="true">
                    <Image src="/wp-content/uploads/2023/11/marquee-img-03.svg" alt="image" width={1604} height={41} />
                  </div>
                  {" "}
                </div>
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="serm-contacts">
        {" "}
        <div className="serm-contacts__container _container">
          {" "}
          <div className="serm-contacts__body">
            {" "}
            <div className="serm-contacts__form">
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
                  <Link href="/cases" className="form-contact__link">
                    {" "}
                    <h2 className="form-contact__title">
                      {"Explore our "}
                      <br />
                      {" work?"}
                    </h2>
                    {" "}
                    <span className="form-contact__link-bottom">
                      {" "}
                      <span>
                        {"Delve into cases"}
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
