export const chatsTemplate = `<div>
  <div class='wrapper'>
    <div class='list'>
      <div class='search-wrapper'>
        <div class='profile-menu'><a href="{{urlToSettings}}">Профиль ></a></div>
        <input class='search' placeholder="Поиск" />
      </div>

      {{#each chats}}
        <div class='contact'>
          <div class='content'>  
            <span>{{this.name}}</span>
          </div>
        </div>
      {{/each}}

      <a href="./500.html">
        <div class='contact'>
          <div class='content'>  
            <span>Чат с ошибкой 500</span>
          </div>
        </div>
      </a>

      <a href='./404.html'>
        <div class='contact'>
          <div class='content'>  
            <span>Чат с ошибкой 404</span>
          </div>
        </div>
      </a>
    </div>
    <div class='messages'>
      <div class='align-center messages-list'>
        <span class='messages-place'>
          {{emptyText}}
        </span>
      </div>
    </div>
  </div>
</div>`
