

function check(obj1, obj2){

    if(typeof( obj1)=="object" && obj1!=null && typeof(obj2)=="object" &&obj2!=null){
       
        if(Object.keys(obj1).length=== Object.keys(obj2).length){
            
            for(let num in obj1){
                if(obj2.hasOwnProperty(num)){
                    if(!(check(obj1[num], obj2[num]))){
                        return false
                    }
                }else{
                    return false
                }
            }
            return true
        }

    }
    else{
        return obj1===obj2;
    }
}

const obj1= {name: "raj", age: 28, c: {d: "test1", e: "yo"}};

const obj2= {name: "raj", age: 28, c:{d: "test1", e: "bo"}};


console.log(check(obj1, obj2))