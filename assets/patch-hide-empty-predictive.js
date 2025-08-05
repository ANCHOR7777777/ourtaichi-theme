document.addEventListener('DOMContentLoaded', () => {
  if (!('querySelector' in document)) return;
  customElements.whenDefined('predictive-search').then(() => {
    document.querySelectorAll('predictive-search').forEach((ps) => {
      ps.addEventListener('render', () => {
        const list = ps.querySelector('.predictive-search');
        if (!list) return;
        const hasItems = !!list.querySelector('li');
        if (hasItems) {
          list.style.display = '';
          ps.setAttribute('open', '');
        } else {
          list.style.display = 'none';
          ps.removeAttribute('open');
        }
      });
    });
  });
});