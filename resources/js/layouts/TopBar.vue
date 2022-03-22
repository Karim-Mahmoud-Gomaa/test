<template>
    <div>
        <form-modals ref="FormModals" :fetchData="fetchData" :id="'header'"/>
        <header id="page-topbar">
            <div class="navbar-header">
                <div class="d-flex">
                    <!-- LOGO -->
                    <div class="navbar-brand-box">
                        <a href="index.html" class="logo logo-dark">
                            <span class="logo-sm">
                                <img src="/assets/images/default.png" alt="" style="height:62px;margin-top:-8px;">
                            </span>
                            <span class="logo-lg">
                                <img src="/assets/images/default.png" alt="" height="20">
                            </span>
                        </a>

                        <a href="index.html" class="logo logo-light">
                            <span class="logo-sm">
                                <img src="/assets/images/default.png" alt="" height="22">
                            </span>
                            <span class="logo-lg">
                                <img src="/assets/images/logo-light.png" alt="" height="20">
                            </span>
                        </a>
                    </div>

                    <button type="button" class="btn btn-sm px-3 font-size-16 header-item waves-effect vertical-menu-btn">
                        <i class="fa fa-fw fa-bars"></i>
                    </button>

                    <!-- App Search-->
                    <form class="app-search d-none d-lg-block">
                        <div class="position-relative">
                            <input type="text" class="form-control" :placeholder="$t('modals.general.search')">
                            <span class="uil-search"></span>
                        </div>
                    </form>
                </div>

                <div class="d-flex">

                    <div class="dropdown d-inline-block d-lg-none ms-2">
                        <button type="button" class="btn header-item noti-icon waves-effect" id="page-header-search-dropdown"
                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="uil-search"></i>
                        </button>
                        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                            aria-labelledby="page-header-search-dropdown">
                
                            <form class="p-3">
                                <div class="m-0">
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="Search ..." aria-label="Recipient's username">
                                        <div class="input-group-append">
                                            <button class="btn btn-primary" type="submit"><i class="mdi mdi-magnify"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="dropdown d-none d-lg-inline-block ms-1">
                        <button type="button" class="btn header-item noti-icon waves-effect" data-bs-toggle="fullscreen">
                            <i class="uil-minus-path"></i>
                        </button>
                    </div>

              
                    <div class="dropdown d-inline-block" v-if="user">
                        <button type="button" class="btn header-item waves-effect" id="page-header-user-dropdown"
                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span class="header-profile-user bg-primary rounded-circle font-size-16 user-photo">
                                {{user.name.substring(0,1).toUpperCase()}}
                            </span>
                            <span class="d-none d-xl-inline-block ms-1 fw-medium font-size-15">{{user.name}}</span>
                            <i class="uil-angle-down d-none d-xl-inline-block font-size-15"></i>
                        </button>
                        <div class="dropdown-menu dropdown-menu-end">
                            <!-- item-->
                            <a class="dropdown-item" href="#" @click="logout" :class="`font-${$i18n.locale}`">
                                <i class="uil uil-sign-out-alt font-size-18 align-middle me-1 text-muted"></i> 
                                <span class="align-middle">{{$t('header.sign_out')}}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
 
        </header>
    </div>
</template>
<script>
import LayoutDefault from '../layouts/App';
import FormModals from '../components/modals/user/add';
import { mapGetters } from "vuex";
import axios from 'axios';

export default {
    computed: {...mapGetters({user: "auth/user"})},
  	components: {LayoutDefault,FormModals},
  	methods: {
        logout() {
            axios.post('/api/logout').then(response => {
                this.$store.dispatch("auth/logout")
                this.$router.push({name: 'login'})
            }).catch((error) => { console.log('error..');})
        },
        fetchData() { 
          this.$store.dispatch("auth/fetchUser");
        },
  },
}
</script>
<style scope>
    .user-photo{
        display: inline-grid;
        align-items: center;
        font-weight: 500;
        color: #fff;
    }
</style>