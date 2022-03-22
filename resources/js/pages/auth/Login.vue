<template>
    <div class="account-pages my-5 pt-sm-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="text-center">
                        <a href="index.html" class="mb-5 d-block auth-logo">
                            <img src="/assets/images/logo-dark.png" alt="" height="22" class="logo logo-dark">
                            <img src="/assets/images/logo-light.png" alt="" height="22" class="logo logo-light">
                        </a>
                    </div>
                </div>
            </div>
            <div class="row align-items-center justify-content-center">
                <div class="col-md-8 col-lg-6 col-xl-5">
                    <div class="card">
                        
                        <div class="card-body p-4"> 
                            <div class="text-center mt-2">
                                <h5 class="text-primary">Welcome Back !</h5>
                                <p class="text-muted">Sign in to continue to Dashboard.</p>
                            </div>
                            <div class="p-2 mt-4">
                                <form @submit.prevent="login">
    
                                    <div class="form-check" v-if="error">
                                        <p style="color:red;text-align: center;">{{error}}</p>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label" for="username">User Email</label>
                                        <input type="email" class="form-control" id="username" placeholder="Phone Number"
                                        :class="{ 'is-invalid': form.errors.has('email') }" v-model="form.email">
                                        <has-error :form="form" field="email"></has-error>
                                    </div>
            
                                    <div class="mb-3">
                                        <label class="form-label" for="userpassword">Password</label>
                                        <input type="password" class="form-control" id="userpassword" placeholder="Enter password"
                                        :class="{ 'is-invalid': form.errors.has('password') }" v-model="form.password">
                                    </div>
            
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="auth-remember-check" v-model="form.remember">
                                        <label class="form-check-label" for="auth-remember-check">Remember me</label>
                                    </div>
                                    
                                    <div class="mt-3" style="text-align: center">
                                    <!--
                                    -->
                                    <beat-loader v-if="loader" :loading="loader" color="#5578eb"></beat-loader>
                                    <button v-else class="btn btn-primary w-sm waves-effect waves-light" type="submit">Log In</button>
                                    
                                    </div>
        
                                    
                                </form>
                            </div>
        
                        </div>
                    </div>

                    <div class="mt-5 text-center">
                        <p>© 2021 Minible. Crafted with <i class="mdi mdi-heart text-danger"></i> by Themesbrand</p>
                    </div>

                </div>
            </div>
            <!-- end row -->
        </div>
        <!-- end container -->
    </div>
</template>

<script>
import Vue from 'vue'
import {Form,HasError,AlertError} from 'vform'
import {mapGetters} from 'vuex'
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

export default {
    data() {
        return {
            form: new Form({
                email: 'demo@test.com',
                password: '123456789',
                remember: false
            }),
            error:null,
            loader:false
        }
    },
    methods: {
        login() {
            if(!this.loader){
                this.loader=true
                this.error=null;
                this.$store.dispatch("auth/login")
                this.form.post("/api/login").then(({data}) => {
                    // if(['admin','technical','financial'].includes(data.success.user.role)){
                    if(true){
                        this.$store.commit("auth/LOGIN_SUCCESS", {
                            token: data.success.token,
                            user: data.success.user,
                            orders: null,
                            remember: this.form.remember 
                        })
                        this.$router.push({name:'home'})
                    }else{
                        this.$swal.fire({icon: 'error',title: 'Sorry...',text: 'You Don\'t have Permission To Access!'}); 
                        this.loader=false
                    }
                })
                .catch((error) => {
                    this.loader=false
                    this.error=error.response.data.error;
                    this.$store.commit("auth/LOGIN_FAILED", 'error')
                })
            }
        }
    },
    computed: {
        ...mapGetters({
            authError: 'auth/authError',
            isLoading: 'auth/isLoading'
        })
    }
}
</script>
