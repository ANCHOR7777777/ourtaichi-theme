document.addEventListener('DOMContentLoaded', () => {
  const init = () => {
    document.querySelectorAll('predictive-search').forEach(ps => {
      const list = ps.querySelector('.predictive-search');
      if (!list) return;
      const hideIfEmpty = () => {
        const hasItems = !!list.querySelector('li');
        list.style.display = hasItems ? '' : 'none';
      };
      // initial check
      hideIfEmpty();
      // observe mutations inside list
      const mo = new MutationObserver(hideIfEmpty);
      mo.observe(list, {childList:true, subtree:true});
    });
  };
  if (customElements.get('predictive-search')) {
    init();
  } else {
    customElements.whenDefined('predictive-search').then(init);
  }
});