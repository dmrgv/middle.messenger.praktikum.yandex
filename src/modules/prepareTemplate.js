import Handlebars from 'handlebars'

export function prepareTemplate(templateStr, data) {
    document.addEventListener('DOMContentLoaded', () => {
        document.body.innerHTML = Handlebars.compile(templateStr)(data);
    })
}
