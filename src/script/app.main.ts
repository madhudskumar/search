const doc = document;

window.onload = () => {
    searchEff();
    menu();
};

function searchEff(){
    const $sForm = document.getElementById('search-form').classList;
    const $search = doc.getElementById('search');

    $search
        .addEventListener(
            'focus',
            () => $sForm.add('focus'));

    $search
        .addEventListener(
            'focusout',
            () => $sForm.remove('focus')
        );
}

function menu(){
    const $left = document.getElementById('left').classList;
    const $right = document.getElementById('right');
    const $menu = doc.getElementById('menu');

    $menu.addEventListener(
        'click',
        () => {
            if(!$left.contains('show')){
                $left.add('show');
                $menu.classList.add('margin-left-100');
                $right.addEventListener('click', () => closeMenu());
            }else{
                closeMenu();
                $right.removeEventListener('click', () => {}, true);

            }
        });

    function addRightClose() {
    }

    function closeMenu(){
        $left.remove('show');
        $menu.classList.remove('margin-left-100');
    }
}