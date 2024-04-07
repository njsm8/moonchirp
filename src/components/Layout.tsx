/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import styles from './Layout.module.css';
import Image from 'next/image';
import carticon from '../../public/icons/Cart.svg';
import searchicon from '../../public/icons/Search.svg';
import left from '../../public/icons/VectorLeft.svg';
import right from '../../public/icons/VectorRight.svg';

const Layout = ({children}: {children: React.ReactNode}) => {
    return (
    <div>
    <div className={styles.headertop}>
        <span className={styles.headertopcontent}>Help</span>
        <span className={styles.headertopcontent}>Order & Returns</span>
        <span className={styles.headertopcontent}>Hi, John</span>
     </div>
        <div className={styles.header}>
            <div className={styles.headerlogo}>ECOMMERCE</div>
            <div className={styles.headersearch}>
                <span className={styles.headerkeyword}>Categories</span>
                <span className={styles.headerkeyword}>Sale</span>
                <span className={styles.headerkeyword}>Clearance</span>
                <span className={styles.headerkeyword}>New Stock</span>
                <span className={styles.headerkeyword}>Trending</span>
            </div>
            <div className={styles.headercart}>
                <span className={styles.headercarticon}><Image src={searchicon} alt="search" /></span>
                <span className={styles.headercarticon}><Image src={carticon} alt="cart" /></span>
          </div>
        </div>
    <div className={styles.headerinfo}>
        <span className={styles.headerinfoicon}><Image src={left} alt={"Left"} /></span>
        <span className={styles.headerinfocontent}>Get 10% off on business sign up</span>
        <span className={styles.headerinfoicon}><Image src={right} alt={"Right"} /></span>

    </div>

    <div className={styles.main}>
        {children}
    </div>
    </div>
    );
    };

export default Layout;