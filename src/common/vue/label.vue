<template>
    <div class="label">
        <div v-if="tableFlag">
            <field-table :list="list" :labelList="table.labelList"
                         :tableAction="table.tableAction" @sortChange="sortChange"  :pageInfo="paginator" @tableCurrentPageChanged="changePage" @clickTableCloum="clickTableCloum" style="width: 100%">
            </field-table>
        </div>
    </div>
</template>

<script>
    import {formRulesMixin} from 'field/common/mixinTableRecord';
    export default {
        name: "labels",
        data(){
            return{
                param:this.table.graphqlTable.graphqlKey,
                list:[],
                nameLike:''
            }
        },
        mixins: [formRulesMixin],
        props:{
            table:{
                type:Object
            },
            tableFlag:{
                type:Boolean,
                default:true
            }
        },
        watch:{
          'table.graphqlTable.graphqlApi':{
              deep:true,
              handler() {
                 this.refetch();
              }
          },
            'table.namelike':{
                deep:true,
                handler(newVal,oldVal) {
                    this.nameLike=newVal;
                }
            }

        },
        created(){
            this.refetch()
        },
        methods:{
            sortChange(data){
             this.$emit('sortCondition',data)
            },
            clickTableCloum(data){
                this.$emit('clickTable',data);
            },
            refetch(){
               
            },
        }
    }
</script>

<style scoped>
    .label{
        width: 100%;
    }
</style>