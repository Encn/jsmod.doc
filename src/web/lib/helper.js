(function () {
    QUnit.load = function (items) {
        var base = "/src";

        $.each(items, function (i, val) {
            document.write('<script type="text/javascript" src="' + val + '"></script>');
        });
    }

    QUnit.testAll = function (items) {
        QUnit.log(function( details ) {
          if (!details.result) {
            try {
                console && console.log( "Log: ", details.result, details.message, "expected:" + details.expected, "actual:" + details.actual);
            } catch (e) {
            }
          }
        });
            
        QUnit.begin(function() {
            QUnit.iFrame();
        });

        for ( var i = 0; i < items.length; i++ ) {
            (function (key) {
                asyncTest( items[key], function() {
                    QUnit.iframe.setAttribute( "src", items[key] + "?" + (+new Date()));
                });
            })(i)
        }

        QUnit.done(function() {
            this.iframe.style.display = "none";
        });
    }

    QUnit.iFrame = function (items) {
        var body = document.body,
            iframe = this.iframe = document.createElement( "iframe" ),
            iframeWin;

        iframe.className = "qunit-subsuite";
        body.appendChild( iframe );

        function onIframeLoad() {
            var module, test,
                count = 0;

            if (iframe.src === "") {
                return;
            }

            iframeWin.QUnit.moduleStart(function( data ) {
                // capture module name for messages
                module = data.name;
            });

            iframeWin.QUnit.testStart(function( data ) {
                // capture test name for messages
                test = data.name;
            });
            iframeWin.QUnit.testDone(function() {
                test = null;
            });

            iframeWin.QUnit.log(function( data ) {
                if (test === null) {
                    return;
                }
                // pass all test details through to the main page
                var message = module + ": " + test + ": " + data.message;
                expect( ++count );
                QUnit.push( data.result, data.actual, data.expected, message );
            });

            iframeWin.QUnit.done(function() {
                // start the wrapper test from the main page
                start();
            });
        }
        QUnit.addEvent( iframe, "load", onIframeLoad );

        iframeWin = iframe.contentWindow;
    }

    QUnit.ie6 = ('undefined' == typeof(document.body.style.maxHeight));
})();