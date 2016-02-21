fis.config.merge({
    modules : {
        parser : {
            less : 'less'
        }
    },
    roadmap : {
        ext : {
            less : 'css'
        },
        path : [
            {
                reg : /^\/src\/web\/(.*\.(js|less|css|png|jepg|jpg))$/i,
                release : '/static/$1'
            },
            {
                reg : /^\/src\/web\/view\/(.*\.html)$/i,
                release : '/templates/$1'
            },
            {
                reg : /(build\.sh|package\.json|README\.md)$/i,
                release : false
            },
            {
                reg: /^\/src\/api\/(.*)$/i,
                release: '/api/$1'
            }
        ]
    }
});
