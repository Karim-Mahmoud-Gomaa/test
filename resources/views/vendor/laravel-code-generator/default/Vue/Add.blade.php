<template>
    <!--begin::Modal-->  
    <div class="modal fade" id="formModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <form @submit.prevent="form.id ? update() : store()" class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="formModalLabel" >{{ CodeHelper::doubleCurlyOpen()}}form.id ?$t('general.update'):$t('general.create'){{CodeHelper::doubleCurlyClose() }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    </button>
                </div>
                <div class="modal-body row">
                    @foreach ($model->table->columns as $column) 
                    @if(str_contains($column->name,'_id')&&!in_array($column->name,['user_id']))
                    <div class="col-12 mt-3" v-if="{{Str::plural(str_replace("_id","",$column->name))}}&&{{Str::plural(str_replace("_id","",$column->name))}}.length" >
                        <label>{{ CodeHelper::doubleCurlyOpen()}}$t('title.{{str_replace("_id","",$column->name)}}'){{CodeHelper::doubleCurlyClose() }}</label>
                        <v-select dir="rtl" label="name" class="vselect" style="width: 100%;"
                        :options="{{Str::plural(str_replace("_id","",$column->name))}}" :reduce="val => val.id" v-model="form.{{$column->name}}"></v-select> 
                    </div> 
                    @endif
                    @endforeach
                    @foreach ($model->table->columns as $column) 
                    @if(!in_array($column->name,['id','created_at','updated_at','deleted_at','user_id'])&&!str_contains($column->name,'_id'))
                        <div class="col-12 mt-3">
                            <label>{{ CodeHelper::doubleCurlyOpen()}}$t('inf.{{$column->name}}'){{CodeHelper::doubleCurlyClose() }}</label>
                            <input v-model="form.{{$column->name}}" type="text" autocomplete="off"
                            class="form-control" :class="{ 'is-invalid': form.errors.has('{{$column->name}}') }">
                            <has-error :form="form" field="{{$column->name}}"></has-error>
                        </div> 
                    @endif
                    @endforeach
                    
                </div> 
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal" >{{ CodeHelper::doubleCurlyOpen()}}$t("general.close"){{CodeHelper::doubleCurlyClose() }}</button>
                    <button v-if="form.id" type="submit" class="btn btn-primary" >{{ CodeHelper::doubleCurlyOpen()}}$t('inf.status'){{CodeHelper::doubleCurlyClose() }}</button>
                    <button v-else type="submit" class="btn btn-primary" >{{ CodeHelper::doubleCurlyOpen()}}$t("general.save"){{CodeHelper::doubleCurlyClose() }}</button>
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
            form: new Form({id:null,
            @foreach ($model->table->columns as $column) 
            @if(!in_array($column->name,['id','created_at','updated_at','deleted_at','user_id']))
                {{$column->name}}:null,
            @endif
            @endforeach
            }),
            @foreach ($model->table->columns as $column) 
            @if(str_contains($column->name,'_id')&&!in_array($column->name,['user_id']))
                {{Str::plural(str_replace("_id","",$column->name))}}:null,
            @endif
            @endforeach
        };
    }, 
    created() {
        this.getInfo();
    },
    methods: {
        create(){
            this.form.reset();
            $('#formModal').modal('show');
        },
        getInfo(){ 
            @foreach ($model->table->columns as $column) 
            @if(str_contains($column->name,'_id')&&!in_array($column->name,['user_id']))
            axios.get("/api/{{Str::plural(str_replace("_id","",$column->name))}}",{params: {paginate:0} }).then(({data}) => {
                this.{{Str::plural(str_replace("_id","",$column->name))}}=data.success.{{Str::plural(str_replace("_id","",$column->name))}};
            }).catch((error) => {console.log("Error......")})
            @endif
            @endforeach
        },  
        store(){ 
            this.form.post("/api/{{CodeHelper::plural(CodeHelper::snake($model->name))}}").then(({data}) => {
                if (data.message) {
                    this.$swal.fire({icon: 'error',title: "Error Message",text: data.message+'!'});
                }else {
                    this.fetchData();
                    $('#formModal').modal('hide');
                }
            }).catch((error) => {console.log("Error......")})
        },  
        edit(form){ 
            this.form.fill(form);
            $('#formModal').modal('show');
        },
        update(){
            this.form.put("/api/{{CodeHelper::plural(CodeHelper::snake($model->name))}}/"+this.form.id).then((res) => {
                this.fetchData();
                $('#formModal').modal('hide');
            }).catch((error) => {console.log("Error......")})
        },  
        destroy(id) {
            this.$swal.fire({
                title:this.$t("general.warning"),text:this.$t("general.r_u_s"),
                icon: 'warning',showCancelButton: true,confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',cancelButtonText: this.$t("general.cancel"),
                confirmButtonText: this.$t("general.yes_delete"),
            }).then((result) => {
                if (result.value) {
                    axios.delete('/api/{{CodeHelper::plural(CodeHelper::snake($model->name))}}/'+id).then(response => {
                        if(response.data.message){
                            this.$swal.fire({icon: 'error',title: 'Oops...',text: response.data.message+'!'});
                        }else{
                            this.$swal.fire(this.$t("general.deleted"),this.$t("general.delete_success"),'success');
                            this.fetchData();
                        }
                    }).catch(() => {
                        this.$swal.fire({icon: 'error',title: 'Oops...',text: 'Something went wrong!'}); 
                    });
                }
            })
        },
    },
}
</script>
