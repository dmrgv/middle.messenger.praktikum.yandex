import Block from './block'

function prepareTemplate(component: Block, root: HTMLElement = document.body) {
  document.addEventListener('DOMContentLoaded', () => {
    root.append(component.getContent())
  })
  return root
}

export default prepareTemplate
