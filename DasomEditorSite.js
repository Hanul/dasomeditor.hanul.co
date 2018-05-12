require(process.env.UPPERCASE_PATH + '/LOAD.js');

BOOT({
	CONFIG : {
		isDevMode : true,
		
		defaultBoxName : 'DasomEditorSite',
		
		title : '다솜 에디터',
		
		webServerPort : 8512,
		
		DasomEditorSite : {
			dasomEditorVersion : 0.2
		}
	},
	NODE_CONFIG : {
		isNotUsingCPUClustering : true
	}
});
