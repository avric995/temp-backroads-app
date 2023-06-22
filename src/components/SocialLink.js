const SocialLink = ({ href, icon, itemCLass }) => {
  return (
    <li>
      <a href={href} target="_blank" className={itemCLass} rel="noreferrer">
        <i className={icon}></i>
      </a>
    </li>
  )
}
export default SocialLink
