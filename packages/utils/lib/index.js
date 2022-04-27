'use strict';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

var Utils = /*#__PURE__*/_createClass(function Utils() {
  _classCallCheck(this, Utils);

  this.isIeBrowser = function () {
    return Boolean(window.ActiveXObject) || 'ActiveXObject' in window;
  };

  this.formatInfo = function (info, startIdx, endIdx) {
    if (!info) return '';
    return String(info).split('').reduce(function (str, item, idx) {
      if (idx < startIdx || idx > info.length - endIdx - 1) return str + item;
      return "".concat(str, "*");
    }, '');
  };

  this.downLoadLink = function (urlOrBlob, fileName) {
    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    if ('download' in document.createElement('a')) {
      var link = document.createElement('a');
      link.download = fileName;
      link.style.display = 'none';
      link.href = type === 1 ? URL.createObjectURL(new Blob([urlOrBlob])) : urlOrBlob;
      document.body.appendChild(link);
      link.click();
      URL.revokeObjectURL(link.href);
      document.body.removeChild(link);
    } else {
      navigator.msSaveBlob(new Blob([urlOrBlob]), fileName);
    }
  };
});

var index = new Utils();

module.exports = index;
