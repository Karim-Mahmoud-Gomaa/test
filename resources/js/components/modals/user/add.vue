<template>
    <!--begin::Modal-->  
    <div class="modal fade" id="userModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <form @submit.prevent="form.id ? update() : store()" class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="formModalLabel" >{{ form.id ? 'Update':'Create' }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    </button>
                </div>
                <div class="modal-body row"> 
                    <div class="col-6 mt-3">
                        <label >Name</label>
                        <input v-model="form.name" type="text" autocomplete="off"
                        class="form-control" :class="{ 'is-invalid': form.errors.has('name') }">
                        <has-error :form="form" field="name"></has-error>
                    </div> 
                    <div class="col-6 mt-3">
                        <label >Email</label>
                        <input v-model="form.email" type="text" autocomplete="off"
                        class="form-control" :class="{ 'is-invalid': form.errors.has('email') }">
                        <has-error :form="form" field="email"></has-error>
                    </div> 
                    <div class="col-6 mt-3">
                        <label >Password</label>
                        <input v-model="form.password" type="password" autocomplete="off"
                        class="form-control" :class="{ 'is-invalid': form.errors.has('password') }">
                        <has-error :form="form" field="password"></has-error>
                    </div> 
                    <div class="col-6 mt-3">
                        <label >Password Confirmation</label>
                        <input v-model="form.password_confirmation" type="password" autocomplete="off"
                        class="form-control" :class="{ 'is-invalid': form.errors.has('password_confirmation') }">
                        <has-error :form="form" field="password_confirmation"></has-error>
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
            form: new Form({id:null,name:null,email:null,password:null,password_confirmation:null}),
        };
    }, 
    methods: {
        create(user_id){
            this.form.reset();
            $('#userModal').modal('show');
        },
        store(){ 
            this.form.post("/api/users").then(({data}) => {
                if (data.message) {
                    this.$swal.fire({icon: 'error',title: data.company.name,text: data.message+'!',
                        footer: '<a href>Why do I have this issue?</a>'
                    });
                } else {
                    this.fetchData();
                    $('#userModal').modal('hide');
                }
            }).catch((error) => {console.log("Error......")})
        },  
        edit(form){ 
            this.form.reset();
            this.form.fill(form);
            $('#userModal').modal('show');
        },
        update(){
            this.form.put("/api/users/"+this.form.id).then(({data}) => {
                this.fetchData();
                $('#userModal').modal('hide');
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
                    axios.delete('/api/users/'+id).then(response => {
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
