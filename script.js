// Adding variables to store our data
const userInput = document.querySelector('.field-input');
const userLeterPreview = document.querySelector('.plaque-prev');
const userPricePreview = document.querySelector('#plaquePrice');


// Refactoring with Arrow Function
const countLeters = (some_data) =>{
  const price = some_data.replaceAll(' ', '').length * 5; // price of each letter
  userLeterPreview.textContent = some_data
  userPricePreview.textContent = '$'+price
  
}

userInput.oninput = (e)=>{
  countLeters(e.target.value)
}

// Assignment part OGHENEDORO OHWOJIVWIOGOR
const buyNowButton = document.querySelector('.buy-submit');

const buyNow = () =>{
    let x = userInput.value.replaceAll(' ', '').length;
    if (userInput.value === ''){
      alert('Please enter your name')
    }else if(userInput.value.toUpperCase() === 'YOUR NAME'){
      alert('Please enter your Custom letters!')
    } else {
      if (x>15){
        alert('You have exceeded the the number of available letters, kindly choose a new name')
      } else{
        alert(`Congratulations!, your payment for your Name Plaque: ${userLeterPreview.textContent.toUpperCase()}, was processed successfully and has been sent to your mail.`)
      }
    };
  
  }
  buyNowButton.onclick = () =>{
      buyNow()
  };
