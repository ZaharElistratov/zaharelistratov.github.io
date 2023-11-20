import {FC} from 'react';
import {useRouter} from "next/router";

import footerTranslation from "@/data/footer.json";

import Container from "@/ui/Container/Container";
import Link from "next/link";

import styles from './Footer.module.scss'

const Footer: FC = () => {
    const {locale, locales} = useRouter()

    const footer = footerTranslation.filter(item => item.locale === locale)

    return (
        <footer className={styles.footer}>
            <Container className={styles.container}>
                <nav className={styles.nav}>
                    {footer[0].links.map((item, index) =>
                        <Link className={styles.link} href={item.link} key={index}>{item.name}</Link>
                    )}
                </nav>
            </Container>
        </footer>
    );
};

export default Footer;