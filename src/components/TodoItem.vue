<script setup>

import { SuccessFilled, CircleCheck, Close } from "@element-plus/icons-vue";

const props = defineProps({
    todo: {
        type: Object,
        required: true,
    },
    removeTodo: {
        type: Function,
        required: true,
    },
    toggleTodoStatus: {
        type: Function,
        required: true,
    },
});
</script>

<template>
    <div class="px-4 py-6 bg-white rounded-xl flex justify-between">
        <div class="space-x-1">
            <el-radio class="custom_check" label="props.todo.title" size="large" v-model="props.todo.completed"
                @change="props.toggleTodoStatus(props.index)">
                <span class="title" :class="{ 'completed': props.todo.completed }">{{ props.todo.title }}
                </span>
            </el-radio>
        </div>
        <button @click="props.removeTodo">
            <el-icon>
                <Close />
            </el-icon>
        </button>
    </div>
</template>

<style scoped>
.title {
    font-size: 20px;
    font-weight: 500;
    color: #000;
}

.completed {
    text-decoration: line-through;
}

.custom_check .el-radio__inner {
    width: 32px;
    height: 32px;
}

.mycheck {
    width: 20px;
    height: 20px;
}
</style>
