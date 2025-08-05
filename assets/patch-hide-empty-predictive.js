document.addEventListener('DOMContentLoaded', () => {
  const init = () => {
    document.querySelectorAll('predictive-search').forEach(ps => {
      const list = ps.querySelector('.predictive-search');
      const input = ps.querySelector('input[type="search"]');
      if (!list || !input) return;
      const toggle = () => {
        const show = input.value.trim().length > 0 && list.querySelector('li');
        list.style.display = show ? '' : 'none';
      };
      input.addEventListener('input', toggle);
      const mo = new MutationObserver(toggle);
      mo.observe(list, {childList:true, subtree:true});
      toggle();
    });
  };
  if (customElements.get('predictive-search')) {
    init();
  } else {
    customElements.whenDefined('predictive-search').then(init);
  }
});