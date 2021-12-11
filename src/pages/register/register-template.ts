const registerTemplate = `<div class='form-wrapper register-wrapper'>
  <div class='card-block'>
    <h2>Регистрация</h2>
    <form id='register-form' autocomplete='on'>
        <div class='inputs-block'>
          {{#each inputs}}
            {{{input}}}
          {{/each}}
        </div>
        <div class='buttons-block'>
          <label><button id='register-sign-up' type='submit' class='button' form='register-form'>Зарегистрироваться</button></label>
          <label>{{{button}}}</label>  
        </div>
    </form>
  </div>
</div>`

export default registerTemplate
