<template>
  <layout-default>
    <div class="page-content">
        <div class="container-fluid">

            <!-- start page title -->
            <div class="row">
                <div class="col-12">
                    <div class="page-title-box d-flex align-items-center justify-content-between">
                        <h4 class="mb-0">Edit Article</h4>
                        <category-Modal ref="CategoryModal" :fetchData="fetchData"/>
                        <div class="page-title-right">
                            <a href="javascript:;" @click="saveOrder()" class="btn btn-success w-md waves-effect waves-light">Update</a>
                      </div>
                    </div>
                </div>
            </div>
            <!-- end page title -->

            <div class="row">
                <div class="col-lg-12">
                    <div class="card mb-5">
                        <div class="tab-content p-4">
                            <div class="tab-pane active" id="info" role="tabpanel">
                                <div class="card-body" style="margin: 20px;min-height: 600px;">
                                    <div class="invoice-title row">
                                        <h4 class="font-size-20" style="font-weight: bold;">عام</h4>
                                       
                                        <div class="col-md-9">
                                            <h4 class="font-size-16" style="text-align:center;">
                                                Title
                                                <div class="mt-4">
                                                    <input v-model="form.title" type="text" class="form-control">
                                                </div>
                                            </h4>
                                        </div>                                       
                                        <div class="col-md-3">
                                            <h4 class="font-size-16" style="text-align:center;">
                                                Category
                                                <div class="mt-4" v-if="categories&&categories.length">
                                                    <v-select :clearable="true" dir="rtl" label="name" class="vselect" style="width: 100%;"
                                                    :options="categories" :reduce="val => val.id" v-model="form.category_id" ></v-select> 
                                                </div>
                                            </h4>
                                        </div>                                       
                                       
                                        
                                        <!-- /////////////////////////////////////////////// -->
                                        <hr>
                                        <div class="col-md-4">
                                            <h4 class="font-size-16" style="text-align:center;">
                                                Article Image
                                                <div class="mt-4">
                                                    <a href="javascript:;" @click="$refs.image.click()" class="btn btn-info btn-sm">Upload Image</a>
                                                    <a href="javascript:;" v-if="image" @click="onFileRemove()" class="btn btn-danger btn-sm"><i class="far fa-trash-alt"></i></a>
                                                    <input @change="onFileChange($event)" ref="image" type="file" class="hidden" accept="image/*">
                                                </div>
                                            </h4>
                                            <img v-if="image" class="img-thumbnail" alt="200x200" width="100%" :src="image" data-holder-rendered="true">
                                        </div>
                                        <div class="col-md-8">
                                            <vue-editor v-model="form.content"></vue-editor>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end row -->
            
        </div> <!-- container-fluid -->
    </div>
  </layout-default>
</template>  


<script>
import LayoutDefault from '../../layouts/App';
import axios from 'axios';
import {Form,HasError} from 'vform'
import { VueEditor } from "vue2-editor";
import CategoryModal from '../../components/modals/category/add';


export default {
  components: {LayoutDefault,HasError,CategoryModal,VueEditor},
  data() {
        return {
            form: new Form({id:null,title:null,category_id:null,image:null,content:null}),
            categories:[],
            loader:false,
            image:null,
        }
    },
    created() { 
        this.fetchData();
    },
    methods: {
        onFileRemove() {
            this.form.image=null;this.image=null
        },
        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (files.length){
                var file=URL.createObjectURL(files[0])
                this.form.image=files[0]
                this.image=file
            }
        },
        async fetchData() {
            await axios.get('/api/articles/'+this.$route.params.article_id+'/edit').then(({data}) => {
                this.categories=data.success.categories;
                this.image='/assets/images/articles/'+data.success.article.image
                this.form.fill(data.success.article);
                this.form.image=null
            });
        },
       
        async saveOrder() {
            await  this.form.put('/api/articles/'+this.$route.params.article_id).then(({data}) => {
                if(this.form.image){
                    let fd = new FormData();
                    fd.append("article_id", this.$route.params.article_id);
                    fd.append("image", this.form.image);
                    axios.post('/api/articles_image', fd, {
                        headers: {
                        'Content-Type': 'multipart/form-data'
                        }
                    })
                }
                this.$router.push({ name: "articles"})
            })
        },
    },
}
</script>
