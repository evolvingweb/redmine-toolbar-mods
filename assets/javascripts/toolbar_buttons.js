Event.observe(window, 'load', function() {
  // add syntax highlighting buttons to the edit toolbar
  var i = 0,
      buttons = ['SQL', 'JS', 'PHP', 'Python', 'Ruby'],
      button, lowerButton;

  if (typeof(jsToolBar) != "undefined") {
    for (i = 0; i < buttons.length; i += 1) {
      button = buttons[i];
      lowerButton = button.toLowerCase();
      jsToolBar.prototype.elements[lowerButton] = (function(lowerButton) {
        var thatbutton = lowerButton;
        return {
          type: 'button',
          title: button,
          fn: {
            wiki: function() {
              this.encloseLineSelection('<pre><code class="' + thatbutton + '">\n', '\n</code></pre>');
            }
          }
        }
      }(lowerButton));
    }
    // redraw toolbar to get the new buttons to show
    wikiToolbar.draw();
  }
});
