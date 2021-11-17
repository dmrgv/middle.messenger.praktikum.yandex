export const chatsTemplate = `<div>
  <div class='wrapper'>
    <div class='list'>
      <div class='search-wrapper'>
        {{!-- [TODO] change this to burger image --}}
        <div class='profile-menu'><a href="{{urlToSettings}}">S</a></div>
        <input class='search' placeholder="Поиск" />
      </div>

      {{#each chats}}
        <div class='contact'>
          <span>{{this.name}}</span>
        </div>
      {{/each}}

      <a href="./500.html">
        <div class='contact'>
          <span>go to 500</span>
        </div>
      </a>

      <a href='./404.html'>
        <div class='contact'>
          <span>go to 404</span>
        </div>
      </a>
    </div>
    <div class='messages'>
      <div class='position-on-center messages-list'>
        <span class='messages-place'>
          {{emptyText}}
        </span>
      </div>

      <input type="text" class='_chats__message-input' />
    </div>
  </div>
</div>`
