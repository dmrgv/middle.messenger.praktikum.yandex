const authTemplate = `
    <div class="form-wrapper login-wrapper">
      <div class="card-block">
        <h2>Вход</h2>
        <form id="login-form" autocomplete="off">
            <div class="inputs-block">
              {{#each inputs}}
                {{{input}}}
              {{/each}}
            </div>
            <div class="buttons-block">     
              <button id="login-sign-in" type="submit" class="button" form="login-form">Авторизоваться</button>
              {{{button}}}
            </div>
        </form>
      </div>
    </div>
`

export default authTemplate
