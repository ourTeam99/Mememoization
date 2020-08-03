
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


//create Object 
let c = {}
console.log(c)

let c = new Object()
console.log(c)


//extends object a
let a = {
	x : 1,
	y : 2
}

let b = Object.create(a)

console.log(b.__proto__)



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