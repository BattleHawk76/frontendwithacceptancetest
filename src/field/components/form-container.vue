<template>
    <el-form ref="form" :model="model" :rules="rules" :show-message="showMessage">
        <slot></slot>
    </el-form>
</template>


<script>
    import {formRulesMixin} from '../common/mixinComponent';
    export default {
        mixins: [formRulesMixin],
        computed: {
            showMessage() {
                return !this._readonly
            },
            validate() {
                return new Promise((resolve, reject) => {
                    this.$refs.form.validate((valid) => {
                        if (valid) {
                            resolve(true);
                        } else {
                            reject(false);
                            return false;
                        }
                    });
                });
            }
        },
        methods: {
            Validate(func) {
                this.$refs.form.Validate(func);
            },
            validateField(func) {
                this.$refs.form.validateField(func);
            },
            resetFields() {
                this.$refs.form.resetFields();
            },
            clearValidate(func) {
                this.$refs.form.clearValidate(func);
            },
            // 同时传 params和data
            postValidate(func,params,data, sCallback) {
                 this.validate.then(() => {
                     let nPramas = JSON.parse(JSON.stringify(params)),
                        nData = JSON.parse(JSON.stringify(data));
                    func(nPramas,nData).then(res => {
                        sCallback(true, res)
                    }).catch(err => {
                        this.$message.error(err.response.data.message)
                    })
                }).catch(error => {
                    console.log("未通过检测");
                    this.$message.error("未通过检测")
                })
            },
            restValidate(func, variables, sCallback) {
                this.validate.then(() => {
                    let data = JSON.parse(JSON.stringify(variables));
                    func(data).then(res => {
                        sCallback(true)
                    }).catch(err => {
                        this.$message.error(err.response.data.message)
                    })
                }).catch(error => {
                    console.log("未通过检测");
                    this.$message.error("未通过检测")
                })
            },
            ajaxValidate(config,sCallback,errorBack) {
                this.validate.then(() => {
                    try {
                        this.requestFunction(config,sCallback,errorBack)
                    } catch (error) {
                        console.error(error);   //语法问题检测
                        this.$message.error(`${error}`);
                    }
                }).catch((error) => {
                    console.log('未通过检验');   //未通过客户端的表单验证
                    this.$message.error('未通过检验');
                });
            },





            axiosData(a) {
                this.validate.then(() => {
                    a
                }).catch((error) => {
                    console.log('未通过检验');   //未通过客户端的表单验证
                    this.$message.error('未通过检验');
                });
            }

        },
        props: {
            _readonly: {
                type: Boolean,
                default: false
            },
            model: {
                type: Object,
                default: () => {
                    return {}
                }
            },
            rules: null
        }
    }
</script>
