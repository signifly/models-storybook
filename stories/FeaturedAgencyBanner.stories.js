import { createFeaturedAgencyBanner } from './FeaturedAgencyBanner';

export default {
	title: 'Agency/Featured Agency Banner',
	argTypes: {
		imgSrc: {control: 'text'},
		iconSrc: {control: 'text'},
		title: {control: 'text'},
		titleTag: {control: 'select', options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']},
		location: {control: 'text'},
		tags: {control: 'array'},
		insights: {control: 'array'},
		isHovered: {control: 'boolean'},
		hoverSliderProgress: {control: 'range', min: 0, max: 100, step: 1},
		hoverButtonUrl: {control: 'text'},
		hoverButtonText: {control: 'text'}
	}
};

const Template = (args) => createFeaturedAgencyBanner(args);

const defaultArgs = {
	imgSrc: 'https://picsum.photos/id/736/1100',
	iconSrc: 'https://picsum.photos/id/240/240',
	title: 'Ford Models',
	titleTag: 'p',
	location: 'New York, USA',
	tags: ['Models', 'Actors'],
	insights: [
		{
			number: 307,
			title: 'models & actors'
		},
		{
			number: 13,
			title: 'ranked models'
		}
	],
	hoverSliderProgress: 20,
	hoverButtonUrl: '#',
	hoverButtonText: 'see profile'
};

export const Default = Template.bind({});

Default.args = {
	...defaultArgs
};

export const Hover = Template.bind({});

Hover.args = {
	...defaultArgs,
	isHovered: true
};
   