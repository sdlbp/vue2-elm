import Vue from 'vue'
import store from './store/'
import router from './router'
import './config/rem'
import FastClick from 'fastclick'

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

new Vue({
	router,
	store,
}).$mount('#app')

