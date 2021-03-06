interface BookmarkBefore {
    name: string
    url: string
    tags: string
    views: string
    discription: string
}

export const mainView = 'Home'

const bookmarksBefore: BookmarkBefore[] = [
    {
        name: 'Google',
        url: 'https://www.google.com',
        tags: 'Search',
        views: 'Home',
        discription: '',
    },
    {
        name: 'Baidu',
        url: 'http://www.baidu.com',
        tags: 'Search',
        views: 'Home',
        discription: '',
    },
    {
        name: 'Bing',
        url: 'https://www.bing.com',
        tags: 'Search',
        views: 'Home',
        discription: '',
    },
    {
        name: 'Zhihu',
        url: 'https://www.zhihu.com',
        tags: 'Social',
        views: 'Home',
        discription: '',
    },
    {
        name: 'BiliBili',
        url: 'https://www.bilibili.com',
        tags: 'Media',
        views: 'Home',
        discription: '',
    },
    {
        name: 'Youtube',
        url: 'https://www.youtube.com',
        tags: 'Media',
        views: 'Home',
        discription: '',
    },
    {
        name: 'Netflix',
        url: 'https://www.netflix.com',
        tags: 'Media',
        views: 'Home',
        discription: '',
    },
    {
        name: 'DeepL',
        url: 'https://www.deepl.com/translator',
        tags: 'Tools',
        views: 'Home',
        discription: '',
    },
    {
        name: 'Github',
        url: 'https://github.com',
        tags: 'Social',
        views: 'Develop, Home',
        discription: '',
    },
    {
        name: 'Gitee',
        url: 'https://gitee.com',
        tags: 'Social',
        views: 'Develop, Home',
        discription: '',
    },
    {
        name: 'LeetCode',
        url: 'https://leetcode-cn.com',
        tags: 'Social',
        views: 'Develop, Home',
        discription: '',
    },
    {
        name: 'CodePen',
        url: 'https://codepen.io',
        tags: 'Social',
        views: 'Develop, Home',
        discription: '',
    },
    {
        name: 'MDN Docs',
        url: 'https://developer.mozilla.org/zh-CN/',
        tags: 'Web',
        views: 'Develop, Home',
        discription: '',
    },
    {
        name: 'freeCodeCamp',
        url: 'https://chinese.freecodecamp.org/learn',
        tags: 'Web',
        views: 'Develop, Home',
        discription: '',
    },
    {
        name: 'Vuejs',
        url: 'https://v3.cn.vuejs.org',
        tags: 'Web',
        views: 'Develop',
        discription: '',
    },
    {
        name: 'React',
        url: 'https://zh-hans.reactjs.org',
        tags: 'Web',
        views: 'Develop',
        discription: '',
    },
    {
        name: 'Element',
        url: 'https://element-plus.org',
        tags: 'Web',
        views: 'Develop',
        discription: '',
    },
    {
        name: 'MUI',
        url: 'https://mui.com/zh/',
        tags: 'Web',
        views: 'Develop',
        discription: '',
    },
    {
        name: 'Webpack',
        url: 'https://webpack.docschina.org',
        tags: 'Web',
        views: 'Develop',
        discription: '',
    },
    {
        name: 'TypeScript',
        url: 'https://www.typescriptlang.org/zh/',
        tags: 'Web',
        views: 'Develop',
        discription: '',
    },
    {
        name: 'Python Docs',
        url: 'https://docs.python.org/3/',
        tags: 'Python',
        views: '',
        discription: '',
    },
    {
        name: 'PyPI',
        url: 'https://pypi.org',
        tags: 'Python',
        views: '',
        discription: '',
    },
    {
        name: 'TestPyPI',
        url: 'https://test.pypi.org',
        tags: 'Python',
        views: '',
        discription: '',
    },
    {
        name: 'Flask',
        url: 'https://dormousehole.readthedocs.io/en/latest/',
        tags: 'Python',
        views: '',
        discription: '',
    },
    {
        name: 'Django',
        url: 'https://www.djangoproject.com',
        tags: 'Python',
        views: '',
        discription: '',
    },
    {
        name: 'PyTorch',
        url: 'https://pytorch.org',
        tags: 'Python',
        views: '',
        discription: '',
    },
    {
        name: 'TensorFlow',
        url: 'https://www.tensorflow.org',
        tags: 'Python',
        views: '',
        discription: '',
    },
    {
        name: 'Pandas',
        url: 'https://pandas.pydata.org',
        tags: 'Python',
        views: '',
        discription: '',
    },
    {
        name: 'Numpy',
        url: 'https://numpy.org',
        tags: 'Python',
        views: '',
        discription: '',
    },
    {
        name: 'Matplotlib',
        url: 'https://matplotlib.org',
        tags: 'Python',
        views: '',
        discription: '',
    },
    {
        name: 'scikt-learn',
        url: 'https://scikit-learn.org/stable/',
        tags: 'Python',
        views: '',
        discription: '',
    },
    {
        name: 'ECharts',
        url: 'https://echarts.apache.org/zh/index.html',
        tags: 'Tools',
        views: '',
        discription: 'ECharts??????',
    },
    {
        name: 'Chart.js',
        url: 'https://chartjs.bootcss.com/',
        tags: 'Tools',
        views: '',
        discription: '???????????????',
    },
    {
        name: 'sweetalert2',
        url: 'https://www.sweetalert2.cn',
        tags: 'Tools',
        views: '',
        discription: '???????????????',
    },
    {
        name: 'mirai',
        url: 'https://docs.mirai.mamoe.net',
        tags: 'Tools',
        views: '',
        discription: 'QQ?????????mirai????????????',
    },
    {
        name: 'regex101',
        url: 'https://regex101.com',
        tags: 'Tools',
        views: '',
        discription: '?????????????????????',
    },
    {
        name: 'VectorLogoZone',
        url: 'https://www.vectorlogo.zone',
        tags: 'Tools',
        views: '',
        discription: '??????????????????logo',
    },
    {
        name: 'ProcessOn',
        url: 'https://www.processon.com',
        tags: 'Tools',
        views: '',
        discription: '???????????????????????????',
    },
    {
        name: 'Excalidraw',
        url: 'https://excalidraw.com',
        tags: 'Tools',
        views: '',
        discription: '?????????????????????',
    },
    {
        name: 'OKTools',
        url: 'https://oktools.net',
        tags: 'Tools',
        views: '',
        discription: '?????????????????????????????????',
    },
    {
        name: 'animista',
        url: 'https://animista.net',
        tags: 'Tools',
        views: '',
        discription: 'CSS UI??????',
    },
    {
        name: 'spinkit',
        url: 'https://tobiasahlin.com/spinkit/',
        tags: 'Tools',
        views: '',
        discription: '??????CSS????????????',
    },
    {
        name: 'favicon.io',
        url: 'https://favicon.io/favicon-converter/',
        tags: 'Tools',
        views: '',
        discription: '????????????favicon????????????',
    },
    {
        name: 'Cronitor',
        url: 'https://crontab.guru',
        tags: 'Tools',
        views: '',
        discription: 'Crontab???????????????',
    },
    {
        name: 'ShieldsIO',
        url: 'https://shields.io',
        tags: 'Tools',
        views: '',
        discription: 'README???????????????',
    },
    {
        name: '30SecondsOfCode',
        url: 'https://www.30secondsofcode.org',
        tags: 'Tools',
        views: '',
        discription: 'EN???????????????????????????',
    },
    {
        name: 'DataStructVisual',
        url: 'https://www.cs.usfca.edu/~galles/visualization/Algorithms.html',
        tags: 'Tools',
        views: '',
        discription: '?????????????????????',
    },
    {
        name: 'VSCodeThemes',
        url: 'https://vscodethemes.com',
        tags: 'Tools',
        views: '',
        discription: 'VSCode??????',
    },
]

const regexp = new RegExp('https{0,1}://.*?/')

function getFavicon(url: string) {
    let favicon = url.match(regexp)
    if (favicon) return favicon[0] + 'favicon.ico'
    else return url + '/favicon.ico'
}

export interface Bookmark {
    name: string
    url: string
    img: string
    tags: string | null
    views: string | null
    discription: string
}

export const bookmarks: Bookmark[] = bookmarksBefore.map(item => {
    return {
        name: item.name,
        url: item.url,
        img: getFavicon(item.url),
        tags: item.tags,
        views: item.views,
        discription: item.discription,
    }
})