(function(app) {
    app.LogoBar =
        ng.core.Component({
            selector: 'logo-bar',
            template: '<h1>MeTracker</h1>'
        })
        .Class({
            constructor: function() {}
        });
})(window.app || (window.app = {}));

(function(app) {
    app.Date =
        ng.core.Component({
            selector: 'date',
            template: '<span>{{date}}</span>'
        })
        .Class({
            constructor: function() {
                this.updateTime();
                setTimeout(this.updateTime,100);
            },
            updateTime(){
                this.date = new Date().toISOString().
                replace(/T/, ' '). // replace T with a space
                replace(/\..+/, '') // delete the dot and everything after
            }
        });
})(window.app || (window.app = {}));

(function(app) {
    app.Button =
        ng.core.Component({
            selector: 'content',
            template: '<p (click)="clicked()">{{count}}</p>'
        })
        .Class({
            constructor: function() {
               this.count = 0;
            },
            clicked(){
                this.count += 1;
            }
        });
})(window.app || (window.app = {}));