player = new Clappr.Player({
            source: 'https://bcovlive-a.akamaihd.net/a2e5e035037742ff8fd4bae79de16ad4/us-east-1/6058004209001/profile_0/chunklist.m3u8',
            mimeType: "application/x-mpegURL",
            autoPlay: true, 
            mute: true, 
            height: '100%',
            width: '100%',
            strings: {'en': {'live': 'EN VIVO - Diex sport™'}},
            plugins: {'core': [LevelSelector]},
            parentId: "#vid",
            hideMediaControl: false,
            events: {
              onError: function(e) { errorPlaying() }
            }
});

function isInArray(value, array) {
  return array.indexOf(value) > -1;
};

function extractHostname(url) {
  var hostname;
  if (url.indexOf("://") > -1) {
    hostname = url.split("/")[2];
  } else {
    hostname = url.split("/")[0];
  };
  hostname = hostname.split(":")[0];
  hostname = hostname.split("?")[0];
  return hostname;
};

var hostname = extractHostname(document.referrer);
var blackdomains = "google.com";
var blacklist = blackdomains.split(","); 

var whitedomains = "www.partidoshoy.ga/0/c";
var whitelist = whitedomains.split(",");

if (isInArray(hostname, blacklist) || !isInArray(hostname, whitelist) || !document.referrer) {
  document.location.href = "https://diexsport.blogspot.com/";
}