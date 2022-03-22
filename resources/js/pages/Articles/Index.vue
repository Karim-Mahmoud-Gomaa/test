<template>
    <layout-default>
        <div class="page-content">
            <div class="container-fluid">
                <!-- start page title -->
                <div class="row">
                    <div class="col-12">
                        <div class="page-title-box d-flex align-items-center justify-content-between">
                            <h4 class="mb-0">Articles Table</h4>
                            <div class="page-title-right">
                                <router-link :to="{name:'create_articles'}" tag="button" class="btn btn-success waves-effect waves-light">
                                    + Create New
                                </router-link>
                                <form-modal ref="FormModal" :fetchData="fetchData" />
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end page title -->
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div v-if="articles&&articles.data.length" class="card-body">
                                <table id="datatable" class="table table-bordered dt-responsive nowrap" style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                                    <thead>
                                        <tr>
                                            <th>Category</th>
                                            <th>Title</th>
                                            <th>Views</th>
                                            <th>Created By</th>
                                            <th>Created At</th>
                                            <th>Options</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(article,index) in articles.data">
                                            <td>{{article.category.name}}</td>
                                            <td>{{article.title}}</td>
                                            <td>{{article.views}}</td>
                                            <td>{{article.user.name}}</td>
                                            <td>{{article.created_at| moment("DD/MM/YYYY")}}</td>
                                            <td>
                                                <div class="btn-group">
                                                    <button type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            More <i class="mdi mdi-chevron-down"></i>
                                                        </button>
                                                    <div class="dropdown-menu" style="min-width: 120px;">
                                                        <a @click="$refs.FormModal.show(article)" class="dropdown-item dropdownItem" href="javascript:;">
                                                            <i class="far fa-eye"></i> Show
                                                        </a>
                                                        <router-link :to="{name:'edit_articles',params:{article_id:article.id}}" tag="a" class="dropdown-item dropdownItem">
                                                            <i class="far fa-edit"></i> Edit
                                                        </router-link>
                                                        <a @click="$refs.FormModal.destroy(article.id)" class="dropdown-item dropdownItem" href="javascript:;">
                                                            <i class="far fa-trash-alt"></i> Delete
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <pagination-nav v-if="articles.last_page>1" :pageSize="articles.last_page" :currentPage="articles.current_page" :GoToPage="fetchData" :loading="loader" />
                            </div>
                            <div v-else class="card-body">
                                <beat-loader v-if="loader" :loading="loader" color="#5578eb"></beat-loader>
                                <p v-else class="card-title-desc" style="text-align: center;">
                                    You Don't Have Any Articles Yet..
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- end col -->
                </div>
                <!-- end row -->
            </div>
            <!-- container-fluid -->
        </div>
    </layout-default>
</template>
<script>
import LayoutDefault from '../../layouts/App';
import PaginationNav from '../../components/pagination';
import FormModal from '../../components/modals/article/add';
import axios from 'axios';
export default {
    components: { LayoutDefault, PaginationNav, FormModal },
    data() {
        return { articles: null, loader: false }
    },
    created() {
        this.fetchData();
    },
    methods: {
        fetchData(num = 1) {
            this.articles = null;
            this.loader = true;
            let data = { params: { page: num } };
            axios.get('/api/articles', data).then(({ data }) => {
                this.articles = data.success.articles;
                if (!data.success.articles.data.length && num != 1) {
                    this.fetchData(1)
                }
                this.loader = false;
            });
        },
    },
}
</script>