function loaded(youtubelive) {
    if (youtubelive instanceof YouTubeLive) {
        const ownUserName = $("yt-live-chat-message-input-renderer #author-name").text();
        console.log(ownUserName);

        youtubelive.registerChatMessageObserver(function (message) {

            let id = message.id.toString();
            let element = document.getElementById(id);

            let innerElement = element.getElementsByTagName("div")[0].getElementsByClassName("yt-live-chat-text-message-renderer");

            if (innerElement === undefined || !innerElement[2]) {
                return;
            }
            let text = innerElement[2].innerHTML;
            let authorName = innerElement[1].innerText;

            let newtext = text.replaceAll("TestEmote", "<img src=https://cdn.betterttv.net/emote/5f1b0186cf6d2144653d2970/1x >");
            document.getElementById(id).getElementsByTagName("div")[0].getElementsByClassName("yt-live-chat-text-message-renderer")[2].innerHTML = newtext;
            let handler = function () {
                let id = message.id.toString();
                let diaplayed = document.getElementById(id).getElementsByTagName("div")[0].getElementsByClassName("yt-live-chat-text-message-renderer")[2].innerHTML;
                if (diaplayed === newtext) {
                    return false;
                }
                document.getElementById(id).getElementsByTagName("div")[0].getElementsByClassName("yt-live-chat-text-message-renderer")[2].innerHTML = newtext;
                return true;
            };
            if (authorName === ownUserName && newtext !== text) {
                console.log("Changing");
                let changeDisplayed = function () {
                    handler();
                    window.setTimeout(changeDisplayed, 100);
                }
                changeDisplayed();
            }
        }, true);
    }
}

YouTubeLive.onChatLoaded(ytlive => loaded(ytlive));