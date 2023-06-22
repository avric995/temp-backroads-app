import { pageLinks, socialLinks } from '../data'
import PageLink from './PageLink'
import SocialLink from './SocialLink'

const timeElapsed = Date.now()
const today = new Date(timeElapsed)

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((link) => {
          return <PageLink key={link.id} {...link} itemCLass="footer-link" />
        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          return <SocialLink key={link.id} {...link} itemCLass="footer-link" />
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"> {today.toDateString()}</span> all rights reserved
      </p>
    </footer>
  )
}
export default Footer
