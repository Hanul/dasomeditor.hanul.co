SkyEditorSite.MAIN = METHOD({

	run : (addRequestListener, addPreprocessor) => {
		
		let Less = require('less');
		
		let nspRequestListener = NSP.Bridge({
			rootPath : './SkyEditorSite/view',
			templateEngine : SML.Compile
		}).requestListener;
		
		// 리퀘스트를 NSP로 넘깁니다.
		addRequestListener(nspRequestListener);
		
		addPreprocessor({
			extension : 'less',
			preprocessor : (content, response) => {
				
				Less.render(content, (error, output) => {
					response({
						content : output.css,
						contentType : 'text/css',
						version : CONFIG.version
					});
				});
			}
		});
	}
});
