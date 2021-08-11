
import Home from './pages/ads/Index'
import ShowAd from './pages/ads/ShowAd'
import UserProfile from './pages/UserProfile';
import SellerProfile from './pages/SellerProfile';
import CreateAd from './pages/CreateAd'
import Signup from './pages/authPages/Signup';
import Login from './pages/authPages/SignIn';

export default [
    { path: '/', component: Home },
    {
        path: '/ads',
        name: 'ads-index',
        components: { default: Home },


    },
    {
        path: '/ads/:id',
        name: 'ad-show',
        components: { default: ShowAd },
    },
    {
        path: '/user/:id',
        name: 'user-profile',
        components: { default: UserProfile },

    },
    {
        path: '/seller/:id',
        name: 'seller-profile',
        components: { default: SellerProfile },

    },
    {
        path: '/create-ad',
        name: 'create-ad',
        components: { default: CreateAd },

    },
    {
        path: '/signup',
        name: 'signup',
        components: { default: Signup },

    },
    {
        path: '/login',
        name: 'login',
        components: { default: Login },

    },
]