export const registerTemplate = `<div class='register-wrapper'>
  <div class='register-block'>
    <h2>Регистрация</h2>
    <div class='inputs-block'>
      {{#each inputs}}
        <span>{{this.name}}</span>
        <input name='{{this.inputName}}' type='{{this.type}}' />
      {{/each}}
    </div>
    <div class='buttons-block'>
      <button id='register-sign-up'><a href="./chats.html">Зарегистрироваться</a></button>
      <button id='register-sign-in'><a href="./">Войти</a></button>
    </div>
  </div>
</div>`