<template>
    <div>
        <order-header />
        <router-view />
        <Order-footer />
    </div>
</template>

<script>
    import OrderHeader from '../components/orderHeader'
    import OrderFooter from '../components/orderFooter'
    export default {
        name: "order",
        components:{
            OrderHeader,
            OrderFooter
        }
    }
</script>

<style scoped>

</style>