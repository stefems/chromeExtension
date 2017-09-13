console.log("here");

document.getElementById('do-count').onclick = count;

function count() {
	console.log("count");
	//This allows us to send a message to our current tab!
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
	    chrome.tabs.sendMessage(tabs[0].id, {action: "open_dialog_box"}, function(response) {
	    	if (response) {
	    		
	    	}
	    });  
	});
}