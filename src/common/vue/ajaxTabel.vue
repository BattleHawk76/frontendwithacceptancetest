<template>
    <div class="label">
        <div>
            <field-table :list="list" :labelList="table.labelList"
                         :tableAction="table.tableAction" :align="table.align" :pageInfo="paginator" @tableCurrentPageChanged="changePage"
                         @clickTableCloum="clickTableCloum" style="width: 100%" :height="table.height">
            </field-table>
        </div>
    </div>
</template>

<script>
    import {baseURL,baseBURL} from "../../api/config";
    import request from 'common/js/request'

    export default {
        name: "tabels",
        data() {
            return {
                list: [],
                paginator: {
                    page: 1,
                    totalPages: 10,
                    size: 10
                }
            }
        },
        props: {
            table: {
                type: Object
            },
            tableFlag: {
                type: Boolean,
                default: true
            },
            otherParams: {
                type: Boolean,
                default: false
            },
            typeUrl: {
                type: String,
                default: 'normal'
            },
        },
        watch: {
            'table.search': {
                deep: true,
                handler(newVal, oldVal) {
                    if (this.paginator.page != 1) {
                        this.paginator.page = 1
                    } else {
                        this.getList()
                    }
                }
            },
            'table.params': {
                deep: true,
                handler(newVal, oldVal) {
                    this.getList()
                }
            },
            'paginator.page': {
                deep: true,
                handler(newVal, oldVal) {
                    this.getList()
                }
            },

        },
        mounted() {
            if (this.table.flag) {
            } else {
                this.getList()
            }
        },
        methods: {
            refetch(){
               this.getList()
            },
            getList() {
                let url = '';
                let paramskey = {};
                if (this.typeUrl === 'normal') {
                    url=baseURL + this.table.url;
                    paramskey = {
                        page: this.paginator.page,
                        size: this.paginator.size,
                        direction: "DESC",
                        properties: "updateTime"
                    };
                } else {
                    paramskey = {page: this.paginator.page, size: this.paginator.size};
                    url=baseBURL + this.table.url
                }
                if(this.table.search!==''){
                    paramskey={...paramskey,search:this.table.search}
                }

                let params = {};
                if (this.otherParams) {
                    params = {...paramskey, ...this.table.params};
                } else {
                    params = {...paramskey};
                }
                request({
                    method: 'get',
                    url: url,
                    params: params
                }).then(res => {
                    this.list = [];
                    this.list = res.content;
                    this.paginator.totalPages = res.totalPages
                })
            },
            changePage(data) {
                this.paginator.page = data;
            },
            clickTableCloum(data) {
                this.$emit('clickTable', data);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .label {
        width: 100%;

        ::-webkit-scrollbar-track-piece {
            background: #d3dce6;
        }

        ::-webkit-scrollbar {
            width: 6px;
        }

        ::-webkit-scrollbar-thumb {
            background: rgba(47, 47, 118, 0.37);
            border-radius: 20px;
        }
    }
</style>