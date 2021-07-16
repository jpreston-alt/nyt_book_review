import React from 'react'
import Spacer from './Spacer'

const story = {
    title: 'Components/Spacer',
    component: Spacer,
    argTypes: {

    },
}
export default story

const Template = (args) => (
    <Spacer {...args}>

    </Spacer>
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
