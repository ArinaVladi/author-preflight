import assert from 'node:assert/strict';
import test from 'node:test';
import { changeColumns } from './starter.mjs';

// Сначала проверяем обычный результат, затем независимость вложенного объекта.
test('возвращает настройки с новым числом колонок и сохраняет остальные значения', () => {
  const source = { theme: 'dark', panel: { title: 'Сводка', columns: 2 } };
  assert.deepEqual(changeColumns(source, 4), { theme: 'dark', panel: { title: 'Сводка', columns: 4 } });
  assert.equal(source.panel.columns, 2);
});

test('панель независима даже когда число колонок не меняется', () => {
  const source = { theme: 'dark', panel: { title: 'Сводка', columns: 2 } };
  const result = changeColumns(source, 2);
  result.panel.title = 'Другая панель';
  assert.equal(source.panel.title, 'Сводка');
});
