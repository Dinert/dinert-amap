<script  setup lang="ts">
import {initMap, initAmap} from '../packages'

initMap('map', {
    center: [113.533339, 22.794258],
    zooms: [3, 18],
    zoom: 11.5,
    viewMode: '3D',
}).then(newMap => {

    initAmap({
        plugins: ['AMap.MapType', 'AMap.Scale', 'AMap.ToolBar'],
    }).then(AMap => {
        newMap.addControl(new AMap.MapType({}))
        newMap.addControl(new AMap.Scale({}))
        newMap.addControl(new AMap.ToolBar({}))
    })

})

initMap('map4', {
    center: [113.533339, 22.794258],
    zooms: [3, 18],
    zoom: 11.5,
    viewMode: '3D',
}).then(newMap => {

    initAmap({
        plugins: ['AMap.MapType'],
    }).then(AMap => {
        newMap.addControl(new AMap.MapType({}))
    })
})

initMap('map2', {
    center: [113.533339, 22.794258],
    zooms: [3, 18],
    zoom: 11.5,
    viewMode: '3D',
}).then(() => {

    // initAmap({
    //     plugins: ['AMap.MapType'],
    // }).then(AMap => {
    //     map.addControl(new AMap.MapType({}))
    // })
})

initMap('map3', {
    center: [113.533339, 22.794258],
    zooms: [3, 18],
    zoom: 11.5,
    viewMode: '3D',
}, {
}).then(() => {

    // initAmap({
    //     plugins: ['AMap.MapType'],
    // }).then(AMap => {
    //     map.addControl(new AMap.MapType({}))
    // })
})


</script>

<template>
    <div class="home">
        <div id="map"></div>
        <div id="map2"></div>
        <div id="map3"></div>
        <div id="map4"></div>
    </div>
</template>
<style lang="scss" scoped>
.home {
    display: flex;
    height: 100%;
    flex-wrap: wrap;

    & > div {
        width: 50%;
        flex: 0 0 50%;
    }
}
</style>

<style>
* {
    margin: 0;
    padding: 0;
}

html,
body,
#app {
    height: 100%;
}
</style>
