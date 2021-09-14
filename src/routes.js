
import AdsList from './pages/ads/Index'
import ShowAd from './pages/ads/ShowAd'
import UserProfile from './pages/UserProfile';
import SellerProfile from './pages/SellerProfile';
import Home from './pages/Home';
import CreateAd from './pages/CreateAd'
import InboxPage from './pages/InboxPage'
import Signup from './pages/authPages/Signup';
import Login from './pages/authPages/SignIn';

export default [
    {
        path: '/', component: Home,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/ads',
        name: 'ads-index',
        components: { default: AdsList },


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
        meta: {
            requiresAuth: true
        }

    },
    {
        path: '/seller/:sellerId',
        name: 'seller-profile',
        components: { default: SellerProfile },


    },
    {
        path: '/create-ad',
        name: 'create-ad',
        components: { default: CreateAd },
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/inbox',
        name: 'inbox',
        components: { default: InboxPage },
        meta: {
            requiresAuth: true
        }
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