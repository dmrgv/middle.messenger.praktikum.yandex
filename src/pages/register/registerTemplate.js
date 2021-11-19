export const registerTemplate = `<div class='form-wrapper register-wrapper'>
  <div class='card-block'>
    <h2>Регистрация</h2>
    <div class='inputs-block'>
      {{#each inputs}}
      <div class='input-block'>
        <span>{{this.name}}</span>
        <input name='{{this.inputName}}' type='{{this.type}}' />
      </div>  
      {{/each}}
    </div>
    <div class='buttons-block'>
      <button id='register-sign-up'><a href="./chats.html">Зарегистрироваться</a></button>
      <button id='register-sign-in' class="link"><a href="./">Войти</a></button>
    </div>
  </div>
</div>`