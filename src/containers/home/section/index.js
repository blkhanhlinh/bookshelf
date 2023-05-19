const { default: CardSlider } = require("@/components/CardSlider")

const Section = (books) => {
    return (
        <>
            <Heading>Best Sellers</Heading>
            <CardSlider books={books} />
        </>
    )
}