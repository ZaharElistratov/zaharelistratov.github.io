import {MouseEventHandler} from "react";
import ItemInterface from "@/screens/Home/Services/Item/Item.interface";
import cn from "classnames";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";

import Image from "next/image";
import Icon from "@/ui/Icon/Icon";

import styles from './Modal.module.scss'
import 'swiper/css';


const sliderBreakpoints = {
    1200: {
        slidesPerView: 1,
        spaceBetween: 100
    },
    320: {
        slidesPerView: 1.2,
        spaceBetween: 20
    }
}

const Modal = ({list, activeItem = 0, isOpen, closeModal}: {
    list: ItemInterface[],
    activeItem?: number
    isOpen: boolean,
    closeModal: MouseEventHandler<HTMLButtonElement>
}) => {
    return (
        <>
            {isOpen &&
                <div className={styles.modal}>
                    <button className={styles.close} onClick={closeModal}>
                        <Icon id='close' width={100} height={100}/>
                    </button>
                    <div className={styles.inner}>
                        <Swiper
                            className={styles.slider}
                            breakpoints={sliderBreakpoints}
                            initialSlide={activeItem}
                            modules={[Pagination]}
                            pagination={{
                                el: '.sliderPagination',
                                clickable: true,
                                bulletClass: styles.bullet,
                                bulletActiveClass: styles.active
                            }}
                        >
                            {list[activeItem].portfolio.list.map((item) =>
                                <SwiperSlide>
                                    <div className={styles.item}>
                                        <Image className={styles.img} src={`/img/home/services/cases/${item.img}`}
                                               alt={item.title}
                                               width={800} height={800}/>
                                        <div className={styles.offer}>
                                            <h2 className={styles.title}>{item.title}</h2>
                                            <p className={styles.text}>{item.text}</p>
                                            <button className={styles.button}>Заказать</button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )}
                        </Swiper>
                        <div className={cn(styles.pagination, 'sliderPagination')}></div>
                    </div>
                </div>
            }

        </>

    );
};

export default Modal;