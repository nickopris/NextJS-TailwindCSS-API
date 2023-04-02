import Image from "next/image"

export default async function MovieDetail({ params }) {
    const { movie } = params
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`)
    const res = await data.json()
    const imagePath ='https://image.tmdb.org/t/p/original/'

    return (
        <section class="bg-white dark:bg-gray-900">
        <div class=" max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:pt-28">
            <h1 className="text-3xl">{res.title}</h1>
            <Image src={imagePath + res.poster_path} width={800} height={800} />
            <p>{ res.overview }</p>
            <p>Rating: {res.vote_average} / {res.vote_count} votes</p>
        </div>
        </section>
    )
}