import Block from './block'

export default function render(component: Block, root: HTMLElement = document.body) {
  root.append(component.getContent())
  return root
}
