// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

/* ***************************** JS IMPORTS *************** */
// global level / lib imports

// app level imports
// scripts imports
import { getUrlParam } from '~/scripts/commons/Utils.js';
import { CACHED } from '~/scripts/commons/Constants.js';
// Component Imports
import DefaultLayout from '~/layouts/Default.vue';

/* ****************** CSS BASE IMPORTS **************** */
// global level / lib imports

//in app level imports
import '@/styles/css/main.css';
import '@/styles/scss/theme.scss';

/* ****************** JS BLOCKS **************** */

// @PRIVATE Function collection

//  function to get the theme name from url paramm
const getThemeName = () => getUrlParam('themeName');

// funtion to clear a common collection of cache from local storage
const clearLocalStorage = () => localStorage.clear();

// @Executable Live functions

//clear the cache
clearLocalStorage();

// Set default layout as a global component
if (getThemeName() != null || '') {
	const themeName = getThemeName();
	localStorage.setItem(CACHED.CURRENT_THEME, themeName);
}

export default function(Vue, { router, head, isClient }) {
	Vue.component('Layout', DefaultLayout);
}
