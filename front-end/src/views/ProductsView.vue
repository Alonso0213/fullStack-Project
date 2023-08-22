<template>
    <body>
        <div>
        <cardComp/>
    </div>
    </body>
    
</template>

<script>
import cardComp from '../components/cardComp.vue'

    export default {
        components:{
            cardComp
        }

    }
</script>

<style scoped>
body{
    background-color:rgba(0, 0, 0, 0.913);
}
</style>