
var check = document.querySelector('.invitation-card')
if (check == null) {
    document.querySelector(".mn-invitation-manager__no-invite-text").innerHTML = "There are no pending requests"
}
else {
    document.querySelectorAll('.invitation-card').forEach((card) => {
        const acceptBtn = card.querySelector('.artdeco-button--secondary');
        if (acceptBtn != null) {
            acceptBtn.click();
            var pTag = document.createElement("p");
            var node = document.createTextNode("All requests are accepted.");
            pTag.appendChild(node);
            var element = document.querySelector("mn-invitation-manager__sub-section");
            element.appendChild(pTag);
            //mn-invitation-manager__sub-section
        }
    });
}

