/* eslint-disable @next/next/no-img-element */
// Converted 1:1 from the WordPress theme markup (born2be-media). Edit freely.
import Link from 'next/link';
import JobForm from '@/components/forms/JobForm';
import PlanForm from '@/components/forms/PlanForm';

export default function FooterMarkup() {
  return (
    <>
    <footer className="footer">
      {" "}
      <div className="footer__container _container">
        {" "}
        <div className="footer__body">
          {" "}
          <div className="footer__row">
            {" "}
            <div className="footer__col-01">
              {" "}
              <Link href="/" className="footer__logo">
                <img src="/wp-content/uploads/2023/11/b2b-logo-black.svg" alt="logo" />
              </Link>
              {" "}
              <p className="footer__label">
                {"Powerful digital marketing services for all-sized businesses."}
              </p>
              {" "}
              <ul className="footer__addresses">
                {" "}
                {" "}
                <li className="footer__item"></li>
                {" "}
              </ul>
              {" "}
            </div>
            {" "}
            <div className="footer__col-02">
              {" "}
              <div className="footer__menus">
                {" "}
                <nav className="footer__navigation">
                  {" "}
                  <div className="menu-footer-first-container">
                    <ul id="footer-first" className="menu-list">
                      <li id="menu-item-80" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-80">
                        <Link href="/">
                          {"Home"}
                        </Link>
                      </li>
                      {" "}
                      <li id="menu-item-77" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-77">
                        <Link href="/agency/">
                          {"Agency"}
                        </Link>
                      </li>
                      {" "}
                      <li id="menu-item-78" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-78">
                        <Link href="/seo-promotion/">
                          {"SEO Promotion"}
                        </Link>
                      </li>
                      {" "}
                      <li id="menu-item-79" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-79">
                        <Link href="/smm-solutions/">
                          {"SMM Solutions"}
                        </Link>
                      </li>
                      {" "}
                    </ul>
                  </div>
                  {" "}
                </nav>
                {" "}
                <nav className="footer__navigation">
                  {" "}
                  <div className="menu-footer-second-container">
                    <ul id="footer-second" className="menu-list">
                      <li id="menu-item-69" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-69">
                        <Link href="/smo-services/">
                          {"SMO Services"}
                        </Link>
                      </li>
                      {" "}
                      <li id="menu-item-70" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-70">
                        <Link href="/serm-marketing/">
                          {"SERM Marketing"}
                        </Link>
                      </li>
                      {" "}
                      <li id="menu-item-71" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-71">
                        <Link href="/markets/">
                          {"Markets"}
                        </Link>
                      </li>
                      {" "}
                      <li id="menu-item-72" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-72">
                        <Link href="/cases/">
                          {"Cases"}
                        </Link>
                      </li>
                      {" "}
                    </ul>
                  </div>
                  {" "}
                </nav>
                {" "}
                <nav className="footer__navigation">
                  {" "}
                  <div className="menu-footer-third-container">
                    <ul id="footer-third" className="menu-list">
                      <li id="menu-item-73" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73">
                        <Link href="/career/">
                          {"Career"}
                        </Link>
                      </li>
                      {" "}
                      <li id="menu-item-74" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-74">
                        <Link href="/faq/">
                          {"FAQ"}
                        </Link>
                      </li>
                      {" "}
                      <li id="menu-item-75" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-75">
                        <Link href="/journal/">
                          {"Journal"}
                        </Link>
                      </li>
                      {" "}
                      <li id="menu-item-76" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-76">
                        <Link href="/contacts/">
                          {"Contacts"}
                        </Link>
                      </li>
                      {" "}
                    </ul>
                  </div>
                  {" "}
                </nav>
                {" "}
                <div className="footer__navigation contacts">
                  {" "}
                  <ul className="footer__contacts">
                    {" "}
                    <li className="footer__contact-item">
                      {" "}
                      <a href="mailto:contact@born2be.media">
                        {" "}
                        <svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                          {" "}
                          <path fillRule="evenodd" clipRule="evenodd" d="M2.28422 1.78654C0.721557 3.34788 0.721558 5.86254 0.721558 10.8905C0.721558 15.9185 0.721557 18.4332 2.28422 19.9945C3.84556 21.5572 6.36022 21.5572 11.3882 21.5572H16.7216C21.7496 21.5572 24.2642 21.5572 25.8256 19.9945C27.3882 18.4332 27.3882 15.9185 27.3882 10.8905C27.3882 5.86254 27.3882 3.34788 25.8256 1.78654C24.2642 0.223877 21.7496 0.223877 16.7216 0.223877H11.3882C6.36022 0.223877 3.84556 0.223877 2.28422 1.78654ZM22.8229 4.91721C22.9926 5.12093 23.0744 5.38368 23.0504 5.64771C23.0264 5.91174 22.8985 6.15543 22.6949 6.32521L19.7669 8.76521C18.5842 9.75188 17.6269 10.5492 16.7802 11.0932C15.9002 11.6599 15.0429 12.0172 14.0549 12.0172C13.0669 12.0172 12.2096 11.6585 11.3282 11.0932C10.4829 10.5492 9.52556 9.75054 8.34289 8.76654L5.41489 6.32654C5.21103 6.1568 5.08294 5.91303 5.05881 5.64886C5.03468 5.38468 5.11649 5.12174 5.28622 4.91788C5.45596 4.71401 5.69973 4.58593 5.96391 4.5618C6.22809 4.53767 6.49103 4.61947 6.69489 4.78921L9.57489 7.18788C10.8189 8.22388 11.6816 8.94121 12.4122 9.41054C13.1176 9.86388 13.5962 10.0172 14.0562 10.0172C14.5162 10.0172 14.9949 9.86521 15.7002 9.41054C16.4296 8.94121 17.2936 8.22388 18.5376 7.18788L21.4162 4.78788C21.6201 4.61837 21.883 4.53677 22.147 4.56102C22.411 4.58527 22.6533 4.71339 22.8229 4.91721Z" fill="#282828"></path>
                          {" "}
                        </svg>
                        {" contact@born2be.media "}
                      </a>
                      {" "}
                    </li>
                    {" "}
                  </ul>
                  {" "}
                  <ul className="footer__social">
                    {" "}
                    <li className="footer__social-item">
                      {" "}
                      <a href="https://www.linkedin.com/company/born2be.media/" className="linkedin">
                        {" "}
                        <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                          {" "}
                          <path d="M0.436157 7.875H5.57991V22.2437H0.436157V7.875Z" fill="#282828"></path>
                          {" "}
                          <path d="M16.4799 7.8562C12.8112 7.8562 12.1987 9.8687 12.1987 9.8687V7.87495H8.22992V22.2437H12.2424C12.2424 22.2437 12.2424 15.1312 12.2424 13.9562C12.2424 12.7812 12.9237 11.2312 15.0862 11.2312C17.2487 11.2312 17.5049 13.3437 17.4799 13.6C17.4549 13.8562 17.4299 22.2375 17.4299 22.2375H21.6674C21.6674 22.2375 21.6674 14.0625 21.6674 12.2687C21.6737 9.03745 19.5049 7.8562 16.4799 7.8562Z" fill="#282828"></path>
                          {" "}
                          <path d="M3.00491 5.89995C4.42359 5.89995 5.57366 4.74988 5.57366 3.3312C5.57366 1.91252 4.42359 0.762451 3.00491 0.762451C1.58623 0.762451 0.436157 1.91252 0.436157 3.3312C0.436157 4.74988 1.58623 5.89995 3.00491 5.89995Z" fill="#282828"></path>
                          {" "}
                        </svg>
                        {" "}
                      </a>
                      {" "}
                    </li>
                    {" "}
                  </ul>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="footer__row">
            {" "}
            <p className="footer__copywriting">
              {" All Rights Reserved. © 2026 "}
            </p>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </footer>
    {" "}
    {" "}
    <div className="popup popup_plan-smm">
      {" "}
      <div className="popup__content">
        {" "}
        <div className="popup__body popup-plan">
          {" "}
          <div className="popup__close"></div>
          {" "}
          <div className="popup-plan__body">
            {" "}
            <div className="popup-plan__head">
              {" "}
              <h2 className="popup-plan__title">
                {"SMM Solutions"}
              </h2>
              {" "}
              <h3 className="popup-plan__plan"></h3>
              {" "}
              <p className="popup-plan__text">
                {"Would you like to order the complex package? "}
                <br />
                {" Please fill out the form below, and our experts will contact you as soon as possible to clarify all the necessary details."}
              </p>
              {" "}
            </div>
            {" "}
            <div className="popup-plan__form">
              {" "}
              <PlanForm />
              {" "}
            </div>
            {" "}
            <img src="/wp-content/uploads/2023/11/popup-back-01.png" alt="image" />
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
    {" "}
    {" "}
    <div className="popup popup_plan-seo">
      {" "}
      <div className="popup__content">
        {" "}
        <div className="popup__body popup-plan">
          {" "}
          <div className="popup__close"></div>
          {" "}
          <div className="popup-plan__body">
            {" "}
            <div className="popup-plan__head">
              {" "}
              <h2 className="popup-plan__title">
                {"SEO Promotion"}
              </h2>
              {" "}
              <h3 className="popup-plan__plan"></h3>
              {" "}
              <p className="popup-plan__text">
                {"Would you like to order the complex package? "}
                <br />
                {" Please fill out the form below, and our experts will contact you as soon as possible to clarify all the necessary details."}
              </p>
              {" "}
            </div>
            {" "}
            <div className="popup-plan__form">
              {" "}
              <PlanForm />
              {" "}
            </div>
            {" "}
            <img src="/wp-content/uploads/2023/11/popup-back-01.png" alt="image" />
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
    {" "}
    {" "}
    <div className="popup popup_plan-smo">
      {" "}
      <div className="popup__content">
        {" "}
        <div className="popup__body popup-plan">
          {" "}
          <div className="popup__close"></div>
          {" "}
          <div className="popup-plan__body">
            {" "}
            <div className="popup-plan__head">
              {" "}
              <h2 className="popup-plan__title">
                {"SMO Services"}
              </h2>
              {" "}
              <h3 className="popup-plan__plan"></h3>
              {" "}
              <p className="popup-plan__text">
                {"Would you like to order the complex package? "}
                <br />
                {" Please fill out the form below, and our experts will contact you as soon as possible to clarify all the necessary details."}
              </p>
              {" "}
            </div>
            {" "}
            <div className="popup-plan__form">
              {" "}
              <PlanForm />
              {" "}
            </div>
            {" "}
            <img src="/wp-content/uploads/2023/11/popup-back-01.png" alt="image" />
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
    {" "}
    {" "}
    <div className="popup popup_plan-serm">
      {" "}
      <div className="popup__content">
        {" "}
        <div className="popup__body popup-plan">
          {" "}
          <div className="popup__close"></div>
          {" "}
          <div className="popup-plan__body">
            {" "}
            <div className="popup-plan__head">
              {" "}
              <h2 className="popup-plan__title">
                {"SERM Marketing"}
              </h2>
              {" "}
              <h3 className="popup-plan__plan"></h3>
              {" "}
              <p className="popup-plan__text">
                {"Would you like to order the complex package? "}
                <br />
                {" Please fill out the form below, and our experts will contact you as soon as possible to clarify all the necessary details."}
              </p>
              {" "}
            </div>
            {" "}
            <div className="popup-plan__form">
              {" "}
              <PlanForm />
              {" "}
            </div>
            {" "}
            <img src="/wp-content/uploads/2023/11/popup-back-01.png" alt="image" />
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
    {" "}
    {" "}
    <div className="popup popup_plan-markets">
      {" "}
      <div className="popup__content">
        {" "}
        <div className="popup__body popup-plan">
          {" "}
          <div className="popup__close"></div>
          {" "}
          <div className="popup-plan__body">
            {" "}
            <div className="popup-plan__head">
              {" "}
              <h2 className="popup-plan__title">
                {"SERM Marketing"}
              </h2>
              {" "}
              <h3 className="popup-plan__plan"></h3>
              {" "}
              <p className="popup-plan__text">
                {"Would you like to order the complex package? "}
                <br />
                {" Please fill out the form below, and our experts will contact you as soon as possible to clarify all the necessary details."}
              </p>
              {" "}
            </div>
            {" "}
            <div className="popup-plan__form">
              {" "}
              <PlanForm />
              {" "}
            </div>
            {" "}
            <img src="/wp-content/uploads/2023/11/popup-back-01.png" alt="image" />
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
    {" "}
    {" "}
    <div className="popup popup_job-offer">
      {" "}
      <div className="popup__content">
        {" "}
        <div className="popup__body popup-plan">
          {" "}
          <div className="popup__close"></div>
          {" "}
          <div className="popup-plan__body">
            {" "}
            <div className="popup-plan__head">
              {" "}
              <h2 className="popup-plan__title">
                {"Apply for the position of "}
                <span className="popup-plan__plan"></span>
              </h2>
              {" "}
            </div>
            {" "}
            <div className="popup-plan__form">
              {" "}
              <JobForm />
              {" "}
            </div>
            {" "}
            <img src="/wp-content/uploads/2023/11/popup-back-01.png" alt="image" />
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
    {" "}
    {" "}
    <div className="popup popup_main-form">
      {" "}
      <div className="popup__content">
        {" "}
        <div className="popup__body popup-plan">
          {" "}
          <div className="popup__close"></div>
          {" "}
          <div className="popup-plan__body">
            {" "}
            <div className="popup-plan__head">
              {" "}
              <h2 className="popup-plan__title">
                {"Let’s discuss the value of "}
                <br />
                {" "}
                <span>
                  {" your business"}
                </span>
              </h2>
              {" "}
              <h3 className="popup-plan__plan"></h3>
              {" "}
            </div>
            {" "}
            <div className="popup-plan__form">
              {" "}
              <PlanForm />
              {" "}
            </div>
            {" "}
            <img src="/wp-content/uploads/2023/11/popup-back-01.png" alt="image" />
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
    {" "}
    <div className="popup popup_marketing-form">
      {" "}
      <div className="popup__content">
        {" "}
        <div className="popup__body popup-plan">
          {" "}
          <div className="popup__close"></div>
          {" "}
          <div className="popup-plan__body">
            {" "}
            <div className="popup-plan__head">
              {" "}
              <h2 className="popup-plan__title">
                {"Let’s discuss the value of "}
              </h2>
              {" "}
              <h3 className="popup-plan__plan"></h3>
              {" "}
            </div>
            {" "}
            <div className="popup-plan__form">
              {" "}
              <PlanForm />
              {" "}
            </div>
            {" "}
            <img src="/wp-content/uploads/2023/11/popup-back-01.png" alt="image" />
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
    {" "}
    </>
  );
}
