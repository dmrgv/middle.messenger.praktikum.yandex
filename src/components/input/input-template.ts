const inputTemplate: string = `
  <div class="input-block">
      <label for="{{inputId}}">{{name}}</label>
      <input
        id='{{inputId}}'
        {{#if value}}
          value='{{value}}'
        {{/if}}
        name='{{inputName}}'
        type='{{type}}'
        class="{{className}}"
      />
      {{#if error}}
        <span class="error">{{error}}</span>
      {{/if}}
  </div>
`

export default inputTemplate
