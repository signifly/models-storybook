import { createAgencyProfileHeader } from "./AgencyProfileHeader";

export default {
  title: "Agency Profile/Agency Profile Header",
  argTypes: {
    name: { control: "text" },
    logo: { control: "text" },
    description: { control: "text" },
    shortDescription: { control: "text" },
    location: { control: "text" },
    numOtherLocations: { control: "number" },
    numModels: { control: "number" },
    numRankedModels: { control: "number" },
    sendMessageBtnLabel: { control: "text" },
    addFavouriteLinkLabel: { control: "text" },
    numModelsLabel: { control: "text" },
    numRankedModelsLabel: { control: "text" },
    scrolled: { control: "boolean" },
  },
};

const Template = ({ ...args }) => {
  return createAgencyProfileHeader({ ...args });
};

export const Default = Template.bind({});
Default.args = {
  name: "Elite New York City",
  logo: "https://via.placeholder.com/150",
  description:
    "Elite New York City was founded in 1977 by founder, John Casablancas. Elite redefined the industry by giving birth to what we now know as The Supermodel. Elite continues ...",
  shortDescription: "Modelling & Acting Agency",
  location: "New York, USA",
  numOtherLocations: 3,
  numModels: 283,
  numRankedModels: 27,
  sendMessageBtnLabel: "SEND A MESSAGE",
  addFavouriteLinkLabel: "ADD TO FAVOURITES",
  numModelsLabel: "models & actors",
  numRankedModelsLabel: "ranked models",
};

export const Scrolled = Template.bind({});
Scrolled.args = {
  ...Default.args,
  scrolled: true,
};
