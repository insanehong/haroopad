define([
		'module',
		'keyboard'
	],
	function(module, HotKey) {
		var md = marked.setOptions({
          gfm: true,
          tables: true,
          breaks: false,
          pedantic: false,
          sanitize: true,
          smartLists: true,
          langPrefix: '',
          highlight: function(code, lang) {
            var res;
            if(!lang) {
              return code;
            }

            switch(lang) {
              case 'js':
                lang = 'javascript';
              break;
            }

            try {
              res = hljs.highlight(lang, code).value;
            } catch(e) {

            } finally {
              return res || code;
            }
          }
        });

		module.exports = md;
});