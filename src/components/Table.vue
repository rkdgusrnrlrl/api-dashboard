<template>
    <table :class="tableType">
        <caption>{{ title }}</caption>
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
            type : {
                type : String,
                default : ""
            },
            title : String,
            columes: Object,
            data : Array
        },
        computed : {
            tableType : function () {
                if (this.type == "horizontal") {
                    return {
                        horizontal : true
                    }
                }
                return {}
            }
        }
    }
</script>

<style scoped>
    table td {
        text-align: left;
    }
    table.horizontal thead {
        flex: .2 0 0;
    }
    table.horizontal tbody {
        flex: .8 0 0;
        margin-left: 0;
    }
    table.horizontal th {
        width: auto;
    }
    table.horizontal td {
        width: auto;
    }
</style>