<!doctype html>
<html lang="en">
<?php
// phpinfo();
// dd('');
?>

<!-- Mirrored from themesbrand.com/minible/layouts/pages-404.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 12 Aug 2021 15:38:23 GMT -->
<head>
    
    <meta charset="utf-8" />
    <title>Ehtaref</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta content="Premium Multipurpose Admin & Dashboard Template" name="description" />
    <meta content="Themesbrand" name="author" />
    <!-- App favicon -->
    <link rel="shortcut icon" href="{{ asset('')}}assets/images/logo_head2.ico">
    <!-- Bootstrap Css -->
    <link href="{{ asset('')}}assets/css/bootstrap.min.css" id="bootstrap-style" rel="stylesheet" type="text/css" />
    <!-- Icons Css -->
    <link href="{{ asset('')}}assets/css/icons.min.css" rel="stylesheet" type="text/css" />
    <!-- App Css-->
    <link href="{{ asset('')}}assets/css/app.min.css" id="app-style" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" type="text/css">
    <!-- My Css-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=El+Messiri&display=swap" rel="stylesheet">
    <style>
        .font-ar{font-family: 'El Messiri', sans-serif;}
        /* .vdp-datepicker__calendar {position: inherit!important;} */
    </style>
    
    
    
    
    
    
    
</head>

<body >
    {{-- <body class="authentication-bg"> --}}
        
        <div id="app">
            <router-view></router-view>
        </div>
        
        <!-- Right bar overlay-->
        <div class="rightbar-overlay"></div>
        
        <!-- JAVASCRIPT -->
        <script src="{{ asset('')}}assets/libs/jquery/jquery.min.js"></script>
        <script src="{{ asset('')}}assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="{{ asset('')}}assets/libs/metismenu/metisMenu.min.js"></script>
        <script src="{{ asset('')}}assets/libs/simplebar/simplebar.min.js"></script>
        <script src="{{ asset('')}}assets/libs/node-waves/waves.min.js"></script>
        <script src="{{ asset('')}}assets/libs/waypoints/lib/jquery.waypoints.min.js"></script>
        <script src="{{ asset('')}}assets/libs/jquery.counterup/jquery.counterup.min.js"></script>
        
        <!-- App js -->
        <script src="https://pagination.js.org/dist/2.1.5/pagination.js"></script>
        <script src="{{ asset('js/app.js?v4_7')}}"></script>                
        <script src="https://cdn.ckeditor.com/4.16.2/basic/ckeditor.js"></script>
        
        <script>
            $(document).on('click','.link-page', function () {
                $("body").removeClass("sidebar-enable")
            });
            
        </script>
        
    </body>
    
    <!-- Mirrored from themesbrand.com/minible/layouts/pages-404.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 12 Aug 2021 15:38:23 GMT -->
    </html>
    