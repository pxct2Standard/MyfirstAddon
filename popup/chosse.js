/**
* Listen for clicks on the buttons, and send the appropriate message to
* the content script in the page.
*/

const idkaufentab = "I5sO5NCRrEnS";
const schulletab = "oGOJC1XtHRwA";
const musiktap = "2fhtg_JofyK2";
const jstap = "At7VfJQF4blB";
const voiceatap = "rSSxFokKRmuy";
const addonstap = "kpcLYWAKAq5s";
const othertap = "-YYFy6oxWMHp";
const python = "qUNVFa9csfic";

function kaufenadd() {
    console.log('updateActiveTab');
  
    function isSupportedProtocol(urlString) {
      var supportedProtocols = ["https:", "http:", "ftp:", "file:"];
      var url = document.createElement('a');
      url.href = urlString;
      return supportedProtocols.indexOf(url.protocol) != -1;
    }
  
    function updateTab(tabs) {
      if (tabs[0]) {
        currentTab = tabs[0];
        if (isSupportedProtocol(currentTab.url)) {
          var searching = browser.bookmarks.search({url: currentTab.url});
          searching.then((bookmarks) => {
            currentBookmark = bookmarks[0];
            console.log(`Url: '${currentTab.url}'`);
            console.log(currentBookmark);
            if (currentBookmark) {
              browser.bookmarks.remove(currentBookmark.id);
            } else {
              browser.bookmarks.create({parentId: idkaufentab,title: currentTab.title, url: currentTab.url});
            }
  
          });
        } else {
          console.log(`Bookmark it! does not support the '${currentTab.url}' URL.`)
        }
      }
    }
  
    var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
    gettingActiveTab.then(updateTab);
}

function schuleadd() {
  console.log('updateActiveTab');

  function isSupportedProtocol(urlString) {
    var supportedProtocols = ["https:", "http:", "ftp:", "file:"];
    var url = document.createElement('a');
    url.href = urlString;
    return supportedProtocols.indexOf(url.protocol) != -1;
  }

  function updateTab(tabs) {
    if (tabs[0]) {
      currentTab = tabs[0];
      if (isSupportedProtocol(currentTab.url)) {
        var searching = browser.bookmarks.search({url: currentTab.url});
        searching.then((bookmarks) => {
          currentBookmark = bookmarks[0];
          console.log(`Url: '${currentTab.url}'`);
          console.log(currentBookmark);
          if (currentBookmark) {
            browser.bookmarks.remove(currentBookmark.id);
          } else {
            browser.bookmarks.create({parentId: schulletab,title: currentTab.title, url: currentTab.url});
          }

        });
      } else {
        console.log(`Bookmark it! does not support the '${currentTab.url}' URL.`)
      }
    }
  }

  var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
  gettingActiveTab.then(updateTab);
}

function musikadd() {
  console.log('updateActiveTab');

  function isSupportedProtocol(urlString) {
    var supportedProtocols = ["https:", "http:", "ftp:", "file:"];
    var url = document.createElement('a');
    url.href = urlString;
    return supportedProtocols.indexOf(url.protocol) != -1;
  }

  function updateTab(tabs) {
    if (tabs[0]) {
      currentTab = tabs[0];
      if (isSupportedProtocol(currentTab.url)) {
        var searching = browser.bookmarks.search({url: currentTab.url});
        searching.then((bookmarks) => {
          currentBookmark = bookmarks[0];
          console.log(`Url: '${currentTab.url}'`);
          console.log(currentBookmark);
          if (currentBookmark) {
            browser.bookmarks.remove(currentBookmark.id);
          } else {
            browser.bookmarks.create({parentId: musiktap,title: currentTab.title, url: currentTab.url});
          }

        });
      } else {
        console.log(`Bookmark it! does not support the '${currentTab.url}' URL.`)
      }
    }
  }

  var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
  gettingActiveTab.then(updateTab);
}

function jsbotadd() {
  console.log('updateActiveTab');

  function isSupportedProtocol(urlString) {
    var supportedProtocols = ["https:", "http:", "ftp:", "file:"];
    var url = document.createElement('a');
    url.href = urlString;
    return supportedProtocols.indexOf(url.protocol) != -1;
  }

  function updateTab(tabs) {
    if (tabs[0]) {
      currentTab = tabs[0];
      if (isSupportedProtocol(currentTab.url)) {
        var searching = browser.bookmarks.search({url: currentTab.url});
        searching.then((bookmarks) => {
          currentBookmark = bookmarks[0];
          console.log(`Url: '${currentTab.url}'`);
          console.log(currentBookmark);
          if (currentBookmark) {
            browser.bookmarks.remove(currentBookmark.id);
          } else {
            browser.bookmarks.create({parentId: jstap,title: currentTab.title, url: currentTab.url});
          }

        });
      } else {
        console.log(`Bookmark it! does not support the '${currentTab.url}' URL.`)
      }
    }
  }

  var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
  gettingActiveTab.then(updateTab);
}
  
