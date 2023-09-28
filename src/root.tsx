import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import { QwikPartytown } from './components/partytown/partytown';

import "./global.css";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */
    const data = import.meta.env.PUBLIC_SITEVERIFY;
    const googleTag= import.meta.env.PUBLIC_GTAG;
    const analyticsScript = `
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    gtag('js', new Date());

    gtag('config', ${googleTag});
    // gtag('config',${googleTag});
  `;
  /**
   * @see https://github.com/BuilderIO/qwik/issues/1362#issuecomment-1256446000 for analytics third party fix
   * 
   */
  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content={data} />
        <link rel="manifest" href="/manifest.json" />
        <QwikPartytown forward={['dataLayer.push']} />
        <script type="text/partytown" src={`https://www.googletagmanager.com/gtag/js?id=${googleTag}`}/>
        <script type="text/partytown" async dangerouslySetInnerHTML={analyticsScript} />
        <RouterHead />
      </head>
      <body lang="en" class="m-0 p-0 ">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
