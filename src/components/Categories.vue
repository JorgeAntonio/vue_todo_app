<script setup>

const categories = [
    {
        id: 1,
        name: "Work",
        tasks: "15 tasks",
    },
    {
        id: 2,
        name: "Personal",
        tasks: "5 tasks",
    },
    {
        id: 3,
        name: "Family",
        tasks: "9 tasks",
    },
    {
        id: 4,
        name: "Health",
        tasks: "12 tasks",
    },
];


</script>

<template>
    <div>
        <el-scrollbar>
            <div class="scrollbar-flex-content">
                <p v-for="item in categories" :key="item.id" class="scrollbar-demo-item">
                <div class="flex flex-col justify-center items-start h-full space-y-2 p-4">
                    <div class="text-sm font-bold text-gray-400">{{ item.tasks }}</div>
                    <div class="text-2xl font-bold text-black">{{ item.name }}</div>
                </div>
                </p>
            </div>
        </el-scrollbar>
    </div>
</template>

<style scoped>
.scrollbar-flex-content {
    display: flex;
}

.scrollbar-demo-item {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    width: 200px;
    height: 120px;
    margin: 10px;
    box-shadow: 0cm 0cm 0.1cm rgba(221, 213, 213, 0.3);
    text-align: center;
    border-radius: 12px;
    background: white;
    border: none;
    color: var(--el-color-danger);
}
</style>
