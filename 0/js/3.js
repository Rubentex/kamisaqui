player = new Clappr.Player({
            source: 'https://cdn3.eco.cdn.moderntv.eu/econocable/stream/ESPN/20-hls/live-media.m3u8?_cdn_attrs=account%3Deconocable%2Cresource%3DESPN2_stream_et&_cdn_session=58895091&_cdn_timestamp=1628884275&_cdn_token=9d6ad70f4d16c3aa3cb97be5f4678c7a0f3332ff',
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
