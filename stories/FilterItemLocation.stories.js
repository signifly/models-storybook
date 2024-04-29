import { createFilterItemLocation } from './FilterItemLocation';

export default {
	title: 'Filter Items/Location',
	argTypes: {
		location: {control: 'text'},
		hover: {control: 'boolean'},
		selected: {control: 'boolean'}
	}
};

const Template = (args) => createFilterItemLocation(args);
const defaultArgs = {
	location: 'New York, USA'
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

export const Selected = Template.bind({});

Selected.args = {
	...defaultArgs,
	selected: true
};

export const SelectedHover = Template.bind({});

SelectedHover.args = {
	...defaultArgs,
	hover: true,
	selected: true
};