player = new Clappr.Player({
            source: 'https://d2ajt1gpdtnw25.cloudfront.net/mbliveMain/hd/playlist.m3u8',
            mimeType: "application/x-mpegURL",
            autoPlay: true, 
            mute: true, 
            height: '100%',
            width: '100%',
            strings: {'en': {'live': 'EN VIVO - Diex sport'}},
            plugins: {'core': [ChromecastPlugin]},
            parentId: "#vid",
            hideMediaControl: true,
            events: {
              onError: function(e) { errorPlaying() }
            }
});