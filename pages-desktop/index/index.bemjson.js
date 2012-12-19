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
            block: 'top',
            content: [
                {
                    elem: 'text',
                    content: 'Наверх'
                }
            ]
        },
        {
            elem: 'inner',
            content: [
                {
                    block: 'content',
                    content: [
                        {
                            block: 'menu',
                            content: [
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'link',
                                            url: '#info',
                                            content: 'Общая информация'
                                        },
                                        {
                                            block: 'dropdown',
                                            mix: [{ block: 'menu', elem: 'dropdown' }],
                                            content: [
                                                {
                                                    elem: 'item',
                                                    content: [
                                                        {
                                                            block: 'link',
                                                            url: '#fio',
                                                            content: 'ФИО'
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'item',
                                                    content: [
                                                        {
                                                            block: 'link',
                                                            url: '#birthday',
                                                            content: 'Год рождения'
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'item',
                                                    content: [
                                                        {
                                                            block: 'link',
                                                            url: '#locale',
                                                            content: 'Место жительства'
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'item',
                                                    content: [
                                                        {
                                                            block: 'link',
                                                            url: '#education',
                                                            content: 'Образование'
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'item',
                                                    content: [
                                                        {
                                                            block: 'link',
                                                            url: '#languages',
                                                            content: 'Языки'
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'item',
                                                    content: [
                                                        {
                                                            block: 'link',
                                                            url: '#school',
                                                            content: 'Учёба в ШРИ'
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'item',
                                                    content: [
                                                        {
                                                            block: 'link',
                                                            url: '#source',
                                                            content: 'Источник'
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'item',
                                                    content: [
                                                        {
                                                            block: 'link',
                                                            url: '#times',
                                                            content: 'Время'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'link',
                                            url: '#experience',
                                            content: 'Опыт разработки'
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'link',
                                            url: '#contacts',
                                            content: 'Контактные данные'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'item',
                            content: [
                                {
                                    elem: 'h2',
                                    attrs: { id: 'info' },
                                    content: 'Фотокарточка'
                                },
                                {
                                    elem: 'pic',
                                    url: '../../i/content__pic.jpg'
                                }
                            ]
                        },
                        {
                            elem: 'item',
                            attrs: { id: 'fio' },
                            content: [
                                {
                                    elem: 'h2',
                                    content: 'ФИО'
                                },
                                {
                                    elem: 'text',
                                    content: 'Пешехонов Михаил Александрович'
                                }
                            ]
                        },
                        {
                            elem: 'item',
                            attrs: { id: 'birthday' },
                            content: [
                                {
                                    elem: 'h2',
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
                            attrs: { id: 'locale' },
                            content: [
                                {
                                    elem: 'h2',
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
                            attrs: { id: 'education' },
                            content: [
                                {
                                    elem: 'h2',
                                    content: 'Образование'
                                },
                                {
                                    block: 'text',
                                    content: [
                                        {
                                            elem: 'ol',
                                            content: [
                                                {
                                                    elem: 'li',
                                                    content: 'Законченное высшее, 2007-2012, г. Ялта. Ялтинский Университет Менеджмента. Специальность: Программное обеспечение автоматизированных систем.'
                                                },
                                                {
                                                    elem: 'li',
                                                    content: 'Выпускник(магистр), 2012-2013, г. Ялта. Крымский Гуманитарный Институт. Специальность: Системные науки и кибернетика.'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'item',
                            attrs: { id: 'languages' },
                            content: [
                                {
                                    elem: 'h2',
                                    content: 'Языки'
                                },
                                {
                                    elem: 'text',
                                    content: 'Средний уровень знания английского. Прочитав текст понимаю о чём идёт речь. (Примерно как Visual Basic :)'
                                }
                            ]
                        },
                        {
                            elem: 'item',
                            attrs: { id: 'school' },
                            content: [
                                {
                                    elem: 'h2',
                                    content: 'Цели учёбы в ШРИ'
                                },
                                {
                                    block: 'text',
                                    content: [
                                        {
                                            elem: 'ol',
                                            content: [
                                                {
                                                    elem: 'li',
                                                    content: 'Повысить уровень знаний BEM технологий'
                                                },
                                                {
                                                    elem: 'li',
                                                    content: 'Освоить i-bem js'
                                                },
                                                {
                                                    elem: 'li',
                                                    content: 'Пройти практику'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'item',
                            attrs: { id: 'source' },
                            content: [
                                {
                                    elem: 'h2',
                                    content: 'Откуда узнал'
                                },
                                {
                                    elem: 'text',
                                    content: 'От друзей. По совместительству коллег из Яндекса.'
                                }
                            ]
                        },
                        {
                            elem: 'item',
                            attrs: { id: 'times' },
                            content: [
                                {
                                    elem: 'h2',
                                    content: 'Время'
                                },
                                {
                                    elem: 'text',
                                    content: '8-10 часов в день. 5 дней в неделю.'
                                }
                            ]
                        },
                        {
                            elem: 'item',
                            content: [
                                {
                                    elem: 'h1',
                                    attrs: { id: 'experience' },
                                    elemMods: { border: 'yes' },
                                    content: 'Опыт разработки'
                                }
                            ]
                        },
                        {
                            elem: 'item',
                            content: [
                                {
                                    elem: 'h2',
                                    content: 'Опыт работы'
                                },
                                {
                                    elem: 'text',
                                    content: [
                                        'С 2010 года работал в студии ',
                                        {
                                            block: 'link',
                                            target: '_blank',
                                            url: 'http://tadatuta.ru/',
                                            content: 'Тадатута'
                                        },
                                        ' верстальщиком/разработчиком сайтов на Wordpress. С 2011 г. начал делать Яндекс проекты от студии Тадатута как аутсорсер. Список последних работ:'
                                    ]
                                },
                                {
                                    block: 'text',
                                    mix: [{ block: 'experience' }],
                                    content: [
                                        {
                                            elem: 'ol',
                                            content: [
                                                {
                                                    elem: 'li',
                                                    content: [
                                                        {
                                                            block: 'link',
                                                            url: 'http://business.yandex.com.tr/',
                                                            target: '_blank',
                                                            content: 'business.yandex.com.tr'
                                                        }, ' — Турецкий промо-сайт Яндекса'
                                                    ]
                                                },
                                                {
                                                    elem: 'li',
                                                    content: [
                                                        {
                                                            block: 'link',
                                                            url: 'http://personalization.yandex.ru',
                                                            target: '_blank',
                                                            content: 'personalization.yandex.ru'
                                                        }, ' — Страница презентации Персонального поиска'
                                                    ]
                                                },
                                                {
                                                    elem: 'li',
                                                    content: [
                                                        {
                                                            block: 'link',
                                                            url: 'http://everyday.yandex.ru',
                                                            target: '_blank',
                                                            content: 'everyday.yandex.ru'
                                                        }, ' — Поиск по жизни от Яндекса'
                                                    ]
                                                },
                                                {
                                                    elem: 'li',
                                                    content: [
                                                        {
                                                            block: 'link',
                                                            url: 'http://expert.yandex.ru/',
                                                            target: '_blank',
                                                            content: 'expert.yandex.ru'
                                                        }, ' — Вёртска нового дизайна (Разработка rawxml/xsl)'
                                                    ]
                                                },
                                                {
                                                    elem: 'li',
                                                    content: [
                                                        {
                                                            block: 'link',
                                                            url: 'http://direct.yandex.ru/spros',
                                                            target: '_blank',
                                                            content: 'direct.yandex.ru/spros'
                                                        }, '  — Промо-страница для Директа'
                                                    ]
                                                },
                                                {
                                                    elem: 'li',
                                                    content: [
                                                        {
                                                            block: 'link',
                                                            url: 'http://mobile.yandex.ru/promo/yandex/m/wp/',
                                                            target: '_blank',
                                                            content: 'mobile.yandex.ru/promo/yandex/m/wp/'
                                                        }, '  — Страница сервисов Яндекса для тач-устройств (Windows Phone).'
                                                    ]
                                                },
                                                {
                                                    elem: 'li',
                                                    content: [
                                                        {
                                                            block: 'link',
                                                            url: 'http://www.milokumov.info',
                                                            target: '_blank',
                                                            content: 'www.milokumov.info'
                                                        }, '  — Сайт заслуженного художника Украины С. Милокумова.'
                                                    ]
                                                },
                                                {
                                                    elem: 'li',
                                                    content: [
                                                        {
                                                            block: 'link',
                                                            url: 'http://www.transservice-msk.ru/',
                                                            target: '_blank',
                                                            content: 'transservice-msk.ru'
                                                        }, '  — Сайт крупнейшей транспортной компании Москвы.'
                                                    ]
                                                },
                                                {
                                                    elem: 'li',
                                                    content: [
                                                        {
                                                            block: 'link',
                                                            url: 'http://www.airomo.net/welcome/',
                                                            target: '_blank',
                                                            content: 'www.airomo.net/welcome'
                                                        }, '  —  Страница приветствия после регистрации'
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'item',
                            content: [
                                {
                                    elem: 'h2',
                                    content: 'Программирование, фрэймворки'
                                },
                                {
                                    elem: 'text',
                                    content: 'Разрабатывал сайты на PHP, MySQL. При создании использовал jQuery/Java Script. Последнее время разрабатываю сайты по технологии BEM.'
                                }
                            ]
                        },
                        {
                            elem: 'item',
                            content: [
                                {
                                    elem: 'h2',
                                    content: 'Среда разработки'
                                },
                                {
                                    elem: 'text',
                                    content: [
                                        'Раньше использовал NotePad++, затем узнал о WebStorm/PhpStorm и стал использовать его. Но WebStorm "тяжёлая" программа, загружается долго и со времени изрядно надоела этим.',
                                        {
                                            tag: 'br'
                                        },
                                        'Сейчас пользуюсь Sublime Text 2. Пока это лучший редактор который я встречал.'
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'item',
                            content: [
                                {
                                    elem: 'h2',
                                    content: 'ОС'
                                },
                                {
                                    elem: 'text',
                                    content: [
                                        'Последние 2-3 месяца использую для работы <b>Mac OS</b>. До этого разрабатывался под <b>Windows</b>. В качестве консоли использовал Putty. На  MacOS — iTerm.',
                                        {
                                            tag: 'br'
                                        },
                                        'В качестве SFTP клиента на MacOS — Transmit, на Windows — Filezilla.',
                                        {
                                            tag: 'br'
                                        }, 'Так же есть небольшой опыт использования <b>Ubuntu</b>.'
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'item',
                            content: [
                                {
                                    elem: 'h2',
                                    content: 'Система контроля версия'
                                },
                                {
                                    elem: 'text',
                                    content: [
                                        'Для разработки сайтов для Яндекса работаю с Git. Пока всё устраивает.'
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'item',
                            content: [
                                {
                                    elem: 'h2',
                                    content: 'Таск-менеджеры'
                                },
                                {
                                    elem: 'text',
                                    content:  'Для разработки сайтов для Яндекса работаю с <b>Jira</b>. Для внутренних задач в студии — <b>Megaplan</b>'
                                }
                            ]
                        },
                        {
                            elem: 'item',
                            content: [
                                {
                                    elem: 'h2',
                                    content: 'Ресуры'
                                },
                                {
                                    block: 'text',
                                    content: [
                                        {
                                            elem: 'ol',
                                            content: [
                                                {
                                                    elem: 'li',
                                                    content: [
                                                        {
                                                            block: 'link',
                                                            url: 'http://htmlbook.ru/',
                                                            target: '_blank',
                                                            content: 'htmlbook.ru'
                                                        }, ' — Справочник по CSS/HTML'
                                                    ]
                                                },
                                                {
                                                    elem: 'li',
                                                    content: [
                                                        {
                                                            block: 'link',
                                                            url: 'http://pepelsbey.net',
                                                            target: '_blank',
                                                            content: 'pepelsbey.net'
                                                        }, ' — Блог Вадима Макеева. Часто публикует заметки о современной веб-разработке.'
                                                    ]
                                                },
                                                {
                                                    elem: 'li',
                                                    content: [
                                                        {
                                                            block: 'link',
                                                            url: 'http://habrahabr.ru',
                                                            target: '_blank',
                                                            content: 'habrahabr.ru'
                                                        }, ' — Думаю тут без комментариев :)'
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'item',
                            content: [
                                {
                                    elem: 'h2',
                                    content: 'Работа'
                                },
                                {
                                    elem: 'text',
                                    content:  'В студии в основном занимаюсь версткой, пишу несложные скрипты (Сейчас изучаю более подробно JS). Опыт работы в команде есть.'
                                }
                            ]
                        },
                        {
                            elem: 'item',
                            content: [
                                {
                                    elem: 'h1',
                                    attrs: { id: 'contacts' },
                                    elemMods: { border: 'yes' },
                                    content: 'Контактные данные'
                                }
                            ]
                        },
                        {
                            elem: 'item',
                            content: [
                                {
                                    block: 'text',
                                    content: [
                                        {
                                            elem: 'ol',
                                            content: [
                                                {
                                                    elem: 'li',
                                                    content: '<b>Моб.</b> 095 499 50 42'
                                                },
                                                {
                                                    elem: 'li',
                                                    content: [
                                                    '<b>Электропочта:</b> ',
                                                        {
                                                            block: 'link',
                                                            url: 'mailto: m-peshekhonov@yandex.ua',
                                                            content: 'm-peshekhonov@yandex.ua'
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'li',
                                                    content: [
                                                    '<b>Skype:</b> ',
                                                        {
                                                            block: 'link',
                                                            url: 'skype: peshekhonov90?call',
                                                            content: 'peshekhonov90'
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
        }
    ]
})
