export const loginTemplate = `<div class='login-wrapper'>
  <div class='login-block'>
    <h2>Вход</h2>
    <div class='inputs-block'>
      {{#each inputs}}
        <span>{{this.name}}</span>
        <input name='{{this.inputName}}' type='{{this.type}}' />
      {{/each}}
    </div>
    <div class='buttons-block'>
      <button id='login-sign-in'><a href="./chats.html">Войти</a></button>
      <button id='login-sign-up'><a href="./register.html">Зарегистрироваться</a></button>
    </div>
  </div>
</div>`
