({
    block: 'b-page',
    title: 'Резюме Михаила Пешехонова',
    head: [
        { elem: 'css', url: '_index.css', ie: false },
        { elem: 'css', url: '_index.ie.css', ie: 'lt IE 8' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_index.js' }
    ],
    content: [
        {
            elem: 'inner',
            content: [
                {
                    block: 'content',
                    content: [
                        {
                            elem: 'item',
                            content: [
                                {
                                    elem: 'h4',
                                    content: 'Фамилия, имя, отчество'
                                },
                                {
                                    elem: 'text',
                                    content: 'Пешехонов Михаил Александрович'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
})
