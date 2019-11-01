
// todo: implement the times function

Number.prototype.times = function(todoSoOften){
    const myNumber = this.toFixed(0);
    for(let i = 0; i < myNumber; i++){
        todoSoOften(i)
    }
}

String.prototype.times = function(todoSoOften){
    Number(this).times(todoSoOften);
}

