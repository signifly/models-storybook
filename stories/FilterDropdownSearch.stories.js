import { createFilterDropdownSearch } from './FilterDropdownSearch';

export default {
	title: 'Filter Dropdowns/Common/Search',
	argTypes: {
		placeholder: {control: 'text'},
		focused: {control: {type: 'boolean'}},
		hovered: {control: {type: 'boolean'}}
	}
};

const Template = (args) => createFilterDropdownSearch(args);

export const Default = Template.bind({});

Default.args = {
	placeholder: 'Search country or city'
};

export const Hovered = Template.bind({});

Hovered.args = {
	...Default.args,
	hovered: true
};

export const Focused = Template.bind({});

Focused.args = {
	...Default.args,
	focused: true
};