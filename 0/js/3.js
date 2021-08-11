player = new Clappr.Player({
            source: 'https://cdn3.eco.cdn.moderntv.eu/econocable/stream/ESPN/10-20-hls/live.m3u8?_cdn_attrs=account%3Deconocable%2Cresource%3DESPN2_stream_et&_cdn_session=58360251&_cdn_timestamp=1628789776&_cdn_token=42f837275d7a2a06639b4e688db111af3e77a3bb',
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
