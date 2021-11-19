export const profileTemplate = `<div class='align-center wrapper'>
  <div class="profile-block">
    <div class='photo'>Avatar</div>
    <div>
      <div class='inputs-block'>
        {{#each inputs}}
        <div class='input-block'>
          <span>{{this.name}}</span>
          <input name='{{this.inputName}}' type='{{this.type}}' />
        </div>
        {{/each}}
      </div>
    </div>
    <div class='buttons-block'>
      <button id='profile-logout' class="link red"><a href="./">Выйти</a></button>
      <div class="align-right">   
          <button id='profile-back' class='link'><a href="./chats.html">Назад</a></button>  
          <button id='profile-save' disabled='disabled'>Сохранить</button>
      </div>
    </div>
  </div>
</div>`

