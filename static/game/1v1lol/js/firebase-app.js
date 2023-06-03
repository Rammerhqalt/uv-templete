!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).firebase=t()}(this,(function(){"use strict";var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)},t=function(){return(t=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function r(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var n in t)t.hasOwnProperty(n)&&(e[n]=r(e[n],t[n]));return e}var n,i,o,s=(o=Error,e(n=c,i=o),n.prototype=null===i?Object.create(i):(a.prototype=i.prototype,new a),c);function a(){this.constructor=n}function c(e,t){var r=o.call(this,t)||this;return r.code=e,r.name="FirebaseError",Object.setPrototypeOf(r,c.prototype),Error.captureStackTrace&&Error.captureStackTrace(r,l.prototype.create),r}var l=(p.prototype.create=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=t[0]||{},i=this.service+"/"+e,o=this.errors[e],a=o?function(e,t){return e.replace(u,(function(e,r){var n=t[r];return null!=n?n.toString():"<"+r+"?>"}))}(o,n):"Error",c=this.serviceName+": "+a+" ("+i+").",l=new s(i,c),p=0,f=Object.keys(n);p<f.length;p++){var h=f[p];"_"!==h.slice(-1)&&(h in l&&console.warn('Overwriting FirebaseError base field "'+h+'" can cause unexpected behavior.'),l[h]=n[h])}return l},p);function p(e,t,r){this.service=e,this.serviceName=t,this.errors=r}var u=/\{\$([^}]+)}/g;function f(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function h(e,t){var r=new b(e,t);return r.subscribe.bind(r)}var v,d,b=(y.prototype.next=function(e){this.forEachObserver((function(t){t.next(e)}))},y.prototype.error=function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)},y.prototype.complete=function(){this.forEachObserver((function(e){e.complete()})),this.close()},y.prototype.subscribe=function(e,t,r){var n,i=this;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");void 0===(n=function(e,t){if("object"!=typeof e||null===e)return!1;for(var r=0,n=["next","error","complete"];r<n.length;r++){var i=n[r];if(i in e&&"function"==typeof e[i])return!0}return!1}(e)?e:{next:e,error:t,complete:r}).next&&(n.next=g),void 0===n.error&&(n.error=g),void 0===n.complete&&(n.complete=g);var o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?n.error(i.finalError):n.complete()}catch(e){}})),this.observers.push(n),o},y.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},y.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},y.prototype.sendOne=function(e,t){var r=this;this.task.then((function(){if(void 0!==r.observers&&void 0!==r.observers[e])try{t(r.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))},y.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))},y);function y(e,t){var r=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((function(){e(r)})).catch((function(e){r.error(e)}))}function g(){}function m(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),i=0;for(t=0;t<r;t++)for(var o=arguments[t],s=0,a=o.length;s<a;s++,i++)n[i]=o[s];return n}function _(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];if(!(t<e.logLevel)){var i=(new Date).toISOString();switch(t){case v.DEBUG:case v.VERBOSE:console.log.apply(console,m(["["+i+"]  "+e.name+":"],r));break;case v.INFO:console.info.apply(console,m(["["+i+"]  "+e.name+":"],r));break;case v.WARN:console.warn.apply(console,m(["["+i+"]  "+e.name+":"],r));break;case v.ERROR:console.error.apply(console,m(["["+i+"]  "+e.name+":"],r));break;default:throw new Error("Attempted to log a message with an invalid logType (value: "+t+")")}}}(d=v=v||{})[d.DEBUG=0]="DEBUG",d[d.VERBOSE=1]="VERBOSE",d[d.INFO=2]="INFO",d[d.WARN=3]="WARN",d[d.ERROR=4]="ERROR",d[d.SILENT=5]="SILENT";var E,N=v.INFO,O=(Object.defineProperty(A.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in v))throw new TypeError("Invalid value assigned to `logLevel`");this._logLevel=e},enumerable:!0,configurable:!0}),Object.defineProperty(A.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!0,configurable:!0}),A.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._logHandler.apply(this,m([this,v.DEBUG],e))},A.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._logHandler.apply(this,m([this,v.VERBOSE],e))},A.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._logHandler.apply(this,m([this,v.INFO],e))},A.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._logHandler.apply(this,m([this,v.WARN],e))},A.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._logHandler.apply(this,m([this,v.ERROR],e))},A);function A(e){this.name=e,this._logLevel=N,this._logHandler=_}var k=((E={})["no-app"]="No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",E["bad-app-name"]="Illegal App name: '{$appName}",E["duplicate-app"]="Firebase App named '{$appName}' already exists",E["app-deleted"]="Firebase App named '{$appName}' already deleted",E["invalid-app-argument"]="firebase.{$appName}() takes either no argument or a Firebase App instance.",E),w=new l("app","Firebase",k),R="[DEFAULT]",L=(Object.defineProperty(T.prototype,"automaticDataCollectionEnabled",{get:function(){return this.checkDestroyed_(),this.automaticDataCollectionEnabled_},set:function(e){this.checkDestroyed_(),this.automaticDataCollectionEnabled_=e},enumerable:!0,configurable:!0}),Object.defineProperty(T.prototype,"name",{get:function(){return this.checkDestroyed_(),this.name_},enumerable:!0,configurable:!0}),Object.defineProperty(T.prototype,"options",{get:function(){return this.checkDestroyed_(),this.options_},enumerable:!0,configurable:!0}),T.prototype.delete=function(){var e=this;return new Promise((function(t){e.checkDestroyed_(),t()})).then((function(){e.firebase_.INTERNAL.removeApp(e.name_);for(var t=[],r=0,n=Object.keys(e.services_);r<n.length;r++)for(var i=n[r],o=0,s=Object.keys(e.services_[i]);o<s.length;o++){var a=s[o];t.push(e.services_[i][a])}return Promise.all(t.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})))})).then((function(){e.isDeleted_=!0,e.services_={}}))},T.prototype._getService=function(e,t){if(void 0===t&&(t=R),this.checkDestroyed_(),this.services_[e]||(this.services_[e]={}),!this.services_[e][t]){var r=t!==R?t:void 0,n=this.firebase_.INTERNAL.factories[e](this,this.extendApp.bind(this),r);this.services_[e][t]=n}return this.services_[e][t]},T.prototype._removeServiceInstance=function(e,t){void 0===t&&(t=R),this.services_[e]&&this.services_[e][t]&&delete this.services_[e][t]},T.prototype.extendApp=function(e){if(r(this,e),e.INTERNAL){if(e.INTERNAL.addAuthTokenListener){for(var t=0,n=this.tokenListeners_;t<n.length;t++){var i=n[t];this.INTERNAL.addAuthTokenListener(i)}this.tokenListeners_=[]}if(e.INTERNAL.analytics){for(var o=0,s=this.analyticsEventRequests_;o<s.length;o++){var a=s[o];this.INTERNAL.analytics.logEvent.apply(void 0,a)}this.analyticsEventRequests_=[]}}},T.prototype.checkDestroyed_=function(){if(this.isDeleted_)throw w.create("app-deleted",{appName:this.name_})},T);function T(e,t,n){var i=this;this.firebase_=n,this.isDeleted_=!1,this.services_={},this.tokenListeners_=[],this.analyticsEventRequests_=[],this.name_=t.name,this.automaticDataCollectionEnabled_=t.automaticDataCollectionEnabled||!1,this.options_=function(e){return r(void 0,e)}(e);var o=this;this.INTERNAL={getUid:function(){return null},getToken:function(){return Promise.resolve(null)},addAuthTokenListener:function(e){i.tokenListeners_.push(e),setTimeout((function(){return e(null)}),0)},removeAuthTokenListener:function(e){i.tokenListeners_=i.tokenListeners_.filter((function(t){return t!==e}))},analytics:{logEvent:function(){o.analyticsEventRequests_.push(arguments)}}}}L.prototype.name&&L.prototype.options||L.prototype.delete||console.log("dc");var I=new O("@firebase/app");if("object"==typeof self&&self.self===self&&void 0!==self.firebase){I.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");var j=self.firebase.SDK_VERSION;j&&0<=j.indexOf("LITE")&&I.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}var D=function e(){var n=function(e){var t={},n={},i={},o={__esModule:!0,initializeApp:function(r,n){void 0===n&&(n={}),"object"==typeof n&&null!==n||(n={name:n});var i=n;void 0===i.name&&(i.name=R);var s=i.name;if("string"!=typeof s||!s)throw w.create("bad-app-name",{appName:String(s)});if(f(t,s))throw w.create("duplicate-app",{appName:s});var a=new e(r,i,o);return c(t[s]=a,"create"),a},app:s,apps:null,SDK_VERSION:"7.2.1",INTERNAL:{registerService:function(t,c,l,p,u){if(void 0===u&&(u=!1),n[t])return I.debug("There were multiple attempts to register service "+t+"."),o[t];function f(e){if(void 0===e&&(e=s()),"function"!=typeof e[t])throw w.create("invalid-app-argument",{appName:t});return e[t]()}return n[t]=c,p&&(i[t]=p,a().forEach((function(e){p("create",e)}))),void 0!==l&&r(f,l),o[t]=f,e.prototype[t]=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return this._getService.bind(this,t).apply(this,u?e:[])},f},removeApp:function(e){c(t[e],"delete"),delete t[e]},factories:n,useAsService:l}};function s(e){if(!f(t,e=e||R))throw w.create("no-app",{appName:e});return t[e]}function a(){return Object.keys(t).map((function(e){return t[e]}))}function c(e,t){for(var r=0,o=Object.keys(n);r<o.length;r++){var s=l(e,o[r]);if(null===s)return;i[s]&&i[s](t,e)}}function l(e,t){return"serverAuth"===t?null:t}return o.default=o,Object.defineProperty(o,"apps",{get:a}),s.App=e,o}(L);return n.INTERNAL=t(t({},n.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){r(n,e)},createSubscribe:h,ErrorFactory:l,deepExtend:r}),n}(),F=D.initializeApp;return D.initializeApp=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return function(){try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(e){return!1}}()&&I.warn('\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the rollup-plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/rollup-plugin-node-resolve\n      '),F.apply(void 0,e)},D}));