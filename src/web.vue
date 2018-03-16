<template>
    <div>
        <web @pagestart="onPageStart"
             @pagefinish="onPageFinish"
             @error="onError"
             src="https://vuejs.org" :style="webStyle">
        </web>

    </div>
</template>

<script>
    import { Utils } from 'weex-ui'
    export default {
        name: "web",
        methods: {
            onPageStart(event) {
            //pagestart ，会在web页面开始加载时调用
            console.log('pagestart',event);
            },

            onPageFinish(event) {
            //pagefinsh ，会在web页面完成加载时调用
                console.log('pagefinsh',event);

            },

            onError(event) {
            //error ,会在web页面加载失败时调用
                console.log('error',event);
            }
        },

        created() {
            const tabPageHeight = Utils.env.getPageHeight() ;
            console.log('tabPageHeight111', tabPageHeight);
            this.webStyle = {
                height: tabPageHeight + 'px',
                width: 750 + 'px',
            };
        }
    }
</script>

<style scoped>

</style>