module.exports = {
  actilive: {
    // apiHost: 'http://127.0.0.1:8000',
    // apiHost: 'http://liveapi.videojj.com',
    secret: '4JdmWKQGW',
    platformId: '556c38e7ec69d5bf655a0fb2',
    cdnJS: `https://sdkcdn.videojj.com/actilive/dev/actilive.js?t=${Date.now()}`,
    cdnCSS: `https://sdkcdn.videojj.com/actilive/dev/actilive.css?t=${Date.now()}`,
    flashUI: 'https://sdkcdn.videojj.com/flash/player/player_ui.swf',
    flashApi: 'https://sdkcdn.videojj.com/flash/player/VideoJJ.swf'
  },
  prod: {
    secret: 'SJ_d6e6i',
    platformId: '575e6e087c395e0501980c89',
    cdnJS: `https://sdkcdn.videojj.com/actilive/actilive.js?t=${Date.now()}`,
    cdnCSS: `https://sdkcdn.videojj.com/actilive/actilive.css?t=${Date.now()}`,
    flashUI: 'https://sdkcdn.videojj.com/flash/player/player_ui.swf',
    flashApi: 'https://sdkcdn.videojj.com/flash/player/bin/VideoJJ.swf'
  }
}
