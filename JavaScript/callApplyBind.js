const obj = {
    name:'sinan',
    age:19,
    fullname:function(place){
       return console.log(`my name is ${this.name} and my age is ${this.age} from ${place}`)
    }
}


const obj2 = {
    name:'dilshad',
    age:18
}


obj.fullname.call(obj2,'perambra')
obj.fullname.apply(obj2 ,['perambra'])
const last = obj.fullname.bind(obj2 ,'perambra')
last()