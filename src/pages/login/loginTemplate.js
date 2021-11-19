export const loginTemplate = `<div class='form-wrapper login-wrapper'>
  <div class='card-block'>
    <h2>Вход</h2>
    <div class='inputs-block'>
      {{#each inputs}}
      <div class='input-block'>
        <span>{{this.name}}</span>
        <input name='{{this.inputName}}' type='{{this.type}}' />
      </div>  
      {{/each}}
    </div>
    <div class='buttons-block'>
      <button id='login-sign-in'><a href="./chats.html">Авторизоваться</a></button>
      <button id='login-sign-up' class="link"><a href="./register.html">Нет аккаунта?</a></button>
    </div>
  </div>
</div>`
