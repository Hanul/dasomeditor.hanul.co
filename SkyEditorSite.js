require(process.env.UPPERCASE_PATH + '/LOAD.js');

BOOT({
	CONFIG : {
		isDevMode : true,
		
		defaultBoxName : 'SkyEditorSite',
		
		title : 'Sky Editor',
		
		webServerPort : 8512,
		
		SkyEditorSite : {
			skyEditorVersion : 0.2
		}
	},
	NODE_CONFIG : {
		isNotUsingCPUClustering : true
	}
});
