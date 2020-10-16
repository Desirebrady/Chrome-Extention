chrome.runtime.onMessage.addListener(
    function (request) {
        if (request.message == "Linkedin") {
            chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
                chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                    var tabURL = tabs[0].url;
                    if (/^edge:\/\//.test(tabURL) == false && /^chrome:\/\//.test(tabURL) == false) {
                        if (changeInfo.status != 'complete')
                            return;
                        if (tab.url.indexOf('https://www.linkedin.com/mynetwork/invitation-manager/') != -1) {
                            console.log("loaded");
                            setTimeout(() => {
                                chrome.tabs.executeScript(null, { file: './Linkedin.js' }, () => chrome.runtime.lastError)
                            }, 1000)
                        }
                    }
                });

            });
        }
    }
)