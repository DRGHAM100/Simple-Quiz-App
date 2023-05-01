import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex';

import './assets/main.css'

const app = createApp(App)

const store = createStore({
    state(){
        return{
            correctAnswers: 0,
            wrongAnswers: 0
        }
    },
    mutations: {
        increaseCorrectAnswers(state){
            state.correctAnswers++;
        },
        increaseWrongAnswers(state){
            state.wrongAnswers++;
        },
        resetData(state){
            state.correctAnswers = 0;
            state.wrongAnswers = 0;
        }
    }
});

app.use(router)

app.use(store)

app.mount('#app')
