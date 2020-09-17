import utilStyles from '../styles/utils.module.css'
import Date from './date'
import Link from 'next/link'

export default function BlogItem({ id, date, title, description, image_link, image_alt }) {
    return (
        <li className={utilStyles.listItem} key={id}>
            <Link href="/blog/[id]" as={`/blog/${id}`}>
                <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
                <Date dateString={date} isPost={true} />
            </small>
            {image_link ?
                <Link href="/blog/[id]" as={`/blog/${id}`}>
                    <img src={image_link} alt={image_alt}></img>
                </Link>
                : <></>}
            <br />
            {description}
            <br />
            <small><Link href="/blog/[id]" as={`/blog/${id}`}>
                <a>Read More</a>
            </Link></small>
        </li>)
}
