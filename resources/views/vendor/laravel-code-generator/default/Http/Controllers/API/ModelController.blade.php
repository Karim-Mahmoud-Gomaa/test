{!! CodeHelper::PHPSOL() !!}

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repository\{{$model->name}}\{{$model->name}}Facade as {{$model->name}};
use App\Models\{{$model->name}} as {{$model->name}}Model;

class {{CodeHelper::plural($model->name)}}Controller extends Controller
{
    public $successStatus = 200;
    @php
    function validations($model) {
        $validation=0;
        foreach ($model->table->columns as $column) {
            if(!in_array($column->name,['id','created_at','updated_at','deleted_at','user_id'])){
                $column_validations=[($column->default||$column->nullable)?'nullable':'required'];
                if(str_contains($column->name,'_id')){
                    array_push($column_validations,"exists:".Str::plural(str_replace("_id","",$column->name)).",id");
                    echo ($validation>0?"\t\t\t":"\t")."'{$column->name}'=>'".implode("|",$column_validations)."',\n";
                    $validation++;
                    continue;
                }
                if(in_array($column->type,['Integer'])){
                    array_push($column_validations,Str::snake($column->type));
                }
                if(in_array($column->type,['Decimal'])){
                    array_push($column_validations,'regex:/^-?[0-9]+(?:\.[0-9]{1,2})?$/');
                }
                if($column->length){
                    array_push($column_validations,"max:".$column->length);
                }
                echo ($validation>0?"\t\t\t":"\t")."'{$column->name}'=>'".implode("|",$column_validations)."',\n";
                $validation++;
            }
        }
    }
    function relations($model) {
        $belongs=[];
        foreach ($model->table->columns as $column){
            if(str_contains($column->name,'_id')){
                array_push($belongs,"'".str_replace("_id","",$column->name)."'");
            }
        }
        if (count($belongs)) {
            echo implode(",",$belongs);
        }
    }
    @endphp
    public function index(Request $request)
    {
        if(isset($request->paginate)){
            $success['{{CodeHelper::plural(CodeHelper::snake($model->name))}}']={{$model->name}}::index(['id','name'],[],[],0);
        }else{
            $success['{{CodeHelper::plural(CodeHelper::snake($model->name))}}']={{$model->name}}::index(['*'],[{{relations($model)}}]);
        }
        return response()->json(['success' => $success], $this->successStatus);
    }
    
    public function store(Request $request)
    {
        $request->validate([
        @php
        validations($model)
        @endphp
        ]);
        $success={{$model->name}}::create($request);
        return response()->json(['success' => $success], $this->successStatus);
    }
    
    
    public function show({{$model->name}}Model ${{CodeHelper::snake($model->name)}})
    {
        $success['{{CodeHelper::snake($model->name)}}']={{$model->name}}::find(${{CodeHelper::snake($model->name)}}->id,['*'],[{{relations($model)}}]);
        return response()->json(['success' => $success], $this->successStatus);
    }
    
    /**
    * Update the specified resource in storage.
    *
    * @param  \Illuminate\Http\Request  $request
    * @param  \App\OrderDetail  ${{CodeHelper::snake($model->name)}}
    * @return \Illuminate\Http\Response
    */
    public function update(Request $request,{{$model->name}}Model ${{CodeHelper::snake($model->name)}})
    {
        $request->validate([
        @php
        validations($model)
        @endphp
        ]);
        $success={{$model->name}}::update(${{CodeHelper::snake($model->name)}}->id,$request);
        return response()->json(['success' => $success], $this->successStatus);
    }
    
    /**
    * Remove the specified resource from storage.
    *
    * @param  \App\OrderDetail  ${{CodeHelper::snake($model->name)}}
    * @return \Illuminate\Http\Response
    */
    public function destroy({{$model->name}}Model ${{CodeHelper::snake($model->name)}})
    {
        $success={{$model->name}}::delete(${{CodeHelper::snake($model->name)}}->id);
        return response()->json(['success' => $success], $this->successStatus);
    }
    
}
