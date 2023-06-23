import styles from './Footer.module.css'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


export default function Footer({ copyrightText }) {

  console.log(`copyright: ${copyrightText}`)

  return (
    <>
      <footer className={styles.footer}>
        <img src="/logo-netlify.svg" alt="Netlify Logo" className={styles.logo} />
        <div className="dark:text-white uppercase mb-3 font-bold opacity-60">
          {documentToReactComponents(copyrightText)}
        </div>
      </footer>
    </>
  )
}
