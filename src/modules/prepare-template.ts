import * as Handlebars from 'handlebars'

function prepareTemplate(templateStr: string, data: object) {
  document.addEventListener('DOMContentLoaded', () => {
    document.body.innerHTML = Handlebars.compile(templateStr)(data)
  })
}

export default prepareTemplate
