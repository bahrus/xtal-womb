const template = document.createElement('template');
template.innerHTML = `
<style>
    :host {
        display:block;
    }
</style>
<div>
    Before Slot
    <slot></slot>
    After Slot
</div>
`;


class TestComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        const slot = this.shadowRoot.querySelector('slot');
        slot.addEventListener('slotchange', e =>{
            const nodes = slot.assignedNodes();
            const templ = nodes[1];
            console.log(templ);
            const clone = templ.content.cloneNode(true);
            this.shadowRoot.appendChild(clone);

        });
    }

}

customElements.define('test-component', TestComponent);