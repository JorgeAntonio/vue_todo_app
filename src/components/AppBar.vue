<script lang="ts" setup>
import { Fold, Search, Bell } from "@element-plus/icons-vue";

</script>

<template>
    <div class="flex justify-between pb-4 text-gray-400">
        <div>
            <el-icon size="20">
                <Fold />
            </el-icon>
        </div>
        <div class="space-x-4">
            <el-icon size="20">
                <Search />
            </el-icon>
            <el-icon size="20">
                <Bell />
            </el-icon>
        </div>
    </div>
</template>
