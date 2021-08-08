
import Home from './pages/ads/Index'
import ShowAd from './pages/ads/ShowAd'
import UserProfile from './pages/UserProfile';
import SellerProfile from './pages/SellerProfile';

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
    },
    {
        path: '/user/:id',
        name: 'user-profile',
        components: { default: UserProfile },

    },    {
        path: '/seller/:id',
        name: 'seller-profile',
        components: { default: SellerProfile },

    },
]