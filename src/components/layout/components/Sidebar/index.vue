<template>
    <div>
        <topInfo v-if="!isCollapse" class="topInfo"></topInfo>
        <el-scrollbar wrapClass="scrollbar-wrapper">
            <div :class="{'menu': true, 'collapse': !isCollapse}">
                <el-menu
                        mode="vertical"
                        :show-timeout="200"
                        :default-active="$route.path"
                        :collapse="isCollapse"
                        background-color="#f9f9f9"
                        text-color="#707070">
                    <sidebar-item :routes="matchRouters"></sidebar-item>
                </el-menu>
            </div>
        </el-scrollbar>
    </div>


</template>

<script>
    import {mapGetters} from 'vuex'
    import SidebarItem from './SidebarItem'
    import topInfo from './personal'
    import {killProcessSync} from "common/js/rfidReader"

    export default {
        components: {SidebarItem, topInfo},
        methods: {
            windowClose() {
                killProcessSync();
                window.close();
            },
        },
        computed: {
            ...mapGetters([
                'matchRouters',
                'sidebar'
            ]),
            routes() {
                return this.$router.options.routes
            },
            isCollapse() {
                return !this.sidebar.opened
            }
        }
    }
</script>
