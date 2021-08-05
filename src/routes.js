
import Home from './pages/ads/Home'
import ShowAd from './pages/ads/ShowAd'

export default [
    { path: '/', component: Home },
    {
        path: '/ads',
        name: 'ads-index',
        components: { default: Home },


    },
    {
        path: '/ads/:id',
        name: 'ads-show',
        components: { default: ShowAd },
        props: {
            header: { colorOnScroll: 400 },
            footer: { backgroundColor: 'black' }
        }
    },
]