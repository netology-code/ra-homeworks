'use strict';
const urlPrser = require('url');
const fs = require('fs');
const hljs = require('highlight.js');
const md = require('markdown-it')({
  linkify: true,
  highlight: (str, lang) => {
    let content;
    if (lang && hljs.getLanguage(lang)) {
      try {
        content = hljs.highlight(lang, str, true).value;
      } catch (__) {}
    }
    if (!content) {
      content = md.utils.escapeHtml(str);
    }
    return `<pre class="hljs"><code>${content}</code></pre>`;
  }
});

function template(content, title = 'Заголовок') {
  return `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <link rel="shortcut icon" href="/i/favicon.ico" type="image/x-icon">
  <title>${title}</title>
  <link rel="stylesheet" href="/node_modules/highlight.js/styles/default.css">
  <style>
  body {
    font-family: sans-serif;
    max-width: 900px;
    margin: 0 auto;
    padding: 30px;
  }

  p {
    line-height: 1.5;
  }

  img {
    max-width: 100%;
  }

  ul {
    list-style: none;
  }

  ul > li::before {
    content: '— ';
    margin-left: -1em;
  }

  ol.lectures {
    list-style: none;
  }

  li {
    margin: 10px 0;
  }

  pre {
    font-family: Courier New, Courier, monospace;
    border-radius: 2px;
    padding: 20px;
    background-color: #eeeeee;
  }

  code {
    border-radius: 2px;
    padding: 2px 5px;
    font-family: Courier New, Courier, monospace;
    background: #eeeeee;
  }

  kbd {
    padding: .1em .3em;
    border-radius: .2em;
    background: rgba(88,90,94,0.1);
    line-height: 1;
    font-family: PT Mono, monospace, monospace;
  }

  aside {
    margin-top: 100px;
    border-top: 2px solid #eeeeee;
    font-size: 80%;
    color: #888888;
  }

  section.homework-guides code {
    white-space: pre-wrap;
  }

  section.homework-guides div.task {
    border: 1px solid #dadada;
  }

  div.task h4 {
  	margin: 0;
  	padding: 10px 20px;
    background-color: #dadada;
  }

  div.task p {
    padding: 0 20px;
  }

  p + div.task, pre + div.task {
    margin-top: 20px;
  }

  dl, dt, dd {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
  }

  dt {
    float: left;
    clear: both;
    font-weight: bold;
  }

  dt::after {
    content: "—";
    padding-left: 0.5em;
    padding-right: 0.5em;
  }

  dd {
    margin: 1em;
  }

  a[href=""] {
    color: inherit;
    cursor: default;
    text-decoration: line-through;
  }
  </style>
</head>
<body>
  <article>
    ${content}
  </article>
  <aside>

  </aside>
</body>
</html>`;
}

function markdownMiddleware(req, res, next) {
  const url = urlPrser.parse(req.url);
  const mdRule = /\.md$/i;
  if (!mdRule.test(url.pathname)) {
    return next();
  }
  fs.readFile(__dirname + url.pathname, { encoding: 'utf8' }, (err, file) => {
    if (err) {
      return next();
    }
    res.setHeader('Content-Type', 'text/html');
    res.end(template(md.render(file)));
  });

}

const indexMiddleware = indexFile => (req, res, next) => {
  const url = urlPrser.parse(req.url);
  fs.stat(__dirname + url.pathname, (err, stat) => {
    if (err || !stat.isDirectory()) {
      return next();
    }
    if (!url.pathname.match(/\/$/)) {
      url.pathname += '/';
    }
    try {
      fs.accessSync(__dirname + url.pathname + indexFile);
      res.statusCode = 301;
      res.setHeader('Location', url.pathname + indexFile);
      res.end(`<a href="${url.pathname}${indexFile}">${indexFile}</a>`);
    } catch (e) {
      next();
    }
  });
};

module.exports = {
  "files": [
    "**/*.html",
    "**/*.css",
    "**/*.js",
    "**/*.png",
    "**/*.jpeg",
    "**/*.jpg"
  ],
  "server": {
    baseDir: "./",
    directory: false,
    serveStaticOptions: {
        extensions: ["html", "js", "css"]
    }
  },
  "startPath": "/README.md",
  "port": 3000,
  "middleware": [
    indexMiddleware('index.html'),
    indexMiddleware('README.md'),
    markdownMiddleware
  ]
};
