import PageSection from './PageSection'
import '../../stylesheets/myStyless.css'

const myPage = ({ pageSections }) =>
    <article>
        <header>
            <h1>Delicious Recipes</h1>
        </header>
        <div className="recipes">
            { pageSections.map((pageSection, i) =>
                <PageSection key={i} {...pageSection} />)
            }
        </div>
    </article>

myPage.displayName = 'my Page'

export default myPage