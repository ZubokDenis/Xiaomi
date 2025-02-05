window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.inf'),
          tabContent = document.querySelectorAll('.img-tab'),
          tabParent = document.querySelector('.bat__info');

    function hideTabContent() {
        tabContent.forEach(item => {
            item.style.display = 'none';
        });
        tabs.forEach(item => {
            item.classList.remove('active');
        });
    }

    function showTabContent(i = 0) {
        tabContent[i].style.display = 'block';
        tabs[i].classList.add('active');
    }

    hideTabContent();
    showTabContent();

    tabParent.addEventListener('click', (event) => {
        const target = event.target.closest('.inf');
        if (target) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });



    //slider


        const left = document.querySelector('.arrow-l'),
        right = document.querySelector('.arrow-r')
        slider = document.querySelector('.items');
    
    let interval;
    let paddingLeft = parseInt(window.getComputedStyle(slider).paddingLeft, 10);
    left.addEventListener('mousedown', () => {
        
        interval = setInterval(() => {
            paddingLeft += 5;
            slider.style.right = paddingLeft + 'px';
        }, 40);
    });
    
    left.addEventListener('mouseup', () => {
        clearInterval(interval);
    });
    
    left.addEventListener('mouseleave', () => {
        clearInterval(interval);
    });




  right.addEventListener('mousedown', () => {
    interval = setInterval(() => {
        paddingLeft = paddingLeft - 5;
        slider.style.right = paddingLeft + 'px';
    }, 40);
});

right.addEventListener('mouseup', () => {
    clearInterval(interval);
});

right.addEventListener('mouseleave', () => {
    clearInterval(interval);
});


        
});