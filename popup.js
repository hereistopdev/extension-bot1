// popup.js
document.addEventListener("DOMContentLoaded", function () {
  const colorButton = document.getElementById("colorButton");
  const stopButton = document.getElementById("stopButton");
  stopButton.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const currentTabId = tabs[0].id;
      const color = "#ff0000"; // Change the color value to your desired color
      const currentURL = tabs[0].url;

      switch (currentURL) {
        case "https://www.csgoroll.com/en/withdraw/csgo/p2p":
          chrome.scripting.executeScript({
            target: { tabId: currentTabId, allFrames: true },
            files: ["2.js"],
          });
          break;
      }

      console.log(tabs);
    });
  });

  colorButton.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const currentTabId = tabs[0].id;
      const color = "#ff0000"; // Change the color value to your desired color
      const currentURL = tabs[0].url;

      switch (currentURL) {
        case "https://www.csgoroll.com/en/withdraw/csgo/p2p":
          chrome.scripting.executeScript({
            target: { tabId: currentTabId, allFrames: true },
            files: ["2.js"],
          });
          console.log("here 1");
          chrome.scripting.executeScript({
            target: { tabId: currentTabId, allFrames: false },
            files: ["1.js"],
          });
          break;
      }

      console.log(tabs);
    });
  });
});
