chrome.runtime.onMessage.addListener(
	function(msg, sender, callback) {
		if(msg === 'GET_URL') {
			chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
				callback(tabs[0].url);
			});
		} else {
			return false;
		}
	}
);