
var check = document.querySelector('.invitation-card')
console.log(check);
if (check == null) {
    alert("There are no pending requests")
}
else {
    document.querySelectorAll('.invitation-card').forEach((card) => {
        const acceptBtn = card.querySelector('.artdeco-button--secondary');
        if (acceptBtn != null)
            acceptBtn.click();
        alert("All requests are accepted")

    });
}

