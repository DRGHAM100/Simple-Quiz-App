<script setup>
import {ref} from 'vue';
import {mapState,mapMutations} from '../map-state';
import questions from '../questions.js';
import Answer from '../components/Answer.vue';
import Question from '../components/Question.vue';

let selectedAnswer = ref('');
let currentQuestionIndex = ref(0);
const {correctAnswers, wrongAnswers} = mapState();
const {increaseCorrectAnswers,increaseWrongAnswers,resetData} = mapMutations();

const answered = (e) => {
  selectedAnswer.value = e.target.value;

  if(selectedAnswer.value == questions[currentQuestionIndex.value].correctAnswer)
    increaseCorrectAnswers();
  else
    increaseWrongAnswers();

}

const nextQuestion = () => {
  selectedAnswer.value = '';
  currentQuestionIndex.value += 1;
}

const retest = () => {
  selectedAnswer.value = '';
  currentQuestionIndex.value = 0;
  resetData();
}
</script>

<template>
<div class="flex w-full h-screen justify-center items-center">
  <div class="w-full max-w-xl">
    <h1 class="font-bold text-5xl text-center text-indigo-700">Simple Quiz</h1>
    <div v-if="currentQuestionIndex < questions.length" class="bg-white p-12 rounded-lg shadow-lg w-full mt-8">
      
      <Question :text="questions[currentQuestionIndex].question"/>
      
      <Answer v-for="(option,index) in questions[currentQuestionIndex].answers" :key="index+option" :index="index" :text="option" 
      @selected="answered" :disabled="selectedAnswer != ''" 
      :correcAnswer="index == questions[currentQuestionIndex].correctAnswer"
      :wrongAnswer="index == selectedAnswer && index != questions[currentQuestionIndex].correctAnswer"
      />
      
      <div class="mt-6" v-show="selectedAnswer != ''">
        <button @click="nextQuestion" class="float-right rounded-lg disabled:cursor-not-allowed bg-indigo-700 p-2 px-6 text-white">
          Next
        </button>
      </div>
    </div>
    <div v-else class="bg-white p-12 rounded-lg shadow-lg w-full mt-8">
      <h2 class="text-center text-2xl mb-2">Finish</h2>
      <p class="text-green-500">Correct Answers: {{ correctAnswers }}</p>
      <p class="text-red-500">Wrong Answers: {{ wrongAnswers }}</p>
      <div class="mt-6">
        <button @click="retest" class="float-right rounded-lg disabled:cursor-not-allowed bg-indigo-700 p-2 px-6 text-white">
          Re-Test
        </button>
      </div>
    </div>
  </div>
</div>
</template>
