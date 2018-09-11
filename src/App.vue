<template>
    <div id="app">
        <Table :columes="columes" :data="statusList"/>
    </div>
</template>

<script>
import Table from './components/Table'


export default {
    name: 'app',
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
                    this.statusList = statusList
                })
        }
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
