export function bindSearch(form, result, search) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const query = new FormData(form).get('query');
    // TODO: запусти search(query) и обновляй result.textContent только актуальным ответом.
  });
}
