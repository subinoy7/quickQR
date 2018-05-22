$(function() {
	var url;
   	chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
		url = tabs[0].url;
		if(url!=undefined) {
			var qrcode = new QRCode(document.getElementById("qrcode"), {
				width : 200,
				height : 200
			});
			qrcode.makeCode(url);
		}
	});
});