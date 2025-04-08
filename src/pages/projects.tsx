import './projects.css'
import { SiteCard } from '../components/addli';
import clickerIMG from "/pokeclickerPreview.png"
import pokedexIMG from "/pokedexSitePreview.png"

const sites = [
    { name: "Pokéclicker", image: clickerIMG, link: "https://maxe-afk.github.io/lille-js-pokeclicker/" },
    { name: "Pokédex régionaux", image: pokedexIMG, link: "https://maxe-afk.github.io/pokedex-site.github.io/" }
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
