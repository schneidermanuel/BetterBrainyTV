function LoadStreamerName() {
    let element = document.getElementsByClassName("ytd-video-owner-renderer");
    console.log(element);
    return element;
}

function loaded(youtubelive) {
    if (window.location.href.includes("https://studio.youtube.com/live_chat?is_popout=1")) {
        var style = document.createElement('style');
        style.innerHTML =
            '@import url("https://fonts.googleapis.com/css?family=Changa One");\n' +
            '@import url("https://fonts.googleapis.com/css?family=Imprima");\n' +
            '\n' +
            '/* Background colors*/\n' +
            'body {\n' +
            '  overflow: hidden;\n' +
            '  background-color: rgba(0,0,0,0);\n' +
            '}\n' +
            '/* Transparent background. */\n' +
            'yt-live-chat-renderer {\n' +
            '  background-color: transparent !important;\n' +
            '}\n' +
            'yt-live-chat-text-message-renderer,\n' +
            'yt-live-chat-text-message-renderer[is-highlighted] {\n' +
            '  background-color: transparent !important;\n' +
            '}\n' +
            '\n' +
            'yt-live-chat-text-message-renderer[author-type="owner"],\n' +
            'yt-live-chat-text-message-renderer[author-type="owner"][is-highlighted] {\n' +
            '  background-color: transparent !important;\n' +
            '}\n' +
            '\n' +
            'yt-live-chat-text-message-renderer[author-type="moderator"],\n' +
            'yt-live-chat-text-message-renderer[author-type="moderator"][is-highlighted] {\n' +
            '  background-color: transparent !important;\n' +
            '}\n' +
            '\n' +
            'yt-live-chat-text-message-renderer[author-type="member"],\n' +
            'yt-live-chat-text-message-renderer[author-type="member"][is-highlighted] {\n' +
            '  background-color: transparent !important;\n' +
            '}\n' +
            '\n' +
            '\n' +
            'yt-live-chat-author-chip #author-name {\n' +
            '  background-color: transparent !important;\n' +
            '}\n' +
            '/* Outlines */\n' +
            'yt-live-chat-renderer * {\n' +
            '  text-shadow: -2px -2px #000000,-2px -1px #000000,-2px 0px #000000,-2px 1px #000000,-2px 2px #000000,-1px -2px #000000,-1px -1px #000000,-1px 0px #000000,-1px 1px #000000,-1px 2px #000000,0px -2px #000000,0px -1px #000000,0px 0px #000000,0px 1px #000000,0px 2px #000000,1px -2px #000000,1px -1px #000000,1px 0px #000000,1px 1px #000000,1px 2px #000000,2px -2px #000000,2px -1px #000000,2px 0px #000000,2px 1px #000000,2px 2px #000000;\n' +
            '  font-family: "Imprima";\n' +
            '  font-size: 18px !important;\n' +
            '  line-height: 18px !important;\n' +
            '}\n' +
            '\n' +
            'yt-live-chat-text-message-renderer #content,\n' +
            'yt-live-chat-legacy-paid-message-renderer #content {\n' +
            '  overflow: initial; !important\n' +
            '}\n' +
            '\n' +
            '/* Hide scrollbar. */\n' +
            'yt-live-chat-item-list-renderer #items{\n' +
            '  overflow: hidden !important;\n' +
            '}\n' +
            '\n' +
            'yt-live-chat-item-list-renderer #item-scroller{\n' +
            '  overflow: hidden !important;\n' +
            '}\n' +
            '\n' +
            '/* Hide header and input. */\n' +
            'yt-live-chat-header-renderer,\n' +
            'yt-live-chat-message-input-renderer {\n' +
            '  display: none !important;\n' +
            '}\n' +
            '\n' +
            '/* Reduce side padding. */\n' +
            'yt-live-chat-text-message-renderer,\n' +
            'yt-live-chat-legacy-paid-message-renderer {\n' +
            '    padding-left: 4px !important;\n' +
            '  padding-right: 4px !important;\n' +
            '}\n' +
            '\n' +
            'yt-live-chat-paid-message-renderer #header {\n' +
            '    padding-left: 4px !important;\n' +
            '  padding-right: 4px !important;\n' +
            '}\n' +
            '\n' +
            '/* Avatars. */\n' +
            'yt-live-chat-text-message-renderer #author-photo,\n' +
            'yt-live-chat-paid-message-renderer #author-photo,\n' +
            'yt-live-chat-legacy-paid-message-renderer #author-photo {\n' +
            '  \n' +
            '  width: 24px !important;\n' +
            '  height: 24px !important;\n' +
            '  border-radius: 24px !important;\n' +
            '  margin-right: 6px !important;\n' +
            '}\n' +
            '\n' +
            '/* Hide badges. */\n' +
            'yt-live-chat-text-message-renderer #author-badges {\n' +
            '  display: none !important;\n' +
            '  vertical-align: text-top !important;\n' +
            '}\n' +
            '\n' +
            '/* Timestamps. */\n' +
            'yt-live-chat-text-message-renderer #timestamp {\n' +
            '  \n' +
            '  color: #999999 !important;\n' +
            '  font-family: "Imprima";\n' +
            '  font-size: 16px !important;\n' +
            '  line-height: 16px !important;\n' +
            '}\n' +
            '\n' +
            '/* Badges. */\n' +
            'yt-live-chat-text-message-renderer #author-name[type="owner"],\n' +
            'yt-live-chat-text-message-renderer #author-name.owner,\n' +
            'yt-live-chat-text-message-renderer yt-live-chat-author-badge-renderer[type="owner"] {\n' +
            '  color: #ffd600 !important;\n' +
            '}\n' +
            '\n' +
            'yt-live-chat-text-message-renderer #author-name[type="moderator"],\n' +
            'yt-live-chat-text-message-renderer #author-name.moderator,\n' +
            'yt-live-chat-text-message-renderer yt-live-chat-author-badge-renderer[type="moderator"] {\n' +
            '  color: #5e84f1 !important;\n' +
            '}\n' +
            '\n' +
            'yt-live-chat-text-message-renderer #author-name[type="member"],\n' +
            'yt-live-chat-text-message-renderer #author-name.member,\n' +
            'yt-live-chat-text-message-renderer yt-live-chat-author-badge-renderer[type="member"] {\n' +
            '  color: #0f9d58 !important;\n' +
            '}\n' +
            '\n' +
            '/* Channel names. */\n' +
            'yt-live-chat-text-message-renderer #author-name {\n' +
            '  color: #cccccc !important;\n' +
            '  font-family: "Changa One";\n' +
            '  font-size: 20px !important;\n' +
            '  line-height: 20px !important;\n' +
            '}\n' +
            '\n' +
            'yt-live-chat-text-message-renderer #author-name::after {\n' +
            '  content: ":";\n' +
            '  margin-left: 2px;\n' +
            '}\n' +
            '\n' +
            '/* Messages. */\n' +
            'yt-live-chat-text-message-renderer #message,\n' +
            'yt-live-chat-text-message-renderer #message * {\n' +
            '  color: #ffffff !important;\n' +
            '  font-family: "Imprima";\n' +
            '  font-size: 18px !important;\n' +
            '  line-height: 18px !important;\n' +
            '}\n' +
            '\n' +
            '\n' +
            '/* SuperChat/Fan Funding Messages. */\n' +
            'yt-live-chat-paid-message-renderer #author-name,\n' +
            'yt-live-chat-paid-message-renderer #author-name *,\n' +
            'yt-live-chat-legacy-paid-message-renderer #event-text,\n' +
            'yt-live-chat-legacy-paid-message-renderer #event-text * {\n' +
            '  color: #ffffff !important;\n' +
            '  font-family: "Changa One";\n' +
            '  font-size: 20px !important;\n' +
            '  line-height: 20px !important;\n' +
            '}\n' +
            '\n' +
            'yt-live-chat-paid-message-renderer #purchase-amount,\n' +
            'yt-live-chat-paid-message-renderer #purchase-amount *,\n' +
            'yt-live-chat-legacy-paid-message-renderer #detail-text,\n' +
            'yt-live-chat-legacy-paid-message-renderer #detail-text * {\n' +
            '  color: #ffffff !important;\n' +
            '  font-family: "Imprima";\n' +
            '  font-size: 18px !important;\n' +
            '  line-height: 18px !important;\n' +
            '}\n' +
            '\n' +
            'yt-live-chat-paid-message-renderer #content,\n' +
            'yt-live-chat-paid-message-renderer #content * {\n' +
            '  color: #ffffff !important;\n' +
            '  font-family: "Imprima";\n' +
            '  font-size: 18px !important;\n' +
            '  line-height: 18px !important;\n' +
            '}\n' +
            '\n' +
            'yt-live-chat-paid-message-renderer {\n' +
            '  margin: 4px 0 !important;\n' +
            '}\n' +
            '\n' +
            'yt-live-chat-legacy-paid-message-renderer {\n' +
            '  background-color: #0f9d58 !important;\n' +
            '  margin: 4px 0 !important;\n' +
            '}\n' +
            '\n' +
            'yt-live-chat-text-message-renderer a,\n' +
            'yt-live-chat-legacy-paid-message-renderer a {\n' +
            '  text-decoration: none !important;\n' +
            '}\n' +
            '\n' +
            'yt-live-chat-text-message-renderer[is-deleted],\n' +
            'yt-live-chat-legacy-paid-message-renderer[is-deleted] {\n' +
            '  display: none !important;\n' +
            '}\n' +
            '\n' +
            'yt-live-chat-ticker-renderer {\n' +
            '  background-color: transparent !important;\n' +
            '  box-shadow: none !important;\n' +
            '}\n' +
            'yt-live-chat-ticker-renderer {\n' +
            '  display: none !important;\n' +
            '}\n' +
            '\n' +
            '\n' +
            'yt-live-chat-ticker-paid-message-item-renderer,\n' +
            'yt-live-chat-ticker-paid-message-item-renderer *,\n' +
            'yt-live-chat-ticker-sponsor-item-renderer,\n' +
            'yt-live-chat-ticker-sponsor-item-renderer * {\n' +
            '  color: #ffffff !important;\n' +
            '  font-family: "Imprima";\n' +
            '}\n' +
            '\n' +
            'yt-live-chat-mode-change-message-renderer, \n' +
            'yt-live-chat-viewer-engagement-message-renderer, \n' +
            'yt-live-chat-restricted-participation-renderer {\n' +
            '  display: none !important;\n' +
            '}\n' +
            '\n' +
            '@keyframes anim {\n' +
            '0% { opacity: 0; transform: translateX(-16px); }\n' +
            '100% { opacity: 1; transform: none;}\n' +
            '}\n' +
            '\n' +
            'yt-live-chat-text-message-renderer,\n' +
            'yt-live-chat-legacy-paid-message-renderer {\n' +
            '  animation: anim 200ms;\n' +
            '  animation-fill-mode: both;\n' +
            '}\n' +
            '.yt-live-chat-banner-manager\n' +
            '{\n' +
            '  display: none;\n' +
            '}\n' +
            '* { background-color: green; }' +
            '/* https://streamlabs.com/widgets/chat-box/v1/11425BC5CAE02A8EC4DE */'

        var ref = document.querySelector('script');

        ref.parentNode.insertBefore(style, ref);
    }
    if (youtubelive instanceof YouTubeLive) {
        const ownUserName = $(".yt-live-chat-message-input-renderer #author-name").text();
        const StreamerName = LoadStreamerName();
        console.log(StreamerName);
        youtubelive.registerChatMessageObserver(function (message) {
            let id = message.id.toString();
            let element = document.getElementById(id);
            if (!element) return;
            let innerElement = element.getElementsByTagName("div")[0].getElementsByClassName("yt-live-chat-text-message-renderer");

            if (innerElement === undefined || !innerElement[2]) {
                return;
            }
            let text = innerElement[2].innerHTML;
            let authorName = innerElement[1].innerText;

            let newtext = text.replaceAll("TestEmote", "<img src=https://cdn.betterttv.net/emote/5f1b0186cf6d2144653d2970/1x >");
            newtext = newtext.replaceAll("huebiPls", "<img src=https://cdn.betterttv.net/emote/60087c62f4d51165fed896b4/1x >");

            document.getElementById(id).getElementsByTagName("div")[0].getElementsByClassName("yt-live-chat-text-message-renderer")[2].innerHTML = newtext;
            newtext = newtext + ".";
            if (authorName !== ownUserName)
            {
                return;
            }
            let handler = function () {
                let id = message.id.toString();
                let diaplayed = document.getElementById(id).getElementsByTagName("div")[0].getElementsByClassName("yt-live-chat-text-message-renderer")[2].innerHTML;
                console.log("displayed: " + diaplayed);
                console.log("New " + newtext);
                if (diaplayed === newtext && diaplayed !== "") {
                    return false;
                }
                document.getElementById(id).getElementsByTagName("div")[0].getElementsByClassName("yt-live-chat-text-message-renderer")[2].innerHTML = newtext;
                return true;
            };
            if (authorName === ownUserName && newtext !== text) {
                console.log("Changing");
                let changeDisplayed = function () {
                    let result = handler();
                    if (result) {
                        window.setTimeout(changeDisplayed, 100);
                    }
                }
                changeDisplayed();
            }
        }, true);
    }
}

YouTubeLive.onChatLoaded(ytlive => loaded(ytlive));