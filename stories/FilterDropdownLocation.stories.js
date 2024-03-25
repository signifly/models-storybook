import { createFilterDropdownLocation } from './FilterDropdownLocation';

export default {
	title: 'Filter Dropdowns/Dropdown Location',
	argTypes: {
		number: {control: {type: 'number'}},
		selected: {control: {type: 'boolean'}},
		title: {control: {type: 'text'}}
	}
};

const Template = (args) => createFilterDropdownLocation(args);

export const Default = Template.bind({});

Default.args = {
	number: 3,
	title: 'Popular searches'
};

export const Selected = Template.bind({});

Selected.args = {
	number: 1,
	selected: true,
	title: 'Add another location'
};