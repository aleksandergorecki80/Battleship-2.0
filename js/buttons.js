function Buttons() {
    
    this.buttonTemplate = function(buttonValue, buttonText, buttonId){
        return `
        <button type="submit" 
            value=${buttonValue} 
            id=${buttonId}
            class="btn"
            >
            ${buttonText}
        </button>
        `;
    };
    
    this.insertButton = function(buttonValue, buttonText, buttonId){
        const btnTemplate = this.buttonTemplate(buttonValue, buttonText, buttonId);
        document.getElementById('buttons').insertAdjacentHTML('beforeend', btnTemplate);
    }
    
};


// Inserting the buttons

//  START / RELOAD
const startReloadGameValue = `start`;
const startReloadGameText = 'Start the game';
const startReloadGameId = 'startReloadGame';
const startReloadGame = new Buttons();
startReloadGame.insertButton(startReloadGameValue, startReloadGameText, startReloadGameId);



//  HOW TO PLAY
const howToPlayValue = `howToPlay`;
const howToPlayText = 'How to play';
const howToPlayId = 'howToPlay';
const howToPlay = new Buttons();
howToPlay.insertButton(howToPlayValue, howToPlayText, howToPlayId);
const howToPlayButton = document.getElementById('howToPlay');
howToPlayButton.addEventListener('click', printhowToPlay);


const aboutValue = `about`;
const aboutText = 'About the game';
const aboutId = 'about';
const about = new Buttons();
about.insertButton(aboutValue, aboutText, aboutId);
const aboutButton = document.getElementById('about');
aboutButton.addEventListener('click', printAboutTheGame);