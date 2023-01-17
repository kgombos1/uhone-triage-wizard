import { type Story } from '@storybook/react';
import { WizardTest } from './WizardTest';

export default {
  parcel: 'wizard-test',
  title: 'Apps/Wizard',
  component: WizardTest,
};

const Template: Story = () => {
  return <WizardTest />;
};

export const Default = Template.bind({});

Default.args = {};
