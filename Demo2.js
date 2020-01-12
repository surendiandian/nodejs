function Person(){
    this.name;
    this.age;
    this.sex;
    
    this.show=function () {
        console.log("我叫"+this.name+"，今年"+this.age+"岁了,"+" 我是"+this.sex+"生")
    }

    this.eat=function (type) {
        console.log("我吃了"+type)
    }
    
    
    this.getAge=function () {
        return this.age-1;
    }
    
}

var p1=new Person();
p1.name="黄兴";
p1.age=18;
p1.sex="男";

var age=p1.getAge();

console.log("农历年龄为"+age);