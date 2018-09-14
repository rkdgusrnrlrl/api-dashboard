<template>
    <div id="home">
        <Table :title="tableTitle" :columes="columes" :data="statusList"/>
    </div>
</template>

<script>
    import Table from '../components/Table'
    import _  from 'lodash'

    export default {
        name: 'home',
        components: {
            Table
        },
        data() {
            return {
                application : {
                    name : "Appilcation1"
                },
                columes: {
                    name : "Name",
                    full_url : "URL",
                    method : "Method",
                    status : "Status"
                },
                statusList : [
                    {
                        name : "사용자 등록",
                        url : "/user",
                        method : "POST",
                        status : "SUCCESS"
                    }
                ]
            }
        },
        created() {
            this.initData()
        },
        computed : {
            tableTitle : function () {
                return this.application.name + " API 목록"
            }
        },
        methods : {
            initData() {
                Promise.all([
                    this.$http.get('http://127.0.0.1:8000/api/applications/1/'),
                    this.$http.get('http://127.0.0.1:8000/api/applications/1/apis/')
                ]).then(([applicationResp, data]) => {
                    const application = applicationResp.data
                    const statusList = data.data
                    const apiStatusList = _.map(statusList, (api) => {
                        return _.assign(api, {status : api.last_status.status})
                    })
                    this.statusList = apiStatusList
                    this.application = application
                })
            }
        }
    }
</script>

<style>

</style>
