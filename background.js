function bookmarkListener(id, changeInfo) {
	alert(id);
};

chrome.bookmarks.onChanged.addListener(bookmarkListener);