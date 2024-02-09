if(document.getElementsByClassName('air3-input form-control')){
    const temp = document.getElementsByClassName('air3-input form-control')[0];
    console.log('Gru',temp?.getAttribute('value'))
    temp?.setAttribute('value','Senior Web Developer')
}