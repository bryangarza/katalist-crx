$(function() {
  chrome.bookmarks.onCreated.addListener(function(id, bookmark) {
    console.log("Bookmark Created");
  });
});
