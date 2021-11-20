import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button as Component } from '.'

export default {
  title: `src/components/atoms/${Component.name}`,
  component: Component,
  argTypes: {}
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = args => <Component {...args} />

export const Default = Template.bind({})
Default.args = {
  style: {
    backgroundColor: 'lavender',
    letterSpacing: '2px'
  },
  children: 'BUTTON'
}
