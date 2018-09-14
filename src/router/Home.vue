<template>
    <div id="home">
        <Table :columes="columes" :data="statusList"/>
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
        methods : {
            initData() {
                this.$http.get('http://127.0.0.1:8000/api/applications/1/apis/')
                    .then((data) => {
                        const statusList = data.data
                        const apiStatusList = _.map(statusList, (api) => {
                            return _.assign(api, {status : api.last_status.status})
                        })
                        this.statusList = apiStatusList
                    })
            }
        }
    }
</script>

<style>

</style>
