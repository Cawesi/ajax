// Utilizando GET
document.addEventListener('DOMContentLoaded', function(){

    const xhttp = new XMLHttpRequest();
    const endpoint = 'https://api.github.com/users/Cawesi';

    xhttp.onreadystatechange = function(){
        if ( this.readyState == 4 && this.status == 200) {
            const response = this.responseText;
            const retorno = JSON.parse(response);

            const name = retorno.name;
            const user = retorno.login;
            const github = retorno.html_url;
            const repos = retorno.public_repos;
            const followers = retorno.followers;
            const following = retorno.following;
            const imgProfile = retorno.avatar_url;

            document.getElementsByClassName('profile-avatar')[0].setAttribute('src', imgProfile);
            document.getElementsByClassName('profile-name')[0].innerText = name;
            document.getElementsByClassName('profile-username')[0].innerText = `@${user}`;
            document.getElementsByClassName('tags')[0].innerText = repos;
            document.getElementsByClassName('tags')[1].innerText = followers;
            document.getElementsByClassName('tags')[2].innerText = following;
            document.getElementsByClassName('profile-link')[0].setAttribute('href', github);
            document.getElementsByClassName('profile-link')[0].setAttribute('target', '_blank');
        }
    }
    xhttp.open("GET", endpoint, true);
    xhttp.send();
});


// Ultilizando Fetch
/*
document.addEventListener('DOMContentLoaded', function(){
    const endpoint = 'https://api.github.com/users/Cawesi';

    fetch(endpoint)
    .then(function(reponse) {
        return reponse.json();
    })
    .then(function(retorno) {
        const name = retorno.name;
        const user = retorno.login;
        const github = retorno.html_url;
        const repos = retorno.public_repos;
        const followers = retorno.followers;
        const following = retorno.following;
        const imgProfile = retorno.avatar_url;

        document.getElementsByClassName('profile-avatar')[0].setAttribute('src', imgProfile);
        document.getElementsByClassName('profile-name')[0].innerText = name;
        document.getElementsByClassName('profile-username')[0].innerText = `@${user}`;
        document.getElementsByClassName('tags')[0].innerText = repos;
        document.getElementsByClassName('tags')[1].innerText = followers;
        document.getElementsByClassName('tags')[2].innerText = following;
        document.getElementsByClassName('profile-link')[0].setAttribute('href', github);
        document.getElementsByClassName('profile-link')[0].setAttribute('target', '_blank');
    });
});
*/