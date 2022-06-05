import React from 'react'
import style from './footer.module.css';

export default function Footer() {
  return (
    <footer className={style.footer_container}>
        <div className={style.social_media_container}>
          <h3>Contact</h3>
          <div>
          <a href="https://www.linkedin.com/in/diego-alejandro-presiga-torres-6960a1220/" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="Linkedin-logo" width="40px" /></a>
          <a href="https://github.com/Dialtor" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github-logo" width="40px" /></a>
          <a href="https://twitter.com/DialtorDev" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png" alt="twitter-logo" width="40px" /></a>
          <a href="https://dialtordev.netlify.app/" target="_blank"><img src="https://img.icons8.com/color/480/internet--v1.png" alt="twitter-logo" width="40px" /></a>
          </div>
        </div>
        <div className={style.social_media_container}>
          <h3>Code Repository</h3>
          <div>
          <a href="https://github.com/Dialtor" target="_blank"><img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="Github-logo" width="60px" /></a>
          </div>
        </div>
    </footer>
  )
}
