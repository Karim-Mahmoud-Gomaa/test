<!DOCTYPE html>
<html>
<head>
    <title></title>
</head>
{{-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"> --}}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" type="text/css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<style>
    #search-addon{
        cursor: pointer;
    }
    img{
        height:150px;
        width:100%;
    }
    .title{
        border: 1px solid rgba(0,0,0,.125);
    }
    .item{
        padding-left:5px;
        padding-right:5px;
        color:black;
        text-decoration: none;
    }
    .item-card{
        transition:0.5s;
        cursor:pointer;
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
    .card:hover{
        color:black;
        transform: scale(1.05);
        box-shadow: 10px 10px 15px rgba(0,0,0,0.3);
    }
    .card-text{
        height:80px;  
    }
    
    .card::before, .card::after {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transform: scale3d(0, 0, 1);
        transition: transform .3s ease-out 0s;
        background: rgba(255, 255, 255, 0.1);
        content: '';
        pointer-events: none;
    }
    .card::before {
        transform-origin: left top;
    }
    .card::after {
        transform-origin: right bottom;
    }
    .card:hover::before, .card:hover::after, .card:focus::before, .card:focus::after {
        transform: scale3d(1, 1, 1);
    }
</style>
<body>
    <div class="container mt-2">
        {{-- <div class="card card-block mb-2">
            <h4 class="card-title">Card 1</h4>
            <p class="card-text">Welcom to bootstrap card styles</p>
        </div>  --}}
        <div class="row mt-5 mb-5">
            <h1 class="title p-2 text-center">Articles Page</h1>
        </div>
        <div class="row mt-5 mb-5">
            <form name="myform" action="{{route('articles.index')}}" method="GET">
                <div class="input-group rounded">
                    <input type="search" class="form-control rounded" name="search" placeholder="Search By Title" aria-label="Search"
                        value="{{request()->input('search')}}" aria-describedby="search-addon" />
                    <span class="input-group-text border-0" id="search-addon" onclick="myform.submit()">
                        <i class="fas fa-search"></i>
                    </span>
                </div>
            </form>
        </div>
        <div class="row mt-5">
            @foreach ($articles as $article)
            <a class="col-md-3 col-sm-6 item mt-3" href="{{route('articles.show',['article'=>$article->id])}}">
                <div class="card item-card card-block">
                    <h4 class="card-title text-center"><i class="material-icons">{{$article->title}}</i></h4>
                    <img src="{{asset('assets/images/articles/'.$article->image)}}" alt="Photo of sunset">
                    <h5 class="item-card-title mt-3 mb-3 ms-2">Created At {{$article->created_at->format('d/m/Y')}}</h5>
                </div>
            </a>
            @endforeach
            {{-- <div class="col-md-3 col-sm-6 item">
                <div class="card item-card card-block">
                    <h4 class="item-card-title text-right"><i class="material-icons">settings</i></h4>
                    <img src="https://static.pexels.com/photos/7357/startup-photos.jpg" alt="Photo of sunset">
                    <h5 class="card-title  mt-3 mb-3">ProVyuh</h5>
                    <p class="card-text">This is a company that builds websites, web .</p> 
                </div>
            </div> --}}
        </div>
        @if ($articles->total())
        <div class="row mt-5">
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    @if ($articles->previousPageUrl())
                    <li class="page-item"><a class="page-link" href="{{ $articles->previousPageUrl() }}">Previous</a></li>
                    @else
                    <li class="page-item disabled"><a class="page-link" href="javascript:;">Previous</a></li>
                    @endif
                    
                    @for($i = 1; $i <= $articles->lastPage(); $i++)
                    <li class="page-item {{ ($articles->currentPage()==$i)?'disabled':'' }}">
                        <a class="page-link" href="{{ ($articles->currentPage()==$i)?'javascript:;':$articles->url($i) }}">{{ $i }}</a>
                    </li>
                    @endfor
                    
                    @if ($articles->nextPageUrl())
                    <li class="page-item"><a class="page-link" href="{{ $articles->nextPageUrl() }}">Next</a></li>
                    @else
                    <li class="page-item disabled"><a class="page-link" href="javascript:;">Next</a></li>
                    @endif
                </ul>
            </nav>
        </div>
        @else
        <p class="text-center">There Are No Articles</p>
        @endif
    </div>
    
</body>
</html>