const header = document.querySelector('.header')
const body = document.body

const hiddenMenu = document.querySelector('.header__hidden-menu')
const navigationMenu = document.querySelector('.header__navigation')

hiddenMenu.addEventListener("click", () => {
    hiddenMenu.classList.toggle('active')
    navigationMenu.classList.toggle('active')
    document.body.classList.toggle('hidden')
})



const registrationButton = document.querySelector('.header__registration')
const modalPage = document.querySelector('.modal-registration')
const modalContent = document.querySelector('.modal-registration__content')

const scrollLineSize = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px'

registrationButton.addEventListener("click", () => {
    modalPage.classList.remove('hidden')
    body.classList.add('hidden')
    body.style.paddingRight = scrollLineSize
    header.style.paddingRight = scrollLineSize
})

modalPage.addEventListener("click", (event) => {
    if (!event.target.closest('.modal-registration__content') ||
        event.target.closest('.close-modal')
    ) {
        modalPage.classList.add('hidden')
        body.classList.remove('hidden')
        body.style.paddingRight = 0
        header.style.paddingRight = 0
    }
})



document.querySelectorAll('.facilities-card__image').forEach((i, index) => {
    if (index % 3 == 0) {
        i.insertAdjacentHTML('beforeend',
            `<svg width="75" height="77" viewBox="0 0 75 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M61.4298 13.009C67.7005 19.522 72.5461 26.4629 73.8762 34.0693C75.2063 41.6282 72.9736 49.8526 69.0782 57.5541C65.2303 65.2556 59.6722 72.4817 52.3564 75.3817C45.0406 78.2816 35.9671 76.9029 26.7036 74.2407C17.4876 71.5784 8.08157 67.6802 3.61608 60.6442C-0.849402 53.5607 -0.374351 43.3396 2.23843 34.3545C4.80371 25.3219 9.55423 17.5729 16.1574 11.1074C22.7607 4.68949 31.2641 -0.444848 39.34 0.0305536C47.4158 0.505955 55.1117 6.54355 61.4298 13.009Z" fill="#F7C7C4" />
            </svg>`
        )
    } else if (index % 3 == 1) {
        i.insertAdjacentHTML('beforeend',
            `<svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.6342 21.8203C-3.84238 35.4619 5.0093 57.1733 19.7833 67.1003C34.5574 77.0273 55.1901 75.2341 66.0796 65.8834C76.969 56.5328 78.1153 39.6249 73.2755 26.8158C68.4358 14.0708 57.61 5.42468 42.2628 3.95164C26.9156 2.47859 7.11078 8.17863 1.6342 21.8203Z" fill="#F7C7C4" />
            </svg>`
        )
    } else {
        i.insertAdjacentHTML('beforeend',
            `<svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M74.3658 21.8203C79.8424 35.4619 70.9907 57.1733 56.2167 67.1003C41.4426 77.0273 20.8099 75.2341 9.92045 65.8834C-0.969034 56.5328 -2.11529 39.6249 2.72448 26.8158C7.56424 14.0708 18.39 5.42468 33.7372 3.95164C49.0844 2.47859 68.8892 8.17863 74.3658 21.8203Z" fill="#F7C7C4" />
            </svg>`
        )
    }
})


const observer = new IntersectionObserver((entries) => {
    entries.forEach(item => {
        if (item.isIntersecting) {
            item.target.classList.add('__scroll-visible')
        } else {
            item.target.classList.remove('__scroll-visible')
        }
    })
})

const hiddenElementForScroll = document.querySelectorAll('.__scroll-animations')
hiddenElementForScroll.forEach(item => observer.observe(item))