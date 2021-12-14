const profileTemplate = `
    <div class="align-center wrapper">
      <div class="profile-block">
        <form id="profile-form">
            <div class="photo">Avatar</div>
            <div>
              <div class="inputs-block"></div>
            </div>
            <div class="buttons-block">
              {{{logoutButton}}}
              <div class="align-right">   
                  {{{backButton}}}                  
                  {{{submitButton}}}
              </div>
            </div>
        </form>
      </div>
    </div>
`

export default profileTemplate
