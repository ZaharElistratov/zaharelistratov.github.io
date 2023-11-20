import {MouseEventHandler} from "react";
import ItemInterface from "@/screens/Home/Services/Item/Item.interface";

import Icon from "@/ui/Icon/Icon";
import Image from "next/image";

import styles from './Item.module.scss'
import Link from "next/link";

const Item = ({data, openModal}: { data: ItemInterface, openModal: MouseEventHandler<HTMLButtonElement> }) => {
    return (
        <div className={styles.item}>
            <div className={styles.portfolio}>
                <h3 className={styles.title}>{data.portfolio.title}</h3>
                <div className={styles.list}>
                    {data.portfolio.list.map((item) =>
                        <button className={styles.case} onClick={openModal}
                                key={item.title}>{item.title}</button>
                    )}
                </div>
            </div>
            <div className={styles.stats}>
                <h3 className={styles.title}>{data.stats.title}</h3>
                <div className={styles.list}>
                    {data.stats.list.map((item) =>
                        <div className={styles.stat}>
                            <Icon id='arrow-right' width={64} height={64}/>
                            <p><span>{item.number}</span> {item.text}</p>
                        </div>
                    )}
                </div>
            </div>
            <div className={styles.feedback}>
                <h3 className={styles.title}>{data.feedback.title}</h3>
                <div className={styles.list}>
                    {data.feedback.list.map((item) =>
                        <div className={styles.testimonial}>
                            <p>{item.text}</p>
                            <Image src={`/img/home/services/avatars/${item.avatar}`} alt='avatar' width={100}
                                   height={100}/>
                        </div>
                    )}
                    <Link className={styles.more} href=''>{data.feedback.button}</Link>
                </div>
            </div>
        </div>
    );
};

export default Item;