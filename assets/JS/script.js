function loadRepos() {
    fetch('https://api.github.com/users/moises1098/repos')
    .then(response => response.json())
    .then(data => {
        var repoNameVal = data['name']
        var

    })
        
}

loadRepos()
