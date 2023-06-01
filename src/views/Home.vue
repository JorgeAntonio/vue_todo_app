<script setup>
import { ref } from "vue";
import { Plus, ArrowUp, Calendar } from "@element-plus/icons-vue";
import { store, addTodo } from "../store/TodoStore";
import TodoList from "../components/TodoList.vue";
import Categories from "../components/Categories.vue";
import AppBar from "../components/AppBar.vue";
import TitleSection from "../components/TitleSection.vue";
import { ElDialog, ElButton } from "element-plus";

const centerDialogVisible = ref(false);
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
      <el-button
        @click="centerDialogVisible = true"
        type="primary"
        class="h-14 w-14 bg-blue-400 rounded-full"
      >
        <el-icon size="22">
          <Plus />
        </el-icon>
      </el-button>
    </div>
    <el-dialog
      v-model="centerDialogVisible"
      fullscreen
      align-center
      class="bg-[#f9faff]"
    >
      <template #header>
        <el-button
          class="dialog-close-btn"
          type="text"
          icon="el-icon-close"
          @click="centerDialogVisible = false"
        >
        </el-button>
      </template>
      <div class="h-[600px] flex flex-col justify-center text-center">
        <input
          type="text"
          v-model="store.newTodo"
          class="bg-transparent center-text h-10 w-full text-center text-2xl"
          placeholder="Createa a new template"
        />
        <div class="flex justify-start py-4">
          <span class="px-8 py-2 border rounded-full">
            <el-icon><Calendar /></el-icon>
            <p>Today</p>
          </span>
          <div class="px-8 py-4 flex justify-center items-center">
            <div class="rounded-full h-10 w-10 border ">
              <el-radio size="large"></el-radio>
            </div>
          </div>
        </div>
      </div>

      <template #footer>
        <span class="dialog-footer">
          <div class="fixed bottom-5 right-5 mb-4 mr-4">
            <el-button
              type="primary"
              @click="addTodo"
              class="h-14 px-4 bg-blue-400 rounded-2xl"
              >Add todo
              <el-icon size="22">
                <ArrowUp />
              </el-icon>
            </el-button>
            <!-- <el-button type="primary" @click="addTodo"> Save todo </el-button> -->
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
