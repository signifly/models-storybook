import { createFilterItemCheckbox } from './FilterItemCheckbox';

export default {
	title: 'Filter Items/Checkbox',
	argTypes: {
		title: {control: 'text'},
		hover: {control: 'boolean'},
		selected: {control: 'boolean'},
		size: {control: {type: 'select', options: ['small', 'medium']}}
	}
};

const Template = (args) => createFilterItemCheckbox(args);

const defaultArgs = {
	title: 'Modeling Agencies',
	size: 'small'
};

export const Default = Template.bind({});

Default.args = {
	...defaultArgs
};

export const DefaultMedium = Template.bind({});

DefaultMedium.args = {
	...Default.args,
	size: 'medium'
};

export const Hover = Template.bind({});

Hover.args = {
	...defaultArgs,
	hover: true
};

export const HoverMedium = Template.bind({});

HoverMedium.args = {
	...Hover.args,
	size: 'medium'
};

export const Selected = Template.bind({});

Selected.args = {
	...defaultArgs,
	selected: true
};

export const SelectedMedium = Template.bind({});

SelectedMedium.args = {
	...Selected.args,
	size: 'medium'
};

export const SelectedHover = Template.bind({});

SelectedHover.args = {
	...defaultArgs,
	hover: true,
	selected: true
};

export const SelectedHoverMedium = Template.bind({});

SelectedHoverMedium.args = {
	...SelectedHover.args,
	size: 'medium'
};