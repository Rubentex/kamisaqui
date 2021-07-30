player = new Clappr.Player({
            source: 'https://bcovlive-a.akamaihd.net/a2e5e035037742ff8fd4bae79de16ad4/us-east-1/6058004209001/profile_0/chunklist.m3u8',
            mimeType: "application/x-mpegURL",
            autoPlay: true, 
            mute: true, 
            height: '100%',
            width: '100%',
            plugins: {'core': [LevelSelector]},
            parentId: "#vid",
            hideMediaControl: true,
            events: {
              onError: function(e) { errorPlaying() }
            }
});