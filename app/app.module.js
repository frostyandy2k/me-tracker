(function(app) {
  app.AppModule =
    ng.core.NgModule({
      imports: [ ng.platformBrowser.BrowserModule ],
      declarations: [ app.LogoBar, app.Date, app.Button ],
      bootstrap: [ app.LogoBar, app.Date, app.Button ]
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));