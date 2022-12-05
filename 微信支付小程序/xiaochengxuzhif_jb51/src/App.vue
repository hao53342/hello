<script>
export default {
    onLaunch: function() {
        // 获取系统信息并存入 vuex
        const self = this
        wx.getSystemInfo({
            success(res) {
                self.$store.commit('setSystemInfo', res)
            }
        })

        // 检测新版本
        const updateManager = wx.getUpdateManager()
        updateManager.onUpdateReady(function() {
            updateManager.applyUpdate()
        })
    }
}
</script>

<style>
@import '@/style/style.css';
</style>
