$(document).ready(function () {
    (function() {
        // init banner
        home = {};

        home.Const = {};

        home.Const.T_BANNER = [
            [
                '<div class="banner-item banner-item-category">',
                    '<ul>',
                        '<li class="red">',
                            '<span class="title">FixElement</span>',
                            '<span class="title">绝对定位元素</span>',
                            '<p>其提供了将 dom 元素（html片段）定位到页面特定位置（坐标，元素附近）的基础支持</p>',
                        '</li>',
                        '<li class="blue">',
                            '<span class="title">Tip</span>',
                            '<span class="title">信息提示</span>',
                            '<p>为一组 dom 元素绑定信息提示控件，可自定义触发条件、位置等</p>',
                        '</li>',
                        '<li class="green">',
                            '<span class="title">DropDown</span>',
                            '<span class="title">下拉</span>',
                            '<p>下拉组件，提供 html 数据，实现各种下拉操作</p>',
                        '</li>',
                        '<li class="orange">',
                            '<span class="title">Select</span>',
                            '<span class="title">多选菜单</span>',
                            '<p>针对 select dom 的扩展，与 select dom 保持一致的操作体验，但可自定义各种样式</p>',
                        '</li>',
                        '<li class="blue">',
                            '<span class="title">Suggestion</span>',
                            '<span class="title">输入提示</span>',
                            '<p>处理输入提示，兼容各种 ajax 数据配置</p>',
                        '</li>',
                        '<li class="orange">',
                            '<span class="title">Tab</span>',
                            '<span class="title">分栏</span>',
                            '<p>为特定的 dom 对象构建分栏，可指定目标对象实现内容切换（也可监听事件自行处理）</p>',
                        '</li>',
                        '<li class="blue">',
                            '<span class="title">Pagination</span>',
                            '<span class="title">分页</span>',
                            '<p>分页控件，无需写 html ，提供一个 div 节点自动生成所有的分页所需标签</p>',
                        '</li>',
                        '<li class="green">',
                            '<span class="title">Dialog</span>',
                            '<span class="title">弹窗</span>',
                            '<p>居中定位，并显示遮罩图层，显示时禁止页面滚动</p>',
                        '</li>',
                        '<li class=red>',
                            '<span class="title">Carousel</span>',
                            '<span class="title">轮播</span>',
                            '<p>基础的轮播控件，脱离 html、css。使用时传入基础数据</p>',
                        '</li>',
                        '<li class=blue>',
                            '<span class="title">scrollbar</span>',
                            '<span class="title">滚动条</span>',
                            '<p>滚动条组件，无需改变容器的形态即可实现自定义滚动条</p>',
                        '</li>',
                        '<li class=gray>',
                            '<span class="title">treeView</span>',
                            '<span class="title">树形目录</span>',
                            '<p>敬请期待...</p>',
                        '</li>',
                    '</ul>',
                '</div>'
            ].join(""),
            [
                '<div class="banner-item banner-item-info"></div>'
            ].join("")
        ]

        home.initBanner = function () {
            var Carousel = require("jsmod/ui/carousel"),
                ca;

            ca = new Carousel("#home-banner", {
                htmls: home.Const.T_BANNER,
                current: 0
            });

            $("#home-banner .pre").click(function () {
                ca.pre();
            });

            $("#home-banner .next").click(function () {
                ca.next();
            });
        }

        home.initBanner();

        hljs.highlightBlock($("pre").get(0));
    })();
});