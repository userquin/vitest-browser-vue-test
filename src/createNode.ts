export function createNode() {
  const div = document.createElement('div')
  const body = document.body
  body.style.display = 'grid'
  body.style.placeItems = 'center'
  body.style.padding = '1rem'
  body.style.border = '3px solid #ccc'
  body.style.borderRadius = '4px'
  div.textContent = 'Hello World'
  body.appendChild(div)

  return div
}
