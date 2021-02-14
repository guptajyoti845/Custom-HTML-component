class Tooltip extends HTMLElement{
    constructor() {
        super();
        this._tooltipText = 'Some dummy tooltip text';
        this._tooltipIcon;
        this._tooltipVisible = false;
        this.attachShadow({mode: "open"});
        const template = document.querySelector('#tooltip-template');
        this.shadowRoot.innerHTML = `
            <style>
                div{
                    border: 1px solid yellow;
                    background-color: black;
                    color:white;
                    position: absolute;
                    z-index: 10;
                }
                
                :host{
                    position: relative;
                }
            </style>
            <slot>some default</slot><span> (?)</span>`;
    }

    connectedCallback(){
        if(this.getAttribute('text')){
            this._tooltipText = this.getAttribute('text');
        }
        this._tooltipText = this.getAttribute('text');
        this._tooltipIcon = this.shadowRoot.querySelector("span");
        this._tooltipIcon.textContent = ' (?)';
        this._tooltipIcon.addEventListener('mouseenter', this._showToolTip.bind(this));
        this._tooltipIcon.addEventListener('mouseleave', this._hideToolTip.bind(this));
        this.style.position = 'relative';
        this._render();
    }

    disconnectedCallback(){
        console.log('disconnected Callback');
        this._tooltipIcon.removeEventListener('mouseenter', this._showToolTip)
        this._tooltipIcon.removeEventListener('mouseleave', this._hideToolTip)
    }

    _render(){
        let tooltipContainer = this.shadowRoot.querySelector('div');
        if(this._tooltipVisible){
            tooltipContainer = document.createElement('div');
            tooltipContainer.textContent=this._tooltipText;
            this.shadowRoot.appendChild(tooltipContainer);
        }

        else{
            if(tooltipContainer){
                this.shadowRoot.removeChild(tooltipContainer);
            }
        }

    }
    attributeChangedCallback(name, oldvalue, newValue){
        if(oldvalue === newValue){
            return;
        }
        if(name == 'text'){
            this._tooltipText = newValue;
        }
        console.log(name, oldvalue, newValue);
    }


    static get observedAttributes()
    {
        return ['text', 'class'];
    }
    _showToolTip(){
        this._tooltipVisible=true;
        this._render();
    }
    _hideToolTip(){
        this._tooltipVisible=false;
        this._render();
    }
}

customElements.define('my-tooltip',Tooltip)
