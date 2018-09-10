<template>
    <table>
        <caption>Application1</caption>
        <thead>
        <tr>
            <th v-for="rowCol in columes">{{ rowCol }}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="d in data">
            <td v-for="(rawCol, col) in columes" data-label="Name">{{d[col]}}</td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        name: "Table",
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