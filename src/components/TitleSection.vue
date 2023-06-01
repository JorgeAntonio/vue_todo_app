<script setup>

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
});


</script>


<template>
    <h3 class="py-4 text-gray-400 text-base uppercase font-bold">
        {{ title }}
    </h3>
</template>
