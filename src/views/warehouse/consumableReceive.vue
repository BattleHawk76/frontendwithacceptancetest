<template>
 <view-container>
     <div class="consumableReceive-form-body" >
         <div class="process-info">
             <define-input label="单号" :disabled="true"  placeholder="-"></define-input>
             <base-select label="类型" v-model="category" :disabled="this.title=='耗材新增'" :selectList="selectData"></base-select>
             <date-select label="操作时间"  :disabled="true"  placeholder="-"></date-select>
             <entity-input label="操作人员" v-model="operatorInfo" format="{name}" :disabled="true" ></entity-input>
         </div>
         <div class="process-info" style="z-index:-1">
             <define-input label="备注" v-model="order.remark" :column="12"></define-input>
         </div>
         <define-table :showSummary="true" :summaryFunc="sumFunc" :havaPage="false" :data="order.consumableItems" height="3.6042rem" >
             <define-column label="操作" width="100" v-slot="{ data }">
                 <i class="iconfont icontianjia" @click="changeRow(true,data)"></i>
                 <i class="iconfont iconyichu" @click="changeRow(false,data)"></i>
             </define-column>
             <define-column label="耗材名称" v-slot="{ data }">
                 <entity-input v-model="data.row.consumable" format="{name}" :options="{search:'consumableSelect'}"></entity-input>
             </define-column>
             <define-column label="库存数量" field="consumable.count" align="left"></define-column>
             <define-column label="本次领补" v-slot="{ data }">
                 <define-input v-model="data.row.count"></define-input>
             </define-column>
         </define-table>
         <div class="buttom">
             <base-button label="提交" align="right" @click="submit"></base-button>
             <base-button label="返回" align="right" @click="returnBack"></base-button>
         </div>
     </div>
 </view-container>
</template>

<script>
    import baseButton from "@/componentized/buttonBox/baseButton";
    import entityInput from "@/componentized/entity/entityInput";
    import { receiveConsumable, addConsumable } from "api/consumable";
    import dateSelect from '@/componentized/textBox/dateSelect.vue'
    var _ = require("lodash");
    export default {
        name: "consumableReceive",
        data() {
            return {
                order: {
                    consumableItems:[],
                },
                selectData:[{
                    label:"领取",
                    value:"0",
                },{
                    label:"补充",
                    value:"1"
                }],
                title:"耗材领补",
                category:""
            };
        },
        methods: {
            changeRow(state, data) { // 总清单删除
                let temp = JSON.parse(JSON.stringify(this.order.consumableItems));
				if(state) {
					temp.splice(data.$index+1, 0, {name:"",count:"",describes:""});
				} else if(this.order.consumableItems.length>1) {
					temp.splice(data.$index, 1); 
				} else {
                    temp = [{name:"",count:"",describes:""}]
                }
				this.order.consumableItems = temp;
            },
            submit(){
                let temp = []
                let order = JSON.parse(JSON.stringify(this.order))
                for(let i in order.consumableItems){
                    if(JSON.stringify(order.consumableItems[i].consumable) != '{}'){
                        if(order.consumableItems[i].count != ""){
                            let a = {}
                            a.count = order.consumableItems[i].count
                            a.consumableId = order.consumableItems[i].consumable.id
                            a.name = order.consumableItems[i].consumable.name
                            temp.push(a)
                        }
                    }
                }
                order.consumableItems = temp
                receiveConsumable({category:this.category,remark:order.remark},order.consumableItems).then(res=>{
                    this.$router.go(-1);
                })
            },
            returnBack(){
                this.$router.go(-1)
            },
            sumFunc(param) { // 表格合并行计算方法
                let { columns, data } = param, sums = [];
                columns.forEach((colum, index) => {
                    if(index == 0) {
                        sums[index] =  '合计';
                    } else if(index == columns.length-1) {
                        const values = data.map(item => item.count?Number(item.count):0);
                        if(!values.every(value => isNaN(value))) {
                            sums[index] = values.reduce((pre, cur) => !isNaN(cur)?pre+cur:pre);
                        }
                    }  else if(index == columns.length-2) {
                        const values = data.map(item => item.consumable.count?Number(item.consumable.count):0);
                        if(!values.every(value => isNaN(value))) {
                            sums[index] = values.reduce((pre, cur) => !isNaN(cur)?pre+cur:pre);
                        }
                    } else {
                        sums[index] = '';
                    }
                })
                return sums;
            },
        },
        created() {
            this.operatorInfo={
                id:JSON.parse(localStorage.getItem("user")).id,
                name:JSON.parse(localStorage.getItem("user")).name
            }
            this.order.consumableItems = [
                {consumable:{},count:""},
                {consumable:{},count:""},
                {consumable:{},count:""},
                {consumable:{},count:""},
                {consumable:{},count:""},
                {consumable:{},count:""},
                {consumable:{},count:""},
                {consumable:{},count:""},
                {consumable:{},count:""},
            ],
            this.category = ""
        },
        components: {
            baseButton,
            dateSelect,
            entityInput
        },
    };
</script>

<style lang="scss" scoped>
    .consumableReceive-form-container {
        font-size: 16px;
    }
    .consumableReceive-form-top {
        padding: 18px 7px;
        border-bottom: 1px solid #ebeef5;
        overflow: hidden;
    }
    .consumableReceive-form-body {
        padding: 0 7px;
        widows: 100%;
    }
    .process-info {
        padding: 18px 0;
        display: flex;
        justify-content: space-between;
    }
    .buttom {
        height: 72px;
        margin-top: 25px;
        box-shadow:0px 0px 12px rgba(235,238,245,1);
        .sum-equip {
            float: right;
            font-size:20px;
            color: #3F5FE0;
            line-height: 72px;
            margin-right: 72px;
        }
    }
    .consumableReceive-header{
        width: 100%;
        padding-left: 18px;
        padding-right: 35px;
        height: 57px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        color: rgba(112,112,112,1);
        border-bottom: 1px solid rgba(112,112,112, 0.13);
    }
</style>
