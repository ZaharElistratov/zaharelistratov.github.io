interface ItemInterface {
    name: string,
    title: string,
    portfolio: {
        title: string,
        list: {
            img: string,
            title: string,
            text: string
        }[]
    },
    stats: {
        title: string,
        list: {
            number: string,
            text: string
        }[]
    },
    feedback: {
        title: string,
        button: string
        list: {
            avatar: string,
            text: string
        }[]
    }
}

export default ItemInterface