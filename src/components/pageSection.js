
import LiList from './LiList'
import ParagraphsList from './ParagraphsList'
import React from 'react'
const PageSection = ({ sectionName, liElements, paragraphs}) =>
    <section id={sectionName.toLowerCase().replace(/ /g, '-')}>
        <h1>{sectionName}</h1>
        <LiList list={liElements} />
        <ParagraphsList title="My Paragraph List"
                      paragraphs={paragraphs} />
    </section>

PageSection.displayName = 'Page Section'

export default PageSection