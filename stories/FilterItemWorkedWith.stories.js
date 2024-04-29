import { createFilterItemWorkedWith } from './FilterItemWorkedWith';

export default {
	title: 'Filter Items/Worked With',
	argTypes: {
		imageSrc: {control: 'text'},
		title: {control: 'text'},
		subTitle: {control: 'text'},
		hover: {control: 'boolean'},
		selected: {control: 'boolean'}
	}
};

const Template = (args) => createFilterItemWorkedWith(args);

const defaultArgs = {
	title: 'Gucci',
	subTitle: 'Client'
};
const imageSrc = 'https://picsum.photos/50';

export const Default = Template.bind({});

Default.args = {
	...defaultArgs
}

export const DefaultWithImage = Template.bind({});

DefaultWithImage.args = {
	...defaultArgs,
	...Default.args,
	imageSrc
};

export const Hover = Template.bind({});

Hover.args = {
	...defaultArgs,
	hover: true
}

export const HoverWithImage = Template.bind({});

HoverWithImage.args = {
	...defaultArgs,
	...Hover.args,
	imageSrc
};

export const Selected = Template.bind({});

Selected.args = {
	...defaultArgs,
	selected: true
}

export const SelectedWithImage = Template.bind({});

SelectedWithImage.args = {
	...defaultArgs,
	...Selected.args,
	imageSrc
};

export const SelectedHover = Template.bind({});

SelectedHover.args = {
	...defaultArgs,
	...Hover.args,
	selected: true
}

export const SelectedHoverWithImage = Template.bind({});

SelectedHoverWithImage.args = {
	...defaultArgs,
	...SelectedHover.args,
	imageSrc
};

