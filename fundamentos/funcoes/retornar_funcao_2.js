function back() {
    return function (){
        return function(){
            return "Good Afternon!!"
        }
    }
}

console.log(back());
console.log(back()());
console.log(back()()());