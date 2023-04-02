import Link from "next/link"
import Image from "next/image"
import { parseISO, format } from 'date-fns';

export default function Movie({id, title, poster_path, release_date}) {
    const imagePath ='https://image.tmdb.org/t/p/original/'
    const date = parseISO(release_date);
    return(
        <div>
            <Link href={`/movie/${id}`} >
                <Image src={imagePath + poster_path} width={400} height={400} />
            </Link>
            <h1 className="text-2xl">{title}</h1>
            <p>Released: {format(date, 'd MMMM YYY')}</p>
        </div>
    )
}