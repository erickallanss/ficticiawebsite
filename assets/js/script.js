handleFollowUsEffectOn = () => {
    var el = document.querySelectorAll(".icon_social");

    for(var i = 0; i < el.length; i++) {
        var currentEl = el[i];
        currentEl.style.width = '110%';
    }
}

handleFollowUsEffectOff = () => {
    var el = document.querySelectorAll(".icon_social");

    for(var i = 0; i < el.length; i++) {
        var currentEl = el[i];
        currentEl.style.width = '90%';
    }
}

