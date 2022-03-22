<template>
  <layout-default>
    <div class="page-content">
        <div class="container-fluid">

            <!-- start page title -->
            <div class="row">
                <div class="col-12">
                    <div class="page-title-box d-flex align-items-center justify-content-between">
                        <h4 class="mb-0">Home Page</h4>
                    </div>
                </div>
            </div>
            <!-- end page title -->

            <div class="row">
                <div class="col-md-4 col-xl-4">
                    <div class="card">
                        <div class="card-body">
                            <div class="float-end mt-2">
                                <i class="far fa-chart-bar fa-2x text-primary"></i>
                            </div>
                            <div>
                                <h4 class="mb-1 mt-1">
                                    <ICountUp :delay="1000" :endVal="users" :options="{decimalPlaces:0}"/>
                                </h4>
                                <p class="text-muted mb-0">Users</p>
                            </div>
                        </div>
                    </div>
                </div> 
                <div class="col-md-4 col-xl-4">
                    <div class="card">
                        <div class="card-body">
                            <div class="float-end mt-2">
                                <i class="far fa-chart-bar fa-2x text-primary"></i>
                            </div>
                            <div>
                                <h4 class="mb-1 mt-1">
                                    <ICountUp :delay="1000" :endVal="categories" :options="{decimalPlaces:0}"/>
                                </h4>
                                <p class="text-muted mb-0">Categories</p>
                            </div>
                        </div>
                    </div>
                </div> 
                <div class="col-md-4 col-xl-4">
                    <div class="card">
                        <div class="card-body">
                            <div class="float-end mt-2">
                                <i class="far fa-chart-bar fa-2x text-primary"></i>
                            </div>
                            <div>
                                <h4 class="mb-1 mt-1">
                                    <ICountUp :delay="1000" :endVal="articles" :options="{decimalPlaces:0}"/>
                                </h4>
                                <p class="text-muted mb-0">Articles</p>
                            </div>
                        </div>
                    </div>
                </div> 
            </div> <!-- end row-->
        </div> <!-- container-fluid -->
    </div>
  </layout-default>
</template>  


<script>
import LayoutDefault from '../layouts/App';
import axios from 'axios';
import ICountUp from 'vue-countup-v2';

export default {
  components: {LayoutDefault,ICountUp},
  data() {
      return {
        users:0,
        categories:0,
        articles:0,
      }
    },  
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios.get('/api/home').then(({data}) => {
        this.categories=data.success.categories;
        this.articles=data.success.articles;
        this.users=data.success.users;
      });  
    },
  },
}
</script>
