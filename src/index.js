import {sum} from './modules/sum';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#root');
    root.textContent = sum(6, 10).toString();

    // const compiled = handlebars.compile(template);
    // const html = compiled({ firstname: 'Иван', lastname: 'Иванов' })
    // document.body.innerHTML = html
});
