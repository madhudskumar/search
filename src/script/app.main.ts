const doc = document;

window.onload = () => {
    searchEff();
};

function searchEff(){
    const sForm = document.getElementById('search-form').classList;
    doc.getElementById('search')
        .addEventListener('focus', () => sForm.add('focus'));

    document.getElementById('search')
        .addEventListener('focusout', () => sForm.remove('focus'));
}