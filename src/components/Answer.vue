<template>
    <label 
    :for="index" 
    class="block mt-4 border border-gray-300 rounded-lg py-2 px-6 text-lg"
    :class="
        {
        'hover:bg-gray-100 cursor-pointer' : !disabled,
        'bg-green-700 text-white' : correcAnswer && disabled,
        'bg-red-500 text-white': wrongAnswer && disabled
        }
    ">
        <input 
            type="radio" 
            :id="index" 
            class="hidden" 
            :value="index" 
            @change="$emit('selected',$event)"
            :disabled="disabled"
            >
        {{ text }}
    </label>
</template>

<script setup>
defineProps({
    index: String,
    text: String,
    disabled: Boolean,
    correcAnswer: Boolean,
    wrongAnswer: Boolean,
});
</script>