//variables

const form = document.querySelector('form')
const paragraph = document.getElementById('answer')
const firstName = document.getElementById('firstName')





form.addEventListener('submit', (event) => {
    // prevent reload
    event.preventDefault()

    alert(`Welcome ${firstName.value}`)

    // getting access to all form data
    const data = new FormData(event.currentTarget)

    //getting individual form data 
    const string1 = data.get('item1')
    const string2 = data.get('item2') 
    
    
    // converting a string to a number 
    const number1 = parseInt(string1)
    const number2 = parseInt(string2)
    
    // confirming if something is a string or an integer
    console.log(typeof number1, typeof number2)
    const sum = addTwoItem(number1,number2)

    // adding sum into paragraph 
    paragraph.innerHTML = sum;

    alert(`sum is ${sum}`)
})

// this is a comment  
/*
This is a function for adding two things 
*/
function addTwoItem(item1, item2) {
  return item1 + item2
}

