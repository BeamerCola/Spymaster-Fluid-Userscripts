// ==UserScript==
// @name        Energy Dock Badge
// @namespace   http://fluidapp.com
// @description Updates your fluid dock badge to show current energy
// @include     *
// @author      Beamer W. (http://github.com/beamercola)
// ==/UserScript==

(function () {
    if (window.fluid) {
      function updateDockBadge() {
        var energy = $("#mini-dashboard-energy span.value").html();
        window.fluid.setDockBadge(energy);
      }
      updateDockBadge();
      setInterval(function(){updateDockBadge();}, 10000);
    }
})();
