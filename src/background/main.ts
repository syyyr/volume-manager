import data from "./globals";

chrome.storage.sync.get(["user"], function (items) {
  console.log(items.user)

  if (items && items.user) {
    data.user = items.user;
  } else {
    chrome.storage.sync.set({ user: data.user });
  }
});


chrome.runtime.getPlatformInfo(function(info) {
  data.OS = info.os;
})

import './listeners';
