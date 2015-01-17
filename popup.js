$(function() {
  chrome.bookmarks.onCreated.addListener(function callback) {
    callback(console.log("hello"));
  };
});
