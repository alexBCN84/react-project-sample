const ParagraphsList = ({ title, paragraphs }) =>
    <section className="instructions">
        <h2>{title}</h2>
        {paragraphs.map((paragraph, i) =>
            <p key={i}>{paragraph}</p>
        )}
    </section>

ParagraphsList.displayName = 'Paragraph List'

export default ParagraphsList