// var hasRun = false
// chrome.tabs.onActivated.addListener(tab => {
//     chrome.tabs.get(tab.tabId, current_tab_info => {
//         if (/^https:\/\//.test(current_tab_info.url)) {
//             chrome.tabs.insertCSS(null, { file: './style.css' })
//             chrome.tabs.executeScript(null, { file: './foreground.js' }, () => console.log('Injected1'))
//         }
//     })
// })
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status != 'complete')
        return;
    else {
        console.log("loaded css and stuff");
        chrome.tabs.insertCSS(null, { file: './style.css' })
        chrome.tabs.executeScript(null, { file: './foreground.js' }, () => console.log('Injected1'))
        // setTimeout(() => { chrome.tabs.executeScript(null, { file: './test.js' }, () => console.log('Injected2')) }, 3000)
    }

});

chrome.runtime.onMessage.addListener(
    function (request) {
        if (request.message == "Linkedin") {
            chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
                if (changeInfo.status != 'complete')
                    return;
                if (tab.url.indexOf('https://www.linkedin.com/mynetwork/invitation-manager/') != -1) {
                    console.log("loaded");
                    setTimeout(() => { chrome.tabs.executeScript(null, { file: './Linkedin.js' }, () => console.log('Injected2')) }, 3000)
                }
            });
        }
    }
)


























// chrome.tabs.onUpdated.addListener(function (tabID, changeInfo, tab) {
//     console.log("Updated tab (" + tabID + ")=>>> " + tab.url);
//     //chrome.tabs.sendMessage(tabID, { name: 'Chrome Tabs updated >>>>>> ' + tab.url });
//     if (tab.status == 'complete' && tab.url.startsWith(_config.baseURL + '/login?signedout=1')) {
//         console.log('Clearing extension state!');

//     }
//     if (tab.status == 'complete' && tab.url === _config.baseURL + '/dashboard?extension=1') {
//         console.log("Login process");
//     }
// });




// chrome.tabs.onActivated.addListener(tab => {
//     chrome.tabs.get(tab.tabId, current_tab_info => {
//         if (/^https:\/\/github/.test(current_tab_info.url)) {
//             chrome.tabs.insertCSS(null, { file: './style.css' })
//             chrome.tabs.executeScript(null, { file: './test.js' }, () => console.log('Injected'))
//         }
//     })
// })

// chrome.tabs.onUpdated.addListener(
//     function (tabId, changeInfo, tab) {
//         alert(changeInfo.url)
//         if (changeInfo.url) {
//             // url has changed; do something here
//             // like send message to content script
//             chrome.tabs.sendMessage(tabId, {
//                 message: 'hello!',
//                 url: changeInfo.url
//             })
//         }
//     }
// );
