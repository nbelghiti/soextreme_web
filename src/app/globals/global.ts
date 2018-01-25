import { ANIMATION_TYPES } from 'ngx-loading';
export const PORT = 4040;
export const API = 'http://soextreme.fr:' + PORT + '/';
export const NOW = new Date();
export const LANGUE = 'fr';
export const LANGUES = ['fr', 'en'];
export const CURRENCY = {

    'euro': '€'
};
export const LOC_SOXTRM = {
    lat: 43.7613593,
    lon: 6.378837200000021
};
export const RATING_ACT = 5;
export const RATING_PHOTO = 5;
export const GMAP_KEY = 'AIzaSyAgiDSdRngu3Lqnac4YU5xP3JVwEwwZ0N0';
export const I18N_VALUES = {
    'fr': {
        weekdays: ['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'],
        months: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aou', 'Sep', 'Oct', 'Nov', 'Déc']
    },
    'en': {
        weekdays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    }
};
export const PAYPAL_CLIENT_ID = 'AdbBE5QgBMuyz50l8zoGQj2AL1vC5lhmxNmhrUC6gRbX14vEL9QN9uei70gOROFu2tG_YDlxfiNl-GRk';
export const ASSET_IMG_PATH = 'assets/img/';
export const ASSET_JS_PATH = 'assets/js/';
export const CURRENT_SESSION = JSON.parse(localStorage.getItem('currentSession'));
export const CURRENT_CLIENT = JSON.parse(localStorage.getItem('currentUser'));
export const CURRENT_GERANT = JSON.parse(localStorage.getItem('currentGerant'));
export const PLANNING_COLORS: any = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
export const LOADER_SETTINGS = {

    animationType: ANIMATION_TYPES.circleSwish,
    backdropBackgroundColour: 'rgba(0,0,0,0.5)',
    backdropBorderRadius: '4px',
    primaryColour: '#30b49a',
    secondaryColour: '#30b49a',
    tertiaryColour: '#30b49a'

};
export const LOADER_DURATION = 3000;