var doc = document;
window.onload = function () {
    searchEff();
    menu();
};
function searchEff() {
    var $sForm = document.getElementById('search-form').classList;
    var $search = doc.getElementById('search');
    $search
        .addEventListener('focus', function () { return $sForm.add('focus'); });
    $search
        .addEventListener('focusout', function () { return $sForm.remove('focus'); });
}
function menu() {
    var $left = document.getElementById('left').classList;
    var $right = document.getElementById('right');
    var $menu = doc.getElementById('menu');
    $menu.addEventListener('click', function () {
        if (!$left.contains('show')) {
            $left.add('show');
            $menu.classList.add('margin-left-100');
            $right.addEventListener('click', function () { return closeMenu(); });
        }
        else {
            closeMenu();
            $right.removeEventListener('click', function () { }, true);
        }
    });
    function addRightClose() {
    }
    function closeMenu() {
        $left.remove('show');
        $menu.classList.remove('margin-left-100');
    }
}
