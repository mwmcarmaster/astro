(function () {
  const MEASUREMENT_ID = (window.SITE_ANALYTICS && window.SITE_ANALYTICS.measurementId) || "";
  let analyticsLoaded = false;

  function trackEvent(name, params = {}) {
    if (typeof window.gtag === "function") {
      window.gtag("event", name, params);
    }
  }

  function attachTracking() {
    document.querySelectorAll('a[href^="tel:"]').forEach((el) => {
      if (el.dataset.gaPhoneBound === "1") return;
      el.dataset.gaPhoneBound = "1";
      el.addEventListener("click", () => {
        trackEvent("click_phone", {
          link_text: (el.textContent || "").trim(),
          link_url: el.getAttribute("href") || ""
        });
      });
    });

    document.querySelectorAll('a[data-mail-link="true"]').forEach((el) => {
      if (el.dataset.gaMailBound === "1") return;
      el.dataset.gaMailBound = "1";
      el.addEventListener("click", () => {
        trackEvent("click_email", {
          link_text: (el.textContent || "").trim(),
          link_url: el.getAttribute("href") || ""
        });
      });
    });

    document.querySelectorAll('a').forEach((el) => {
      const href = el.getAttribute("href") || "";
      const label = (el.textContent || "").toLowerCase();
      const isMap = href.includes("google.com/maps") || href.includes("maps?q=") || href.includes("share.google/") || label.includes("wyznacz trasę") || label.includes("map") || label.includes("wizytówk");
      if (!isMap || el.dataset.gaMapBound === "1") return;
      el.dataset.gaMapBound = "1";
      el.addEventListener("click", () => {
        trackEvent("click_map", {
          link_text: (el.textContent || "").trim(),
          link_url: href
        });
      });
    });
  }

  function loadAnalytics() {
    if (analyticsLoaded || !MEASUREMENT_ID) return;
    const s1 = document.createElement("script");
    s1.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(MEASUREMENT_ID);
    s1.async = true;
    document.head.appendChild(s1);

    const s2 = document.createElement("script");
    s2.text = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', '${MEASUREMENT_ID}', { anonymize_ip: true });
    `;
    document.head.appendChild(s2);

    analyticsLoaded = true;
    attachTracking();
  }

  window.SiteAnalytics = {
    loadAnalytics,
    attachTracking
  };

  document.addEventListener("DOMContentLoaded", attachTracking);
})();