const {defineConfig} = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   css: {
//     loaderOptions: {
//       sass: {
//         preprndData: ' @import "@/assets/style.scss"; '
//       }
//     }
//   }
// })

module.exports = {
    css: {
        loaderOptions: {
            sass: {
                sassOptions: {
                    preprndData: ' @import "@/assets/style.scss"; '
                }
            }
        }
    }
}
