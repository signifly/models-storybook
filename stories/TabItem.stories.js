import { createTabItem } from './TabItem';

export default {
	title: 'Components/Tab Item',
	argTypes: {
		title: {control: 'text'},
		hover: {control: 'boolean'},
		active: {control: 'boolean'},
		link: {control: 'text'}
	}
};

const Template = (args) => createTabItem(args);

const defaultArgs = {
	title: 'Modeling & Acting Agencies',
	link: '#'
};

export const Default = Template.bind({});

Default.args = {
	...defaultArgs
};

export const Hover = Template.bind({});

Hover.args = {
	...defaultArgs,
	hover: true
};

export const Active = Template.bind({});

Active.args = {
	...defaultArgs,
	active: true
};
   