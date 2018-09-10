<template>
    <table>
        <caption>Application1</caption>
        <thead>
        <tr>
            <th>Name</th>
            <th>URL</th>
            <th>Method</th>
            <th>Status</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td data-label="Name">User</td>
            <td data-label="URL">/users</td>
            <td data-label="Method">POST</td>
            <td data-label="Status">SUCCESS</td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        name: "Table"
    }
</script>

<style scoped>
    table td {
        text-align: left;
    }
</style>