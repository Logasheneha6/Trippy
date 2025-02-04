import './FooterStyles.css';

import React from 'react'

const FooterComponent = () => {
  return (
    <div className='footer'>
<div className='top'>
<div>
<h1>Trippy</h1>
<p>Choose your Favorite destination</p>
</div>
<div>
<a href='/'><i className='fa-brands fa-facebook-square'></i></a>
<a href='/'><i className='fa-brands fa-instagram-square'></i></a>
<a href='/'><i className='fa-brands fa-twitter-square'></i></a>
</div>
</div>
<div className='bottom'>
<div>
    <h4>Project</h4>
    <a href='/'>Changelog</a>
    <a href='/'>Status</a>
    <a href='/'>License</a>
</div>
<div>
    <h4>Community</h4>
    <a href='/'>GithubIssues</a>
    <a href='/'>Status</a>
    <a href='/'>License</a>
</div>
<div>
    <h4>Help</h4>
    <a href='/'>Changelog</a>
    <a href='/'>Status</a>
    <a href='/'>License</a>
</div>
<div>
    <h4>Others</h4>
    <a href='/'>Changelog</a>
    <a href='/'>Status</a>
    <a href='/'>License</a>
</div>
</div>
    </div>
  )
}

export default FooterComponent