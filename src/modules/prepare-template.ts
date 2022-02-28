function prepareTemplate(component: object, root: HTMLElement = document.body) {
  // document.addEventListener('DOMContentLoaded', () => {
  //   root.append(component.getContent())
  // })
  // eslint-disable-next-line no-param-reassign
  root.innerHTML = ''
  root.append(component.getContent())
  return root
}

export default prepareTemplate
