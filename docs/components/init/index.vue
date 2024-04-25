<script setup lang="ts">
import {onMounted, ref} from 'vue'
import {initMap} from '../../../packages'

const mapRef = ref<any>()

// 虽然这种使用比较方便，但在html中id是唯一的，如果不能保证id的唯一性，请尽量使用dom的形式初始化地图
// initMap('map', {
//     center: [113.533339, 22.794258],
//     zooms: [3, 18],
//     zoom: 11.5,
//     viewMode: '3D',
// }, {
//     version: '2.0'
// })

onMounted(() => {
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

