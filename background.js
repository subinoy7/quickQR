chrome.runtime.onInstalled.addListener(function(details) {
	chrome.storage.sync.set({color: '#3aa757'}, function() {
	  console.log("The color is green.");
	});
	//alert('The extension is installed');
	chrome.contextMenus.create({
      "id": "genBarCodeFromContextMenu",
      "title": "Generate Barcode",
      "contexts": ["selection"]
    });
});
chrome.contextMenus.onClicked.addListener(function() {
	alert('text is selected');
});