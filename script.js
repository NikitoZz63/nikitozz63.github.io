const search = document.querySelector('#repo-search');
const groups = [...document.querySelectorAll('.repo-group')];
const items = [...document.querySelectorAll('.repo-item')];
const status = document.querySelector('.search-status');

document.querySelector('.catalog-tools').hidden = false;
search.addEventListener('input', () => {
  const query = search.value.trim().toLocaleLowerCase();
  for (const item of items) item.hidden = !item.textContent.toLocaleLowerCase().includes(query);
  for (const group of groups) group.hidden = !group.querySelector('.repo-item:not([hidden])');
  const count = items.filter(item => !item.hidden).length;
  status.textContent = `Найдено: ${count}`;
  document.querySelector('#no-results').hidden = count !== 0;
});
