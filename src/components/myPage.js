import PageSection from './PageSection'
import '../../stylesheets/myStyles.css'

const MyPage = ({ pageSections }) =>
    <article>
        <header>
            <h1>My React Page</h1>
        </header>
        <div className="recipes">
            { pageSections.map((pageSection, i) =>
                <PageSection key={i} {...pageSection} />)
            }
        </div>
    </article>

MyPage.displayName = 'my Page'

export default MyPage