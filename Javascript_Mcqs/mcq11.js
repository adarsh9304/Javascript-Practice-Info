function show(){
    console.log(show.timeout);
}

show()
show.timeout=100
show()

// function behave as object 
// undefined ,100