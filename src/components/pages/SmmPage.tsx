/* eslint-disable @next/next/no-img-element */
// Converted 1:1 from the WordPress theme markup (born2be-media). Edit freely.
import Link from 'next/link';
import ContactForm from '@/components/forms/ContactForm';

export default function SmmPage() {
  return (
    <>
    <main className="page smm">
      {" "}
      {" "}
      <section className="smm-head">
        {" "}
        <div className="smm-head__container _container">
          {" "}
          <div className="smm-head__body">
            {" "}
            <h2 className="smm-head__title">
              {" "}
              <svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                {" "}
                <path d="M18.1406 55.5107C14.0044 55.5107 10.6406 58.8745 10.6406 63.0107C10.6406 67.147 14.0044 70.5107 18.1406 70.5107C22.2769 70.5107 25.6406 67.147 25.6406 63.0107C25.6406 58.8745 22.2769 55.5107 18.1406 55.5107ZM18.1406 68.0107C15.3831 68.0107 13.1406 65.7682 13.1406 63.0107C13.1406 60.2532 15.3831 58.0107 18.1406 58.0107C20.8981 58.0107 23.1406 60.2532 23.1406 63.0107C23.1406 65.7682 20.8981 68.0107 18.1406 68.0107Z" fill="#9848DF"></path>
                {" "}
                <path d="M24.9494 16.892L12.4494 10.642C12.0631 10.4482 11.6019 10.4682 11.2331 10.697C10.8656 10.9245 10.6406 11.327 10.6406 11.7607V24.2607C10.6406 24.6945 10.8656 25.0957 11.2331 25.3245C11.6019 25.552 12.0631 25.572 12.4494 25.3795L24.9494 19.1295C25.3731 18.9182 25.6406 18.4845 25.6406 18.0107C25.6406 17.537 25.3731 17.1045 24.9494 16.892ZM13.1406 22.237V13.782L21.5956 18.0095L13.1406 22.237Z" fill="#9848DF"></path>
                {" "}
                <path d="M65.6406 23.827C64.9506 23.827 64.3906 24.387 64.3906 25.077V31.7607C64.3906 32.4507 64.9506 33.0107 65.6406 33.0107H74.3906C76.4581 33.0107 78.1406 31.3282 78.1406 29.2607V6.76074C78.1406 4.69324 76.4581 3.01074 74.3906 3.01074H51.8906C49.8231 3.01074 48.1406 4.69324 48.1406 6.76074V29.2607C48.1406 29.8382 48.2819 30.3782 48.5169 30.867L44.0819 35.302C43.0931 34.647 41.9119 34.2607 40.6406 34.2607C39.3694 34.2607 38.1881 34.647 37.1994 35.302L32.7644 30.867C32.9981 30.3782 33.1406 29.837 33.1406 29.2607V6.76074C33.1406 4.69324 31.4581 3.01074 29.3906 3.01074H6.89063C4.82313 3.01074 3.14062 4.69324 3.14062 6.76074V29.2607C3.14062 31.3282 4.82313 33.0107 6.89063 33.0107H29.3906C29.9681 33.0107 30.5081 32.8695 30.9969 32.6345L35.4319 37.0695C34.7769 38.0582 34.3906 39.2395 34.3906 40.5107C34.3906 41.782 34.7769 42.9632 35.4319 43.952L30.9969 48.387C30.5081 48.1532 29.9669 48.0107 29.3906 48.0107H6.89063C4.82313 48.0107 3.14062 49.6932 3.14062 51.7607V74.2607C3.14062 76.3282 4.82313 78.0107 6.89063 78.0107H29.3906C31.4581 78.0107 33.1406 76.3282 33.1406 74.2607V51.7607C33.1406 51.1832 32.9994 50.6432 32.7644 50.1545L37.1994 45.7195C38.1881 46.3745 39.3694 46.7607 40.6406 46.7607C41.9119 46.7607 43.0931 46.3745 44.0819 45.7195L48.5169 50.1545C48.2831 50.6432 48.1406 51.1845 48.1406 51.7607V66.7607C48.1406 68.8282 49.8231 70.5107 51.8906 70.5107H58.6181L62.0231 77.3195C62.2344 77.7432 62.6681 78.0107 63.1419 78.0107C63.6156 78.0107 64.0481 77.7432 64.2606 77.3195L67.6656 70.5107H74.3931C76.4606 70.5107 78.1431 68.8282 78.1431 66.7607V51.7607C78.1431 49.6932 76.4606 48.0107 74.3931 48.0107H51.8931C51.3156 48.0107 50.7756 48.152 50.2869 48.387L45.8519 43.952C46.5069 42.9632 46.8931 41.782 46.8931 40.5107C46.8931 39.2395 46.5069 38.0582 45.8519 37.0695L50.2869 32.6345C50.7756 32.8682 51.3169 33.0107 51.8931 33.0107H60.6431C61.3331 33.0107 61.8931 32.4507 61.8931 31.7607V25.077C61.8931 24.387 61.3331 23.827 60.6431 23.827H58.6631V21.4507H60.6431C61.3331 21.4507 61.8931 20.8907 61.8931 20.2007V17.0945C61.8931 14.337 64.1356 12.0945 66.8931 12.0945H70.2969V14.5945H66.8931C65.5144 14.5945 64.3931 15.7157 64.3931 17.0945V20.2007C64.3931 20.8907 64.9531 21.4507 65.6431 21.4507H69.9356L69.3269 23.827H65.6431H65.6406ZM6.89063 30.5107C6.20188 30.5107 5.64063 29.9495 5.64063 29.2607V6.76074C5.64063 6.07199 6.20188 5.51074 6.89063 5.51074H29.3906C30.0794 5.51074 30.6406 6.07199 30.6406 6.76074V29.2607C30.6406 29.9495 30.0794 30.5107 29.3906 30.5107H6.89063ZM30.6406 74.2607C30.6406 74.9495 30.0794 75.5107 29.3906 75.5107H6.89063C6.20188 75.5107 5.64063 74.9495 5.64063 74.2607V51.7607C5.64063 51.072 6.20188 50.5107 6.89063 50.5107H29.3906C30.0794 50.5107 30.6406 51.072 30.6406 51.7607V74.2607ZM36.8906 40.5107C36.8906 38.4432 38.5731 36.7607 40.6406 36.7607C42.7081 36.7607 44.3906 38.4432 44.3906 40.5107C44.3906 42.5782 42.7081 44.2607 40.6406 44.2607C38.5731 44.2607 36.8906 42.5782 36.8906 40.5107ZM74.3906 50.5107C75.0794 50.5107 75.6406 51.072 75.6406 51.7607V66.7607C75.6406 67.4495 75.0794 68.0107 74.3906 68.0107H66.8906C66.4169 68.0107 65.9844 68.2782 65.7719 68.702L63.1406 73.9657L60.5094 68.702C60.2981 68.2782 59.8644 68.0107 59.3906 68.0107H51.8906C51.2019 68.0107 50.6406 67.4495 50.6406 66.7607V51.7607C50.6406 51.072 51.2019 50.5107 51.8906 50.5107H74.3906ZM72.5319 19.4345C72.2956 19.1295 71.9306 18.9507 71.5444 18.9507H66.8906V17.0945H71.5444C72.2344 17.0945 72.7944 16.5345 72.7944 15.8445V10.8445C72.7944 10.1545 72.2344 9.59449 71.5444 9.59449H66.8906C62.7544 9.59449 59.3906 12.9582 59.3906 17.0945V18.9507H57.4106C56.7206 18.9507 56.1606 19.5107 56.1606 20.2007V25.077C56.1606 25.767 56.7206 26.327 57.4106 26.327H59.3906V30.5107H51.8906C51.2019 30.5107 50.6406 29.9495 50.6406 29.2607V6.76074C50.6406 6.07199 51.2019 5.51074 51.8906 5.51074H74.3906C75.0794 5.51074 75.6406 6.07199 75.6406 6.76074V29.2607C75.6406 29.9495 75.0794 30.5107 74.3906 30.5107H66.8906V26.327H70.2944C70.8656 26.327 71.3631 25.9395 71.5056 25.387L72.7556 20.5107C72.8519 20.137 72.7694 19.7382 72.5319 19.4332V19.4345Z" fill="#D9D9D9"></path>
                {" "}
              </svg>
              {" "}
              <span>
                {"SMM Solutions"}
              </span>
              {" "}
            </h2>
            {" "}
            <p className="smm-head__text">
              {"Full-cycle SMM solutions from Born2Be."}
            </p>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section className="smm-benefit">
        {" "}
        <div className="smm-benefit__container _container">
          {" "}
          <div className="smm-benefit__body">
            {" "}
            <div className="smm-benefit__col-01">
              {" "}
              <h2 className="smm-benefit__title">
                <span>
                  {"Benefits"}
                </span>
                {" you get"}
              </h2>
              {" "}
            </div>
            {" "}
            <div className="smm-benefit__col-02">
              {" "}
              <div className="smm-benefit__items">
                {" "}
                <div className="smm-benefit__item">
                  {" "}
                  <p className="smm-benefit__text">
                    {"Expanded brand "}
                    <br />
                    {" awareness"}
                  </p>
                  {" "}
                </div>
                {" "}
                <div className="smm-benefit__item">
                  {" "}
                  <p className="smm-benefit__text">
                    {"Increased "}
                    <br />
                    {" website traffic"}
                  </p>
                  {" "}
                </div>
                {" "}
                <div className="smm-benefit__item">
                  {" "}
                  <p className="smm-benefit__text">
                    {"Customer "}
                    <br />
                    {" engagement"}
                  </p>
                  {" "}
                </div>
                {" "}
                <div className="smm-benefit__item">
                  {" "}
                  <p className="smm-benefit__text">
                    {"Profitable "}
                    <br />
                    {" advertising"}
                  </p>
                  {" "}
                </div>
                {" "}
                <div className="smm-benefit__item">
                  {" "}
                  <p className="smm-benefit__text">
                    {"First-class "}
                    <br />
                    {" targeting"}
                  </p>
                  {" "}
                </div>
                {" "}
                <div className="smm-benefit__item">
                  {" "}
                  <p className="smm-benefit__text">
                    {"Audience "}
                    <br />
                    {"loyalty"}
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
      <section className="smm-solutions">
        {" "}
        <div className="smm-solutions__container _container">
          {" "}
          <div className="smm-solutions__body">
            {" "}
            <h2 className="smm-solutions__title">
              <span>
                {"SMM Solutions:"}
              </span>
              {" "}
              <br />
              {" Complex Packages"}
            </h2>
            {" "}
            <div className="smm-solutions__content">
              {" "}
              {" "}
              <div data-spollers="992,max" className="smm-solutions__spoller">
                {" "}
                <button data-spoller="" type="button" className="smm-solutions__subtitle">
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
                <div className="smm-solutions__desc">
                  {" "}
                  <div className="smm-solutions__wrapper">
                    {" "}
                    <ul className="smm-solutions__list">
                      {" "}
                      <li>
                        {"1. Developing an SMM strategy"}
                      </li>
                      {" "}
                      <li>
                        {"2. Analysing the presence of a company or brand on social media"}
                      </li>
                      {" "}
                      <li>
                        {"3. Social media account setup and management"}
                      </li>
                      {" "}
                      <li>
                        {"4. Creation and optimization of social networks (e.g., Facebook, LinkedIn, Instagram, YouTube, Twitter, TikTok)"}
                      </li>
                      {" "}
                      <li>
                        {"5. Defining the corporate style of communication in social networks"}
                      </li>
                      {" "}
                    </ul>
                    {" "}
                    <ul className="smm-solutions__list">
                      {" "}
                      <li>
                        {"6. Frequent publishing of engaging content"}
                      </li>
                      {" "}
                      <li>
                        {"7. Paid social media advertising (e.g., Facebook, Instagram, Twitter, etc.)"}
                      </li>
                      {" "}
                      <li>
                        {"8. Building trustful communications with the audience"}
                      </li>
                      {" "}
                      <li>
                        {"9. Analytics and reporting"}
                      </li>
                      {" "}
                    </ul>
                    {" "}
                    <a href="#plan-smm" className="smm-solutions__link-plan mobile _popup-link ignore-anchor" id="open_pop_up" data-pack="Basic Plan">
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
                <a href="#plan-smm" className="smm-solutions__link-plan _popup-link ignore-anchor" id="open_pop_up" data-pack="Basic Plan">
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
              <div data-spollers="992,max" className="smm-solutions__spoller">
                {" "}
                <button data-spoller="" type="button" className="smm-solutions__subtitle">
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
                <div className="smm-solutions__desc">
                  {" "}
                  <div className="smm-solutions__wrapper">
                    {" "}
                    <ul className="smm-solutions__list">
                      {" "}
                      <li>
                        {"1. Analysing the presence of a company or brand on social media"}
                      </li>
                      {" "}
                      <li>
                        {"2. Analysing the competitive playing field and target audience"}
                      </li>
                      {" "}
                      <li>
                        {"3. Social media account setup and management"}
                      </li>
                      {" "}
                      <li>
                        {"4. Account privacy and security settings"}
                      </li>
                      {" "}
                      <li>
                        {"6. Creation and optimization of social networks (e.g., Facebook, LinkedIn, Instagram, YouTube, Twitter, TikTok)"}
                      </li>
                      {" "}
                      <li>
                        {"7. Creating a Google Business Account"}
                      </li>
                      {" "}
                    </ul>
                    {" "}
                    <ul className="smm-solutions__list">
                      {" "}
                      <li>
                        {"8. Defining the corporate style of communication in social networks"}
                      </li>
                      {" "}
                      <li>
                        {"9. Creating a balanced content plan which comprises advertising"}
                      </li>
                      {" "}
                      <li>
                        {"10. Creating optimised visual and written content"}
                      </li>
                      {" "}
                      <li>
                        {"11. Frequent publishing of engaging content"}
                      </li>
                      {" "}
                      <li>
                        {"12. Paid social media advertising (e.g., Facebook, Instagram, Twitter, etc.)"}
                      </li>
                      {" "}
                      <li>
                        {"13. Building trustful communications with the audience"}
                      </li>
                      {" "}
                      <li>
                        {"14. Analytics and reporting"}
                      </li>
                      {" "}
                    </ul>
                    {" "}
                    <a href="#plan-smm" className="smm-solutions__link-plan mobile _popup-link ignore-anchor" id="open_pop_up" data-pack="Upgraded Plan">
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
                <a href="#plan-smm" className="smm-solutions__link-plan _popup-link ignore-anchor" id="open_pop_up" data-pack="Upgraded Plan">
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
              <div data-spollers="992,max" className="smm-solutions__spoller">
                {" "}
                <button data-spoller="" type="button" className="smm-solutions__subtitle">
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
                <div className="smm-solutions__desc">
                  {" "}
                  <div className="smm-solutions__wrapper">
                    {" "}
                    <ul className="smm-solutions__list">
                      {" "}
                      <li>
                        {"1. Developing an SMM strategy"}
                      </li>
                      {" "}
                      <li>
                        {"2. Analysing the presence of a company or brand on social media"}
                      </li>
                      {" "}
                      <li>
                        {"3. Analysing the competitive playing field and target audience"}
                      </li>
                      {" "}
                      <li>
                        {"4. Social media account setup and management"}
                      </li>
                      {" "}
                      <li>
                        {"5. Account privacy and security settings"}
                      </li>
                      {" "}
                      <li>
                        {"6. Creation and optimization of social networks (e.g., Facebook, LinkedIn, Instagram, YouTube, Twitter, TikTok)"}
                      </li>
                      {" "}
                      <li>
                        {"7. Creating a Google Business Account"}
                      </li>
                      {" "}
                      <li>
                        {"8. Defining the corporate style of communication in social networks"}
                      </li>
                      {" "}
                      <li>
                        {"9. Creating a balanced content plan which comprises advertising"}
                      </li>
                      {" "}
                      <li>
                        {"10. Creating optimised visual and written content"}
                      </li>
                      {" "}
                    </ul>
                    {" "}
                    <ul className="smm-solutions__list">
                      {" "}
                      <li>
                        {"11. Creating a strategy for responding to criticisms"}
                      </li>
                      {" "}
                      <li>
                        {"12. Frequent publishing of engaging content"}
                      </li>
                      {" "}
                      <li>
                        {"13. Ensuring posts go viral"}
                      </li>
                      {" "}
                      <li>
                        {"14. Paid social media advertising (e.g., Facebook, Instagram, Twitter, etc.)"}
                      </li>
                      {" "}
                      <li>
                        {"15. Customer service and engagement"}
                      </li>
                      {" "}
                      <li>
                        {"16. Building trustful communications with the audience"}
                      </li>
                      {" "}
                      <li>
                        {"17. Constant monitoring of mentions in social networks"}
                      </li>
                      {" "}
                      <li>
                        {"18. Influencer marketing campaigns"}
                      </li>
                      {" "}
                      <li>
                        {"19. Monitoring and reputation management"}
                      </li>
                      {" "}
                      <li>
                        {"20. Analytics and reporting"}
                      </li>
                      {" "}
                    </ul>
                    {" "}
                    <a href="#plan-smm" className="smm-solutions__link-plan mobile _popup-link ignore-anchor" id="open_pop_up" data-pack="Pro Plan">
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
                <a href="#plan-smm" className="smm-solutions__link-plan _popup-link ignore-anchor" id="open_pop_up" data-pack="Pro Plan">
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
      <section className="smm-social">
        {" "}
        <div className="smm-social__container _container">
          {" "}
          <div className="smm-social__body _anim-items">
            {" "}
            <div className="smm-social__col-01">
              {" "}
              <h2 className="smm-social__title">
                {"Social media channels we manage"}
              </h2>
              {" "}
            </div>
            {" "}
            <div className="smm-social__col-02">
              {" "}
              <div className="smm-social__social">
                {" "}
                <a href="#" className="social">
                  <img src="/wp-content/uploads/2023/12/icon-social-01.svg" alt="" />
                </a>
                {" "}
                <a href="#" className="social">
                  <img src="/wp-content/uploads/2023/12/icon-social-02.svg" alt="" />
                </a>
                {" "}
                <a href="#" className="social">
                  <img src="/wp-content/uploads/2023/12/icon-social-03.svg" alt="" />
                </a>
                {" "}
                <a href="#" className="social">
                  <img src="/wp-content/uploads/2023/12/icon-social-04.svg" alt="" />
                </a>
                {" "}
                <a href="#" className="social">
                  <img src="/wp-content/uploads/2023/12/icon-social-05.svg" alt="" />
                </a>
                {" "}
                <a href="#" className="social">
                  <img src="/wp-content/uploads/2023/12/icon-social-06.svg" alt="" />
                </a>
                {" "}
                <a href="#" className="social">
                  <img src="/wp-content/uploads/2023/12/icon-social-07.svg" alt="" />
                </a>
                {" "}
                <a href="#" className="social">
                  <img src="/wp-content/uploads/2023/12/icon-social-08.svg" alt="" />
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
      <section className="smm-philosophy">
        {" "}
        <div className="smm-philosophy__container _container">
          {" "}
          <div className="smm-philosophy__body">
            {" "}
            <div className="smm-philosophy__col-01">
              {" "}
              <h2 className="smm-philosophy__title">
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
            <div className="smm-philosophy__col-02">
              {" "}
              <div className="smm-philosophy__items">
                {" "}
                <div className="smm-philosophy__item">
                  {" "}
                  <p className="smm-philosophy__number">
                    {"01"}
                  </p>
                  {" "}
                  <h3 className="smm-philosophy__item-title">
                    {"Clear "}
                    <br />
                    {" objectives"}
                  </h3>
                  {" "}
                  <p className="smm-philosophy__text">
                    {"Before starting any SMM campaign, we set a clear understanding of your company objectives and what you want to achieve. This helps us to define your target audience, choose the right social media platforms, and create content that resonates with your audience."}
                  </p>
                  {" "}
                </div>
                {" "}
                <div className="smm-philosophy__item">
                  {" "}
                  <p className="smm-philosophy__number">
                    {"02"}
                  </p>
                  {" "}
                  <h3 className="smm-philosophy__item-title">
                    {"Target "}
                    <br />
                    {" audience"}
                  </h3>
                  {" "}
                  <p className="smm-philosophy__text">
                    {"Knowing your target audience is crucial in SMM. Thus, Born2Be establishes their demographics, interests, and online behaviours to create content they will find engaging and valuable. Of course, we use social media analytics tools to gain insights into your audience."}
                  </p>
                  {" "}
                </div>
                {" "}
                <div className="smm-philosophy__item">
                  {" "}
                  <p className="smm-philosophy__number">
                    {"03"}
                  </p>
                  {" "}
                  <h3 className="smm-philosophy__item-title">
                    {"Content "}
                    <br />
                    {" strategy"}
                  </h3>
                  {" "}
                  <p className="smm-philosophy__text">
                    {"A well-planned content strategy involves creating high-quality content that resonates with your audience and aligns with your business objectives. Therefore, our team produces different typcontent, such as videos, images, blog posts, infographics, etc."}
                  </p>
                  {" "}
                </div>
                {" "}
                <div className="smm-philosophy__item">
                  {" "}
                  <p className="smm-philosophy__number">
                    {"04"}
                  </p>
                  {" "}
                  <h3 className="smm-philosophy__item-title">
                    {"Consistenc"}
                  </h3>
                  {" "}
                  <p className="smm-philosophy__text">
                    {"Consistency is key in SMM. You must consistently post content, respond to comments, and engage with your audience. Born2Be assists you in this process and helps to build trust and credibility with your audience."}
                  </p>
                  {" "}
                </div>
                {" "}
                <div className="smm-philosophy__item">
                  {" "}
                  <p className="smm-philosophy__number">
                    {"05"}
                  </p>
                  {" "}
                  <h3 className="smm-philosophy__item-title">
                    {"Engagement"}
                  </h3>
                  {" "}
                  <p className="smm-philosophy__text">
                    {"Social media is a two-way communication channel, and you must engage with your audience to build relationships. Born2Be takes care of your social networks by responding to comments, asking questions, and encouraging user-generated content to keep your audience engaged."}
                  </p>
                  {" "}
                </div>
                {" "}
                <div className="smm-philosophy__item">
                  {" "}
                  <p className="smm-philosophy__number">
                    {"06"}
                  </p>
                  {" "}
                  <h3 className="smm-philosophy__item-title">
                    {"Analytics"}
                  </h3>
                  {" "}
                  <p className="smm-philosophy__text">
                    {"Our crew uses social media analytics tools to track key metrics such as reach, engagement, conversions, and ROI. We are here to help you to optimise your campaigns and achieve better results."}
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
      <section className="smm-contacts">
        {" "}
        <div className="smm-contacts__container _container">
          {" "}
          <div className="smm-contacts__body">
            {" "}
            <div className="smm-contacts__form">
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
                  <img src="/wp-content/uploads/2023/11/Mask-group-4-1.png" alt="image" className="img-float" />
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
        <img src="/wp-content/uploads/2023/12/ellipse-01.png" alt="image" className="float-ellipce-01" />
        {" "}
        <img src="/wp-content/uploads/2023/12/ellipse-02.png" alt="image" className="float-ellipce-02" />
        {" "}
        <img src="/wp-content/uploads/2023/12/ellipse-03.png" alt="image" className="float-ellipce-03" />
        {" "}
        <img src="/wp-content/uploads/2023/12/ellipse-04.png" alt="image" className="float-ellipce-04" />
        {" "}
        <img src="/wp-content/uploads/2023/12/ellipse-05.png" alt="image" className="float-ellipce-05" />
        {" "}
        <img src="/wp-content/uploads/2023/12/ellipse-06.png" alt="image" className="float-ellipce-06" />
        {" "}
      </section>
      {" "}
    </main>
    </>
  );
}
