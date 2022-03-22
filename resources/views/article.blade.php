<!DOCTYPE html>
<html>
<head>
    <title></title>
</head>
{{-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"> --}}
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<style>
    img{
        /* height:150px; */
        width:100%;
    }
    
    .item{
        padding-left:5px;
        padding-right:5px;
        color:black;
        text-decoration: none;
    }
    .item-card{
        transition:0.5s;
    }
    .item-card-title{  
        font-size:15px;
        transition:1s;
        cursor:pointer;
    }
    .item-card-title i{  
        font-size:15px;
        transition:1s;
        cursor:pointer;
        color:#ffa710
    }
    .title{
        border: 1px solid rgba(0,0,0,.125);
    }
    .card-text{
        height:80px;  
    }
  
</style>
<body>
    <div class="container mt-2">
        <div class="row mt-5 mb-5">
            <h1 class="title p-2 text-center">{{$article->title}}</h1>
        </div>
        <div class="row mt-5">
            <div class="col-md-6 col-sm-12 item" href="{{route('articles.show',['article'=>$article->id])}}">
                <div class="item-card card-block">
                    <img src="{{asset('assets/images/articles/'.$article->image)}}" alt="Photo of sunset">
                    <h5 class="item-card-title mt-3 mb-3 ms-2">Created At {{$article->created_at->format('d/m/Y')}}</h5>
                </div>
            </div>
            <div class="col-md-6 col-sm-12 item" href="{{route('articles.show',['article'=>$article->id])}}">
                <div class="card item-card card-block text-center pt-2 pb-5">
                    {!!$article->content!!}
                </div>
            </div>
        </div>
        
    </div>
    
</body>
</html>