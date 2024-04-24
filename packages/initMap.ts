import lodash from 'lodash'
import AMapLoader from '@amap/amap-jsapi-loader'


// eslint-disable-next-line @typescript-eslint/no-unused-vars
let mapCache: any = null

export type InitAmapOptions = Partial<Parameters<typeof AMapLoader.load>[0]> & Partial<{securityJsCode: string, before?: (options: InitAmapOptions) => void}>

export const initAmap = (options: InitAmapOptions = {}): Promise<(typeof AMap)> => {

    const defaultOptions: InitAmapOptions = {
        key: '720d49e9651522b9b4661195147dc067',
        plugins: [],
        version: '2.0',
    }

    let newOptions = lodash.defaultsDeep(lodash.cloneDeep(options), defaultOptions)

    if (window.amapCache) {
        // delete newOptions.key
    } else {
        window._AMapSecurityConfig = {
            securityJsCode: options.securityJsCode || '530231bc60a6258f7fa6b84d5d532761',
        }
    }
    return new Promise((resolve, reject) => {
        newOptions = newOptions.before && newOptions.before(newOptions) || newOptions
        AMapLoader.load(newOptions).then(Amap => {
            window.amapCache = Amap
            resolve(Amap as (typeof AMap))
        }).catch(e => reject(e))
    })
}

export const initMap = (id: string | HTMLDivElement, options: AMap.MapOptions, amapOptions: InitAmapOptions = {}): Promise<AMap.Map> => {
    return new Promise((resolve, reject) => {
        const defaultOptions: AMap.MapOptions = {
            zoom: 11, // 初始化地图级别
            center: [116.397428, 39.90923], // 初始化地图中心点位置
        }

        initAmap(amapOptions).then(Amap => {
            const newOptions = lodash.defaultsDeep(lodash.cloneDeep(options), defaultOptions) as AMap.MapOptions
            const map = new Amap.Map(id, newOptions)
            mapCache = map
            resolve(map)
        }).catch(e => reject(e))
    })

}
