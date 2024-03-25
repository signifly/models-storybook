import { createFilterItemToggle } from './FilterItemToggle';

export default {
	title: 'Filter Items/Toggle',
	argTypes: {
		title: {control: {type: 'text'}},
		isActive: {control: {type: 'boolean'}},
		size: {
			control: {type: 'select'},
			options: ['small', 'medium']
		}
	}
};

const Template = (args) => createFilterItemToggle(args);

const defaultArgs = {
	title: 'Top clients only',
	size: 'small'
};

export const Off = Template.bind({});

Off.args = {
	...defaultArgs,
	isActive: false
};

export const OffMedium = Template.bind({});

OffMedium.args = {
	...defaultArgs,
	isActive: false,
	size: 'medium'
};

export const On = Template.bind({});

On.args = {
	...defaultArgs,
	isActive: true
};

export const OnMedium = Template.bind({});

OnMedium.args = {
	...defaultArgs,
	isActive: true,
	size: 'medium'
};