/* ===== EDIT THESE ===== */
window.FUNNEL = {
  ctaUrl: "https://www.renom.video/signup", // your free-trial signup link (or a demo booking link)
  ctaText: "Start My Free 7-Day Trial",
  ctaDelaySeconds: 0,                  // 0 = button shows right away (like the STA page). Set e.g. 120 to reveal at the pitch.
  metaPixelId: "400712735043923"       // Meta Pixel (PageView here; CompleteRegistration fires on the signup success page)
};
/* ===== Meta Pixel (loads only if an ID is set) ===== */
(function(){var id=window.FUNNEL.metaPixelId;if(!id)return;
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init',id);fbq('track','PageView');})();
