var websites = require('./rules.json')
for (var i = 0; i < websites.length; i++) {
    const website = websites[i];
    const url = website.remote_host[0]
    console.log(url)
}