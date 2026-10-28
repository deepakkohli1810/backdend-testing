require('dotenv').config()

const express = require('express');
const app = express();
const port = 4000;

const githubData = {
  login: "deepakkohli1810",
  id: 112771816,
  node_id: "U_kgDOBrjC6A",
  avatar_url:
    "https://avatars.githubusercontent.com/u/112771816?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/deepakkohli1810",
  html_url: "https://github.com/deepakkohli1810",
  followers_url:
    "https://api.github.com/users/deepakkohli1810/followers",
  following_url:
    "https://api.github.com/users/deepakkohli1810/following{/other_user}",
  gists_url:
    "https://api.github.com/users/deepakkohli1810/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/deepakkohli1810/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/deepakkohli1810/subscriptions",
  organizations_url:
    "https://api.github.com/users/deepakkohli1810/orgs",
  repos_url:
    "https://api.github.com/users/deepakkohli1810/repos",
  events_url:
    "https://api.github.com/users/deepakkohli1810/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/deepakkohli1810/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Deepak ",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: "Hello there! I'm Deepak , a passionate junior developer with a flair for crafting engaging and interactive web experiences. ",
  twitter_username: null,
  public_repos: 28,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2022-09-03T16:12:08Z",
  updated_at: "2026-10-25T06:01:37Z",
};

app.get('/' , (req, res)=>{
 res.send('Hello World')
})

app.get('/twitter' , (req, res)=>{
  res.send('Welcome to the twitter')
})

app.get('/login' , (req , res)=>{
 res.send('<h1> Please login in to your account </h1>')
})

app.get('/youtube' , (req, res)=>{
 res.send('<h2>Chai and code </h2>')
})

app.get('/github' , (req , res )=>{
 res.json(githubData)
})

app.listen(process.env.PORT , ()=> {
 console.log(`Example app is listening on port ${port}`)
})