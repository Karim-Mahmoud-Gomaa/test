<template>
                        
    <div class="vertical-menu">

                <!-- LOGO -->
                <div class="navbar-brand-box">
                    <a href="index.html" class="logo logo-dark">
                        <span class="logo-sm">
                            <img src="/assets/images/logo.png" alt="" style="height: 35px;">
                        </span>
                        <span class="logo-lg">
                            <img src="/assets/images/default.png" alt="" style="height:62px;margin-top:-8px;">
                        </span>
                    </a>

                    <a href="index.html" class="logo logo-light">
                        <span class="logo-sm">
                            <img src="/assets/images/logo.png" alt="" style="height: 35px;">
                        </span>
                        <span class="logo-lg">
                            <img src="/assets/images/logo-light.png" alt="" style="height:62px;margin-top:-8px;">
                        </span>
                    </a>
                </div>

                <button type="button" class="btn btn-sm px-3 font-size-16 header-item waves-effect vertical-menu-btn">
                    <i class="fa fa-fw fa-bars"></i>
                </button>

                <div data-simplebar class="sidebar-menu-scroll">

                    <!--- Sidemenu -->
                    <div id="sidebar-menu">
                        <!-- Left Menu Start -->
                        <ul class="metismenu list-unstyled" id="side-menu">
                            <li class="menu-title"> {{ $t("nav.menu") }}</li>

                            <li class="mm-active">
                                <router-link :to="{name:'home'}" tag="a" class="link-page">
                                    <i class="uil-home-alt"></i>
                                    <span>Home Page</span>
                                </router-link>
                            </li>
                            
                            <li>
                                <router-link :to="{name:'categories'}" tag="a" class="link-page">
                                    <i class="fas fa-sms"></i>
                                    <span>Categories</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{name:'articles'}" tag="a" class="link-page">
                                    <i class="fas fa-sms"></i>
                                    <span>Articles</span>
                                </router-link>
                            </li>
                          
                            <li>
                                <router-link :to="{name:'users'}" tag="a" class="link-page">
                                    <i class="uil-user"></i>
                                    <span>Users</span>
                                </router-link>
                            </li>
                         
                        </ul>
                    </div>
                    <!-- Sidebar -->
                </div>
            </div>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return { 
            active: this.$route.name,
        }
    },
    mounted() {
        let externalScript = document.createElement('script')
        externalScript.setAttribute('src', '/assets/js/app.js' )
        document.head.appendChild(externalScript)
    },
}
</script>