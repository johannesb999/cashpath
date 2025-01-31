import type { Meta, StoryObj } from '@storybook/react';
import { Wrapper } from './Wrapper.tsx';
import { GoalsCard } from '../GoalsCard/GoalsCard.tsx';
import { AccountCard } from '../AccountCard/AccountCard.tsx';

import Tesla from '../../icons/Tesla.svg';
import Villa from '../../icons/Villa.svg';
import Betong from '../../icons/LouisBetong.svg';

import N26 from '../../icons/N26.svg';
import C24 from '../../icons/C24.svg';
import KsK from '../../icons/KsK.svg';


const meta: Meta<typeof Wrapper> = {
  component: Wrapper,
  title: 'Components/Wrapper',
  argTypes: {
    children: {
      control: { type: 'object' },
      description: 'Inhalte des Wrappers.',
    },
  },
};
export default meta;


type Story = StoryObj<typeof Wrapper>;
const cardData = [
  {
    title: "Tesla Model S",
    img: Tesla, //<img src={Tesla} alt="picture of red tesla car" />,
    alt: "Roter Tesla Model S",
    description: "Auto",
    date: "wahrsch. bis 2030",
    progress: 60,
    price: 92990
  },
  {
    title: "Villa in Madeira am Meer",
    img: Villa, //<img src={Villa} alt="Villa in Madeira am Meer" />,
    alt: "Villa in Madeira am Meer",
    description: "Description for Goal 2",
    date: "wahrsch. bis 2050",
    progress: 0,
    price: 1000000
  },
  {
    title: "Louis Beton",
    img: Betong, //<img src={Betong} alt="Louis Beton Handtasche" />,
    alt: "Louis Beton Handtasche",
    description: "Description for Louis Beton Handtasche",
    date: "wahrsch. bis 2053",
    progress: 0,
    price: 2500
  }
];

export const Goals: Story = {
  args: {
    children: cardData.map((card, index) => (
      <GoalsCard
        key={index}
        title={card.title}
        img={card.img}
        description={card.description}
        date={card.date}
        progress={card.progress}
        price={card.price}
      />
    )),
  },
};

const accountData = [
  {
    title: "N26",
    img: N26, //<img src={N26} alt="logo of N26" />,
    alt: "Logo von N26",
    description: "DE250420.....5385",
    balance: 1300,
    liquid: true
  },
  {
    title: "N26",
    img: C24, //<img src={C24} alt="logo of C24" />,
    alt: "Logo von C24",
    description: "DE250420.....5385",
    balance: 1300,
    liquid: true
  },
  {
    title: "N26",
    img: KsK, //<img src={KsK} alt="logo of KsK" />,
    alt: "Logo von KsK",
    description: "DE250420.....5385",
    balance: 1300,
    liquid: true
  },
]

export const Accoounts: Story = {
  args: {
    children: accountData.map((card, index) => (
      <AccountCard
        key={index}
        title={card.title}
        img={card.img}
        description={card.description}
        balance={card.balance}
        liquid={card.liquid}
      />
    )),
  },
};
