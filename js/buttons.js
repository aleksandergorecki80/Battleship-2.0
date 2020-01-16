function Buttons() {
    
    this.buttonTemplate = function(btnValue, btnText){
        return `
        <button type="submit" value=${btnValue} id="startReloadGame">${btnText}</button>
        `;
    };
    
    this.insertButton = function(btnValue, btnText){
        const btnTemplate = this.buttonTemplate(btnValue, btnText);
        document.body.insertAdjacentHTML('afterbegin', btnTemplate);
    },
    
    this.switchTheStatus = function(){
        return !this.isGameRun;
    }
};


// Inserting the start/restart button
const btnValue = `start`;
const btnText = 'Start the game';
startReloadGame = new Buttons();
startReloadGame.insertButton(btnValue, btnText);

