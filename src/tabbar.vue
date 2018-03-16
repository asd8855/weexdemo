<template>
    <div class="wrapper">

        <!--<text>{{msg}}</text>-->
        <!--<text>{{userId}}</text>-->

        <!--<WxcButton text="传参"-->
        <!--@wxcButtonClicked="wxcButtonClicked"></WxcButton>-->

        <wxc-tab-bar :tab-titles="tabTitles"
                     :title-styles="tabStyles"
                     title-type="icon"
                     @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
            <div class="item-container" :style="contentStyle">
                <home></home>
            </div>
            <div class="item-container" :style="contentStyle">
                <text>特别推荐</text>
            </div>
            <div class="item-container" :style="contentStyle">
                <text>消息中心</text>
            </div>
            <div class="item-container" :style="contentStyle">
                <text>我的主页</text>
            </div>

        </wxc-tab-bar>

    </div>

</template>

<script>
    import {WxcButton, WxcMinibar, WxcTabBar, Utils} from 'weex-ui';
    import tabBarConfig from './tabbarConfig';
    import home from './views/tabs/home'

    import {getQueryVariable} from "./utils";

    const navigator = weex.requireModule('navigator');

    const storage = weex.requireModule('storage');

    export default {
        name: "index",

        data: () => ({
            tabTitles: tabBarConfig.tabTitles,
            tabStyles: tabBarConfig.tabStyles,
        }),
        components: {
            WxcButton,
            WxcMinibar,
            WxcTabBar,
            home,
        },

        methods: {
            wxcButtonClicked() {
                const test = new BroadcastChannel('Hello');
                test.postMessage('1222222');
            },
            minibarLeftButtonClick() {

            },
            minibarRightButtonClick() {

            },
            wxcTabBarCurrentTabSelected() {

            }
        },
        created() {
            const tabPageHeight = Utils.env.getPageHeight();
            const { tabStyles } = this;
            this.contentStyle = { height: (tabPageHeight - tabStyles.height) + 'px' };

            storage.getItem('text', event => {
                this.msg = event.data;
            });

            this.userId = getQueryVariable('userId');
            navigator.setNavBarTitle({
                title: 'second weex'
            }, event => {
            });
        }
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

    .item-container {
        width: 750px;
        /*background-color: #238FFF;*/

        align-items: center;
    }

</style>