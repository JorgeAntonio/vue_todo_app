<script setup>
import { ref } from "vue";
import { Plus, Fold, Search, Bell } from "@element-plus/icons-vue";
import { store, addTodo } from "../store/TodoStore";
import TodoList from "../components/TodoList.vue";
import Categories from "../components/Categories.vue";
import AppBar from "../components/AppBar.vue";
import TitleSection from "../components/TitleSection.vue";
import { ElDialog, ElButton } from "element-plus";


const centerDialogVisible = ref(false)

</script>
<template>
    <div class="h-screen container mx-auto p-4">
        <AppBar />
        <h1 class="text-4xl font-bold py-4">What's up, Joy</h1>
        <TitleSection title="Categories" />
        <Categories />
        <TitleSection title="Today's tasks" />
        <div class="space-y-2">
            <TodoList />
        </div>

        <div class="fixed bottom-5 right-5 mb-4 mr-4">
            <el-button @click="centerDialogVisible = true" type="primary" class="h-14 w-14 bg-blue-400 rounded-full">
                <el-icon size="22">
                    <Plus />
                </el-icon>
            </el-button>
        </div>
        <el-dialog v-model="centerDialogVisible" fullscreen align-center>
            <template #header>
                <el-button class="dialog-close-btn" type="text" icon="el-icon-close" @click="centerDialogVisible = false">
                </el-button>
            </template>
            <div class="h-[600px] flex justify-center items-center text-center">
                <input type="text" v-model="store.newTodo" class="border-solid bg-red-300 shadow-2xl center-text" />
            </div>
            <template #footer>
                <span class="dialog-footer">
                    <div class="fixed bottom-5 right-5 mb-4 mr-4">
                        <el-button type="primary" @click="addTodo">
                            Save todo
                        </el-button>
                    </div>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<style>
.dialog-footer button:first-child {
    margin-right: 10px;
}
</style>
  