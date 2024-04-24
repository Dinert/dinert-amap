import DefaultTheme from 'vitepress/theme'
import elementplus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'prismjs/themes/prism.css'
import '../assets/globals.scss'

import globals from '../globals'

export default {
    ...DefaultTheme,

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    enhanceApp: async ({app, router, siteData}) => {
        window._AMapSecurityConfig = {
            securityJsCode: '530231bc60a6258f7fa6b84d5d532761',
        }
        // app is the Vue 3 app instance from `createApp()`. router is VitePress'
        // custom router. `siteData`` is a `ref`` of current site-level metadata.
        app.use(elementplus)
        app.use(globals)
    },
}
