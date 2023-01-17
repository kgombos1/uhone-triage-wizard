import React from 'react';
import { Story } from '@storybook/react';
import { ReactLogo } from './ReactLogo';

export default {
  title: 'Common/ReactLogo',
  component: ReactLogo,
};

const Template: Story = (args) => {
  return <ReactLogo {...args} />;
};

export const Default = Template.bind({});

Default.args = {};
