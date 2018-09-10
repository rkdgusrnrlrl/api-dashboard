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
            url : "URL",
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
