<template>
    <p class="text-2xl font-bold ">
        {{ text }}
      </p>
</template>

<script setup>
defineProps({
    text: String
})
</script>