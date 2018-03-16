<template>
    <div>
        <list @loadmore="fetch">

            <refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdowm"
                     :display="refreshing ? 'show': 'hide'">
                <loading-indicator class="indicator"></loading-indicator>
            </refresh>

            <cell v-for="num in lists">
                <div class="panel">
                    <text class="text">{{num}}</text>
                </div>
            </cell>

            <loading class="loading" @loading="onloading" :display="loading ? 'show' : 'hide'">
                <loading-indicator class="indicator"></loading-indicator>
            </loading>

        </list>
    </div>
</template>

<script>
    const LOADMORE_COUNT = 5;
    export default {
        name: "list",
        data: () => ({
            lists: [1, 2, 3, 4, 5],
            refreshing: false,
            loading: false,
        }),
        methods: {
            fetch() {
            },

            onrefresh() {
                this.refreshing = true
                setTimeout(() => {
                    this.refreshing = false
                }, 2000)
            },

            onpullingdowm() {

            },

            onloading() {
                this.loading = true;
                setTimeout(() => {
                    const length = this.lists.length;
                    for (let i = length; i < length + LOADMORE_COUNT; ++i) {
                        this.lists.push(i + 1)
                        this.loading = false

                    }
                }, 2500)
            },
        }
    }
</script>

<style scoped>

    .indicator {
        margin-top: 16px;
        height: 40px;
        width: 40px;
        color: darkcyan;
    }

    .indicator-text {
        color: #888888;
        font-size: 42px;
        text-align: center;
    }

    .refresh {
        width: 750px;
        /*display: -ms-flex;*/
        /*display: -webkit-flex;*/
        /*display: flex;*/
        /*-ms-flex-align: center;*/
        /*-webkit-align-items: center;*/
        /*-webkit-box-align: center;*/
        align-items: center;
    }

    .loading {
        width: 750px;
        /*display: -ms-flex;*/
        /*display: -webkit-flex;*/
        /*display: flex;*/
        /*-ms-flex-align: center;*/
        /*-webkit-align-items: center;*/
        /*-webkit-box-align: center;*/
        align-items: center;
    }

    .panel {
        width: 600px;
        height: 250px;
        margin-left: 75px;
        margin-top: 35px;
        margin-bottom: 35px;
        /*flex-direction: column;*/
        justify-content: center;
        border-width: 2px;
        border-style: solid;
        border-color: rgb(162, 217, 192);
        background-color: rgba(162, 217, 192, 0.2);
    }

    .text {
        font-size: 50px;
        text-align: center;
        color: #41B883;
    }
</style>