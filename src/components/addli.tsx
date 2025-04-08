import "./addli.css"

interface Site {
    name: string;
    image: string;
    link: string;
}

export const SiteCard = ({ site }: { site: Site }) => {
    return (
        <li className="figureContainer">
        <figure>
            <img src={site.image} alt={site.name} />
            <figcaption><a href={site.link}>{site.name}</a></figcaption>
        </figure>
        </li>
    )
}