import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
/* Base 10 typography scale courtesty of @wesbos 1.6rem === 16px */
html {
  font-size: 10px;
  height: 100vh;
  overflow-x: initial;
  overflow-y: initial;
  background: #fffefc;
  overflow: hidden;
  position: relative;
}
/* Relative Type Scale */
/* https://blog.envylabs.com/responsive-typographic-scales-in-css-b9f60431d1c4 */
:root {
  --font-family-sans: "Graphik Web","Helvetica Neue",Helvetica,Arial,sans-serif;
  --font-family-serif: "Caecilia Web",serif;
  --font-family-espa: "Espa Extended","Graphik Web","San Francisco",Helvetica,Arial,sans-serif;

  --heading-5xl-font-size: 5.75rem;
  --heading-5xl-line-height: 1.05;
  --heading-5xl-letter-spacing: -0.05em;
  --heading-5xl-font-weight: 700;
  --heading-4xl-font-size: 5rem;
  --heading-4xl-line-height: 1.05;
  --heading-4xl-letter-spacing: -0.04em;
  --heading-4xl-font-weight: 600;
  --heading-3xl-font-size: 4.375rem;
  --heading-3xl-line-height: 1.05;
  --heading-3xl-letter-spacing: -0.035em;
  --heading-3xl-font-weight: 600;
  --heading-2xl-font-size: 3.5rem;
  --heading-2xl-line-height: 1.05;
  --heading-2xl-letter-spacing: -0.02em;
  --heading-2xl-font-weight: 600;
  --heading-xl-font-size: 2.75rem;
  --heading-xl-line-height: 1.05;
  --heading-xl-letter-spacing: -0.01em;
  --heading-xl-font-weight: 600;
  --heading-lg-font-size: 2rem;
  --heading-lg-line-height: 1.1;
  --heading-lg-letter-spacing: -0.01em;
  --heading-lg-font-weight: 600;
  --heading-md-font-size: 1.5rem;
  --heading-md-line-height: 1.15;
  --heading-md-letter-spacing: -0.01em;
  --heading-md-font-weight: 600;
  --heading-sm-font-size: 1.35rem;
  --heading-sm-line-height: 1.15;
  --heading-sm-letter-spacing: -0.01em;
  --heading-sm-font-weight: 500;
  --heading-xs-font-size: 1.25rem;
  --heading-xs-line-height: 1.15;
  --heading-xs-letter-spacing: -0.005em;
  --heading-xs-font-weight: 500;

  --subheading-font-size: 0.75rem;
  --subheading-line-height: 1;
  --subheading-letter-spacing: 0.02em;
  --subheading-font-weight: 400;
  --subheading-text-transform: uppercase;

  --espa-xl-font-size: 3.5rem;
  --espa-xl-line-height: 0.9;
  --espa-xl-letter-spacing: 0.05;
  --espa-xl-font-weight: 400;
  --espa-xl-text-transform: uppercase;
  --espa-md-font-size: 2rem;
  --espa-md-line-height: 0.9;
  --espa-md-letter-spacing: 0.05;
  --espa-md-font-weight: 400;
  --espa-md-text-transform: uppercase;
  --espa-sm-font-size: 1.5rem;
  --espa-sm-line-height: 0.9;
  --espa-sm-letter-spacing: 0.05;
  --espa-sm-font-weight: 400;
  --espa-sm-text-transform: uppercase;

  --body-lg-font-size: 1.3125rem;
  --body-lg-line-height: 1.5;
  --body-lg-letter-spacing: -0.01em;
  --body-lg-font-weight: 400;
  --body-md-font-size: 1rem;
  --body-md-line-height: 1.5;
  --body-md-letter-spacing: 0;
  --body-md-font-weight: 400;
  --body-sm-font-size: 0.875rem;
  --body-sm-line-height: 150%;
  --body-sm-letter-spacing: 0.02em;
  --body-sm-font-weight: 400;
  --body-xs-font-size: 0.75rem;
  --body-xs-line-height: 1.35;
  --body-xs-letter-spacing: 0.02em;
  --body-xs-font-weight: 400;
  --body-prose-font-size: 1.1875rem;
  --body-prose-line-height: 1.75;
  --body-prose-letter-spacing: -0.005em;
  --body-prose-font-weight: 400;

  --blockquote-lg-font-size: 1.5rem;
  --blockquote-lg-line-height: 1.6;
  --blockquote-lg-letter-spacing: -0.03em;
  --blockquote-md-font-size: 1.5rem;
  --blockquote-md-line-height: 1.6;
  --blockquote-md-font-weight: 700;
  --blockquote-md-letter-spacing: -0.03em;
  --blockquote-sm-font-size: 1.125rem;
  --blockquote-sm-line-height: 1.7;
  --blockquote-sm-letter-spacing: -0.02em;

  --step-up-5: 2em;
  --step-up-4: 1.7511em;
  --step-up-3: 1.5157em;
  --step-up-2: 1.3195em;
  --step-up-1: 1.1487em;

  /* baseline: 1em */
  --step-down-1: 0.8706em;
  --step-down-2: 0.7579em;
  --step-down-3: 0.6599em;
  --step-down-4: 0.5745em;
  --step-down-5: 0.5em;

  /* Colors */
  --header: rgb(0,0,0);
  --guidelyte-green: #6CA59B;
  --guidelyte-green-light: #5FCF9A;
  --guidelyte-green-dark: #718F8A;
  --guidelyte-yellow: #F5D427;
  --primary-text: black;
  --secondary-text: white;
  --tertiary-text: #e5e5e5;
  --color-black-08: rgba(0,0,0,0.875);
  --color-black-07-5: rgba(0,0,0,0.70);
  --color-black-07: rgba(0,0,0,0.60);
  --color-black-06: rgba(0,0,0,0.45);
  --color-black-05: rgba(0,0,0,0.26);
  --color-black-04: rgba(0,0,0,0.13);
  --color-black-03: rgba(0,0,0,0.06);
  --color-black-02: rgba(0,0,0,0.04);
  --color-black-01: rgba(0,0,0,0.02);
  --color-grey-01: #fafafa;
  --color-grey-02: #f5f5f5;
  --color-grey-03: #eaeaea;
  --color-grey-04: #dedede;
  --color-grey-05: #ccc;
  --color-grey-06: #999;
  --color-grey-07: #616161;
  --color-grey-08: #202020;
  --color-red-01: #fdf4f3;
  --color-red-02: #fbe3e0;
  --color-red-03: #ee5244;
  --color-red-04: #e44232;
  --color-red-06: #d1453b;
  --color-blue-01: #f1f7fe;
  --color-blue-02: #e2f0ff;
  --color-blue-03: #3879fa;
  --color-blue-04: #316fea;
  --color-blue-06: #2a61cf;
  --color-beige-01: #fcf8f3;
  --color-beige-02: #efebe6;
  --color-beige-03: #eae5de;
  --color-green-01: #f6f9f7;
  --color-green-02: #d2e0da;
  --color-green-03: #c7d4cf;
  --color-green-04: #6b8767;
  --color-gold-01: #faf6eb;
  --color-gold-02: #efe0b9;
  --color-gold-03: #e3cf91;
  --color-gold-04: #f7b84f;
  --color-yellow-03: #fffcf0;
  --color-yellow-04: #ffd669;
  --color-linkedin: #0077b5;
  --color-facebook: #3b5998;
  --color-twitter: #00acee;
  --color-base-white: #fff;
  --color-base-black: #fff;
  --color-td-primary: #e44232;
  --color-td-secondary-dark: #fae8d6;
  --color-td-secondary-light: #fff9f3;
  --color-td-cta-active: #d1453b;
  --color-td-cta-hover: #ee5244;
  --color-tw-primary: #316fea;
  --color-tw-secondary-dark: #dce7e4;
  --color-tw-secondary-light: #f6f9f8;
  --color-tw-cta-active: #2a61cf;
  --color-tw-cta-hover: #3879fa;
  --color-dst-primary: #57885c;
  --color-dst-secondary-dark: #f3ecd1;
  --color-dst-secondary-light: #fefbf1;
  --color-dst-cta-active: #4f7d54;
  --color-dst-cta-hover: #539359;
  --color-perceptional-green: #6b8767;
  --color-perceptional-yellow: #ffc93e;
  --radius-sm: 2.5px;
  --radius-md: 4px;
  --radius-lg: 8px;
  --space-4: 0.25rem;
  --space-8: 0.5rem;
  --space-12: 0.75rem;
  --space-16: 1rem;
  --space-24: 1.5rem;
  --space-32: 2rem;
  --space-48: 3rem;
  --space-64: 4rem;
  --space-96: 6rem;
  --space-128: 8rem;
  --space-160: 10rem;
  --space-192: 12rem;
  --space-240: 15rem;
  --duration-fast: 150ms;
  --duration-slow: 350ms;
  --duration-long: 600ms;
  --easing-smooth: cubic-bezier(0.2,0.8,0.2,1);
  --shadow-button: 0px 1px 4px rgba(0, 0, 0, 0.15);
  --shadow-popup: 0px 5px 20px rgba(0, 0, 0, 0.1);
  --shadow-grey: rgba(0,0,0,0.08);
  --shadow-color: rgba(0,0,0,0.24);
  --shadow-sm: 0 2px 7px 0 rgba(0,0,0,0.12);
  --shadow-md: 0px 3px 20px rgba(0,0,0,0.15);
  --shadow-lg: 0 2px 6px 0 rgba(0,0,0,0.06),0 7px 15px 0 rgba(0,0,0,0.12);
  --shadow-hover: 0 6px 24px 0px rgba(0,0,0,0.24);
  --tw-drop-shadow: drop-shadow(0px 5px 20px rgba(0,0,0,0.15)) drop-shadow(0px 0px 96px rgba(49,111,234,0.2));
  --tw-shadow-lg: 0px 5px 20px rgba(0,0,0,0.15),0px 0px 96px rgba(49,111,234,0.2);
  --space-vertical-section: var(--space-96);
  --space-top-hero-section: var(--space-128);
  --card-radius-normal: 3px;
}
/* https://css-tricks.com/snippets/css/system-font-stack/ */
/* Define the "system" font family */
/* Fastest loading font - the one native to their device */
@font-face {
  font-family: system;
  font-style: normal;
  font-weight: 300;
  src: local(".SFNSText-Light"), local(".HelveticaNeueDeskInterface-Light"), 
  local(".LucidaGrandeUI"), local("Ubuntu Light"), local("Segoe UI Light"), 
  local("Roboto-Light"), local("DroidSans"), local("Tahoma");
}
/* Modern CSS Reset */
/* https://alligator.io/css/minimal-css-reset/ */
body, h1, h2, h3, h4, h5, h6, p, ol, ul, input[type=text], input[type=email], button {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  font-weight: normal;
}
*, *:before, *:after {
  box-sizing: inherit;
}
ol, ul {
  list-style: none;
}
img {
  max-width: 100%;
  height: auto;
}
/* Links */
a {
  text-decoration: underline;
  color: inherit;
&.active {
    text-decoration: none;
  }
}
`;

export default GlobalStyles;
