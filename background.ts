// background.js
declare const chrome: any;

chrome.runtime.onMessage.addListener(function (
  message: any,
  sender: any,
  sendResponse: any
) {
  if (message.id === 'current-url') {
    // Handle the 'current-url' message
    // Retrieve the current URL using the appropriate API
    chrome.tabs.query(
      { active: true, currentWindow: true },
      function (tabs: any) {
        var currentUrl = tabs[0].url;

        // Perform any necessary actions with the current URL

        // Send a response back to the sender if needed
        sendResponse({ url: currentUrl });
      }
    );
  }
});
