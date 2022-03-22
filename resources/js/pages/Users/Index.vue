<template>
  <layout-default>
    <div class="page-content">
      <div class="container-fluid">

          <!-- start page title -->
          <div class="row">
              <div class="col-12">
                  <div class="page-title-box d-flex align-items-center justify-content-between">
                      <h4 class="mb-0">Users Table</h4>
                      <div class="page-title-right">
                          <button type="button" @click="$refs.FormModal.create()" class="btn btn-success waves-effect waves-light">
                              + Create New
                          </button>
                          <form-modal ref="FormModal" :fetchData="fetchData"/>
                      </div>

                  </div>
              </div>
          </div>
          <!-- end page title -->
          
          <div class="row">
              <div class="col-12">
                  <div class="card">
                      <div v-if="users&&users.data.length" class="card-body">
                          <table id="datatable" class="table table-bordered dt-responsive nowrap" style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                              <thead>
                              <tr>
                                  <th>Name</th>
                                  <th>Email</th>
                                  <th>Articles</th>
                                  <th>Created At</th>
                                  <th>Options</th>
                              </tr>
                              </thead>
                              <tbody>
                              <tr v-for="(user,index) in users.data">
                                  <td>{{user.name}}</td>
                                  <td>{{user.email}}</td>
                                  <td>
                                    <p style="float:left;" class="me-2">Article(s) </p> {{user.articles_count}} 
                                  </td>
                                  <td>{{user.created_at| moment("DD/MM/YYYY")}}</td>
                                  <td>
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                          More <i class="mdi mdi-chevron-down"></i>
                                        </button>
                                        <div class="dropdown-menu" style="min-width: 120px;">
                                            <a @click="$refs.FormModal.edit(user)" class="dropdown-item dropdownItem" href="javascript:;">
                                              <i class="far fa-edit"></i> Edit
                                            </a>
                                             <a v-if="my_user&&my_user.id!=user.id" @click="$refs.FormModal.destroy(user.id)"  class="dropdown-item dropdownItem" href="javascript:;">
                                              <i class="far fa-trash-alt"></i> Delete
                                            </a>
                                        </div>
                                    </div>
                                  </td>
                              </tr>
                              </tbody>
                          </table>
                          <pagination-nav v-if="users.last_page>1" :pageSize="users.last_page" :currentPage="users.current_page" :GoToPage="fetchData" :loading="loader" />
                      </div>
                      <div v-else class="card-body">
                          <beat-loader v-if="loader" :loading="loader" color="#5578eb"></beat-loader>
                          <p v-else class="card-title-desc" style="text-align: center;">
                            You Don't Have Any Users Yet..
                          </p>
                      </div>
                  </div>
              </div> <!-- end col -->
          </div> <!-- end row -->
      </div> <!-- container-fluid -->
    </div>
  </layout-default>
</template>  


<script>
import LayoutDefault from '../../layouts/App';
import PaginationNav from '../../components/pagination';
import FormModal from '../../components/modals/user/add';
import { mapGetters } from "vuex";
import axios from 'axios';

export default {
  computed: {...mapGetters({my_user: "auth/user"})},
  components: {LayoutDefault,PaginationNav,FormModal},
  data() {
      return {users:null,loader:false} 
    },  
  created() {
    this.fetchData();
  },
  methods: {
    fetchData(num=1) {
      this.users=null;
      this.loader=true;
      let data = {params: {page:num}};
      axios.get('/api/users',data).then(({data}) => {
          this.users=data.success.users;
          if(!data.success.users.data.length&&num!=1){
              this.fetchData(1)
          }           
          this.loader=false;
      });  
    },
  },
}
</script>