import Block from './block'

export default function render(component: Block) {
  const root = document.getElementById('content') as HTMLElement

  if (!root) {
    throw new Error('not found content element')
  }
  root.append(component.getContent())
  return root
}
