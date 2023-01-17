import React from 'react';

import { ResultCard } from './ResultCard';

export default {
  parcel: 'result-card',
  title: 'Apps/ResultCard',
  component: ResultCard,
  args: {
    data: {
      providerName: 'John Smith',
      providerSpecialty: 'Family Practice',
      inNetwork: true,
      isAcceptingPatients: true,
      providerGender: 'Male',
      providerLanguage: ['English'],
      providerAddress: '123 Sample St',
      providerPhone: '(123) 456-7890',
    },
  },
};

const Template = (args) => {
  return <ResultCard {...args} />;
};

export const Primary = Template.bind({});

Primary.args = {};
