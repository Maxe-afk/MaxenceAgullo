import './projects.css'
import { SiteCard } from '../components/addli';
import clickerPreview from "/pokeclickerPreview.png"
import dexPreview from "/pokedexSitePreview.png"

const sites = [
    { name: "Pokéclicker", image: clickerPreview, link: "https://maxe-afk.github.io/lille-js-pokeclicker/" },
    { name: "Pokédex régionaux", image: dexPreview, link: "https://maxe-afk.github.io/pokedex-site.github.io/" }
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
