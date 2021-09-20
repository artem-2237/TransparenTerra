(function() {
    let page = window.location.pathname.split("/").pop();

    var hammertime = new Hammer(document.body);
    hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL });

    let hero = document.querySelector('.main-section_hero_primary');
    let heroTop = document.querySelector('.hero__top_primary');
    let heroMid = document.querySelector('.hero__mid_primary');
    let heroBot = document.querySelector('.hero__bot_primary');
    if (document.querySelector('.hero__title_primary')) {
        var heroTitle = document.querySelector('.hero__title_primary');
    } 
    let contentFirst = document.querySelector('.content-first');
    let contentSecond = document.querySelector('.content-second');
    let contentThird = document.querySelector('.content-third');
    if (document.querySelector('.content-fourth')) {
        var contentFourth = document.querySelector('.content-fourth');
    }
    if (document.querySelector('.content-fifth')) {
        var contentFifth = document.querySelector('.content-fifth');
    }
    let sc = 0;
    let main = document.getElementById('main');
    let first = document.getElementById('first');
    let second = document.getElementById('second');
    let third = document.getElementById('third');
    if (document.getElementById('fourth')) {
        var fourth = document.getElementById('fourth');
    }
    if (document.getElementById('fifth')) {
        var fifth = document.getElementById('fifth');
    }
    var timeout;

    if (window.matchMedia("(max-width: 767px)").matches) {
        if (!hero.classList.contains('main-section_hero')) {
            document.querySelector('.main-section').style.height = '100vh';
            document.querySelector('.main-section').style.display = 'flex';
            document.querySelector('.main-section').style.alignItems = 'center';
        }
    }
    

    function toMain() {
        clearTimeout(timeout);
        $('.content-first').hide();
        $('.content-second').hide();
        $('.content-third').hide();
        if (contentFourth) $('.content-fourth').hide();
        if(contentFifth) $('.content-fifth').hide();

        hero.classList.remove('main-section_hero');
        heroTop.classList.remove('hero__top');    
        heroMid.classList.remove('hero__mid');    
        heroBot.classList.remove('hero__bot');  
        if (heroTitle) {
            heroTitle.classList.remove('hero__title');
        }
        
        if(page == 'how-does-it-work.html') {
            document.querySelector('.hero__mid_primary > span').style.display = 'inline';
            document.querySelector('.hero__bot_primary > span').style.display = 'none';
        }

        for (let item of document.querySelectorAll('.nav__sub-item')) {
            item.style.background = '#bbbfbf';
        }

        if (window.matchMedia("(max-width: 767px)").matches) {
            if (!hero.classList.contains('main-section_hero')) {
                document.querySelector('.main-section').style.height = '100vh';
                document.querySelector('.main-section').style.display = 'flex';
                document.querySelector('.main-section').style.alignItems = 'center';
            }
        }
    }
    function toFirst () { 
        clearTimeout(timeout);
        timeout = setTimeout(()=> $('.content-first').fadeIn(200), 210)
        $('.content-second').hide();
        $('.content-third').hide();
        if (contentFourth) $('.content-fourth').hide();
        if(contentFifth) $('.content-fifth').hide();

        hero.classList.add('main-section_hero');
        heroTop.classList.add('hero__top');    
        heroMid.classList.add('hero__mid');    
        heroBot.classList.add('hero__bot');  
        if (heroTitle) {
            heroTitle.classList.add('hero__title');
        }
        

        for (let item of document.querySelectorAll('.nav__sub-item')) {
            item.style.background = '#bbbfbf';
        }

        first.style.background = '#ffffff';

        if(page == 'how-does-it-work.html') {
            document.querySelector('.hero__mid > span').style.display = 'none';
            document.querySelector('.hero__bot > span').style.display = 'inline';

            if (window.matchMedia("(max-width: 1499px)").matches) {
                document.querySelector('.hero__mid > span').style.display = 'inline';
                document.querySelector('.hero__bot > span').style.display = 'none';
        }
        }
        if (window.matchMedia("(max-width: 767px)").matches) {
            if (hero.classList.contains('main-section_hero')) {
                document.querySelector('.main-section').style.height = 'auto';
                document.querySelector('.main-section').style.display = 'block';
                document.querySelector('.main-section').style.alignItems = '';
            }
        }
    }

    function toSecond() {
        clearTimeout(timeout);
        $('.content-first').hide();
        timeout = setTimeout(()=> $('.content-second').fadeIn(200),210)
        $('.content-third').hide();
        if (contentFourth) $('.content-fourth').hide();
        if(contentFifth) $('.content-fifth').hide();

        hero.classList.add('main-section_hero');
        heroTop.classList.add('hero__top');    
        heroMid.classList.add('hero__mid');    
        heroBot.classList.add('hero__bot');  
        if (heroTitle) {
            heroTitle.classList.add('hero__title');
        }
        
        for (let item of document.querySelectorAll('.nav__sub-item')) {
            item.style.background = '#bbbfbf';
        }

        second.style.background = '#ffffff';

        if(page == 'how-does-it-work.html') {
            document.querySelector('.hero__mid > span').style.display = 'none';
            document.querySelector('.hero__bot > span').style.display = 'inline';

            if (window.matchMedia("(max-width: 1499px)").matches) {
                document.querySelector('.hero__mid > span').style.display = 'inline';
                document.querySelector('.hero__bot > span').style.display = 'none';
            }
        }
        if (window.matchMedia("(max-width: 767px)").matches) {
            if (hero.classList.contains('main-section_hero')) {
                document.querySelector('.main-section').style.height = 'auto';
                document.querySelector('.main-section').style.display = 'block';
                document.querySelector('.main-section').style.alignItems = '';
            }
        }
    }
    function toThird() {
        clearTimeout(timeout);
        $('.content-first').hide();
        $('.content-second').hide();
        timeout = setTimeout(()=> $('.content-third').fadeIn(200), 210)
        if (contentFourth) $('.content-fourth').hide();
        if(contentFifth) $('.content-fifth').hide();

        hero.classList.add('main-section_hero');
        heroTop.classList.add('hero__top');    
        heroMid.classList.add('hero__mid');    
        heroBot.classList.add('hero__bot');  
        if (heroTitle) {
            heroTitle.classList.add('hero__title');
        }

        for (let item of document.querySelectorAll('.nav__sub-item')) {
            item.style.background = '#bbbfbf';
        }

        third.style.background = '#ffffff';

        if(page == 'how-does-it-work.html') {
            document.querySelector('.hero__mid > span').style.display = 'none';
            document.querySelector('.hero__bot > span').style.display = 'inline';
    
            if (window.matchMedia("(max-width: 1499px)").matches) {
                document.querySelector('.hero__mid > span').style.display = 'inline';
                document.querySelector('.hero__bot > span').style.display = 'none';
            }
        }
        if (window.matchMedia("(max-width: 767px)").matches) {
            if (hero.classList.contains('main-section_hero')) {
                document.querySelector('.main-section').style.height = 'auto';
                document.querySelector('.main-section').style.display = 'block';
                document.querySelector('.main-section').style.alignItems = '';
            }
        }
    }
    function toFourth() {
        clearTimeout(timeout);
        $('.content-first').hide();
        $('.content-second').hide();
        $('.content-third').hide();
        timeout = setTimeout(()=> $('.content-fourth').fadeIn(200), 210);
        if(contentFifth) $('.content-fifth').hide();

        hero.classList.add('main-section_hero');
        heroTop.classList.add('hero__top');    
        heroMid.classList.add('hero__mid');    
        heroBot.classList.add('hero__bot');  
        if (heroTitle) {
            heroTitle.classList.add('hero__title');
        }

        for (let item of document.querySelectorAll('.nav__sub-item')) {
            item.style.background = '#bbbfbf';
        }

        fourth.style.background = '#ffffff';
        if (window.matchMedia("(max-width: 767px)").matches) {
            if (hero.classList.contains('main-section_hero')) {
                document.querySelector('.main-section').style.height = 'auto';
                document.querySelector('.main-section').style.display = 'block';
                document.querySelector('.main-section').style.alignItems = '';
            }
        }
    }
    function toFifth() {
        clearTimeout(timeout);
        $('.content-first').hide();
        $('.content-second').hide();
        $('.content-third').hide();
        $('.content-fourth').hide();
        timeout = setTimeout(()=> $('.content-fifth').fadeIn(200), 210);

        hero.classList.add('main-section_hero');
        heroTop.classList.add('hero__top');    
        heroMid.classList.add('hero__mid');    
        heroBot.classList.add('hero__bot');  
        if (heroTitle) {
            heroTitle.classList.add('hero__title');
        }

        for (let item of document.querySelectorAll('.nav__sub-item')) {
            item.style.background = '#bbbfbf';
        }

        fifth.style.background = '#ffffff';

        if (window.matchMedia("(max-width: 767px)").matches) {
            if (hero.classList.contains('main-section_hero')) {
                document.querySelector('.main-section').style.height = 'auto';
                document.querySelector('.main-section').style.display = 'block';
                document.querySelector('.main-section').style.alignItems = '';
            }
        }
    }

