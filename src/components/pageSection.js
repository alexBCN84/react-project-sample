
import LiList from './LiList'
import ParagraphsList from './ParagraphsList'

const pageSection = ({ sectionName, liElements, paragraphs}) =>
    <section id={sectionName.toLowerCase().replace(/ /g, '-')}>
        <h1>{sectionName}</h1>
        <LiList list={liElements} />
        <ParagraphsList title="Cooking Instructions"
                      paragraphs={paragraphs} />
    </section>

pageSection.displayName = 'Page Section'

export default pageSection