import Block from './block'

function prepareTemplate(component: Block, root: HTMLElement = document.body) {
  // eslint-disable-next-line no-param-reassign
  root.innerHTML = ''
  root.append(component.getContent())
  return root
}

export default prepareTemplate
