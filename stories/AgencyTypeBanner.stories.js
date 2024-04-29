import { createAgencyTypeBanner } from './AgencyTypeBanner';

export default {
	title: 'Agency/Agency Type Banner',
	argTypes: {
		imgSrc: {control: 'text'},
		url: {control: 'text'},
		title: {control: 'text'},
		titleTag: {control: 'select', options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']},
		tags: {control: 'array'},
		hoverTitle: {control: 'text'},
		hoverTags: {control: 'array'},
		hoverButtonText: {control: 'text'},
		isHover: {control: 'boolean'}
	}
};

const Template = (args) => createAgencyTypeBanner(args);

const defaultArgs = {
	imgSrc: 'https://picsum.photos/800/960',
	url: '#',
	title: 'Modeling & Acting <br />Agencies',
	titleTag: 'p',
	tags: ['Models', 'Actors'],
	hoverTitle: 'All Agency Types',
	hoverTags: ['Models', 'Actors'],
	hoverButtonText: 'View all agencies'
};

export const Default = Template.bind({});

Default.args = {
	...defaultArgs
};

export const DefaultWithManyTags = Template.bind({});

DefaultWithManyTags.args = {
	...Default.args,
	title: 'Production & Creative Services',
	tags: ['Art Direction', 'Casting', '+8'],
	hoverTags: [
		'Art Direction',
		'Casting',
		'Creative Direction',
		'Fashion Styling',
		'Hair Styling',
		'Makeup',
		'Photography',
		'Production',
		'Wardrobe Styling'
	]
};

export const Hover = Template.bind({});

Hover.args = {
	...Default.args,
	isHover: true
};

export const HoverWithManyTags = Template.bind({});

HoverWithManyTags.args = {
	...DefaultWithManyTags.args,
	isHover: true
};
   