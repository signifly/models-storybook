import { createFilterDropdownCheckbox } from './FilterDropdownCheckbox';

export default {
	title: 'Filter Dropdowns/Dropdown Checkbox',
	argTypes: {
		number: {control: {type: 'number'}}
	}
};

const Template = (args) => createFilterDropdownCheckbox(args);

export const Default = Template.bind({});

Default.args = {
	number: 3
};
   