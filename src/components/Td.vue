<script>
    export default {
        name: "Td",
        props : [
            'columnName',
            'value',
        ],
        render : function (createElement) {
            const columnName = this.$props.columnName
            let value = this.$props.value

            if (columnName === 'Status') {
                const thisClass = value === 'SUCCESS' ? 'tertiary' : 'secondary'
                value = createElement('mark', {class : thisClass}, [value])
            }

            return createElement(
                'td',
                { },
                [
                    value
                ]
            )
        }

    }
</script>

<style scoped>

</style>