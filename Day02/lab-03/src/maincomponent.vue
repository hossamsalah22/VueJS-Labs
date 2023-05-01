<template>

    <div class="container">
        <headercomponent/>
        <div class="row align-center">
            <div class="col-2">
                <sidecomponent/>
            </div>
            <div class="col-10">
                <contentcomponent/>
            </div>
        </div>
        <footercomponent/>
    </div>

</template>

<script>
import headercomponent from "@/components/headercomponent.vue";
import footercomponent from "@/components/footercomponent.vue";
import sidecomponent from "@/components/sidecomponent.vue";
import contentcomponent from "@/components/contentcomponent.vue";

export default {
    name: "maincomponent",
    components: {
        headercomponent,
        footercomponent,
        sidecomponent,
        contentcomponent
    }
}
</script>

<style scoped>

</style>