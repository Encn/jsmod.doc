(function () {
    $(document).ready(function () {
        var main = {};

        main.initTip = function (argument) {
            var Tip = require("jsmod/ui/fixElement/tip"),
                html;

            html = [
                '<ul>',
                    '<li>',
                        '<a href="/views/example/ui/fixElement.html">FixElement</a>',
                    '</li>',
                    '<li>',
                        '<a href="/views/example/ui/tip.html">Tip</a>',
                    '</li>',
                    '<li>',
                        '<a href="/views/example/ui/dropDown.html">DropDown</a>',
                    '</li>',
                    '<li>',
                        '<a href="/views/example/ui/select.html">Select</a>',
                    '</li>',
                    '<li>',
                        '<a href="/views/example/ui/suggestion.html">Suggestion</a>',
                    '</li>',
                    '<li>',
                        '<a href="/views/example/ui/tab.html">Tab</a>',
                    '</li>',
                    '<li>',
                        '<a href="/views/example/ui/pagination.html">Pagination</a>',
                    '</li>',
                    '<li>',
                        '<a href="/views/example/ui/dialog.html">Dialog</a>',
                    '</li>',
                    '<li>',
                        '<a href="/views/example/ui/carousel.html">Carousel</a>',
                    '</li>',
                    '<li>',
                        '<a href="/views/example/ui/scrollbar.html">Scrollbar</a>',
                    '</li>',
                '<ul>'
            ].join("");

            new Tip({
                targets: ".header .example",
                className: "example-tip",
                content: html,
                targetType: "bottom",
                trigger: "hover",
                offset: {
                    left: 97
                }
            });
        }

        main.initTip();    
    });
})();