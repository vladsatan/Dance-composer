const root = document.getElementById('root')

// Фильтри 

const programSelect = document.getElementById('program-select')
const classSelect = document.getElementById('class-select')
const danceSelect = document.getElementById('dance-select')

const button = document.getElementById('reset-filter')

programSelect.addEventListener('change',()=>{
    var getValue = programSelect.value;
    if(getValue === '0'){

    const svalzOption = document.getElementsByClassName('svalzOption')
    const tangoOption = document.getElementsByClassName('tangoOption')
    const wvalzOption = document.getElementsByClassName('wvalzOption')
    const foxOption = document.getElementsByClassName('foxOption')
    const quickOption = document.getElementsByClassName('quickOption')
    const chachaOption = document.getElementsByClassName('chachaOption')
    const sambaOption = document.getElementsByClassName('sambaOption')
    const rumbaOption = document.getElementsByClassName('rumbaOption')
    const passoOption = document.getElementsByClassName('passoOption')
    const jiveOption = document.getElementsByClassName('jiveOption')

    if(svalzOption || tangoOption || foxOption || quickOption || chachaOption || sambaOption || rumbaOption || passoOption || jiveOption){
        danceSelect.innerHTML = ''
    }


        const non = document.createElement('option')
        non.setAttribute('value', '7')
        non.textContent = 'не вибранно'
        danceSelect.append(non)

    }

 
  
 if (getValue === '2'){
    const svalzOption = document.getElementsByClassName('svalzOption')
    const tangoOption = document.getElementsByClassName('tangoOption')
    const wvalzOption = document.getElementsByClassName('wvalzOption')
    const foxOption = document.getElementsByClassName('foxOption')
    const quickOption = document.getElementsByClassName('quickOption')

    if(svalzOption || tangoOption || foxOption || quickOption){
        danceSelect.innerHTML = ''
    }

   
    
    const non = document.createElement('option')
    const chachaOption = document.createElement('option')
    const sambaOption = document.createElement('option')
    const rumbaOption = document.createElement('option')
    const passoOption = document.createElement('option')
    const jiveOption = document.createElement('option')

    non.textContent = 'не вибранно'
    chachaOption.textContent = 'Ча-ча-ча'
    sambaOption.textContent = 'Самба'
    rumbaOption.textContent = 'Румба'
    passoOption.textContent = 'Пасодобль'
    jiveOption.textContent = 'Джайв'

    chachaOption.classList.add('chachaOption')
    sambaOption.classList.add('sambaOption')
    rumbaOption.classList.add('rumbaOption')
    passoOption.classList.add('passoOption')
    jiveOption.classList.add('jiveOption')

    non.setAttribute('value', '7')
    chachaOption.setAttribute('value', '12')
    sambaOption.setAttribute('value', '13')
    rumbaOption.setAttribute('value', '14')
    passoOption.setAttribute('value', '15')
    jiveOption.setAttribute('value', '16')

    danceSelect.append(non,chachaOption,sambaOption,rumbaOption,passoOption,jiveOption)    
}

if (getValue === '1'){

    const chachaOption = document.getElementsByClassName('chachaOption')
    const sambaOption = document.getElementsByClassName('sambaOption')
    const rumbaOption = document.getElementsByClassName('rumbaOption')
    const passoOption = document.getElementsByClassName('passoOption')
    const jiveOption = document.getElementsByClassName('jiveOption')

    if(chachaOption || sambaOption || rumbaOption || passoOption || jiveOption){
        danceSelect.innerHTML = ''
    }

    const non = document.createElement('option')
    const svalzOption = document.createElement('option')
    const tangoOption = document.createElement('option')
    const wvalzOption = document.createElement('option')
    const foxOption = document.createElement('option')
    const quickOption = document.createElement('option')

    non.textContent = 'не вибранно'
    svalzOption.textContent = 'Повільний Вальс'
    tangoOption.textContent = 'Танго'
    wvalzOption.textContent = 'Віденський Вальс'
    foxOption.textContent = 'Фокстрот'
    quickOption.textContent = 'Квікстеп'


    svalzOption.classList.add('svalzOption')
    tangoOption.classList.add('tangoOption')
    wvalzOption.classList.add('wvalzOption')
    foxOption.classList.add('foxOption')
    quickOption.classList.add('quickOption')

    non.setAttribute('value', '7')
    svalzOption.setAttribute('value', '8')
    tangoOption.setAttribute('value', '9')
    foxOption.setAttribute('value', '10')
    quickOption.setAttribute('value', '11')

    danceSelect.append(non,svalzOption,tangoOption,foxOption,quickOption)    
}


})
