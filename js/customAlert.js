function closeAlertBox() {
    alertBox = document.getElementById("alertBox");
    alertClose = document.getElementById("alertClose");

    alertBox.parentNode.removeChild(alertBox);
    alertClose.parentNode.removeChild(alertClose);
}

window.alert = function () {
    var id = "alertBox", alertBox, closeId = "alertClose", alertClose;
    alertBox = document.createElement("div");
    document.body.appendChild(alertBox);
    alertBox.id = id;
    alertTitle = document.createElement('h1');
    alertTitle.setAttribute('id', 'alert-title');
    alertTitle.innerHTML = "Game Over";
    alertBox.appendChild(alertTitle);
    restartButton = document.createElement('button')
    restartButton.setAttribute('id', 'restart')
    restartButton.innerHTML = "Restart"
    // <button onClick="window.location.href=window.location.href">Refresh Page</button>
    alertBox.appendChild(restartButton)
    let rebutton = document.getElementById('restart');
    rebutton.onclick = function (){
        window.location.reload();
    }
    alertClose = document.createElement("div");
    alertClose.id = closeId;
    document.body.appendChild(alertClose);
    alertClose.onclick = closeAlertBox;
};
