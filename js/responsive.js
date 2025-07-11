const executeResponsive = () => {
    if (window.innerWidth < 501) {
        // Removemos la clase ancho del body
        const element = document.querySelector('.ancho')
        if (element) element.classList.remove('ancho')
        // Mostramos el otro elemento del responsive
        const mobileElement = document.querySelector('.mobile')
        if (mobileElement) mobileElement.setAttribute('style', 'display: flex;')
        document.body.style.background = '#000000';
        const desktopElement = document.querySelector('.desktop')
        console.log(desktopElement)
        if (desktopElement) desktopElement.setAttribute('style', 'display: none;')
    } else {
        // Removemos la clase ancho del body
        const element = document.body
        if (element) element.classList.add('ancho')
        // Mostramos el otro elemento del responsive
        const mobileElement = document.querySelector('.mobile')
        if (mobileElement) mobileElement.setAttribute('style', 'display: none;')
        document.body.style.background = '#000000';
        const desktopElement = document.querySelector('.desktop')
        console.log(desktopElement)
        if (desktopElement) desktopElement.setAttribute('style', 'display: block;')
    }
}

window.addEventListener('resize', executeResponsive)
window.addEventListener('DOMContentLoaded', executeResponsive)