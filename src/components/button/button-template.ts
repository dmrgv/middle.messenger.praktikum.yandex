const buttonTemplate: string = `
    <button
      {{#if className}}
        class="{{className}}"
      {{/if}}
    
      {{#if type}}
        type="{{type}}"
      {{/if}}
    
      {{#if form}}
        form="{{form}}"
      {{/if}}
    
    >{{buttonText}}</button>
`

export default buttonTemplate
