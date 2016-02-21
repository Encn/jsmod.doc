$(document).ready(function () {
    (function() {
        // init banner
        example = {};
        example.initSource = function () {
            var Dialog = require("jsmod/ui/dialog"),
                dg = new Dialog({
                    width: 1024,
                    html: ""
                });

            $("body").delegate(".demo .source", "click", function (e) {
                var sourceContent = $(this).parents(".demo").find(".source-content"),
                    scriptHTML, html;

                if (sourceContent.length > 0) {
                    sourceContent.toggle("normal");
                    return;
                }

                scriptHTML = $(this).parents(".demo").nextAll("script").eq(0).html().replace(/</g, "&lt;").replace(/>/g, "&gt;");

                html = $('<div style="display:none;" class="source-content"><pre><code>' +
                        scriptHTML +
                   '</code></pre></div>');

                $(this).parents(".demo").append(html);

                hljs.highlightBlock(html.find("pre").get(0));

                html.toggle("normal");
            });

            dg.getElement().delegate(".close", "click", function () {
                dg && dg.hide({fade: true});
            });
        }

        example.initSource_page = function () {
            var Dialog = require("jsmod/ui/dialog"),
                dg = new Dialog({
                    width: 1024,
                    html: ""
                });

            $("body").delegate(".example-content .source", "click", function (e) {
                var scriptHTML = $(this).parents(".example-container").find("script").html().replace(/</g, "&lt;").replace(/>/g, "&gt;"),
                    html;

                html = '<div class="dialog-code"><a class="close" href="javascript:void(0)">关闭</a><pre><code>' +
                        scriptHTML +
                   '</code></pre></div>';

                dg.getElement().html(html);
                hljs.highlightBlock(dg.getElement().find("pre").get(0));
                dg.show({fade: true});
            });

            dg.getElement().delegate(".close", "click", function () {
                dg && dg.hide({fade: true});
            });
        }


        example.initSource();
        example.initSource_page();
    })();
});