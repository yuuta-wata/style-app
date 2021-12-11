import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Canvas as Component } from '.'

export default {
  title: `src/components/presentational/atoms/${Component.name}`,
  component: Component,
  argTypes: {}
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = args => <Component {...args} />

export const Default = Template.bind({})
Default.args = {
  style: {
    width: 500,
    height: 500,
    backgroundColor: 'lavender'
  }
}
