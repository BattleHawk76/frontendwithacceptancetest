<template>
    <div class="define-table-container">
        <el-table :data="data" :height="height" :border="border" fit
                :highlight-current-row="highLightCurrent" @current-change="changeCurrent"
                :show-summary="showSummary" :summary-method="summaryFunc">
                <el-table-column label="序号" width="65" align="center" v-if="haveIndex" :fixed="indexFixed">
                    <template slot-scope="scope">{{(pageInfo.page-1)*pageInfo.size+scope.$index+1}}</template>
                </el-table-column>
            <slot></slot>
        </el-table>
        <bos-paginator :pageInfo="pageInfo" @bosCurrentPageChanged="changePage" v-if="havePage"></bos-paginator>
    </div>
</template>

<script>
import defineColumn from './defineColumn'
    export default {
        name: "definTable",
        data() {
            return {}
        },
        /*mixins: [formRulesMixin],*/
        props: {
            data: {
                type: Array,
                default() {
                    return []
                }
            },
            height: {
                type: String,
                default: '600px'
            },
            border: {
                type: Boolean,
                default: true
            },
            highLightCurrent: { // 是否高亮当前选中行
                type: Boolean,
                default: false
            },
            showSummary: { // 是否显示底部合计行
                type: Boolean,
                default: false
            },
            summaryText: {
                type: String,
                default: '合计'  
            },
            summaryFunc: { // 底部合计行计算方法
                type: Function,
                default: () => {}
            },
            pageInfo: { // 分页信息
                type: Object,
                default() {
                    return {
                        page: 1,
                        size: 10,
                        totalElements: 0,
                        totalPages: 0
                    }
                }
            },
            havePage: { // 是否有分页
                type: Boolean,
                default: true
            },
            haveIndex: {
                type: Boolean,
                default: true
            },
            indexFixed: {
                type: [Boolean, String],
                default: true
            }
        },
        methods: {
            changePage(page) {
                this.$emit('changePage', page);
            },
            changeCurrent(current, pre) { // 当前选中行改变
                this.$emit('changeCurrent', current);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .actionButton{
        width:70px;
        height:32px;
        opacity:1;
        color: white;
        border-radius:4px;
    }
    /deep/ .el-table {
        ::-webkit-scrollbar {
            width: 6px;
            height: 8px;
        }
        ::-webkit-scrollbar-thumb {
            background:rgba(178,178,204,1);
            border-radius: 20px;
        }
        // .el-table--enable-row-hover,
        // .el-table__body tr:hover > td {
        //     background-color: white;
        // }
    }
</style>