//  scroll event
    document.addEventListener('wheel', function(e){
        sc += e.deltaY;
        if (sc > 0) {
            swipeUp();
            sc = 0;
        } else if (sc < 0) {
            swipeDown();
            sc = 0;
        }
    });

//  swipe event 
    function swipeUp() {
        if (
            !hero.classList.contains('main-section_hero')
            && (contentFirst.style.display == 'none'
                || contentFirst.style.display == '')
            && (contentSecond.style.display == 'none'
                || contentSecond.style.display == '')
            && (contentThird.style.display == 'none'
                || contentThird.style.display == '')
            && (!contentFourth
                || contentFourth.style.display == 'none'
                || contentFourth.style.display == '')
            && (!contentFifth
                || contentFifth.style.display == 'none'
                || contentFifth.style.display == '')
            ) {
            toFirst();
        } else if (
            hero.classList.contains('main-section_hero')
            && (contentFirst.style.display == 'block')
            && (contentSecond.style.display == 'none'
                || contentSecond.style.display == '')
            && (contentThird.style.display == 'none'
                || contentThird.style.display == '')
            && (!contentFourth
                || contentFourth.style.display == 'none'
                || contentFourth.style.display == '')
            && (!contentFifth
                || contentFifth.style.display == 'none'
                || contentFifth.style.display == '')
            ) {
                toSecond();
        } else if(
            hero.classList.contains('main-section_hero')
            && (contentFirst.style.display == 'none'
                || contentFirst.style.display == '')
            && (contentSecond.style.display == 'block')
            && (contentThird.style.display == 'none'
                || contentThird.style.display == '')
            && (!contentFourth
                || contentFourth.style.display == 'none'
                || contentFourth.style.display == '')
            && (!contentFifth
                || contentFifth.style.display == 'none'
                || contentFifth.style.display == '')
        ) {
            toThird();
        } else if(
            hero.classList.contains('main-section_hero')
            && (contentFirst.style.display == 'none'
                || contentFirst.style.display == '')
            && (contentSecond.style.display == 'none'
                || contentSecond.style.display == '')
            && (contentThird.style.display == 'block')
            && (!contentFourth
                || contentFourth.style.display == 'none'
                || contentFourth.style.display == '')
            && (!contentFifth
                || contentFifth.style.display == 'none'
                || contentFifth.style.display == '')
        ) {
            if (contentFourth) toFourth(); 
            else document.location.href = "tools-and-principles.html";
        } else if (
            hero.classList.contains('main-section_hero')
            && (contentFirst.style.display == 'none'
                || contentFirst.style.display == '')
            && (contentSecond.style.display == 'none'
                || contentSecond.style.display == '')
            && (contentThird.style.display == 'none'
                || contentThird.style.display == '')
            && (contentFourth
                && contentFourth.style.display == 'block')
            && (!contentFifth
                || contentFifth.style.display == 'none'
                || contentFifth.style.display == '')
        ) {
            if(contentFifth) toFifth();
                else {
                    switch (page) {
                        case 'secure-data.html': document.location.href = 'guide.html';
                        break;
                        case 'guide.html': break;
                    }
                }
        } else if (
            hero.classList.contains('main-section_hero')
            && (contentFirst.style.display == 'none'
                || contentFirst.style.display == '')
            && (contentSecond.style.display == 'none'
                || contentSecond.style.display == '')
            && (contentThird.style.display == 'none'
                || contentThird.style.display == '')
            && (!contentFourth
                || contentFourth.style.display == 'none'
                || contentFourth.style.display == '')
            && (contentFifth
                && contentFifth.style.display == 'block')
        ) {
            if (page == 'tools-and-principles.html') document.location.href = "secure-data.html"; 
            else false;
        }
    }
