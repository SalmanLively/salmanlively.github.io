let navItems = [...document.querySelectorAll('.nav-item')]

navItems.forEach(el => {
    el.addEventListener('click', function (ev) {
        navItems.forEach(el2 => el2.classList.remove('active'))

        el.classList.add('active')

        let clickedPage = this.getAttribute('data-page-id')

        getPageData(clickedPage)
    })
})

navItems[0].click()

function getPageData(pageId) {
    var myReq = new Request(`public/${pageId}.html`)
    fetch(myReq).then(response => {
        response.text().then(function (text) {
            document.querySelector('section#data').innerHTML = text
        })
    })
}





// Waving hand
navItems[4].addEventListener('click', function (ev) {

    setTimeout(() => {
        let waving = document.querySelector('.waving');


        waving.addEventListener('click', function (ev) {
            waving.classList.add('animate')

            setTimeout(() => {
                waving.classList.remove('animate')
            }, 300);
        });


    }, 200);
});

