var fb = new Firebase("https://bookmarks-nice.firebaseio.com");

function bookmarkListener(id, changeInfo) {
	var msg = fb.push();
	msg.set({
                "post": {
                        "uid": "some_id_we_will_figure_out_later",
		        "url": changeInfo.url,
		        "title": changeInfo.title,
		        "numVotes": "0",
                        }
	}, function(err) {
		if (err) {
			// no.exe
		} else {
			//alert("yey updated");
		}
	});
};

chrome.bookmarks.onCreated.addListener(bookmarkListener);