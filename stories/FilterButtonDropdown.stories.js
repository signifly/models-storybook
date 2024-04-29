import { createFilterButtonDropdown } from './FilterButtonDropdown';

export default {
	title: 'Filter Buttons/Button Dropdown',
	argTypes: {
		title: {control: 'text'},
		number: {control: 'number'},
		hover: {control: 'boolean'},
		opened: {control: 'boolean'}
	}
};

const Template = (args) => createFilterButtonDropdown(args);

const defaultArgs = {
	title: 'Category'
};

export const Default = Template.bind({});

Default.args = {
	...defaultArgs
};

export const Hover = Template.bind({});

Hover.args = {
	...Default.args,
	hover: true
};

export const Opened = Template.bind({});

Opened.args = {
	...Default.args,
	opened: true
};

export const DefaultNumber = Template.bind({});

DefaultNumber.args = {
	...Default.args,
	number: 3
};

export const HoverNumber = Template.bind({});

HoverNumber.args = {
	...Hover.args,
	number: 3
};

export const OpenedNumber = Template.bind({});

OpenedNumber.args = {
	...Opened.args,
	number: 3
};