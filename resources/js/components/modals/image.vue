<template>
    <!--begin::Modal-->
    <div id="ImageModal" class="modal fade bs-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <form @submit.prevent="form.id ? update() : store()" class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" :class="`font-${$i18n.locale}`">Show Image</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    </button>
                </div>
                <div class="modal-body row">
                    <img  :src="url" >                      
                </div> 
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal" :class="`font-${$i18n.locale}`">{{ $t("modals.general.close") }}</button>
                </div>
            </form>
        </div>
    </div>
    <!--end::Modal-->
</template>

<script>
export default {
    data() {
        return {
            url: null,
        };
    }, 
    methods: {
        show(url){ 
            if(url){
                this.url=url;
                $('#ImageModal').modal('show');
            }
        },
    },
}
</script>

<style scoped lang="scss">
    

</style>