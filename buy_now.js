const userInput = document.querySelector('.field-input');
const userLeterPreview = document.querySelector('.plaque-prev');
const userPricePreview = document.querySelector('#plaquePrice');
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