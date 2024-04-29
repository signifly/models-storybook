import { createFilterDropdownWorkedWith } from './FilterDropdownWorkedWith';

export default {
	title: 'Filter Dropdowns/Dropdown Worked With',
	argTypes: {
		number: {control: {type: 'number'}},
		selected: {control: {type: 'boolean'}},
		title: {control: {type: 'text'}},
		toggleText: {control: {type: 'text'}}
	}
};

const Template = (args) => createFilterDropdownWorkedWith(args);

export const Default = Template.bind({});

Default.args = {
	number: 3,
	title: 'Popular searches',
	toggleText: 'Top clients only'
};

export const Selected = Template.bind({});

Selected.args = {
	number: 1,
	selected: true,
	title: 'Add another client'
};