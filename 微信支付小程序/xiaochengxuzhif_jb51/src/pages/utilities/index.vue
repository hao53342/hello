<template>
    <view class="page">
        <view
            class="wrap bg-gray-100 dark_bg-gray-800 overflow-hidden"
            :class="darkmode ? 'rounded-none' : 'rounded-t-2xl'"
        >
            <view class="p-4 pb-0">
                <view class="text-base font-bold  dark_text-gray-400">我的缴费</view>
                <view class="mt-4 bg-white dark_bg-gray-900 list-none rounded-md shadow-lg">
                    <view
                        class="border-b border-solid border-gray-100 dark_border-gray-800 border-t-0 border-l-0 border-r-0"
                    >
                        <a href="#" class="flex items-center p-6 no-underline">
                            <view class="w-8 h-8 mr-4">
                                <image
                                    class="w-full h-full border-0"
                                    src="/static/utilities/icon-1.png"
                                />
                            </view>
                            <view class="flex-1">
                                <view class="text-black font-bold text-gray-800 dark_text-gray-400">
                                    电费
                                </view>
                                <view class="mt-1_5 text-sm font-light text-gray-400">
                                    0947000045678955 | *小明
                                </view>
                            </view>
                            <view
                                class="w-3 h-3 border border-l-0 border-b-0 border-solid border-gray-300 transform rotate-45"
                            ></view>
                        </a>
                    </view>
                    <view
                        class="border-b border-solid border-gray-100 dark_border-gray-800 border-t-0 border-l-0 border-r-0"
                    >
                        <a href="#" class="flex items-center p-6 no-underline">
                            <view class="w-8 h-8 mr-4">
                                <image
                                    class="w-full h-full border-0"
                                    src="/static/utilities/icon-2.png"
                                />
                            </view>
                            <view class="flex-1">
                                <view class="text-black font-bold text-gray-800 dark_text-gray-400">
                                    燃气费
                                </view>
                                <view class="mt-1_5 text-sm font-light text-gray-400">
                                    8974920090 | *小明
                                </view>
                            </view>
                            <view
                                class="w-3 h-3 border border-l-0 border-b-0 border-solid border-gray-300 transform rotate-45"
                            ></view>
                        </a>
                    </view>
                    <view>
                        <a href="#" class="flex items-center p-6 no-underline">
                            <view class="w-8 h-8 mr-4">
                                <image
                                    class="w-full h-full border-0"
                                    src="/static/utilities/icon-3.png"
                                />
                            </view>
                            <view class="flex-1">
                                <view class="text-black font-bold text-gray-800 dark_text-gray-400">
                                    宽带费
                                </view>
                                <view class="mt-1_5 text-sm font-light text-gray-400">
                                    075552098745 | *小明
                                </view>
                            </view>
                            <view
                                class="w-3 h-3 border border-l-0 border-b-0 border-solid border-gray-300 transform rotate-45"
                            ></view>
                        </a>
                    </view>
                </view>

                <view class="flex justify-between items-center mt-6">
                    <view class="text-base font-bold  dark_text-gray-400">新增缴费</view>
                    <view class="flex items-center text-sm dark_text-gray-400">
                        <view class="mr-2">深圳市</view>
                        <view
                            class="w-2 h-2 border border-r-0 border-t-0 border-solid border-gray-300 transform -rotate-45 relative top-_href"
                        ></view>
                    </view>
                </view>

                <view
                    class="my-4 grid grid-cols-3 grid-rows-3 gap-px bg-gray-100 dark_bg-gray-800 shadow-lg"
                >
                    <a
                        class="bg-white dark_bg-gray-900 grid-item flex justify-center items-center rounded-tl"
                    >
                        <view>
                            <view class="w-8 h-8 ml-auto mr-auto">
                                <image class="w-full h-full" src="/static/utilities/icon-1.png" />
                            </view>
                            <view class="mt-3 text-sm text-gray-700 dark_text-gray-400">
                                电费
                            </view>
                        </view>
                    </a>
                    <a class="bg-white dark_bg-gray-900 grid-item flex justify-center items-center">
                        <view>
                            <view class="w-8 h-8 ml-auto mr-auto">
                                <image class="w-full h-full" src="/static/utilities/icon-4.png" />
                            </view>
                            <view class="mt-3 text-sm text-gray-700 dark_text-gray-400">
                                水费
                            </view>
                        </view>
                    </a>
                    <a
                        class="bg-white dark_bg-gray-900 grid-item flex justify-center items-center rounded-tr"
                    >
                        <view>
                            <view class="w-8 h-8 ml-auto mr-auto">
                                <image class="w-full h-full" src="/static/utilities/icon-2.png" />
                            </view>
                            <view class="mt-3 text-sm text-gray-700 dark_text-gray-400">
                                燃气费
                            </view>
                        </view>
                    </a>
                    <a class="bg-white dark_bg-gray-900 grid-item flex justify-center items-center">
                        <view>
                            <view class="w-8 h-8 ml-auto mr-auto">
                                <image class="w-full h-full" src="/static/utilities/icon-5.png" />
                            </view>
                            <view class="mt-3 text-sm text-gray-700 dark_text-gray-400">
                                固话费
                            </view>
                        </view>
                    </a>
                    <a class="bg-white dark_bg-gray-900 grid-item flex justify-center items-center">
                        <view>
                            <view class="w-8 h-8 ml-auto mr-auto">
                                <image class="w-full h-full" src="/static/utilities/icon-3.png" />
                            </view>
                            <view class="mt-3 text-sm text-gray-700 dark_text-gray-400">
                                宽带费
                            </view>
                        </view>
                    </a>
                    <a class="bg-white dark_bg-gray-900 grid-item flex justify-center items-center">
                        <view>
                            <view class="w-8 h-8 ml-auto mr-auto">
                                <image class="w-full h-full" src="/static/utilities/icon-7.png" />
                            </view>
                            <view class="mt-3 text-sm text-gray-700 dark_text-gray-400">
                                有线电视
                            </view>
                        </view>
                    </a>
                    <a
                        class="bg-white dark_bg-gray-900 grid-item flex justify-center items-center rounded-bl"
                    >
                        <view>
                            <view class="w-8 h-8 ml-auto mr-auto">
                                <image class="w-full h-full" src="/static/utilities/icon-6.png" />
                            </view>
                            <view class="mt-3 text-sm text-gray-700 dark_text-gray-400">
                                油卡充值
                            </view>
                        </view>
                    </a>
                    <a class="bg-white dark_bg-gray-900 grid-item flex justify-center items-center">
                        <view>
                            <view class="w-8 h-8 ml-auto mr-auto">
                                <image class="w-full h-full" src="/static/utilities/icon-8.png" />
                            </view>
                            <view class="mt-3 text-sm text-gray-700 dark_text-gray-400">
                                ETC办理
                            </view>
                        </view>
                    </a>
                    <view class="bg-white dark_bg-gray-900 grid-item rounded-br"></view>
                </view>

                <view class="mt-8 text-center text-sm">
                    <text class="inline text-gray-400 no-underline">缴费记录</text>
                    <text class="ml-2 mr-2 text-gray-300">｜</text>
                    <text class="inline text-gray-400 no-underline">缴费设置</text>
                    <text class="ml-2 mr-2 text-gray-300">｜</text>
                    <text class="inline text-gray-400 no-underline">帮助中心</text>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            darkmode: false
        }
    },
    onLoad() {
        const self = this
        self.themeChange()
        wx.onThemeChange(() => {
            self.themeChange()
        })
    },
    onShow() {
        this.themeChange()
    },
    methods: {
        themeChange() {
            const self = this
            wx.getSystemInfo({
                success(res) {
                    if (res.theme === 'dark') {
                        wx.setNavigationBarColor({
                            frontColor: '#ffffff',
                            backgroundColor: '#1f2937'
                        })
                        wx.setBackgroundColor({
                            backgroundColor: '#1f2937',
                            backgroundColorTop: '#1f2937',
                            backgroundColorBottom: '#1f2937'
                        })
                        self.darkmode = true
                    } else {
                        wx.setNavigationBarColor({
                            frontColor: '#ffffff',
                            backgroundColor: '#5dbb85'
                        })
                        wx.setBackgroundColor({
                            backgroundColor: '#5dbb85',
                            backgroundColorTop: '#5dbb85',
                            backgroundColorBottom: '#f3f4f6'
                        })
                        self.darkmode = false
                    }
                }
            })
        }
    }
}
</script>

<style scoped>
.page {
    background-color: #5dbb85;
}

.wrap {
    padding-bottom: calc(env(safe-area-inset-bottom));
}

.grid-item {
    height: calc((100vw - 2rem) / 3);
}
</style>
