//for loop

function writeCards(arr, event){
    const newArr = []
    for(i=0; i<arr.length; i++){
        newArr.push(`Thank you ${arr[i]}, for the wonderful ${event} gift.`)
    }
    return newArr
}


//while loop

function countdown(int){
    let i =  int
    while(i>= 0){
        console.log(i)
        i--
    }
}