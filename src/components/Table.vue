<template>
    <table>
        <caption>Application1 의 API 목록</caption>
        <thead>
        <tr>
            <th v-for="rowCol in columes">{{ rowCol }}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="d in data">
            <Td v-for="(rawCol, col) in columes" :columnName="rawCol" :value="d[col]"/>
        </tr>
        </tbody>
    </table>
</template>

<script>
    import Td from './Td'
    export default {
        name: "Table",
        components : {
            Td
        },
        props : {
            columes: Object,
            data : Array
        }
    }
</script>

<style scoped>
    table td {
        text-align: left;
    }
</style>