import React from 'react'
import Modal from './Modal'

const story = {
    title: 'Components/Modal',
    component: Modal,
    argTypes: {

    },
}
export default story

const Template = (args) => (
    <Modal {...args} />
)

export const Show = Template.bind({})
Show.args = {
    open: true,
    title: "I am a Modal",
    subtitle: "check me out",
}
export const NoShow = Template.bind({})
NoShow.args = {
    open: false,
    title: "I am a NOT Modal",
    subtitle: "DONT check me out",
}
