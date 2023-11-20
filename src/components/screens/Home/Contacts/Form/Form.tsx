import {FC, ChangeEvent, useState, useRef, FormEventHandler} from 'react';
import {useForm} from "react-hook-form";
import {useRouter} from "next/router";
import axios from "axios";

import contactsTranslation from "@/data/contacts.json";

import Link from "next/link";
import Icon from "@/ui/Icon/Icon";

import styles from './Form.module.scss'

const Form: FC = () => {
    const {locale} = useRouter()

    const contacts = contactsTranslation.filter(item => item.locale === locale)

    const {register, formState: {errors}, handleSubmit, reset} = useForm()

    const [fileText, setFileText] = useState<string>(contacts[0].form.file.no)


    const fileHandler = (event: any) => {
        let countFiles = 0
        if (event.target.files && event.target.files.length >= 1) {
            countFiles = event.target.files.length
        }

        if (countFiles > 0) {
            setFileText(`${contacts[0].form.file.have} ${countFiles}`)
        } else {
            setFileText(fileText)
        }
    }

    const onSubmit = (data: {name?: string, contact?: string, text?: string}) => {
        const url = `https://api.telegram.org/bot${process.env.TOKEN}/sendMessage`
        const message = `Имя: ${data.name}\nПочта или телеграм: ${data.contact}\nЗаявка: ${data.text}`

        axios.post(url, {
            chat_id: process.env.CHAT_ID,
            parse_mode: 'html',
            text: message
        })

        reset()
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <fieldset className={styles.inputs}>
                <input className={styles.input} type="text"
                       {...register('name', {
                           required: true
                       })}
                       placeholder={contacts[0].form.name}
                />
                <input className={styles.input} type="text"
                       {...register('contact', {
                           required: true
                       })}
                       placeholder={contacts[0].form.contact}
                />
                <input className={styles.input} type="text"
                       {...register('text', {})}
                       placeholder={contacts[0].form.message}
                />
            </fieldset>
            <fieldset className={styles.send}>
                <label className={styles.file} onChange={fileHandler}>
                    <input className={styles.input} type="file"
                           {...register('file', {})}
                    />
                    <span className={styles.icon}>
                        <Icon id='download' width={72} height={90}/>
                    </span>
                    <span className={styles.text}>{fileText}</span>
                </label>
                <button className={styles.button}>{contacts[0].form.button}</button>
            </fieldset>
            <Link className={styles.logo} href='/'>
                <Icon id='logo' width={560} height={115}/>
            </Link>
        </form>
    );
};

export default Form;