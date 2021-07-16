import React from 'react'
import Card from './Card'

const story = {
    title: 'Components/Card',
    component: Card,
    argTypes: {
        noShadow: false
    },
}
export default story

const Template = (args) => (
    <Card {...args}>
        <p>Hello world!</p>
    </Card>
)

export const Default = Template.bind({})
Default.args = {
    noShadow: false
}
export const NoShadow = Template.bind({})
NoShadow.args = {
    noShadow: true
}