function voiceadd() {
  console.log('updateActiveTab');

  function isSupportedProtocol(urlString) {
    var supportedProtocols = ["https:", "http:", "ftp:", "file:"];
    var url = document.createElement('a');
    url.href = urlString;
    return supportedProtocols.indexOf(url.protocol) != -1;
  }

  function updateTab(tabs) {
    if (tabs[0]) {
      currentTab = tabs[0];
      if (isSupportedProtocol(currentTab.url)) {
        var searching = browser.bookmarks.search({url: currentTab.url});
        searching.then((bookmarks) => {
          currentBookmark = bookmarks[0];
          console.log(`Url: '${currentTab.url}'`);
          console.log(currentBookmark);
          if (currentBookmark) {
            browser.bookmarks.remove(currentBookmark.id);
          } else {
            browser.bookmarks.create({parentId: voiceatap,title: currentTab.title, url: currentTab.url});
          }

        });
      } else {
        console.log(`Bookmark it! does not support the '${currentTab.url}' URL.`)
      }
    }
  }

  var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
  gettingActiveTab.then(updateTab);
}

function addonadd() {
  console.log('updateActiveTab');

  function isSupportedProtocol(urlString) {
    var supportedProtocols = ["https:", "http:", "ftp:", "file:"];
    var url = document.createElement('a');
    url.href = urlString;
    return supportedProtocols.indexOf(url.protocol) != -1;
  }

  function updateTab(tabs) {
    if (tabs[0]) {
      currentTab = tabs[0];
      if (isSupportedProtocol(currentTab.url)) {
        var searching = browser.bookmarks.search({url: currentTab.url});
        searching.then((bookmarks) => {
          currentBookmark = bookmarks[0];
          console.log(`Url: '${currentTab.url}'`);
          console.log(currentBookmark);
          if (currentBookmark) {
            browser.bookmarks.remove(currentBookmark.id);
          } else {
            browser.bookmarks.create({parentId: addonstap,title: currentTab.title, url: currentTab.url});
          }

        });
      } else {
        console.log(`Bookmark it! does not support the '${currentTab.url}' URL.`)
      }
    }
  }

  var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
  gettingActiveTab.then(updateTab);
}

function pythonadd() {
  console.log('updateActiveTab');

  function isSupportedProtocol(urlString) {
    var supportedProtocols = ["https:", "http:", "ftp:", "file:"];
    var url = document.createElement('a');
    url.href = urlString;
    return supportedProtocols.indexOf(url.protocol) != -1;
  }

  function updateTab(tabs) {
    if (tabs[0]) {
      currentTab = tabs[0];
      if (isSupportedProtocol(currentTab.url)) {
        var searching = browser.bookmarks.search({url: currentTab.url});
        searching.then((bookmarks) => {
          currentBookmark = bookmarks[0];
          console.log(`Url: '${currentTab.url}'`);
          console.log(currentBookmark);
          if (currentBookmark) {
            browser.bookmarks.remove(currentBookmark.id);
          } else {
            browser.bookmarks.create({parentId: python,title: currentTab.title, url: currentTab.url});
        }

        });
      } else {
        console.log(`Bookmark it! does not support the '${currentTab.url}' URL.`)
      }
    }
  }

  var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
  gettingActiveTab.then(updateTab);
}

function otheradd() {
  console.log('updateActiveTab');

  function isSupportedProtocol(urlString) {
    var supportedProtocols = ["https:", "http:", "ftp:", "file:"];
    var url = document.createElement('a');
    url.href = urlString;
    return supportedProtocols.indexOf(url.protocol) != -1;
  }

  function updateTab(tabs) {
    if (tabs[0]) {
      currentTab = tabs[0];
      if (isSupportedProtocol(currentTab.url)) {
        var searching = browser.bookmarks.search({url: currentTab.url});
        searching.then((bookmarks) => {
          currentBookmark = bookmarks[0];
          console.log(`Url: '${currentTab.url}'`);
          console.log(currentBookmark);
          if (currentBookmark) {
            browser.bookmarks.remove(currentBookmark.id);
          } else {
            browser.bookmarks.create({parentId: othertap,title: currentTab.title, url: currentTab.url});
          }

        });
      } else {
        console.log(`Bookmark it! does not support the '${currentTab.url}' URL.`)
      }
    }
  }

  var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
  gettingActiveTab.then(updateTab);
}

function listenForClicks() {
document.addEventListener("click", (e) => {

/**
* Given the name of a beast, get the URL to the corresponding image.
*/
function beastNameToURL(beastName) {
switch (beastName) {
case "Kaufen":
return kaufenadd();
case "Schule":
return schuleadd();
case "Musik":
return musikadd();
case "Jsbot":
return jsbotadd();
case "VoiceA":
return voiceadd();
case "addon":
return addonadd();
case "Andere":
return otheradd();
case "Python":
return pythonadd();
}
}
beastNameToURL(e.target.textContent)

});
}

//updateActiveTab();
listenForClicks()
//createABookmarkFolderWithinABookmarkFolder()
//console.log(gettingTree)
