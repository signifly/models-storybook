import { createAgencyProfileContact } from "./AgencyProfileContact";

export default {
  title: "Agency Profile/Agency Profile Contact",
  argTypes: {
    socialLinks: { control: "array" },
    linkGroups: { control: "array" },
  },
};

const Template = ({ ...args }) => {
  return createAgencyProfileContact({ ...args });
};

export const Default = Template.bind({});

const defaultArgs = {
  socialLinks: {
    title: "Social",
    links: [
      {
        url: "/",
        logo: "facebook",
        color: "black",
      },
      {
        url: "/",
        logo: "instagram",
        color: "black",
      },
      {
        url: "/",
        logo: "twitter",
        color: "black",
      },
    ],
  },
  contactLinks: {
    title: "Contact",
    links: [
      {
        label: "Website",
        text: "elitemodels.com",
        url: "/",
      },
      {
        label: "Phone",
        text: "123-456-7890",
        url: "tel:123-456-7890",
      },
      {
        label: "Email",
        text: "info@elitemodel.com",
        url: "mailto:info@elitemodel.com",
      },
    ],
  },
  address: {
    title: "Address",
    text: "245 Fifth Avenue \n 24th Floor \n New York, NY \n 10016 United States",
    mapLink: {
      text: "Map",
      url: "/",
    },
  },
  otherLocations: {
    title: "Other Locations",
    links: [
      {
        label: "Los Angeles",
        text: "Elite LA",
        url: "/",
      },
      {
        label: "Miami",
        text: "Elite Miami",
        url: "/",
      },
      {
        label: "Toronto",
        text: "Elite Toronto",
        url: "/",
      },
    ],
  },
};

Default.args = {
  ...defaultArgs,
};
