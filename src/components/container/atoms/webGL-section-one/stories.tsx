import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThreeDimensions as Component } from '.'

export default {
  title: `src/components/container/atoms/${Component.name}`,
  component: Component,
  argTypes: {}
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = args => <Component {...args} />

export const Default = Template.bind({})
Default.args = {}
