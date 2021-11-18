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
    <!--<div>
      <div class='inputs-block'>
        <div class='password_tip'>Для смены пароля введите новый и подтвердите</div>
        {{#each passInputs}}
          <span>{{this.name}}</span>
          <input name='{{this.inputName}}' type='{{this.type}}' />
        {{/each}}
        <div class='button-save'>
          <button><a href="./">Выйти</a></button>
          <button><a href="./chats.html">Сохранить</a></button>
        </div>
      </div>
    </div>-->
    <div class='buttons-block'>
      <button id='profile-back' class='link'><a href="./chats.html">Назад</a></button>  
      <button id='profile-save' disabled='disabled'>Сохранить</button>
    </div>
  </div>
</div>`

