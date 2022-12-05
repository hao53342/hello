const mixin = {
    methods: {
        // 跳转页面-保留当前页面
        navigateTo(url) {
            wx.navigateTo({
                url,
                fail(res) {
                    if (res.errMsg) {
                        wx.showModal({
                            content: '你打开的页面太多了，请后退后再操作，或者重新回到首页',
                            cancelText: '后退',
                            confirmText: '回首页',
                            success(res) {
                                if (res.confirm) {
                                    wx.reLaunch({
                                        url: '/pages/home/index'
                                    })
                                }
                                if (res.cancel) {
                                    wx.navigateBack()
                                }
                            }
                        })
                    }
                }
            })
        },

        // 跳转页面-关闭当前页面
        redirectTo(url) {
            wx.redirectTo({
                url,
                fail(res) {
                    wx.showModal({
                        showCancel: false,
                        content: res.errMsg
                    })
                }
            })
        },

        // 获取页面层级
        getPages() {
            // eslint-disable-next-line no-undef
            const pages = getCurrentPages()
            return pages.length
        },

        // 比较基础库
        compareVersion(v1, v2) {
            v1 = v1.split('.')
            v2 = v2.split('.')

            const len = Math.max(v1.length, v2.length)

            while (v1.length < len) {
                v1.push('0')
            }

            while (v2.length < len) {
                v2.push('0')
            }

            for (let i = 0; i < len; i++) {
                const num1 = parseInt(v1[i])
                const num2 = parseInt(v2[i])

                if (num1 > num2) {
                    return 1
                } else if (num1 < num2) {
                    return 0
                }
            }

            return 0
        },

        // 时间格式化
        formatDate(date) {
            if (!date) {
                return ''
            }
            const nDate = new Date(date)
            const year = nDate
                .getFullYear()
                .toString()
                .padStart(2, 0)
            const month = nDate
                .getMonth()
                .toString()
                .padStart(2, 0)
            const day = nDate
                .getDay()
                .toString()
                .padStart(2, 0)
            return year + '-' + month + '-' + day
        }
    }
}

export default mixin
