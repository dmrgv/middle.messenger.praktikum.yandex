export const registerTemplate = `<div class='form-wrapper register-wrapper'>
  <div class='card-block'>
    <h2>Регистрация</h2>
    <form autocomplete="on">
        <div class='inputs-block'>
          {{#each inputs}}
          <div class='input-block'>
            <span>{{this.name}}</span>
            {{#if autocomplete}}
            <input name='{{this.inputName}}' type='{{this.type}}' autocomplete='{{this.autocomplete}}' />
            {{else}}
            <input name='{{this.inputName}}' type='{{this.type}}' />
            {{/if}}
          </div>  
          {{/each}}
        </div>
        <div class='buttons-block'>
          <button id='register-sign-up'><a href="./chats.html">Зарегистрироваться</a></button>
          <button id='register-sign-in' class="link"><a href="./">Войти</a></button>
        </div>
    </form>
  </div>
</div>`