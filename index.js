
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