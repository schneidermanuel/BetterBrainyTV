console.log("Test")
$.getJSON('https://build.brainyxs.com/bbtv/streamer-dashboard/api.php', function (data) {
    let body = "";
    console.log(data);
    body += "<table><thead><tr><th>Name</th><th>Emote</th></tr></thead>";
    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
        body += "<tr><th>" + data[i].EmoteName + "</th><th><img src=\"" + data[i].EmoteHref + "\"/></th></tr>";
    }
    body += "</table>"

    document.getElementById("bemotelistbrainyxsolnyonce").innerHTML = body;
});