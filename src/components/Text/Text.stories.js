import React from 'react'
import Text from './Text'

const story = {
    title: 'Components/Text',
    component: Text,
    argTypes: {

    },
}
export default story

const Template = (args) => (
    <Text {...args}>

    </Text>
)

export const Default = Template.bind({})
Default.args = {
    children: "default",
    size: "text"
}
export const subtext = Template.bind({})
subtext.args = {
    children: "subtext",
    size: "subtext"
}
export const h1 = Template.bind({})
h1.args = {
    children: "h1",
    size: "h1"
}
export const h2 = Template.bind({})
h2.args = {
    children: "h2",
    size: "h2"
}
export const h3 = Template.bind({})
h3.args = {
    children: "h3",
    size: "h3"
}
export const h4 = Template.bind({})
h4.args = {
    children: "h4",
    size: "h4"
}
export const h5 = Template.bind({})
h5.args = {
    children: "h5",
    size: "h5"
}
export const h6 = Template.bind({})
h6.args = {
    children: "h6",
    size: "h6"
}
export const PrimaryUpperH5 = Template.bind({})
PrimaryUpperH5.args = {
    children: "primary uppercase h5",
    size: "h5",
    color: "primary",
    uppercase: true
}
export const SubtextGhost = Template.bind({})
SubtextGhost.args = {
    children: "subtext ghost",
    size: "subtext",
    color: "gray",
}
