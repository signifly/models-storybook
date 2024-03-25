import { createAgencyNewsCard } from "./AgencyNewsCard";

export default {
  title: "Agency Profile/Agency News Card",
  argTypes: {
    type: { control: "text" },
    title: { control: "text" },
    subTitle: { control: "text" },
    imageSrc: { control: "text" },
    people: { control: "array" },
    expandable: { control: "boolean" },
    tagsExpandable: { control: "boolean" },
    tagsExpanded: { control: "boolean" },
    playButton: { control: "boolean" },
  },
};

const Template = ({ ...args }) => {
  return createAgencyNewsCard({ ...args });
};

export const Default = Template.bind({});

const defaultArgs = {
  type: "News & Interviews",
  title: "Lacoste",
  subTitle: "Editorial · Lacoste SS24 French Fashion Sport",
  tags: ["Fashion", "Editorial", "Lacoste"],
  imageSrc:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
  people: [
    {
      name: "Jane Doe",
      role: "Art Director",
      avatarSrc:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
    },
    {
      name: "Jane Doe",
      role: "Art Director",
      avatarSrc:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
    },
    {
      name: "Jane Doe",
      role: "Art Director",
      avatarSrc:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
    },
  ],
  expandable: false,
};

Default.args = {
  ...defaultArgs,
};

export const Expandable = Template.bind({});
Expandable.args = {
  ...defaultArgs,
  expandable: true,
};

export const TagsExpandable = Template.bind({});
TagsExpandable.args = {
  ...defaultArgs,
  tagsExpandable: true,
};

export const TagsExpanded = Template.bind({});
TagsExpanded.args = {
  ...defaultArgs,
  tagsExpandable: true,
  tagsExpanded: true,
};

export const DisplayRole = Template.bind({});
DisplayRole.args = {
  ...defaultArgs,
  expandable: true,
  displayRole: true,
};

export const NoTags = Template.bind({});
NoTags.args = {
  ...defaultArgs,
  tags: [],
};

export const WithPlayButton = Template.bind({});
WithPlayButton.args = {
  ...defaultArgs,
  playButton: true,
};
