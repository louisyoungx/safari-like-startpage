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
        discription: 'ECharts图表',
    },
    {
        name: 'Chart.js',
        url: 'https://chartjs.bootcss.com/',
        tags: 'Tools',
        views: '',
        discription: '轻量级图表',
    },
    {
        name: 'sweetalert2',
        url: 'https://www.sweetalert2.cn',
        tags: 'Tools',
        views: '',
        discription: '弹出框插件',
    },
    {
        name: 'mirai',
        url: 'https://docs.mirai.mamoe.net',
        tags: 'Tools',
        views: '',
        discription: 'QQ服务器mirai开发文档',
    },
    {
        name: 'regex101',
        url: 'https://regex101.com',
        tags: 'Tools',
        views: '',
        discription: '正则表达式测试',
    },
    {
        name: 'VectorLogoZone',
        url: 'https://www.vectorlogo.zone',
        tags: 'Tools',
        views: '',
        discription: '开发文档图标logo',
    },
    {
        name: 'ProcessOn',
        url: 'https://www.processon.com',
        tags: 'Tools',
        views: '',
        discription: '在线流程图思维导图',
    },
    {
        name: 'Excalidraw',
        url: 'https://excalidraw.com',
        tags: 'Tools',
        views: '',
        discription: '流程图画图工具',
    },
    {
        name: 'OKTools',
        url: 'https://oktools.net',
        tags: 'Tools',
        views: '',
        discription: '在线格式转换，编码转换',
    },
    {
        name: 'animista',
        url: 'https://animista.net',
        tags: 'Tools',
        views: '',
        discription: 'CSS UI调试',
    },
    {
        name: 'spinkit',
        url: 'https://tobiasahlin.com/spinkit/',
        tags: 'Tools',
        views: '',
        discription: '各类CSS加载样式',
    },
    {
        name: 'favicon.io',
        url: 'https://favicon.io/favicon-converter/',
        tags: 'Tools',
        views: '',
        discription: '各种尺寸favicon一键生成',
    },
    {
        name: 'Cronitor',
        url: 'https://crontab.guru',
        tags: 'Tools',
        views: '',
        discription: 'Crontab设置可视化',
    },
    {
        name: 'ShieldsIO',
        url: 'https://shields.io',
        tags: 'Tools',
        views: '',
        discription: 'README小图标生成',
    },
    {
        name: '30SecondsOfCode',
        url: 'https://www.30secondsofcode.org',
        tags: 'Tools',
        views: '',
        discription: 'EN各类面试题和知识点',
    },
    {
        name: 'DataStructVisual',
        url: 'https://www.cs.usfca.edu/~galles/visualization/Algorithms.html',
        tags: 'Tools',
        views: '',
        discription: '排序算法可视化',
    },
    {
        name: 'VSCodeThemes',
        url: 'https://vscodethemes.com',
        tags: 'Tools',
        views: '',
        discription: 'VSCode主题',
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