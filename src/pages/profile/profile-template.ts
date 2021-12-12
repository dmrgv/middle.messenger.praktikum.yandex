const profileTemplate = `<div class='align-center wrapper'>
  <div class="profile-block">
    <form id="profile-form">
        <div class='photo'>Avatar</div>
        <div>
          <div class='inputs-block'></div>
        </div>
        <div class='buttons-block'>
          <label>{{{logoutButton}}}</label>
          <div class="align-right">   
              <label>{{{backButton}}}</label>  
              <label><button id='profile-save' type='submit' class='button'>{{submitButtonText}}</button></label>
          </div>
        </div>
    </form>
  </div>
</div>`

export default profileTemplate
