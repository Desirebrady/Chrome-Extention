const addAllButton = document.createElement('button')
addAllButton.innerText = "LinkedIn ext"
addAllButton.id = "addAll"

document.querySelector('body').appendChild(addAllButton)

addAllButton.addEventListener('click', redirect)

function redirect() {
    chrome.runtime.sendMessage({ message: "Linkedin" })
    window.open("https://www.linkedin.com/mynetwork/invitation-manager/");
}

