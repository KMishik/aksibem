module.exports = {
  block: 'page',
  title: 'Page test',
  favicon: '/favicon.ico',
  head: [
    { elem: 'meta', attrs: { name: 'description', content: '' } },
    { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
    { elem: 'css', url: 'test.min.css' }
  ],
  scripts: [{ elem: 'js', url: 'test.min.js' }],
  mods: { theme: 'islands' },
  content: [
    { block: 'hello', names: ['BEMHTML','BEMJSON','BEMTREE','KMishik'] },
  ]
};
