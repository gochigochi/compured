import Link from "next/link"
import { El } from "./Elements"

const List = ({ content }) => {

    const handleClick = () => {

    }

    return (
        <ul>
            {
                content.map(item => {
                    return (
                        <El key={item.id}>
                            {
                                item.link ?
                                    <Link href={item.url}>
                                        {item.title}
                                    </Link> :
                                    <a href={item.url}>
                                        {item.title}
                                    </a>
                            }
                        </El>
                    )
                })
            }
        </ul>
    )
}

export default List