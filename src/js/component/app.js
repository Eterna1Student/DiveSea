// Поведение табов

const tabs = document.querySelectorAll('.content__tab')
const tabBox = document.querySelectorAll('.tab__box')


tabs.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
        document.querySelector('.content__tab_active').classList.remove('content__tab_active')
        e.currentTarget.classList.add('content__tab_active')
        tabBox.forEach((tabBox, ind) => {
            if (index === ind) tabBox.classList.add('tab__box_active')
            else tabBox.classList.remove('tab__box_active')
        })
    }) 
}) 

// Поведение dropdown

document.querySelectorAll('.dropdown').forEach(function (dropdownWrapper) {

    const dropdownBtn = dropdownWrapper.querySelector('.dropdown__btn');
    const dropdownList = dropdownWrapper.querySelector('.dropdown__list');
    const dropdownItems = dropdownList.querySelectorAll('.dropdown__item')
    
    dropdownBtn.addEventListener('click', function () {
        dropdownList.classList.toggle('dropdown__list-active'); //  открываем/закрываем dropdown
    })
    
    dropdownItems.forEach(function (ListItem) {
        ListItem.addEventListener('click', function (e) {
            e.stopPropagation();
            dropdownList.classList.remove('dropdown__list-active');  //закрытие по клику на выбраный фильтр
        })
    })
    
    document.addEventListener('click', function (e) {
        if ( e.target !== dropdownBtn) {
            dropdownList.classList.remove('dropdown__list-active')  //закрытие по клику вне dropdown
        }
    })
    
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Tab' || e.key === 'Escape') {
            dropdownList.classList.remove('dropdown__list-active')  //закрытие по клику на Tab/Escape
        }
    })    
})



