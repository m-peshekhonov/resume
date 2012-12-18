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
                        },
                        {
                            elem: 'item',
                            content: [
                                {
                                    elem: 'h4',
                                    content: 'Год рождения'
                                },
                                {
                                    elem: 'text',
                                    content: 'Одна тысяча девятьсот девяностый [1990]'
                                }
                            ]
                        },
                        {
                            elem: 'item',
                            content: [
                                {
                                    elem: 'h4',
                                    content: 'Место жительства'
                                },
                                {
                                    elem: 'text',
                                    content: 'Крым, пгт. Партенит (Алуштинская область)'
                                }
                            ]
                        },
                        {
                            elem: 'item',
                            content: [
                                {
                                    elem: 'h4',
                                    content: 'Образование'
                                },
                                {
                                    block: 'text',
                                    content: [
                                        {
                                            elem: 'ul',
                                            content: [
                                                {
                                                    elem: 'li',
                                                    content: 'Законченное высшее, 2007—2012 ЯУМ, г. Ялта. ЯУМ. Факультет компьютерных наук. Специальность: программное обеспечение автоматизированных систем. Магистратура: программная инженерия.'
                                                },
                                                {
                                                    elem: 'li',
                                                    content: 'г. Ялта. КГУ. Специальность: информатика'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
})
