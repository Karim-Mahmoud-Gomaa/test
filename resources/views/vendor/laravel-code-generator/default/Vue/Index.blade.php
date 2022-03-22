<template>
    <layout-default>
        <div class="page-content">
            <div class="container-fluid">
                
                <!-- start page title -->
                <div class="row">
                    <div class="col-12">
                        <div class="page-title-box d-flex align-items-center justify-content-between">
                            <h4 class="mb-0">{{CodeHelper::doubleCurlyOpen()}}$t("general.table",[$t("title.{{CodeHelper::plural(CodeHelper::snake($model->name))}}")]){{CodeHelper::doubleCurlyClose()}}</h4>
                            <div class="page-title-right">
                                <button type="button" @click="$refs.FormModal.create()" class="btn btn-success waves-effect waves-light">
                                    + {{CodeHelper::doubleCurlyOpen()}}$t('general.createNew'){{CodeHelper::doubleCurlyClose()}}
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
                            <div v-if="{{CodeHelper::plural(CodeHelper::snake($model->name))}}&&{{CodeHelper::plural(CodeHelper::snake($model->name))}}.data.length" class="card-body">
                                <table id="datatable" class="table table-bordered dt-responsive nowrap" style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                                    <thead>
                                        <tr>
                                            @foreach ($model->table->columns as $column)
                                            @if(!in_array($column->name,['id','updated_at']))
                                            <th>{{ CodeHelper::doubleCurlyOpen()}} $t('{{(str_contains($column->name,'_id'))?'title':'inf'}}.{{str_replace("_id","",$column->name)}}') {{CodeHelper::doubleCurlyClose() }}</th>
                                            @endif
                                            @endforeach
                                            <th>{{ CodeHelper::doubleCurlyOpen()}}$t('general.options'){{CodeHelper::doubleCurlyClose() }}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="({{CodeHelper::snake($model->name)}},index) in {{CodeHelper::plural(CodeHelper::snake($model->name))}}.data">
                                            @foreach ($model->table->columns as $column)
                                            @if(!in_array($column->name,['id','updated_at']))
                                            @if(str_contains($column->name,'_id'))
                                            <td>{{CodeHelper::doubleCurlyOpen()}}{{CodeHelper::snake($model->name)}}.{{str_replace("_id","",$column->name)}}.name{{CodeHelper::doubleCurlyClose()}}</td>
                                            @elseif($column->name=='created_at')
                                            <td>{{CodeHelper::doubleCurlyOpen()}}{{CodeHelper::snake($model->name)}}.created_at| moment("DD/MM/YYYY"){{CodeHelper::doubleCurlyClose()}}</td>
                                            @elseif(in_array($column->type,['Integer','Decimal']))
                                            <td>{{CodeHelper::doubleCurlyOpen()}}moneyFormat({{CodeHelper::snake($model->name)}}.{{$column->name}},{{($column->type=='Decimal')?2:0}}){{CodeHelper::doubleCurlyClose()}}</td>
                                            @else
                                            <td>{{CodeHelper::doubleCurlyOpen()}}{{CodeHelper::snake($model->name)}}.{{$column->name}}{{CodeHelper::doubleCurlyClose()}}</td>
                                            @endif
                                            @endif
                                            @endforeach
                                            <td>
                                                <div class="btn-group">
                                                    <button type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        {{ CodeHelper::doubleCurlyOpen()}}$t('general.more'){{CodeHelper::doubleCurlyClose() }} <i class="mdi mdi-chevron-down"></i>
                                                    </button>
                                                    <div class="dropdown-menu" style="min-width: 120px;">
                                                        <router-link :to="{ name: '{{CodeHelper::snake($model->name)}}_show', params: { {{CodeHelper::snake($model->name)}}_id: {{CodeHelper::snake($model->name)}}.id } }" tag="a" class="dropdown-item">
                                                            <i class="far fa-eye"></i> {{ CodeHelper::doubleCurlyOpen()}}$t("general.show"){{CodeHelper::doubleCurlyClose() }}
                                                        </router-link>
                                                        <a @click="$refs.FormModal.edit({{CodeHelper::snake($model->name)}})" class="dropdown-item dropdownItem" href="javascript:;">
                                                            <i class="far fa-edit"></i> {{ CodeHelper::doubleCurlyOpen()}}$t("general.edit"){{CodeHelper::doubleCurlyClose() }}
                                                        </a>
                                                        <a @click="$refs.FormModal.destroy({{CodeHelper::snake($model->name)}}.id)" class="dropdown-item dropdownItem" href="javascript:;">
                                                            <i class="far fa-trash-alt"></i> {{ CodeHelper::doubleCurlyOpen()}}$t("general.delete"){{CodeHelper::doubleCurlyClose() }}
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <pagination-nav v-if="{{CodeHelper::plural(CodeHelper::snake($model->name))}}.last_page>1" :pageSize="5" :currentPage="2" :GoToPage="GoToPage" />
                                </div>
                                <div v-else class="card-body">
                                    <beat-loader v-if="loader" :loading="loader" color="#5578eb"></beat-loader>
                                    <p v-else class="card-title-desc" style="text-align: center;">
                                        {{ CodeHelper::doubleCurlyOpen()}}$t("general.y_d_h",[$t("title.{{CodeHelper::plural(CodeHelper::snake($model->name))}}")]){{CodeHelper::doubleCurlyClose() }}
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
        import FormModal from '../../components/modals/{{CodeHelper::snake($model->name)}}/add';
        import axios from 'axios';
        
        export default {
            components: {LayoutDefault,PaginationNav,FormModal},
            data() {
                return { {{CodeHelper::plural(CodeHelper::snake($model->name))}}:null,loader:false}
            },  
            created() {
                this.fetchData();
            },
            methods: {
                fetchData(num=1) {
                    this.{{CodeHelper::plural(CodeHelper::snake($model->name))}}=null;
                    this.loader=true;
                    let data = {params: {page:num} };
                    axios.get('/api/{{CodeHelper::plural(CodeHelper::snake($model->name))}}',data).then(({data}) => {
                        this.{{CodeHelper::plural(CodeHelper::snake($model->name))}}=data.success.{{CodeHelper::plural(CodeHelper::snake($model->name))}};
                        if(!data.success.{{CodeHelper::plural(CodeHelper::snake($model->name))}}.data.length&&num!=1){
                            this.fetchData(1)
                        }           
                        this.loader=false;
                    });  
                },
            },
        }
    </script>