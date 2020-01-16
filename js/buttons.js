
let isGameRun = false;


function buttonTemplate(btnValue, btnText){
    return `
    <button type="submit" value=${btnValue} id="startReloadGame">${btnText}</button>
    `;
}

function insertButton(btnValue, btnText){
    const btnTemplate = buttonTemplate(btnValue, btnText);
    document.body.insertAdjacentHTML('afterbegin', btnTemplate);
}


function switchTheStatus(){
    return !isGameRun;
}

let btnValue = '';
let btnText = '';
if(isGameRun){
    btnValue = 'stop';
    btnText = 'Stop the game';
} else {
    btnValue = `start`;
    btnText = 'Start the game';
}

insertButton(btnValue, btnText);




console.log(btnValue);

