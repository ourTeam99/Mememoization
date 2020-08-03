
//exemple 1
let o = {
    x : 1,
    
	a: function() {
        // this in funct for object o
		console.log(this)
		 b = () => {
            // this in arrow funct for a 
			console.log(this.x)
		}
		b()
	}
}

o.a()

//exemple 2
function a(x,y) {
	this.x = x 
    this.y = y
    // this for who get the function
	console.log(this)
}

// this is for window
a(1,1)

console.log(this.x)

// this is for c
let c = new a(1,3)

console.log(c)


//exmple 3
//create Object 
let c = {}
console.log(c)

let c = new Object()
console.log(c)

//exmple 4
//extends object a
let a = {
	x : 1,
	y : 2
}

let b = Object.create(a)

console.log(b.__proto__)


//exmple 5
let i = {
    x :1,
    y:2,
    z:3
}

//property it is the x,y,z,.....
for (const property in i) {
 console.log(`${property}: ${i[property]}`);
}

let arr = [],x=0
//val it is array containe property + value of
//usinf of in for beacuase Object.entries(i) is iterabol
for(let val of Object.entries(i)){
   arr[x] = val
   x++
}

console.log(arr)

//exmple 6
function* issa(nb){
	for (var i = 0; i < nb ; i++) {
		//ceate iterator for next value
		yield i
		// make done == true and that means all of value comme next are undefined
		if(i == 5)
			return i
	}
}

let x = issa(10)

console.log(x.next())
console.log(x.next())
console.log(x.next())
console.log(x.next())
console.log(x.next())
console.log(x.next())
console.log(x.next())
console.log(x.next())
console.log(x.next())
console.log(x.next())
console.log(x.next())

//exmple 7
let arr = Array(5)

let a = {
	name : "issa",
	age : 21
}
let b = {
	name : "sami",
	age : 22
}

let c = {
	name : "koko",
	age : 11
}

let d = {
	name : "sasa",
	age : 33
}

let e = {
	name : "dada",
	age : 43
}

let f = {
	name : "eded",
	age : 32
}

arr[0] = a
arr[1] = b
arr[2] = c
arr[3] = d
arr[4] = e

console.log(arr)

function* generator(arr) {
	for (var i = 0; i < arr.length; i++) {
		yield arr[i]
	}
}

let counter = generator(arr)

for (var i = 0; i < arr.length; i++) {
	let value = counter.next().value
	console.log(value)
}