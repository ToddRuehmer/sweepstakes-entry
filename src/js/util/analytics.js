
const analytics = (function() {
 
    const trackEvent = (category, action, label) => {
        if(window.ga) {
            ga('send', 'event', category, action, label);
        } else if(window.gtag) {
          gtag('event', action, {
            'event_category': category,
            'event_label': label,
          });
        }
    }

    return {
      trackEvent: trackEvent
    };
  }());
  export default analytics;