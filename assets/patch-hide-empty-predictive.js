// assets/patch-hide-empty-predictive.js
document.addEventListener('DOMContentLoaded', () => {
  customElements.whenDefined('predictive-search').then(() => {
    document.querySelectorAll('predictive-search').forEach((ps) => {
      ps.addEventListener('render', () => {
        const list = ps.querySelector('.predictive-search');
        // 有 <li> 才显示
        const hasItem = list && list.querySelector('li');
        if (!hasItem) {
          ps.removeAttribute('open');        // 关闭弹层
          if (list) list.style.display = 'none';
        } else {
          ps.setAttribute('open', '');       // 有结果时保证打开
          if (list) list.style.display = '';
        }
      });
    });
  });
});