const peso= document.getElementById('peso');
const altura= document.getElementById('altura');
const boton = document.getElementById('button');
const contenedor= document.querySelector('.contenedor');

boton.addEventListener('click', calcular);

function calcular(e){

    e.preventDefault();
    const pesoValue =  peso.value;
    const alturaValue =  (altura.value)/100;
    console.log(pesoValue, alturaValue);
    const calculo_BMI = pesoValue/ Math.pow(alturaValue, 2);
    console.log(calculo_BMI);
    
    const resultado= document.createElement('p');
    resultado.textContent= `Tu BMI es: ${calculo_BMI.toFixed(2)}`;

    contenedor.appendChild(resultado);
}