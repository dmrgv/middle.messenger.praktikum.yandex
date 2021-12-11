const authTemplate = `<div class='form-wrapper login-wrapper'>
  <div class='card-block'>
    <h2>Вход</h2>
    <form id='login-form' autocomplete='off'>
        <div class='inputs-block'>
          {{#each inputs}}
            {{{input}}}
          {{/each}}
        </div>
        <div class='buttons-block'>     
          <label><button id='login-sign-in' type='submit' class='button' form='login-form'>Авторизоваться</button></label>
          <label>{{{button}}}</label>
        </div>
    </form>
  </div>
</div>`

export default authTemplate
