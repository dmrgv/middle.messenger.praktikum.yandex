const loginTemplate = `<div class='form-wrapper login-wrapper'>
  <div class='card-block'>
    <h2>Вход</h2>
    <form autocomplete="off">
        <div class='inputs-block'>
          {{#each inputs}}
          <div class='input-block'>
            <label for='{{this.inputId}}'>{{this.name}}</label>
            <input id='{{this.inputId}}' name='{{this.inputName}}' type='{{this.type}}' />
          </div>  
          {{/each}}
        </div>
        <div class='buttons-block'>
          <!-- Здесь будет кнопка submit отправки формы (пока переход) -->     
          <label><a id='login-sign-in' href='./chats.html' class='button'>Авторизоваться</a></label>
          <label><a id='login-sign-up' href='./register.html' class='link'>Нет аккаунта?</a></label>
        </div>
    </form>
  </div>
</div>`

export default loginTemplate
