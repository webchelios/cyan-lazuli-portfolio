import './ModalWork.css'

export const ModalWork = (piece) => {
    const container = document.createElement('div')
    container.classList.add('modal-view')

    const imgBig = document.createElement('img')
    imgBig.classList.add('image-big')
    imgBig.src = `/images/${piece}`

    container.append(imgBig)

    container.addEventListener('click', () => {
        container.style.display = "none"
    })

    return container
}