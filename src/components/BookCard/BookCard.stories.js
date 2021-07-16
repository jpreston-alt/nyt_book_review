import React from 'react'
import BookCard from './BookCard'

const story = {
    title: 'Components/BookCard',
    component: BookCard,
    argTypes: {
        noShadow: false
    },
}
export default story

const Template = (args) => (
    <BookCard {...args} />
)

export const Default = Template.bind({})
Default.args = {
    title: "Harry Potter",
    description: "An american treasure",
    primary_isbn13: "9781984806758"
}
export const LongDesc = Template.bind({})
LongDesc.args = {
    title: "Harry Potter Again",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non commodo mi. Vivamus hendrerit velit vel tincidunt commodo. Curabitur molestie dolor quis viverra tempor. Donec tempor elementum erat vel congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed lobortis bibendum ligula, non fermentum diam cursus non. Integer id est commodo, euismod augue in, venenatis nunc. Pellentesque nec leo a risus cursus rutrum. Suspendisse porta hendrerit mi, quis porta nibh pulvinar ac. Phasellus laoreet id felis vel fringilla. Curabitur pretium sem cursus sollicitudin blandit. Donec luctus, ipsum cursus pellentesque vestibulum, tellus ante congue arcu, euismod viverra ex ante congue ipsum. Integer rutrum ultrices nunc sit amet pretium. Quisque vulputate neque at nibh mattis hendrerit.",
    primary_isbn13: "9781984806758"
}

