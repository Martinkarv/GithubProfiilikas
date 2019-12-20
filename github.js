class GitHub
{
    constructor()
    {
        this.client_ID= '41a2e0268246533e08e2';
        this.client_secret = '4d99bbbba05706319ee70187bafed00e6d2902d8';
        this.repos_count = 10;
        this.repos_sort ='created: asc';
        this.user = 'martinkarv';
this.apiUrl ='https://api.github.com/users/';
    }
 async getUserData(){
     let urlProfile = `${this.apiUrl}${this.user}?client_id=${this.client_ID}&client_secret=${this.client_secret}`;
     let urlRepos = `${this.apiUrl}${this.user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_ID}&client_secret=${this.client_secret}`;

     const profileResponse = await fetch(urlProfile);
    const reposResponse = await fetch(urlRepos);

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

return{
repos,
profile}



 }



}