import React from 'react'
import { Switch, Route } from 'react-router-dom'
import GlobalFeed from './pages/globalFeed/globalFeed'
import Article from './pages/article/article'
import Authentication from './pages/authentication/Authentication'
import TagFeed from './pages/tagFeed/tagFeed'
import YourFeed from './pages/yourFeed/yourFeed'
import CreateArticle from './pages/createArticle/createArticle'
import EditArticle from './pages/editArticle/editArticle'
import Settings from './pages/settings/settings'
import UserProfile from './pages/userProfile/userProfile'


export default () => {
  return (
    <Switch>
      <Route exact path="/" component={GlobalFeed} /> 
      <Route path="/profiles/:slug" component={UserProfile} />
      <Route path="/profiles/:slug/favorites" component={UserProfile} /> 
      <Route path="/settings" component={Settings} />
      <Route path="/articles/new" component={CreateArticle} />     
      <Route path="/articles/:slug/edit" component={EditArticle} />
      <Route path="/feed" component={YourFeed} />
      <Route path="/tags/:slug" component={TagFeed} />
      <Route path="/login" component={Authentication} />
      <Route path="/register" component={Authentication} />
      <Route path="/articles/:slug" component={Article} />
    </Switch>
  )
}