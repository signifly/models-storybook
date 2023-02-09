export const createLink = ({ label, url, newTab }) => {
  const link = document.createElement('a')
  link.className = 'sb-link'
  link.innerText = label
  link.href = url
  if (newTab) {
    link.target = '_blank'
  }
  return link
}
