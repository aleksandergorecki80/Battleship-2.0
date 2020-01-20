const Modal = {
    reloadTheGame: false,
    init: function() {
        document.body.addEventListener('click', e=> {
            if(e.target.classList.contains('modal_close')){
                this.closeModal(e.target);
            }
        });
        
    },
    getHtmlTemplate(modalOptions){
        return `
            <div class="modal_overlay">
                <div class="modal_window">
                    <div class="modal_content">${modalOptions.content}</div>
                    <button class="modal_close">Close</button>
                </div>
            </div>
            `;
    },
    openModal(modalOptions = {}) {
        modalOptions = Object.assign({
            content: 'Modal Content'
        }, modalOptions);
        const modalTemplate = this.getHtmlTemplate(modalOptions);
        document.body.insertAdjacentHTML('afterbegin', modalTemplate);
        console.log(this.reloadTheGame);
    },
    closeModal(closeButton){
        const modalOverlay = closeButton.parentElement.parentElement;
        // modalOverlay.parentElement.removeChild(modalOverlay);
        document.body.removeChild(modalOverlay);
        if(this.reloadTheGame === true){
            location.reload();
        }
        
    }
};

document.addEventListener('DOMContentLoaded', ()=> Modal.init());