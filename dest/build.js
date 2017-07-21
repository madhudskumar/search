var doc = document;
window.onload = function () {
    searchEff();
};
function searchEff() {
    var sForm = document.getElementById('search-form').classList;
    doc.getElementById('search')
        .addEventListener('focus', function () { return sForm.add('focus'); });
    document.getElementById('search')
        .addEventListener('focusout', function () { return sForm.remove('focus'); });
}
