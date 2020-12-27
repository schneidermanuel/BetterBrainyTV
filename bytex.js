function loaded(youtubelive) {
    if (youtubelive instanceof YouTubeLive) {
        youtubelive.registerChatMessageObserver(function (message) {
            console.log(message);
            let id = message.id.toString();
            console.log(id)
            let element = document.getElementById(id);
            let innerElement = element.getElementsByTagName("div")[0].getElementsByClassName("yt-live-chat-text-message-renderer")[2];
            if (innerElement === undefined) {
                return;
            }
            let text = innerElement.innerHTML;

            text = text.replace("TestEmote", "<img src=https://cdn.betterttv.net/emote/5f1b0186cf6d2144653d2970/1x >")
            document.getElementById(id).getElementsByTagName("div")[0].getElementsByClassName("yt-live-chat-text-message-renderer")[2].innerHTML = text;
            window.setTimeout(function () {
                let id = message.id.toString();
                document.getElementById(id).getElementsByTagName("div")[0].getElementsByClassName("yt-live-chat-text-message-renderer")[2].innerHTML = text;

            }, 1000);
        }, true);
    }
}

YouTubeLive.onChatLoaded(ytlive => loaded(ytlive));


