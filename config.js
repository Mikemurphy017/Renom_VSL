/* ===== EDIT THESE ===== */
window.FUNNEL = {
  // Page the popup form sends visitors to (Calendly is embedded there)
  bookingPage: "book.html",
  // Calendly event embedded on the booking page
  calendlyUrl: "https://calendly.com/danny-bluestonepartnersllc/15mins",
  // Calendly field the phone number fills. This event's location is "Phone call"
  // (we call the invitee), so the number goes in "location". If an event type asks
  // "Phone number" as its first custom question instead, use "a1".
  calendlyPhoneField: "location",
  // Where to send people once they've booked
  thankYouPage: "thank-you.html",
  // Google Apps Script web app that writes each lead to the sheet
  // (see tools/google-sheets-lead-webhook.gs), attached to the "Renom Video – Meta Ad Leads" sheet.
  leadWebhookUrl: "https://script.google.com/macros/s/AKfycbxO3FzdErdYg2CcUw2q5IUEMJ-0WmMGNS6GjOTnBLPNed-KCg0RlTKd9qvENcepqgjd/exec",
  leadSource: "Renom VSL - Meta",
  leadStoreKey: "renom_lead",
  ctaDelaySeconds: 0,                  // 0 = button shows right away. e.g. 120 to reveal at the pitch.
  metaPixelId: "400712735043923"
};
/* Troubleshooting: add ?nopx=all to a page address to load it without the pixel */
if (new URLSearchParams(location.search).get("nopx") === "all") window.FUNNEL.metaPixelId = "";
/* ===== Meta Pixel (PageView on every page) ===== */
(function(){var id=window.FUNNEL.metaPixelId;if(!id)return;
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init',id);fbq('track','PageView');})();
