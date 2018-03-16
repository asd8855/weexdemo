<template>
    <div class="wrapper" @clickrightitem="onclickrightitem">
        <wxc-ep-slider :slider-id="sliderId"
                       :card-length='cardLength'
                       :card-s="cardSize"
                       :select-index="1"
                       auto-play=true
                       class="ep-slider"
                       @wxcEpSliderCurrentIndexSelected="wxcEpSliderCurrentIndexSelected">

            <!--自动生成demo-->
            <div v-for="(v,index) in [1,2,3,4,5]"
                 :key="index"
                 :slot="`card${index}_${sliderId}`"
                 :class="['slider',`slider${index}`]"
                 :accessible="true"
                 :aria-label="`这里是第${index + 1}个滑块`">
                <text class="text">这里是第{{index + 1}}个滑块</text>
            </div>
        </wxc-ep-slider>
    </div>
</template>

<script>
    import {WxcEpSlider} from 'weex-ui';

    var globalEvent = weex.requireModule('globalEvent');

    const navigator = weex.requireModule('navigator');
    var modal = weex.requireModule('modal');

    export default {
        components: {
            WxcEpSlider
        },
        name: "epslider",
        data: () => ({
            sliderId: 1,
            cardLength: 5,
            cardSize: {
                width: 400,
                height: 300,
                spacing: 0,
                scale: 0.8
            }
        }),
        methods: {
            wxcEpSliderCurrentIndexSelected() {

            },
            onclickrightitem() {
                modal.alert({
                    message: '33333',
                    duration: 0.3
                }, function (value) {
                    console.log('alert callback', value)
                })
            }
        },
        created() {
            navigator.setNavBarTitle({
                title: 'slider'
            }, event => {
            });

            navigator.setNavBarRightItem({
                title: '跳转',
                titleColor: '#ff9090',
            }, event => {

            });
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
        justify-content: flex-start;
        align-items: center;
    }

    .ep-slider {
       background-color: #FFE4C4;

    }

    .slider {
        width: 400px;
        height: 300px;
        background-color: #c3413d;
        align-items: center;
        justify-content: center;
    }

    .slider1 {
        background-color: #635147;
    }

    .slider2 {
        background-color: #ffc302;
    }

    .slider3 {
        background-color: #ff9090;
    }

    .slider4 {
        background-color: #546e7a;
    }
</style>