'use strict';
document.addEventListener('DOMContentLoaded', () => {

    //console.log//console.log//console.log//console.log
    function log(arg){
        console.log(arg);
    }

    //tabs//tabs//tabs//tabs//tabs//tabs//tabs//tabs//tabs
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

    //timer//timer//timer//timer//timer//timer//timer//timer
    const timeLine = '2021-01-02';
    
    function getTime (line){
        let days, hours, minutes, seconds;
        
        const time = Date.parse(line) - Date.parse(new Date());
        if( time <= 0 ){
            days = 0,
            hours = 0,
            minutes = 0,
            seconds = 0;
        } else {
            days = Math.floor(time / (1000 * 60 * 60 * 24)),
            hours = Math.floor((time / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((time / (1000 * 60)) % 60),
            seconds = Math.floor((time / 1000) % 60);
        }

        return {
            time,
            days,
            hours,
            minutes,
            seconds 
        };

    }

    function getZero(num){

        if(num >= 0 && num < 10){
            return `0${num}`;
        } else {
            return num;
        }

    }

    function setClock(selector, timeLine){

        let timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds');

        const timeInterval = setInterval(reloadTime, 1000);

        reloadTime();

        function reloadTime(){
            const t = getTime(timeLine);
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes); 
            seconds.innerHTML = getZero(t.seconds);
            if(t.time <= 0 ){
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', timeLine);

});