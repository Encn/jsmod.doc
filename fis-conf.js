//产品名称
fis.set('namespace', 'jsmod');

//只处理 src 目录下的文件及 map.json（资源映射）
fis.set('project.files', ['src/**', 'map.json']);

//设置 HTML 部署路径
fis.match(/^\/src\/web\/\/view\/(.*\.html)$/i, {
  release: 'templates/${module}/$1',
  isMod: true
});

fis.match(/^\/src\/web\/(.*\.js)$/i, {
    useHash: true,
    isMod: false,
    release: 'static/$1'
});

// 设置 lib Css，所有的 lib 文件 release 后还在 lib 目录下
fis.match(/^\/src\/web\/(.*\.less)$/i, {
  useHash: true,
  useSprite: true,
  rExt: '.css', //将 styl文件部署后的后缀改为.css
  parser: fis.plugin('less'), //使用 stylus 插件将 styl 文件转换为 css
  release: 'static/$1'
});

// 设置 lib Css，所有的 lib 文件 release 后还在 lib 目录下
fis.match(/^\/src\/web\/(.*\.css)$/i, {
  useHash: true,
  release: 'static/$1'
});

//设置图片等多媒体文件
fis.match(/^\/src\/web\/(.*\/([\w-\.]+\.(png|gif|jpg|jpeg|flv|f4v|ico)))$/i, {
  useHash: true,
  release: 'static/media/$3'
});

// 类库合并
fis.match('::package', {
  spriter: fis.plugin('csssprites'),
  postpackager: fis.plugin('loader', {
    useInLineMap: true,
    resoucemap: "/static/map/${filepath}_map.js"
  })
});

fis.match('/src/static/lib/js/third/sea.js', {
      packTo: '/static/pkg/aio.js'
    });

/**
 * ------------------------- 部署配置 ------------------------------
 * -----------------------------------------------------------------
 * -----------------------------------------------------------------
 */
//线上部署时对 JS 文件进行压缩处理
fis.media('online').match('*.js', {
  optimizer: fis.plugin('uglify-js'), //使用uglify压缩代码
  useHash: true
});

//线上部署时，对 CSS 文件进行压缩优化处理
fis.media('online').match('*.{styl,css}', {
  optimizer: fis.plugin('clean-css'), //使用 clean-css 对 css 代码压缩优化
  useHash: true
});

//线上部署时，压缩 png 图片
fis.media('online').match('*.png', {
  optimizer: fis.plugin('png-compressor') //压缩 png图片
});

// debug 增加hash处理
fis.media('debug').match('*.{js,css}', {
  useHash: true
});

//代码部署配置
// fis.media("debug").match('*', {
//     deploy: fis.plugin('http-push', {
//         receiver: 'http://120.24.7.220:8888/receiver.php',
//         to: '/home/work/unicorn/webapp/fe' // 注意这个是指的是测试机器的路径，而非本地机器
//     })
// });

// fis.media("online").match('*', {
//     deploy: fis.plugin('http-push', {
//         receiver: 'http://120.24.7.220:8888/receiver.php',
//         to: '/home/work/unicorn/webapp/fe' // 注意这个是指的是测试机器的路径，而非本地机器
//     })
// });