function swipeDown() {
    if (
        !hero.classList.contains('main-section_hero')
        && (contentFirst.style.display == 'none'
            || contentFirst.style.display == '')
        && (contentSecond.style.display == 'none'
            || contentSecond.style.display == '')
        && (contentThird.style.display == 'none'
            || contentThird.style.display == '')
        && (!contentFourth
            || contentFourth.style.display == 'none'
            || contentFourth.style.display == '')
        && (!contentFifth
            || contentFifth.style.display == 'none'
            || contentFifth.style.display == '')
        ) {
            switch (page) {
                case 'tools-and-principles.html': document.location.href = 'how-does-it-work.html'; 
                break;
                case 'secure-data.html': document.location.href = 'tools-and-principles.html'; 
                break;
                case 'guide.html': document.location.href = 'secure-data.html';
                break;
            }
    } else if (
        hero.classList.contains('main-section_hero')
        && (contentFirst.style.display == 'block')
        && (contentSecond.style.display == 'none'
            || contentSecond.style.display == '')
        && (contentThird.style.display == 'none'
            || contentThird.style.display == '')
        && (!contentFourth
            || contentFourth.style.display == 'none'
            || contentFourth.style.display == '')
        && (!contentFifth
            || contentFifth.style.display == 'none'
            || contentFifth.style.display == '')
        ) {
            toMain();
    } else if(
        hero.classList.contains('main-section_hero')
        && (contentFirst.style.display == 'none'
            || contentFirst.style.display == '')
        && (contentSecond.style.display == 'block')
        && (contentThird.style.display == 'none'
            || contentThird.style.display == '')
        && (!contentFourth
            || contentFourth.style.display == 'none'
            || contentFourth.style.display == '')
        && (!contentFifth
            || contentFifth.style.display == 'none'
            || contentFifth.style.display == '')
    ) {
        toFirst();
    } else if(
        hero.classList.contains('main-section_hero')
        && (contentFirst.style.display == 'none'
            || contentFirst.style.display == '')
        && (contentSecond.style.display == 'none'
            || contentSecond.style.display == '')
        && (contentThird.style.display == 'block')
        && (!contentFourth
            || contentFourth.style.display == 'none'
            || contentFourth.style.display == '')
        && (!contentFifth
            || contentFifth.style.display == 'none'
            || contentFifth.style.display == '')
    ) {
        toSecond();
    } else if (
        hero.classList.contains('main-section_hero')
        && (contentFirst.style.display == 'none'
            || contentFirst.style.display == '')
        && (contentSecond.style.display == 'none'
            || contentSecond.style.display == '')
        && (contentThird.style.display == 'none'
            || contentThird.style.display == '')
        && (contentFourth
            && contentFourth.style.display == 'block')
        && (!contentFifth
            || contentFifth.style.display == 'none'
            || contentFifth.style.display == '')
    ) {
        toThird();
    } else if (
        hero.classList.contains('main-section_hero')
        && (contentFirst.style.display == 'none'
            || contentFirst.style.display == '')
        && (contentSecond.style.display == 'none'
            || contentSecond.style.display == '')
        && (contentThird.style.display == 'none'
            || contentThird.style.display == '')
        && (!contentFourth
            || contentFourth.style.display == 'none'
            || contentFourth.style.display == '')
        && (contentFifth
            && contentFifth.style.display == 'block')
    ) {
        toFourth();
    }
}

    
    // detectswipe('body',swipe);

    hammertime.on("swipeup", swipeUp); 
    hammertime.on("swipedown", swipeDown);

    main.addEventListener('click', toMain);
    first.addEventListener('click', toFirst);
    second.addEventListener('click', toSecond);
    third.addEventListener('click', toThird);
    if (fourth) {
        fourth.addEventListener('click', toFourth);
    }
    if (fifth) {
        fifth.addEventListener('click', toFifth);
    }
})()










