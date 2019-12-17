import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element'
import provide from './vue-apollo'
import 'core-js';
import './components/icons'
import axios from 'axios';
import PDFJS from 'pdfjs-dist'
import './plugins/field';
import '@/permission'
import Video from 'video.js'
import { parseTime, filterFrame } from 'common/js/index'
import _ from 'lodash'
Vue.prototype.$video = Video;

import VideoPlayer from 'vue-video-player'




Vue.use(VideoPlayer);


Vue.config.productionTip = false;
Vue.prototype.$ajax = axios;

Vue.prototype.$filterTime = parseTime
Vue.prototype.$filterFrame = filterFrame
Vue.prototype._ = _

new Vue({
    router,
    store,
    provide,
    PDFJS,
    render: h => h(App)
}).$mount('#app')