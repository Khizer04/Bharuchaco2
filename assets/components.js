/* Shared chrome — injects the site header and footer into every page
   so the markup lives in one place. Pages provide:
     <body data-page="home|inner">
     <header id="nav" class="fixed top-0 inset-x-0 z-50 transition-all duration-500"></header>
     <footer id="site-footer"></footer>
*/
(function () {
  var isHome = document.body.getAttribute('data-page') === 'home';
  var a = isHome ? '#' : 'index.html#';        // section anchors
  var home = isHome ? '#top' : 'index.html';     // logo / home link

  var links = [
    ['The Firm', a + 'firm'],
    ['Services', a + 'services'],
    ['Professionals', a + 'people'],
    ['Insights', a + 'news']
  ];
  var desktopLinks = links.map(function (l) {
    return '<a href="' + l[1] + '" class="text-ivory/80 hover:text-gold transition">' + l[0] + '</a>';
  }).join('');
  var mobileLinks = links.map(function (l) {
    return '<a href="' + l[1] + '" class="block">' + l[0] + '</a>';
  }).join('');

  var header = document.getElementById('nav');
  if (header) {
    header.innerHTML =
      '<div class="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-20">'
      + '<a href="' + home + '" class="flex items-center group">'
      +   '<img id="logoWhite" src="logo-white.png" alt="Bharucha & Co." class="h-9 lg:h-10 w-auto">'
      +   '<img id="logoNavy" src="logo-navy.png" alt="Bharucha & Co." class="h-9 lg:h-10 w-auto hidden">'
      + '</a>'
      + '<nav class="hidden lg:flex items-center gap-9 text-sm tracking-wide" id="navlinks">'
      +   desktopLinks
      +   '<a href="' + a + 'contact" id="navcta" class="bg-gold text-navydeep font-medium px-6 py-2 rounded-full hover:bg-ivory transition">Contact</a>'
      + '</nav>'
      + '<button id="burger" class="lg:hidden text-ivory text-3xl leading-none" aria-label="Open menu">&#8801;</button>'
      + '</div>'
      + '<div id="mobilemenu" class="hidden lg:hidden bg-navydeep/98 backdrop-blur px-6 py-6 space-y-4 text-ivory text-lg">'
      +   mobileLinks
      +   '<a href="' + a + 'contact" class="block text-gold">Contact</a>'
      + '</div>';
  }

  var footer = document.getElementById('site-footer');
  if (footer) {
    footer.className = 'bg-navydeep text-ivory/60 border-t border-ivory/10';
    footer.innerHTML =
      '<div class="mx-auto max-w-7xl px-6 lg:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">'
      + '<img src="logo-white.png" alt="Bharucha & Co." class="h-9 w-auto">'
      + '<p>© 2026 Bharucha &amp; Co. All Rights Reserved. · <a href="#" class="hover:text-gold">Privacy Notice</a> · <a href="#" class="hover:text-gold">Retention Policy</a></p>'
      + '<div class="flex gap-5">'
      +   '<a href="https://www.facebook.com/BharuchaCo" class="hover:text-gold transition">Facebook</a>'
      +   '<a href="https://x.com/BharuchaCo" class="hover:text-gold transition">X</a>'
      +   '<a href="https://www.linkedin.com/company/bharuchaco" class="hover:text-gold transition">LinkedIn</a>'
      + '</div>'
      + '</div>';
  }
})();
