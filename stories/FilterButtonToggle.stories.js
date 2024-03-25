import { createFilterButtonToggle } from './FilterButtonToggle';

export default {
	title: 'Filter Buttons/Button Toggle',
	argTypes: {
		title: {control: 'text'},
		hover: {control: 'boolean'},
		active: {control: 'boolean'}
	}
};

const Template = (args) => createFilterButtonToggle(args);

const defaultArgs = {
	title: 'Have Ranked Models'
};

export const Default = Template.bind({});

Default.args = {
	...defaultArgs
};

export const DefaultHover = Template.bind({});

DefaultHover.args = {
	...defaultArgs,
	hover: true
};

export const DefaultActive = Template.bind({});

DefaultActive.args = {
	...defaultArgs,
	active: true
};

export const DefaultHoverActive = Template.bind({});

DefaultHoverActive.args = {
	...DefaultActive.args,
	...DefaultHover.args
};
   