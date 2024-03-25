import { createFilterDropdownRadio } from './FilterDropdownRadio';

export default {
	title: 'Filter Dropdowns/Dropdown Radio',
	argTypes: {
		number: {control: {type: 'number'}}
	}
};

const Template = (args) => createFilterDropdownRadio(args);

export const Default = Template.bind({});

Default.args = {
	number: 3
};
   