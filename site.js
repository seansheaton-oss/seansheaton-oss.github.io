(() => {
  const elements = [...document.querySelectorAll('[data-en][data-zh]')];
  const button = document.getElementById('language');
  let language = 'en';
  try { language = localStorage.getItem('jocelyn-language') === 'zh' ? 'zh' : 'en'; } catch (_) {}
  function render() {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    elements.forEach(element => { element.textContent = element.dataset[language]; });
    button.textContent = language === 'zh' ? 'English ↗' : '中文 ↗';
    button.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切换为中文');
    document.title = language === 'zh' ? 'Jocelyn Games · 给日常添一点好玩' : 'Jocelyn Games — A little play, every day.';
  }
  button.addEventListener('click', () => {
    language = language === 'en' ? 'zh' : 'en';
    try { localStorage.setItem('jocelyn-language', language); } catch (_) {}
    render();
  });
  render();
})();
