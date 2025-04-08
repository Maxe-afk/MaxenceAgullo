import './projects.css'
import { SiteCard } from '../components/addli';
const sites = [
    { name: "Pokéclicker", image: "/pokeclickerPreview.png", link: "https://maxe-afk.github.io/lille-js-pokeclicker/" },
    { name: "Pokédex régionaux", image: "/pokedexSitePreview.png", link: "https://maxe-afk.github.io/pokedex-site.github.io/" }
]

function Projects() {





    return (
        <div className="backgroundContainer">
            <div className='ulContainer'>
                <ul>
                    {sites.map((site, name) => (
                        <li key={name}>
                            <SiteCard site={site} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Projects;
