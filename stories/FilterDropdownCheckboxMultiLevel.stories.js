import { createFilterDropdownCheckboxMultiLevel } from './FilterDropdownCheckboxMultiLevel';

export default {
	title: 'Filter Dropdowns/Dropdown Checkbox Multi-Level',
	argTypes: {
		groupNumber: {control: 'number'},
		number: {control: 'number'}
	}
};

const Template = (args) => createFilterDropdownCheckboxMultiLevel(args);

export const Default = Template.bind({});

Default.args = {
	groupNumber: 3,
	number: 6
};
   