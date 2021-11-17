export const profileTemplate = `<div class='align-center wrapper'>
  <div>
    <div class='photo'>Avatar</div>
    <div>
      <div class='inputs-block'>
        {{#each inputs}}
          <span>{{this.name}}</span>
          <input name='{{this.inputName}}' type='{{this.type}}' />
        {{/each}}
      </div>
    </div>
    <div>
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
    </div>
  </div>
</div>`

