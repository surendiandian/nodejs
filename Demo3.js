function zhazhiji() {
    
    this.zhazhi=function (shuiguo) {
        return shuiguo+"汁";
    }
}


var jy=new zhazhiji();
var gz=jy.zhazhi("梨子");
console.log(gz)