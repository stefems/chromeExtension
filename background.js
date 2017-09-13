// Called when the user clicks on the browser action.
console.log("background files are run from the get-go");
//Since it runs in the background, this file can be used to initialize
// state or data needed or updated in the session.
var globalState = "init";
console.log(globalState);
chrome.browserAction.onClicked.addListener(function(tab) {
    alert('icon clicked!');
    //This allows us to send a message to our current tab!
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
	    chrome.tabs.sendMessage(tabs[0].id, {action: "open_dialog_box"}, function(response) {
	    	if (response) {
	    		globalState = "chat";
	    		console.log(globalState);
	    		console.log("Hey, they got our message and sent us a response!");
	    		console.log(response);
	    	}
	    });  
	});
});