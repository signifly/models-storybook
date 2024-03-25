import { createFilterItemRadio } from './FilterItemRadio';

export default {
	title: 'Filter Items/Radio',
	argTypes: {
		title: {control: 'text'},
		hover: {control: 'boolean'},
		selected: {control: 'boolean'}
	}
};

const Template = (args) => createFilterItemRadio(args);

export const Default = Template.bind({});
const defaultArgs = {
	title: 'Recently Updated'
};

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