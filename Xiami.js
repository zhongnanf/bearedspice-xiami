//
//  Xiami.plist
//  BeardedSpice
//
//  Created by Zhongnan Fang on 10/12/16.
//
BSStrategy = {
  version: 1,
  displayName: "Xiami",
  accepts: {
    method: "predicateOnTab",
    format: "%K LIKE[c] '*www.xiami.com/play*'",
    args: ["URL"]
  },
  isPlaying: function () { return document.querySelector('#J_playBtn').className === "pause-btn"; },
  toggle: function () { document.querySelector('#J_playBtn').click(); },
  previous: function () { document.querySelector('#J_prevBtn').click(); },
  next: function () { document.querySelector('#J_nextBtn').click(); },
  pause: function () { if(document.querySelector('#J_playBtn').className === "pause-btn") {document.querySelector('#J_playBtn').click();} },
  favorite: function() {document.querySelector('#J_trackFav').click()},
  trackInfo: function () {
    return {
      'image': document.querySelector('#J_playerCoverImg').getAttribute('src'),
      'track': document.querySelector('#J_trackName').getAttribute('Title'),
      'artist': document.querySelector('#J_trackInfo').getElementsByTagName('a')[1].getAttribute('title'),
      'favorited': function() {document.querySelector('#J_trackFav').className === "icon-faved";},
      'album': document.querySelector('.ui-track-current').querySelector('.c3').querySelector('a').title,
    };
  }
}
