import Image from 'next/image'
import styles from './page.module.css'
import DrawerAppBar from '../../component/drawerAppBar'

export default function Home() {
  return (
    <main className={styles.main}>
      
        <DrawerAppBar/>
        
    </main>
  )
}
