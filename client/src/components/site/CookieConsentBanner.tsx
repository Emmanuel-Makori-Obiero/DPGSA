import { useEffect, useState } from "react";

const PREFERENCE_COOKIE = "dpgsa_cookie_consent";
const PREFERENCE_MAX_AGE = 60 * 60 * 24 * 180;
export const COOKIE_SETTINGS_EVENT = "dpgsa:open-cookie-settings";

type CookieChoice = "accepted" | "rejected";

function hasSavedChoice() {
  return document.cookie
    .split(";")
    .some(cookie => cookie.trim().startsWith(`${PREFERENCE_COOKIE}=`));
}

function saveChoice(choice: CookieChoice) {
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${PREFERENCE_COOKIE}=${choice}; Max-Age=${PREFERENCE_MAX_AGE}; Path=/; SameSite=Lax${secure}`;
}

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(!hasSavedChoice());

    const showCookieSettings = () => setVisible(true);
    window.addEventListener(COOKIE_SETTINGS_EVENT, showCookieSettings);

    return () => {
      window.removeEventListener(COOKIE_SETTINGS_EVENT, showCookieSettings);
    };
  }, []);

  if (!visible) return null;

  const choose = (choice: CookieChoice) => {
    saveChoice(choice);
    setVisible(false);
  };

  return (
    <aside
      className="cookie-consent-banner"
      role="region"
      aria-labelledby="cookie-banner-heading"
    >
      <div className="cookie-consent-copy">
        <h2 id="cookie-banner-heading">We value your privacy</h2>
        <p>
          This site currently uses no optional advertising or analytics cookies.
          Your choice is saved in a first-party preference cookie for six months
          and will be respected if optional cookies are introduced. Read our{" "}
          <a href="/privacy-policy#privacy-cookies">Cookie Policy</a>.
        </p>
      </div>
      <div className="cookie-consent-actions" aria-label="Cookie choices">
        <button
          className="cookie-consent-reject"
          type="button"
          onClick={() => choose("rejected")}
        >
          Reject All
        </button>
        <button
          className="cookie-consent-accept"
          type="button"
          onClick={() => choose("accepted")}
        >
          Accept All
        </button>
      </div>
    </aside>
  );
}
