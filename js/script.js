'use strict';
document.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    const hideTabContent = () => {
        tabsContent.forEach(item => {
        item.style.display = 'none';
        });
        
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    };
    const showTabContent = (i = 0) => {
        tabsContent[i].style.display = 'block';

        tabs[i].classList.add('tabheader__item_active');
    };
    
    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (e) => {
        tabs.forEach((item, i) => {
        if(e.target.className === 'tabheader__item'){
                hideTabContent();
                showTabContent(i);
            }
        });
    });
    
});