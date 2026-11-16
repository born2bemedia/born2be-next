// Converted 1:1 from the WordPress theme markup (born2be-media). Edit freely.
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/components/forms/ContactForm';

export default function CareerPage() {
  return (
    <>
    <main className="page career">
      {" "}
      {" "}
      <section className="career-hero">
        {" "}
        <div className="career-hero__container _container">
          {" "}
          <div className="career-hero__body">
            {" "}
            <h1 className="career-hero__title">
              {"Born2Be is looking for the best talent. Maybe, you?"}
            </h1>
            {" "}
            <Image src="/wp-content/uploads/2023/11/career-img-01.png" alt="image" width={1388} height={1347} loading="eager" fetchPriority="high" />
            {" "}
            <div className="career-hero__content">
              {" "}
              <div className="career-hero__col-01">
                {" "}
                <p className="career-hero__text">
                  {"Explore our values and become a part of our family."}
                </p>
                {" "}
              </div>
              {" "}
              <div className="career-hero__col-02">
                {" "}
                <Link href="/agency" className="career-hero__link">
                  {" "}
                  <span>
                    {"Get to know us"}
                  </span>
                  {" "}
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {" "}
                    <rect width="56" height="56" rx="28" fill="#FFC169"></rect>
                    {" "}
                    <path d="M19 27H37M37 27L28.5 18.5M37 27L28.5 35.5" stroke="#282828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    {" "}
                  </svg>
                  {" "}
                </Link>
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
      <section className="career-quote">
        {" "}
        <div className="career-quote__container _container">
          {" "}
          <div className="career-quote__body">
            {" "}
            <h2 className="career-quote__quote _anim-items">
              {"“Hiring the right people is crucial, but it’s even more important to create an environment that allows them to thrive and contribute their best work.” "}
              <span className="author">
                {"© Tony Hsieh"}
              </span>
            </h2>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="career-offers">
        {" "}
        <div className="career-offers__container _container">
          {" "}
          <div className="career-offers__body">
            {" "}
            <h2 className="career-offers__title">
              {"Open job offerings"}
            </h2>
            {" "}
            <div className="career-offers__content">
              {" "}
              {" "}
              <div data-spollers="360,min" className="career-offers__spoller">
                {" "}
                <button data-spoller="" type="button" className="career-offers__button">
                  {" "}
                  <div className="career-offers__head">
                    {" "}
                    <div className="career-offers__label">
                      {" "}
                      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {" "}
                        <path d="M12.25 38.5C9.35462 38.5 7 40.8546 7 43.75C7 46.6454 9.35462 49 12.25 49C15.1454 49 17.5 46.6454 17.5 43.75C17.5 40.8546 15.1454 38.5 12.25 38.5ZM12.25 47.25C10.3197 47.25 8.75 45.6803 8.75 43.75C8.75 41.8197 10.3197 40.25 12.25 40.25C14.1803 40.25 15.75 41.8197 15.75 43.75C15.75 45.6803 14.1803 47.25 12.25 47.25Z" fill="#9848DF"></path>
                        {" "}
                        <path d="M17.0161 11.467L8.26612 7.09204C7.99575 6.95642 7.67287 6.97042 7.41475 7.13054C7.1575 7.28979 7 7.57154 7 7.87517V16.6252C7 16.9288 7.1575 17.2097 7.41475 17.3698C7.67287 17.529 7.99575 17.543 8.26612 17.4083L17.0161 13.0333C17.3128 12.8854 17.5 12.5818 17.5 12.2502C17.5 11.9185 17.3128 11.6158 17.0161 11.467ZM8.75 15.2085V9.29004L14.6685 12.2493L8.75 15.2085Z" fill="#9848DF"></path>
                        {" "}
                        <path d="M45.5 16.3214C45.017 16.3214 44.625 16.7134 44.625 17.1964V21.875C44.625 22.358 45.017 22.75 45.5 22.75H51.625C53.0723 22.75 54.25 21.5723 54.25 20.125V4.375C54.25 2.92775 53.0723 1.75 51.625 1.75H35.875C34.4278 1.75 33.25 2.92775 33.25 4.375V20.125C33.25 20.5292 33.3489 20.9072 33.5134 21.2494L30.4089 24.3539C29.7168 23.8954 28.8899 23.625 28 23.625C27.1101 23.625 26.2833 23.8954 25.5911 24.3539L22.4866 21.2494C22.6503 20.9072 22.75 20.5284 22.75 20.125V4.375C22.75 2.92775 21.5723 1.75 20.125 1.75H4.375C2.92775 1.75 1.75 2.92775 1.75 4.375V20.125C1.75 21.5723 2.92775 22.75 4.375 22.75H20.125C20.5293 22.75 20.9073 22.6511 21.2494 22.4866L24.3539 25.5911C23.8954 26.2832 23.625 27.1101 23.625 28C23.625 28.8899 23.8954 29.7167 24.3539 30.4089L21.2494 33.5134C20.9073 33.3497 20.5284 33.25 20.125 33.25H4.375C2.92775 33.25 1.75 34.4277 1.75 35.875V51.625C1.75 53.0723 2.92775 54.25 4.375 54.25H20.125C21.5723 54.25 22.75 53.0723 22.75 51.625V35.875C22.75 35.4707 22.6511 35.0928 22.4866 34.7506L25.5911 31.6461C26.2833 32.1046 27.1101 32.375 28 32.375C28.8899 32.375 29.7168 32.1046 30.4089 31.6461L33.5134 34.7506C33.3498 35.0928 33.25 35.4716 33.25 35.875V46.375C33.25 47.8223 34.4278 49 35.875 49H40.5843L42.9678 53.7661C43.1156 54.0627 43.4193 54.25 43.7509 54.25C44.0825 54.25 44.3853 54.0627 44.534 53.7661L46.9175 49H51.6268C53.074 49 54.2518 47.8223 54.2518 46.375V35.875C54.2518 34.4277 53.074 33.25 51.6268 33.25H35.8768C35.4725 33.25 35.0945 33.3489 34.7524 33.5134L31.6479 30.4089C32.1064 29.7167 32.3768 28.8899 32.3768 28C32.3768 27.1101 32.1064 26.2832 31.6479 25.5911L34.7524 22.4866C35.0945 22.6502 35.4734 22.75 35.8768 22.75H42.0018C42.4848 22.75 42.8768 22.358 42.8768 21.875V17.1964C42.8768 16.7134 42.4848 16.3214 42.0018 16.3214H40.6158V14.658H42.0018C42.4848 14.658 42.8768 14.266 42.8768 13.783V11.6086C42.8768 9.67838 44.4465 8.10863 46.3768 8.10863H48.7594V9.85863H46.3768C45.4116 9.85863 44.6268 10.6435 44.6268 11.6086V13.783C44.6268 14.266 45.0188 14.658 45.5018 14.658H48.5065L48.0804 16.3214H45.5018H45.5ZM4.375 21C3.89288 21 3.5 20.6071 3.5 20.125V4.375C3.5 3.89287 3.89288 3.5 4.375 3.5H20.125C20.6071 3.5 21 3.89287 21 4.375V20.125C21 20.6071 20.6071 21 20.125 21H4.375ZM21 51.625C21 52.1071 20.6071 52.5 20.125 52.5H4.375C3.89288 52.5 3.5 52.1071 3.5 51.625V35.875C3.5 35.3929 3.89288 35 4.375 35H20.125C20.6071 35 21 35.3929 21 35.875V51.625ZM25.375 28C25.375 26.5527 26.5528 25.375 28 25.375C29.4473 25.375 30.625 26.5527 30.625 28C30.625 29.4473 29.4473 30.625 28 30.625C26.5528 30.625 25.375 29.4473 25.375 28ZM51.625 35C52.1071 35 52.5 35.3929 52.5 35.875V46.375C52.5 46.8571 52.1071 47.25 51.625 47.25H46.375C46.0434 47.25 45.7406 47.4373 45.5919 47.7339L43.75 51.4185L41.9081 47.7339C41.7603 47.4373 41.4566 47.25 41.125 47.25H35.875C35.3929 47.25 35 46.8571 35 46.375V35.875C35 35.3929 35.3929 35 35.875 35H51.625ZM50.3239 13.2466C50.1585 13.0331 49.903 12.908 49.6326 12.908H46.375V11.6086H49.6326C50.1156 11.6086 50.5076 11.2166 50.5076 10.7336V7.23363C50.5076 6.75063 50.1156 6.35863 49.6326 6.35863H46.375C43.4796 6.35863 41.125 8.71325 41.125 11.6086V12.908H39.739C39.256 12.908 38.864 13.3 38.864 13.783V17.1964C38.864 17.6794 39.256 18.0714 39.739 18.0714H41.125V21H35.875C35.3929 21 35 20.6071 35 20.125V4.375C35 3.89287 35.3929 3.5 35.875 3.5H51.625C52.1071 3.5 52.5 3.89287 52.5 4.375V20.125C52.5 20.6071 52.1071 21 51.625 21H46.375V18.0714H48.7576C49.1575 18.0714 49.5058 17.8001 49.6055 17.4134L50.4805 14C50.5479 13.7384 50.4901 13.4592 50.3239 13.2457V13.2466Z" fill="#282828"></path>
                        {" "}
                      </svg>
                      {" "}
                      <h2>
                        {"SMM Specialist"}
                      </h2>
                      {" "}
                    </div>
                    {" "}
                    <p className="career-offers__text">
                      {"We are looking for a vibrant SMM specialist to join our team. You will promote innovative businesses on social networks such as Facebook, Instagram, Twitter, and LinkedIn in the European market. "}
                    </p>
                    {" "}
                    <svg className="icon-arrow" width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {" "}
                      <rect y="0.152344" width="56" height="56" rx="28" fill="#FFC169"></rect>
                      {" "}
                      <path d="M19 27.1523H37M37 27.1523L28.5 18.6523M37 27.1523L28.5 35.6523" stroke="#282828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      {" "}
                    </svg>
                    {" "}
                  </div>
                  {" "}
                </button>
                {" "}
                <div className="career-offers__desc">
                  {" "}
                  <div className="career-offers__wrapper">
                    {" "}
                    <div className="career-offers__items">
                      {" "}
                      <div className="career-offers__item">
                        {" "}
                        <h3 className="career-offers__item-title">
                          {"Your SMM tasks:"}
                        </h3>
                        {" "}
                        <ul className="career-offers__list">
                          {" "}
                          <li>
                            {"Develop and promote brand awareness and build its audience."}
                          </li>
                          {" "}
                          <li>
                            {"Create and manage social media advertising campaigns."}
                          </li>
                          {" "}
                          <li>
                            {"Generate leads to the websites."}
                          </li>
                          {" "}
                          <li>
                            {"User acquisition."}
                          </li>
                          {" "}
                          <li>
                            {"Optimise the existing content (articles, news, posts, videos, images) for various social media formats (Twitter, Facebook, Linkedin, Instagram)."}
                          </li>
                          {" "}
                          <li>
                            {"Set and optimise YouTube channels."}
                          </li>
                          {" "}
                          <li>
                            {"Track the performance of accounts and optimise the strategy."}
                          </li>
                          {" "}
                        </ul>
                        {" "}
                      </div>
                      {" "}
                      <div className="career-offers__item">
                        {" "}
                        <h3 className="career-offers__item-title">
                          {"We are excited if you have:"}
                        </h3>
                        {" "}
                        <ul className="career-offers__list">
                          {" "}
                          <li>
                            {"SMM experience in B2B segments of at least 3 years."}
                          </li>
                          {" "}
                          <li>
                            {"Experience in SEO, SERM, SEA, and SMO."}
                          </li>
                          {" "}
                          <li>
                            {"Excellent advertising knowledge (Google, Facebook, Instagram, Twitter, and LinkedIn)."}
                          </li>
                          {" "}
                          <li>
                            {"Excellent written and verbal communication skills."}
                          </li>
                          {" "}
                          <li>
                            {"Sound knowledge and experience in targeting tools."}
                          </li>
                          {" "}
                          <li>
                            {"Graphic editors will be a plus."}
                          </li>
                          {" "}
                        </ul>
                        {" "}
                      </div>
                      {" "}
                      <div className="career-offers__item">
                        {" "}
                        <h3 className="career-offers__item-title">
                          {"Our offer:"}
                        </h3>
                        {" "}
                        <ul className="career-offers__list">
                          {" "}
                          <li>
                            {"Cutting-edge technologies and tools for promotion and optimisation."}
                          </li>
                          {" "}
                          <li>
                            {"Opportunities for professional development and growth."}
                          </li>
                          {" "}
                          <li>
                            {"Competitive, market-relevant salary."}
                          </li>
                          {" "}
                          <li>
                            {"Flexible and hybrid schedule (opportunity for remote work)."}
                          </li>
                          {" "}
                          <li>
                            {"Regular training."}
                          </li>
                          {" "}
                        </ul>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                    <a href="#job-offer" className="career-offers__send _popup-link" id="open_pop_up">
                      <span>
                        {"Send CV"}
                      </span>
                    </a>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              {" "}
              <div data-spollers="360,min" className="career-offers__spoller">
                {" "}
                <button data-spoller="" type="button" className="career-offers__button">
                  {" "}
                  <div className="career-offers__head">
                    {" "}
                    <div className="career-offers__label">
                      {" "}
                      <svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {" "}
                        <path d="M43.3475 27.6535V7.12598C43.3475 6.64298 42.9564 6.25098 42.4725 6.25098H36.2775C35.7936 6.25098 35.4025 6.64298 35.4025 7.12598V27.6369H31.9725V12.376C31.9725 11.893 31.5814 11.501 31.0975 11.501H24.9025C24.4186 11.501 24.0275 11.893 24.0275 12.376V27.6369H20.5975V17.626C20.5975 17.143 20.2064 16.751 19.7225 16.751H13.5275C13.0436 16.751 12.6525 17.143 12.6525 17.626V27.6535C6.61325 27.8276 1.75 32.7836 1.75 38.8649C1.75 45.0564 6.78737 50.0929 12.978 50.0929H43.022C49.2126 50.0929 54.25 45.0564 54.25 38.8649C54.25 32.7836 49.3867 27.8285 43.3475 27.6535ZM37.1525 8.00098H41.5975V27.6369H37.1525V8.00098ZM25.7775 13.251H30.2225V27.6369H25.7775V13.251ZM14.4025 18.501H18.8475V27.6369H14.4025V18.501ZM43.022 48.342H12.978C7.75162 48.342 3.5 44.0904 3.5 38.864C3.5 33.6376 7.75162 29.386 12.978 29.386H43.022C48.2484 29.386 52.5 33.6376 52.5 38.864C52.5 44.0904 48.2484 48.342 43.022 48.342Z" fill="#282828"></path>
                        {" "}
                        <path d="M19.7223 33.9683C20.2062 33.9683 20.5973 33.5763 20.5973 33.0933C20.5973 32.6103 20.2062 32.2183 19.7223 32.2183H13.5273C13.0435 32.2183 12.6523 32.6103 12.6523 33.0933V38.8648C12.6523 39.3478 13.0435 39.7398 13.5273 39.7398H18.8473V43.7613H13.5273C13.0435 43.7613 12.6523 44.1533 12.6523 44.6363C12.6523 45.1193 13.0435 45.5113 13.5273 45.5113H19.7223C20.2062 45.5113 20.5973 45.1193 20.5973 44.6363V38.8648C20.5973 38.3818 20.2062 37.9898 19.7223 37.9898H14.4023V33.9683H19.7223Z" fill="#9848DF"></path>
                        {" "}
                        <path d="M31.0973 33.9683C31.5812 33.9683 31.9723 33.5763 31.9723 33.0933C31.9723 32.6103 31.5812 32.2183 31.0973 32.2183H24.9023C24.4185 32.2183 24.0273 32.6103 24.0273 33.0933V44.6363C24.0273 45.1193 24.4185 45.5113 24.9023 45.5113H31.0973C31.5812 45.5113 31.9723 45.1193 31.9723 44.6363C31.9723 44.1533 31.5812 43.7613 31.0973 43.7613H25.7773V39.7398H31.0973C31.5812 39.7398 31.9723 39.3478 31.9723 38.8648C31.9723 38.3818 31.5812 37.9898 31.0973 37.9898H25.7773V33.9683H31.0973Z" fill="#9848DF"></path>
                        {" "}
                        <path d="M40.7223 32.2183H38.0273C36.5801 32.2183 35.4023 33.396 35.4023 34.8433V42.8863C35.4023 44.3335 36.5801 45.5113 38.0273 45.5113H40.7223C42.1696 45.5113 43.3473 44.3335 43.3473 42.8863V34.8433C43.3473 33.396 42.1696 32.2183 40.7223 32.2183ZM41.5973 42.8863C41.5973 43.3684 41.2053 43.7613 40.7223 43.7613H38.0273C37.5443 43.7613 37.1523 43.3684 37.1523 42.8863V34.8433C37.1523 34.3611 37.5443 33.9683 38.0273 33.9683H40.7223C41.2053 33.9683 41.5973 34.3611 41.5973 34.8433V42.8863Z" fill="#9848DF"></path>
                        {" "}
                      </svg>
                      {" "}
                      <h2>
                        {"SEO Specialist"}
                      </h2>
                      {" "}
                    </div>
                    {" "}
                    <p className="career-offers__text">
                      {"We are looking for a talented SEO specialist to join our team. If you are excited to face new challenges, master new ways of search optimisation, and cope with search algorithm updates, then our position is excellent to grow your career!"}
                    </p>
                    {" "}
                    <svg className="icon-arrow" width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {" "}
                      <rect y="0.152344" width="56" height="56" rx="28" fill="#FFC169"></rect>
                      {" "}
                      <path d="M19 27.1523H37M37 27.1523L28.5 18.6523M37 27.1523L28.5 35.6523" stroke="#282828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      {" "}
                    </svg>
                    {" "}
                  </div>
                  {" "}
                </button>
                {" "}
                <div className="career-offers__desc">
                  {" "}
                  <div className="career-offers__wrapper">
                    {" "}
                    <div className="career-offers__items">
                      {" "}
                      <div className="career-offers__item">
                        {" "}
                        <h3 className="career-offers__item-title">
                          {"Your SEO tasks:"}
                        </h3>
                        {" "}
                        <ul className="career-offers__list">
                          {" "}
                          <li>
                            {"Develop custom strategies that boost the client’s search engine results rankings – our primary focus is Google."}
                          </li>
                          {" "}
                          <li>
                            {"Analyse and monitor competitors’ performance in search and website development."}
                          </li>
                          {" "}
                          <li>
                            {"Research keywords to use throughout the client’s website and marketing content."}
                          </li>
                          {" "}
                          <li>
                            {"Cooperate with our SMM to set measurable goals highlighting improvements in customer search ranking."}
                          </li>
                          {" "}
                          <li>
                            {"Monitor daily performance metrics to report the chosen strategy performance."}
                          </li>
                          {" "}
                          <li>
                            {"Communicate regularly with the Born2Be team and SMM to align goals and performance."}
                          </li>
                          {" "}
                          <li>
                            {"Cooperate with other crew members to manage SEO strategy."}
                          </li>
                          {" "}
                          <li>
                            {"Inform and control content production."}
                          </li>
                          {" "}
                          <li>
                            {"Update content and website links for maximum optimisation and search engine rankings."}
                          </li>
                          {" "}
                        </ul>
                        {" "}
                      </div>
                      {" "}
                      <div className="career-offers__item">
                        {" "}
                        <h3 className="career-offers__item-title">
                          {"We are excited if you have:"}
                        </h3>
                        {" "}
                        <ul className="career-offers__list">
                          {" "}
                          <li>
                            {"3+ years of successful experience developing and executing effective SEO strategies for B2B projects."}
                          </li>
                          {" "}
                          <li>
                            {"Understanding of search engine algorithms and methods of optimisation and promotion."}
                          </li>
                          {" "}
                          <li>
                            {"Experience using Google Analytics, Google Search Console, and other SEO tools is a plus."}
                          </li>
                          {" "}
                          <li>
                            {"Knowledge and successful application of keyword research tools."}
                          </li>
                          {" "}
                          <li>
                            {"Competitive analysis."}
                          </li>
                          {" "}
                          <li>
                            {"Ability to analyse high volumes of data."}
                          </li>
                          {" "}
                          <li>
                            {"Excellent written and verbal communication skills."}
                          </li>
                          {" "}
                        </ul>
                        {" "}
                      </div>
                      {" "}
                      <div className="career-offers__item">
                        {" "}
                        <h3 className="career-offers__item-title">
                          {"Our offer:"}
                        </h3>
                        {" "}
                        <ul className="career-offers__list">
                          {" "}
                          <li>
                            {"Cutting-edge technologies and tools for promotion and optimisation."}
                          </li>
                          {" "}
                          <li>
                            {"Opportunities for professional development and growth."}
                          </li>
                          {" "}
                          <li>
                            {"Competitive, market-relevant salary."}
                          </li>
                          {" "}
                          <li>
                            {"Flexible and hybrid schedule (opportunity for remote work)."}
                          </li>
                          {" "}
                          <li>
                            {"Regular training."}
                          </li>
                          {" "}
                        </ul>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                    <a href="#job-offer" className="career-offers__send _popup-link" id="open_pop_up">
                      <span>
                        {"Send CV"}
                      </span>
                    </a>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              {" "}
              <div data-spollers="360,min" className="career-offers__spoller">
                {" "}
                <button data-spoller="" type="button" className="career-offers__button">
                  {" "}
                  <div className="career-offers__head">
                    {" "}
                    <div className="career-offers__label">
                      {" "}
                      <svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {" "}
                        <path d="M50.75 3.33179C49.1242 3.33179 47.7654 4.45091 47.3742 5.95679H41.0559C40.7654 5.95679 40.4941 6.10116 40.3314 6.34091L39.032 8.26066C35.7621 6.43979 32.0014 5.39766 28 5.39766C23.9986 5.39766 20.2379 6.43979 16.968 8.26066L15.6686 6.34091C15.5059 6.10116 15.2346 5.95679 14.9441 5.95679H8.62575C8.23462 4.45091 6.87575 3.33179 5.25 3.33179C3.31975 3.33179 1.75 4.90154 1.75 6.83179C1.75 8.76204 3.31975 10.3318 5.25 10.3318C6.87575 10.3318 8.23462 9.21266 8.62575 7.70679H14.4795L15.4709 9.17154C9.31787 13.2473 5.25 20.2298 5.25 28.1477C5.25 36.2265 9.48588 43.3298 15.8498 47.367L14.553 48.6349H8.62575C8.23462 47.129 6.87575 46.0099 5.25 46.0099C3.31975 46.0099 1.75 47.5797 1.75 49.5099C1.75 51.4402 3.31975 53.0099 5.25 53.0099C6.87575 53.0099 8.23462 51.8908 8.62575 50.3849H14.91C15.1384 50.3849 15.358 50.2948 15.5216 50.1355L17.4204 48.2788C20.5835 49.9474 24.1815 50.8977 28 50.8977C40.544 50.8977 50.75 40.6925 50.75 28.1477C50.75 20.2298 46.6821 13.2473 40.5291 9.17154L41.5205 7.70679H47.3742C47.7654 9.21266 49.1242 10.3318 50.75 10.3318C52.6802 10.3318 54.25 8.76204 54.25 6.83179C54.25 4.90154 52.6802 3.33179 50.75 3.33179ZM5.25 8.58179C4.28487 8.58179 3.5 7.79691 3.5 6.83179C3.5 5.86666 4.28487 5.08179 5.25 5.08179C6.21513 5.08179 7 5.86666 7 6.83179C7 7.79691 6.21513 8.58179 5.25 8.58179ZM5.25 51.2599C4.28487 51.2599 3.5 50.475 3.5 49.5099C3.5 48.5448 4.28487 47.7599 5.25 47.7599C6.21513 47.7599 7 48.5448 7 49.5099C7 50.475 6.21513 51.2599 5.25 51.2599ZM16.4517 10.6214L17.7284 12.5079C18.0014 12.9104 18.5483 13.011 18.9438 12.7424C19.3445 12.4712 19.4486 11.9278 19.1782 11.527L17.9515 9.71404C20.6973 8.21079 23.814 7.30691 27.1259 7.17041V27.2735H7.02187C7.30887 20.3208 10.9918 14.2317 16.4517 10.6214ZM18.7399 46.9899L20.6168 45.155C20.9624 44.8173 20.9685 44.2634 20.6307 43.9178C20.293 43.5722 19.7391 43.566 19.3926 43.9038L17.1334 46.1123C11.2971 42.5694 7.32025 36.2633 7.021 29.0235H27.6378L42.2091 43.5949C38.4667 47.0398 33.4757 49.1485 28 49.1485C24.6776 49.1485 21.5355 48.3689 18.7399 46.9899ZM49 28.1485C49 33.6243 46.8913 38.6153 43.4464 42.3577L28.875 27.7863V7.17041C32.1869 7.30691 35.3036 8.21079 38.0494 9.71404L36.8226 11.527C36.5514 11.9278 36.6564 12.4712 37.0571 12.7424C37.4526 13.011 37.9995 12.9113 38.2725 12.5079L39.5491 10.6214C45.2384 14.3822 49 20.8327 49 28.1485ZM50.75 8.58266C49.7849 8.58266 49 7.79779 49 6.83266C49 5.86754 49.7849 5.08266 50.75 5.08266C51.7151 5.08266 52.5 5.86754 52.5 6.83266C52.5 7.79779 51.7151 8.58266 50.75 8.58266Z" fill="#282828"></path>
                        {" "}
                        <path d="M26.7002 34.7156H20.5664C20.0834 34.7156 19.6914 35.1067 19.6914 35.5906C19.6914 36.0745 20.0834 36.4656 20.5664 36.4656H26.7002C27.1832 36.4656 27.5752 36.0745 27.5752 35.5906C27.5752 35.1067 27.1832 34.7156 26.7002 34.7156Z" fill="#9848DF"></path>
                        {" "}
                        <path d="M26.7002 38.3013H20.5664C20.0834 38.3013 19.6914 38.6924 19.6914 39.1763C19.6914 39.6601 20.0834 40.0513 20.5664 40.0513H26.7002C27.1832 40.0513 27.5752 39.6601 27.5752 39.1763C27.5752 38.6924 27.1832 38.3013 26.7002 38.3013Z" fill="#282828"></path>
                        {" "}
                        <path d="M15.3867 19.1641H21.5205C22.0035 19.1641 22.3955 18.7729 22.3955 18.2891C22.3955 17.8052 22.0035 17.4141 21.5205 17.4141H15.3867C14.9037 17.4141 14.5117 17.8052 14.5117 18.2891C14.5117 18.7729 14.9037 19.1641 15.3867 19.1641Z" fill="#9848DF"></path>
                        {" "}
                        <path d="M15.3867 22.7507H21.5205C22.0035 22.7507 22.3955 22.3596 22.3955 21.8757C22.3955 21.3919 22.0035 21.0007 21.5205 21.0007H15.3867C14.9037 21.0007 14.5117 21.3919 14.5117 21.8757C14.5117 22.3596 14.9037 22.7507 15.3867 22.7507Z" fill="#282828"></path>
                        {" "}
                        <path d="M34.2109 21.8757C34.2109 22.3596 34.6029 22.7507 35.0859 22.7507H41.2197C41.7027 22.7507 42.0947 22.3596 42.0947 21.8757C42.0947 21.3919 41.7027 21.0007 41.2197 21.0007H35.0859C34.6029 21.0007 34.2109 21.3919 34.2109 21.8757Z" fill="#9848DF"></path>
                        {" "}
                        <path d="M41.2197 24.5874H35.0859C34.6029 24.5874 34.2109 24.9785 34.2109 25.4624C34.2109 25.9463 34.6029 26.3374 35.0859 26.3374H41.2197C41.7027 26.3374 42.0947 25.9463 42.0947 25.4624C42.0947 24.9785 41.7027 24.5874 41.2197 24.5874Z" fill="#9848DF"></path>
                        {" "}
                      </svg>
                      {" "}
                      <h2>
                        {"Digital Marketing "}
                        <br />
                        {" Strategist"}
                      </h2>
                      {" "}
                    </div>
                    {" "}
                    <p className="career-offers__text">
                      {"We are looking for an achiever — a digital marketing strategist with in-depth knowledge of current industry trends and tools and a rich background in digital marketing to deliver effective strategies and get the customers on top."}
                    </p>
                    {" "}
                    <svg className="icon-arrow" width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {" "}
                      <rect y="0.152344" width="56" height="56" rx="28" fill="#FFC169"></rect>
                      {" "}
                      <path d="M19 27.1523H37M37 27.1523L28.5 18.6523M37 27.1523L28.5 35.6523" stroke="#282828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      {" "}
                    </svg>
                    {" "}
                  </div>
                  {" "}
                </button>
                {" "}
                <div className="career-offers__desc">
                  {" "}
                  <div className="career-offers__wrapper">
                    {" "}
                    <div className="career-offers__items">
                      {" "}
                      <div className="career-offers__item">
                        {" "}
                        <h3 className="career-offers__item-title">
                          {"Your strategic tasks:"}
                        </h3>
                        {" "}
                        <ul className="career-offers__list">
                          {" "}
                          <li>
                            {"Develop custom strategies and optimise current clients’ strategies within the digital arena to exceed clients’ objectives and expectations."}
                          </li>
                          {" "}
                          <li>
                            {"Control project execution to be high-quality, on time, and cost-effective."}
                          </li>
                          {" "}
                          <li>
                            {"Control timeline development and monitor progress in meeting deadlines."}
                          </li>
                          {" "}
                          <li>
                            {"Manage overall project and ensure strategy adheres to budget."}
                          </li>
                          {" "}
                          <li>
                            {"Control timeline development and monitor progress in meeting deadlines."}
                          </li>
                          {" "}
                          <li>
                            {"Manage client expectations, bringing concerns to their attention before they become problems, offering potential solutions, and advising of possible delivery delays."}
                          </li>
                          {" "}
                          <li>
                            {"Bring up a team and manage their professional development."}
                          </li>
                          {" "}
                          <li>
                            {"Ensure the Born2Be team is aligned with client requirements."}
                          </li>
                          {" "}
                          <li>
                            {"Track clients’ marketing and media plans and provide technological solutions, including rich media, site optimisation, PR ideas, mobile, social networks, viral, etc."}
                          </li>
                          {" "}
                          <li>
                            {"Develop a brand communication strategy for a client, create calendars, write communication briefs, and ensure effective integration of communication strategy."}
                          </li>
                          {" "}
                          <li>
                            {"Conduct market and competitive research to inform communication policy and integrate it into marketing campaigns."}
                          </li>
                          {" "}
                          <li>
                            {"Research studies provide rich insights into consumer online behaviour and critical motivational behaviour."}
                          </li>
                          {" "}
                          <li>
                            {"Understand the online target audience, its segments, segmentation principles, and each segment’s mindset modes."}
                          </li>
                          {" "}
                          <li>
                            {"Report on campaign performance and analysis to clients."}
                          </li>
                          {" "}
                          <li>
                            {"Develop integrated marketing strategies and plans, email and CRM strategies with key ESPs, A/B testing strategies, conversion rate analysis, and more."}
                          </li>
                          {" "}
                        </ul>
                        {" "}
                      </div>
                      {" "}
                      <div className="career-offers__item">
                        {" "}
                        <h3 className="career-offers__item-title">
                          {"We are happy if you have:"}
                        </h3>
                        {" "}
                        <ul className="career-offers__list">
                          {" "}
                          <li>
                            {"5+ years of full-time experience in digital marketing or advertising (digital experience is a must)."}
                          </li>
                          {" "}
                          <li>
                            {"Advanced communication skills, both in-house and with clients."}
                          </li>
                          {" "}
                          <li>
                            {"Strong management and organisational skills."}
                          </li>
                          {" "}
                          <li>
                            {"Ability to effectively cope with multitasking."}
                          </li>
                          {" "}
                          <li>
                            {"Ability to identify growth opportunities."}
                          </li>
                          {" "}
                          <li>
                            {"Strong interest in technology and digital marketing."}
                          </li>
                          {" "}
                          <li>
                            {"Bachelor’s degree or equivalent in a related field."}
                          </li>
                          {" "}
                        </ul>
                        {" "}
                      </div>
                      {" "}
                      <div className="career-offers__item">
                        {" "}
                        <h3 className="career-offers__item-title">
                          {"Our offer:"}
                        </h3>
                        {" "}
                        <ul className="career-offers__list">
                          {" "}
                          <li>
                            {"Cutting-edge technologies and tools for promotion and optimisation."}
                          </li>
                          {" "}
                          <li>
                            {"Opportunities for professional development and growth."}
                          </li>
                          {" "}
                          <li>
                            {"Competitive, market-relevant salary."}
                          </li>
                          {" "}
                          <li>
                            {"Flexible and hybrid schedule (opportunity for remote work)."}
                          </li>
                          {" "}
                          <li>
                            {"Regular training."}
                          </li>
                          {" "}
                        </ul>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                    <a href="#job-offer" className="career-offers__send _popup-link" id="open_pop_up">
                      <span>
                        {"Send CV"}
                      </span>
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
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="career-contacts">
        {" "}
        <div className="career-contacts__container _container">
          {" "}
          <div className="career-contacts__body">
            {" "}
            <div className="career-contacts__form">
              {" "}
              <div className="form-contact">
                {" "}
                <div className="form-contact__col-01">
                  {" "}
                  <h2 className="form-contact__title-form">
                    {"Haven’t found a "}
                    <span>
                      {"job"}
                    </span>
                    {" "}
                    <br />
                    {" you’d like to try?"}
                  </h2>
                  {" "}
                  <h3 className="form-contact__subtitle">
                    {"Let us know how to reach you, and Born2Be experts will contact you immediately when something suitable comes up!"}
                  </h3>
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
                  <Link href="/faq" className="form-contact__link">
                    {" "}
                    <h2 className="form-contact__title">
                      {"The art of asking questions is the path to knowledge"}
                    </h2>
                    {" "}
                    <span className="form-contact__link-bottom">
                      {" "}
                      <span>
                        {"Explore our FAQ"}
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
                  <Image src="/wp-content/uploads/2023/11/faq-image-01.png" alt="image" width={624} height={506} className="img-float" />
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
