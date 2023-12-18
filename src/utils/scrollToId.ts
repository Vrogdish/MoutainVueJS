export const scrollToId = (id: string) => {
    const elementPos = document.getElementById(id)?.offsetTop
    if (elementPos) {
      const pos = elementPos - 250
      window.scroll({
        top: pos,
        behavior: 'smooth'
      })
    }
  }
  
export  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }
  