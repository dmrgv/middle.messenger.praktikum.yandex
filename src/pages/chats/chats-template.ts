const chatsTemplate = `
    <div>
      <div class="wrapper">
        <div class="list">
          <div class="search-wrapper">
            <div class="profile-menu"><a href="{{urlToSettings}}">Профиль ></a></div>
            <input class="search" placeholder="Поиск" />
          </div>
    
          {{#each chats}}
            <div class="contact">
              <div class="content">  
                <span>{{this.name}}</span>
              </div>
            </div>
          {{/each}}
    
          <div class="contact">
            <div class="content">  
              <a href="./500.html">Чат с ошибкой 500</a>
            </div>
          </div>
    
          <div class="contact">
            <div class="content">  
              <a href="./404.html">Чат с ошибкой 404</a>
            </div>
          </div>
        </div>
        <div class="messages">
          <div class="align-center messages-list">
            <span class="messages-place">
              {{emptyText}}
            </span>
          </div>
        </div>
      </div>
    </div>
`

export default chatsTemplate
