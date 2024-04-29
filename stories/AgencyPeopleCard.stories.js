import { createAgencyPeopleCard } from "./AgencyPeopleCard";

export default {
  title: "Agency Profile/Agency People Card",
  argTypes: {
    name: { control: "text" },
    imageSrc: { control: "text" },
    avatarSrc: { control: "text" },
    jobTitle: { control: "text" },
    tags: { control: "array" },
    showTags: { control: "boolean" },
    expandable: { control: "boolean" },
    expanded: { control: "boolean" },
  },
};

const Template = ({ ...args }) => {
  return createAgencyPeopleCard({ ...args });
};

export const Default = Template.bind({});

const defaultArgs = {
  name: "Jane Doe",
  imageSrc:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
  avatarSrc:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
  jobTitle: "Model",
  tags: ["Model Of The Year", "Industry Icon", "Top Model"],
  showTags: true,
  expandable: true,
  expanded: false,
};

Default.args = {
  ...defaultArgs,
};

export const Expandable = Template.bind({});
Expandable.args = {
  ...defaultArgs,
  expandable: true,
};

export const Expanded = Template.bind({});
Expanded.args = {
  ...defaultArgs,
  expandable: true,
  expanded: true,
};
