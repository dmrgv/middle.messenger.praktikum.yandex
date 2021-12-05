import * as Handlebars from 'handlebars'

export function prepareTemplate(templateStr: string, data: object) {
    document.addEventListener('DOMContentLoaded', () => {
        document.body.innerHTML = Handlebars.compile(templateStr)(data);
    })
}
