
/*!
 * entypo font helper
 */

var code = require('./codes');
var platform = Ti.Platform.osname;

// expose entypo

module.exports = entypo;

/**
 * [fromName description]
 * @param  {[type]} _name [description]
 * @return {[type]}       [description]
 */

function entypo(name) {
  var point = code[name]
    , offset = point - 0x10000;

  var units = point > 0xFFFF ? [0xD800 + (offset >> 10), 0xDC00 + (offset & 0x3FF)] : [point];
  return String.fromCharCode.apply(null, units);
}

// Font family name
entypo.plain  = (platform === 'android') ? 'entypo' : 'Entypo';
entypo.social = (platform === 'android') ? 'entypo-social' : 'Entypo Social';