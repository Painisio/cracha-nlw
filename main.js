//variaveis: let -mudavel- ou consts -constante-

const LinksSocialMedia = {
  github: 'Painisio',
  youtube: 'channel/UCCiMTyuxCBMeYR1LEn8wruQ',
  facebook: 'Painisio',
  instagram: 'anisio9000',
  twitter: 'Painisio'
}
//dom - document object model
//i=1+1
//i++
function changeSocialMediaLinks() {
  for (let li of SocialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
  //arrow function -- function(argumento){code} -- a arrow function é uma função resumida, anonima -- argumento=>{}
}
getGitHubProfileInfos()
