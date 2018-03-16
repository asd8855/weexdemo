<template>
    <div>
        <!--<recycle-list for="(item, i) in longList" switch="type">-->
        <!--<cell-slot case="A">-->
        <!--<text>- A {{i}} -</text>-->
        <!--</cell-slot>-->
        <!--<cell-slot case="B">-->
        <!--<text>- B {{i}} -</text>-->
        <!--</cell-slot>-->
        <!--</recycle-list>-->

        <recycle-list for="(num, index) in lists" @loadmore="fetch">
            <cell-slot>
                <div class="panel" @click="clickCell(index)">
                    <text class="text">{{num}}</text>
                </div>
            </cell-slot>
        </recycle-list>
    </div>
</template>

<script>
    const navigator = weex.requireModule('navigator');
    const LOADMORE_COUNT = 5;

    export default {
        name: "recycle-list",
        data: () => ({
            lists: [1, 2, 3, 4, 5],
            longList: [
                {type: 'A'},
                {type: 'B'},
                {type: 'B'},
                {type: 'A'},
                {type: 'B'},
                {type: 'A'},
                {type: 'B'},
                {type: 'B'},
                {type: 'A'},
                {type: 'A'},
                {type: 'B'},
                {type: 'B'},
                {type: 'A'},
                {type: 'A'},
                {type: 'B'},
                {type: 'B'},
                {type: 'A'},
                {type: 'A'},
                {type: 'B'},
                {type: 'B'},
                {type: 'A'},
                {type: 'A'},
                {type: 'B'},
                {type: 'B'},
                {type: 'A'},
                {type: 'A'},
                {type: 'B'},
                {type: 'B'},
                {type: 'A'},
                {type: 'A'},
                {type: 'B'},
                {type: 'B'},
                {type: 'A'},
                {type: 'A'},
                {type: 'B'},
                {type: 'B'},
                {type: 'A'},
                {type: 'A'},
                {type: 'B'},
                {type: 'B'},
                {type: 'A'},
                {type: 'A'},
                {type: 'B'},
                {type: 'B'},
                {type: 'A'},
                {type: 'A'},
                {type: 'B'},
                {type: 'B'},
                {type: 'A'},
                {type: 'A'},
                {type: 'B'},
                {type: 'B'},
                {type: 'A'},
                {type: 'A'},
                {type: 'B'},
                {type: 'B'},
                {type: 'A'},
                {type: 'A'},
                {type: 'B'},
                {type: 'B'},
                {type: 'A'},
                {type: 'A'},
                {type: 'B'},
                {type: 'B'},
                {type: 'A'},
            ]
        }),
        created() {
            navigator.setNavBarTitle({
                title: 'recycle-list'
            }, event => {
            });
        },
        methods: {
            fetch() {
                setTimeout(() => {
                    const length = this.lists.length
                    for (let i = length; i < length + LOADMORE_COUNT; ++i) {
                        this.lists.push(i + 1)
                    }
                }, 800)
            },
            clickCell(index) {
                console.log('clickcell', index);
            }
        }
    }
</script>

<style scoped>
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