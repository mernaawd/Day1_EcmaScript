/////////task2

function User(name,id,location,addr){
  this.name=name;
  this.id=id;
  this.location=location;
  this.address=addr;
}
User.prototype.getSetGen=function(){
for (var key in this){
    console.log(key);
}
if (typeof this [key] !== "function"){
    var n=this[key];
    console.log(this);
    var self=this;
    (function(){
        console.log(this);
        Object.defineProperties(self,key,{
            get: function(){
                return n;
            },
            set: function (n,i,l,a) {
                name = n;
                id=i;
                location=l;
                addr=a;
              },
        })
    })
}
}
var user1= new User("merna",255,"october","22.st");
var user2= new User("nada",22,"nasr","23.st");
console.log(user1);
user1.getSetGen();
user1.id=88;

console.log(user1);
console.log(user2);