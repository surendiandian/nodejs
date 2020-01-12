//外层循环行
for(var i=1;i<=9;i++){
    var str="";
    //内层循环列
    for(var j=1;j<=i;j++){
        str+=i+"*"+j+"="+(i*j)+"\t"
    }
    console.log(str)
}