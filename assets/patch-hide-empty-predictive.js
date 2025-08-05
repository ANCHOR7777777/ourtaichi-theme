document.addEventListener('DOMContentLoaded', () => {
  const SEARCH_URL = window.Shopify && Shopify.routes ? Shopify.routes.search_url || '/search' : '/search';

  // Redirect header search icon straight to search page
  document.addEventListener('click', (e) => {
    const iconBtn = e.target.closest('.header__icon--search');
    if (iconBtn && iconBtn.tagName !== 'INPUT') {
      e.preventDefault();
      window.location.href = SEARCH_URL;
    }
  });

  // Hide predictive list when empty (previous logic)
  const initPredictive = () => {
    document.querySelectorAll('predictive-search').forEach(ps => {
      const list = ps.querySelector('.predictive-search');
      const input = ps.querySelector('input[type="search"]');
      if (!list || !input) return;
      const toggle = () => {
        const hasItems = !!list.querySelector('li');
        const show = input.value.trim().length > 0 && hasItems;
        list.style.display = show ? '' : 'none';
      };
      input.addEventListener('input', toggle);
      new MutationObserver(toggle).observe(list, {childList:true, subtree:true});
      toggle();
    });
  };
  if (customElements.get('predictive-search')) {
    initPredictive();
  } else {
    customElements.whenDefined('predictive-search').then(initPredictive);
  }
});