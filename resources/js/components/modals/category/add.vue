<template>
    <!--begin::Modal-->  
    <div class="modal fade" id="categoryModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <form @submit.prevent="form.id ? update() : store()" class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="formModalLabel" >{{ form.id ? 'Update':'Create' }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    </button>
                </div>
                <div class="modal-body row">
                    <div class="col-12 mt-3">
                        <label >Name</label>
                        <input v-model="form.name" type="text" autocomplete="off"
                        class="form-control" :class="{ 'is-invalid': form.errors.has('name') }">
                        <has-error :form="form" field="name"></has-error>
                    </div> 
                </div> 
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal" >Cancel</button>
                    <button v-if="form.id" type="submit" class="btn btn-primary" >Update</button>
                    <button v-else type="submit" class="btn btn-primary" >Create</button>
                </div>
            </form>
        </div>
    </div>
    <!--end::Modal-->
</template>

<script>
import {Form,HasError} from 'vform'
import axios from 'axios';
import "vue-select/dist/vue-select.css";


export default {
    components: {HasError},
    props: ['fetchData'],
    data() {
        return {
            form: new Form({id:null,name:null}),
            parents: [],
        };
    }, 
    methods: {
        create(product_id){
            this.form.reset();
            $('#categoryModal').modal('show');
        },
        store(){ 
            this.form.post("/api/categories").then(({data}) => {
                if (data.message) {
                    this.$swal.fire({icon: 'error',title: data.company.name,text: data.message+'!',
                        footer: '<a href>Why do I have this issue?</a>'
                    });
                } else {
                    this.fetchData();
                    $('#categoryModal').modal('hide');
                }
            }).catch((error) => {console.log("Error......")})
        },  
        edit(form){ 
            this.form.fill(form);
            $('#categoryModal').modal('show');
        },
        update(){
            this.form.put("/api/categories/"+this.form.id).then((res) => {
                this.fetchData();
                $('#categoryModal').modal('hide');
            }).catch((error) => {console.log("Error......")})
        },  
        destroy(id) {
             this.$swal.fire({
                title:'warning',text:'Are you sure you want to remove this row?',
                icon: 'warning',showCancelButton: true,confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',cancelButtonText: 'cancel',
                confirmButtonText: 'Yes,Delete It!',
            }).then((result) => {
                if (result.value) {
                    axios.delete('/api/categories/'+id).then(response => {
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

<style scoped >
    .imagePreviewWrapper {
        max-width: 100%;
        border: 1px solid #ced4da;
        border-radius: 20px;
        height: 250px;
        display: block;
        cursor: pointer;
        margin: 0 auto;
    }
    .file-input {
        text-align: center;
    }
    .file-input__input {
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        z-index: -1;
    }
    .file-input__label {
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 600;
        color: #fff;
        background-color: #5b73e8;
        border-color: #5b73e8;
        font-size: 14px;
        padding: 10px 12px;
        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
    }
    .file-input__label svg {
        height: 16px;
        margin-right: 4px;
    }
    .dz-remove {
            margin-left: 8px;
    }
    .dz-image img {
        width: auto!important;
    }

</style>