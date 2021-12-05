export const profileTemplate = `<div class='align-center wrapper'>
  <div class="profile-block">
    <form>
        <div class='photo'>Avatar</div>
        <div>
          <div class='inputs-block'>
            {{#each inputs}}
            <div class='input-block'>
              <label for="{{this.inputId}}">{{this.name}}</label>
              <input id='{{this.inputId}}' name='{{this.inputName}}' type='{{this.type}}' />
            </div>
            {{/each}}
          </div>
        </div>
        <div class='buttons-block'>
          <label><a id='profile-logout' href='./index.html' class='link red'>Выйти</a></label>
          <div class="align-right">   
              <label><a id='profile-back' href="./chats.html" class='link'>Назад</a></label>  
              <button id='profile-save' type='submit' class='button' disabled='disabled'>Сохранить</button>
          </div>
        </div>
    </form>
  </div>
</div>`

