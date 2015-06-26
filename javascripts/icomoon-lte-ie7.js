/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
  function addIcon(el, entity) {
    var html = el.innerHTML;
    el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
  }
  var icons = {
      'icon-home' : '&#xe900;',
      'icon-play' : '&#xe912;',
      'icon-phone' : '&#xe942;',
      'icon-envelop' : '&#xe945;',
      'icon-info' : '&#xea0c;',
      'icon-facebook' : '&#xea8c;',
      'icon-facebook2' : '&#xea8d;',
      'icon-instagram' : '&#xea90;',
      'icon-twitter' : '&#xea91;',
      'icon-github3' : '&#xeab3;',
      'icon-github4' : '&#xeab4;',
      'icon-wordpress' : '&#xeab6;',
      'icon-tumblr' : '&#xeabb;',
      'icon-skype' : '&#xeac6;',
      'icon-linkedin2' : '&#xeac9;'
      'icon-pinterest' : '&#xead0;'
    },
    els = document.getElementsByTagName('*'),
    i, attr, html, c, el;
  for (i = 0; i < els.length; i += 1) {
    el = els[i];
    attr = el.getAttribute('data-icon');
    if (attr) {
      c = icons['icon-' + attr];
      if (c) {
        attr = c;
      }
      addIcon(el, attr);
    }
    c = el.className;
    c = c.match(/icon-[^\s'"]+/);
    if (c && icons[c[0]]) {
      addIcon(el, icons[c[0]]);
    }
  }
};
