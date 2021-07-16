import React from 'react'
import Button from './Button'

const story = {
    title: 'Components/Button',
    component: Button,
    argTypes: {

    },
}
export default story

const Template = (args) => (
    <Button {...args}>

    </Button>
)

export const Primary = Template.bind({})
Primary.args = {
    children: "primary",
    onClick: () => console.log("you clicked me!")
}
export const Disabled = Template.bind({})
Disabled.args = {
    children: "disabled",
    disabled: true
}
