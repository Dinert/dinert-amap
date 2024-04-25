
# 快速开始

本节将介绍如何在项目中使用 <el-link type="primary" :underline="false" href="https://github.com/Dinert/dinert-aap">DinertAmap</el-link>

## 引入

> App.vue
>
```html
<script setup lang="ts">
import {onMounted, ref} from 'vue'
import {initMap} from '@dinert/amap'

const mapRef = ref<any>()
onMounted(async () => {
    initMap(mapRef.value, {
        center: [113.533339, 22.794258],
        zooms: [3, 18],
        zoom: 11.5,
        viewMode: '3D',
    }, {
        version: '2.0'
    })
})


</script>

<template>
    <div ref="mapRef">
    </div>
</template>

```