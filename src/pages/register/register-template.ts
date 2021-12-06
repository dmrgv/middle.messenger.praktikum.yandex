const registerTemplate = `<div class='form-wrapper register-wrapper'>
  <div class='card-block'>
    <h2>Регистрация</h2>
    <form autocomplete="on">
        <div class='inputs-block'>
          {{#each inputs}}
          <div class='input-block'>
            <label for='{{this.inputId}}'>{{this.name}}</label>
            {{#if autocomplete}}
            <input id='{{this.inputId}}' name='{{this.inputName}}' type='{{this.type}}' autocomplete='{{this.autocomplete}}' />
            {{else}}
            <input id='{{this.inputId}}' name='{{this.inputName}}' type='{{this.type}}' />
            {{/if}}
          </div>  
          {{/each}}
        </div>
        <div class='buttons-block'>
          <label><a id='register-sign-up' href='./chats.html' class='button'>Зарегистрироваться</a></label>
          <label><a id='register-sign-in' href='./index.html' class='link'>Войти</a></label>
        </div>
    </form>
  </div>
</div>`

export default registerTemplate
