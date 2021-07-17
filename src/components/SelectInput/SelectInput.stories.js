import React from 'react'
import SelectInput from './SelectInput'

const story = {
    title: 'Components/SelectInput',
    component: SelectInput,
    argTypes: {

    },
}
export default story

const Template = (args) => (
    <SelectInput {...args} />
)

export const Default = Template.bind({})
Default.args = {
    placeholder: "Please Select an Option",
    value: "option2Value",
    onChange: () => console.log("value"),
    options: [
        {
            name: "Option 1 Name",
            value: "option1Value",
        },
        {
            name: "Option 2 Name",
            value: "option2Value",
        },
        {
            name: "Option 3 Name",
            value: "option3Value",
        },
    ]
}
