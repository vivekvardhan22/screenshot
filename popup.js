chrome.tabs.captureVisibleTab(null, { format: "png" }, function (screenshotUrl) {
  document.getElementById("screenshot").src = screenshotUrl;
});