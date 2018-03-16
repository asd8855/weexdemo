<template>
    <div class="wrapper">
        <scroller class="scroller" :style="scrollerStyle">

            <text class="text">wxc-ep-slider</text>
            <wxc-button text="wxc-ep-slider"
                        @wxcButtonClicked="gotoEpSlider">
            </wxc-button>
            <text class="text">wxc-tab-bar</text>
            <wxc-button text="wxc-tab-bar"
                        @wxcButtonClicked="wxcButtonClicked">
            </wxc-button>
            <text class="text">recycle-list</text>
            <wxc-button text="recycle-list"
                        @wxcButtonClicked="gotoRecycleList">
            </wxc-button>
            <text class="text">list</text>
            <wxc-button text="list"
                        @wxcButtonClicked="gotoList">
            </wxc-button>
            <text class="text">web</text>
            <wxc-button text="web"
                        @wxcButtonClicked="gotoWeb">
            </wxc-button>

            <image style="width:500px;height:500px"
                   src="https://gw.alicdn.com/tfs/TB1kCk2SXXXXXXFXFXXXXXXXXXX-72-72.png">
            </image>

        </scroller>
    </div>
</template>

<script>
    import {WxcButton, WxcMinibar, WxcEpSlider, Utils} from 'weex-ui';
    import {getUrl} from "@/utils";

    const navigator = weex.requireModule('navigator');
    const storage = weex.requireModule('storage');
    var modal = weex.requireModule('modal');
    const ip = "http://172.31.120.168:8081/dist";
    //
    // const path = require('path');
    // const helper = require('../../configs/helper');


    export default {
        components: {
            WxcButton,
            WxcMinibar,
            WxcEpSlider
        },

        data() {
            return {}
        },

        created() {
            const tabPageHeight = Utils.env.getPageHeight();
            console.log('tabPageHeight111', tabPageHeight);
            this.scrollerStyle = {
                height: tabPageHeight + 'px',
                width: 750 + 'px',
            };

            const test = new BroadcastChannel('Hello');
            test.onmessage = function (event) {
                console.log('3333', event.data);
                modal.alert({
                    message: event.data,
                    duration: 0.3
                }, function (value) {
                    console.log('alert callback', value)
                })
            };
            console.log('params1111', weex.config.params);
        },

        methods: {

            wxcButtonClicked() {

                storage.setItem('text', 'Welcome to Weex', event => {

                });
                // var url = weex.config.bundleUrl;
                this.navigatorPush('tabbar.js');
            },

            gotoRecycleList() {
                this.navigatorPush('RecycleList.js');
            },

            gotoList() {
                this.navigatorPush('list.js');
            },

            gotoEpSlider() {
                this.navigatorPush('epslider.js');
            },

            gotoWeb() {
                this.navigatorPush('web.js');

            },

            navigatorPush(url) {

                var baseurl = weex.config.bundleUrl;
                baseurl = getUrl(baseurl, url, 'dist');
                navigator.push({
                    url: baseurl,
                    animated: 'true',
                }, event => {

                })
            }
        },

    }
</script>

<style scoped>
    .wrapper {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #FFFFFF;
    }

    .scroller {
        justify-content: center;
        align-items: center;
    }

    .text {
        margin-top: 30px;
        margin-bottom: 30px;
        align-items: center;
        justify-content: center;
    }

</style>