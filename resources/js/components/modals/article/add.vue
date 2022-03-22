<template>
    <!--begin::Modal-->
    <div id="exampleModalFullscreen" class="modal fade" tabindex="-1" aria-labelledby="#exampleModalFullscreenLabel" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalFullscreenLabel">{{form.title}}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-3">
                            <img :src="'/assets/images/articles/'+form.image" alt="Photo of sunset" style="width: 100%;">
                        </div>
                        <div class="col-md-9" v-html="form.content"></div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light waves-effect" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
    <!--end::Modal-->
</template>
<script>
import axios from 'axios';
import { Form, HasError } from 'vform'
export default {
    props: ['fetchData'],
    components: { HasError },
    data() {
        return {
            form: new Form({
                id:null,category:null,title:null,
                image:null,content:null,
            }),
        };
    },
    methods: {
        show(form) {
            this.form.fill(form);
            $('#exampleModalFullscreen').modal('show');
        },
        destroy(id) {
            this.$swal.fire({
                title:'warning',text:'Are you sure you want to remove this row?',
                icon: 'warning',showCancelButton: true,confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',cancelButtonText: 'cancel',
                confirmButtonText: 'Yes,Delete It!',
            }).then((result) => {
                if (result.value) {
                    axios.delete('/api/articles/'+id).then(response => {
                        if(response.data.message){
                            this.$swal.fire({icon: 'error',title: 'Oops...',text: response.data.message+'!',
                                footer: '<a href>Why do I have this issue?</a>'
                            });
                        }else{
                            this.$swal.fire('Deleted!','Successfully Deleted','success');
                            this.fetchData();
                        }
                    }).catch(() => {
                        this.$swal.fire({icon: 'error',title: 'Oops...',text: 'Something went wrong!',
                            footer: '<a href>Why do I have this issue?</a>'
                        }); 
                    });
                }
            })
        },
    },
}
</script>
