import {watch} from 'vue'

export default (map, isDark) => {
    watch(isDark, nweVal => {
        map.setMapStyle(nweVal ? 'amap://styles/darkblue' : 'amap://styles/normal')
    }, {
        immediate: true
    })
}