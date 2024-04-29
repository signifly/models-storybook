import { createAgencyCard } from './AgencyCard';

export default {
	title: 'Agency/Agency Card',
	argTypes: {
		imgSrc: {control: 'text'},
		iconSrc: {control: 'text'},
		title: {control: 'text'},
		titleTag: {control: 'select', options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']},
		locations: {control: 'array'},
		tags: {control: 'array'},
		insights: {control: 'array'},
		isHover: {control: 'boolean'},
		isSelected: {control: 'boolean'},
		selectedTitle: {control: 'text'},
		selectedContent: {control: 'array'},
		selectedButtonUrl: {control: 'text'},
		selectedButtonText: {control: 'text'}
	}
};

const Template = (args) => createAgencyCard(args);

const defaultArgs = {
	imgSrc: 'https://picsum.photos/540/540',
	iconSrc: 'https://picsum.photos/600/600',
	title: 'Elite New York City',
	titleTag: 'p',
	locations: [
		{
			title: 'New York, USA'
		}
	],
	tags: [
		{
			title: 'Models'
		},
		{
			title: 'Actors'
		}
	],
	insights: [
		{
			title: 'models & actors',
			number: 283
		},
		{
			title: 'ranked models',
			number: 27
		}
	],
	selectedTitle: 'Title',
	selectedContent: [
		{
			title: 'Item 1'
		},
		{
			title: 'Item 2'
		},
		{
			title: 'Item 3'
		}
	],
	selectedButtonUrl: '#',
	selectedButtonText: 'See Profile'
};

export const Default = Template.bind({});

Default.args = {
	...defaultArgs
};

export const Hover = Template.bind({});

Hover.args = {
	...defaultArgs,
	isHover: true
};

export const WithOneInsight = Template.bind({});

WithOneInsight.args = {
	...defaultArgs,
	insights: [
		{
			title: 'models & actors',
			number: 283
		}
	]
};

export const WithoutInsights = Template.bind({});

WithoutInsights.args = {
	...defaultArgs,
	insights: []
};

export const WithMultipleLocations = Template.bind({});

WithMultipleLocations.args = {
	...defaultArgs,
	locations: [
		{
			title: '4 locations',
			isLink: true
		}
	]
};

export const MultipleLocationsExpanded = Template.bind({});

MultipleLocationsExpanded.args = {
	...defaultArgs,
	isSelected: true,
	selectedContent: [
		{
			title: 'Milan, Italy'
		},
		{
			title: 'Paris, France'
		},
		{
			title: 'London, UK'
		},
		{
			title: 'New York, USA'
		}
	],
	selectedTitle: 'Locations',
	selectedButtonUrl: '#',
	selectedButtonText: 'See Profile'
};

export const WithMultipleTags = Template.bind({});

WithMultipleTags.args = {
	...defaultArgs,
	tags: [
		{
			title: 'Models'
		},
		{
			title: 'Actors'
		},
		{
			title: '+1',
			isLink: true
		}
	]
};

export const MultipleTagsExpanded = Template.bind({});

MultipleTagsExpanded.args = {
	...defaultArgs,
	isSelected: true,
	selectedContent: [
		{
			title: 'Models'
		},
		{
			title: 'Actors'
		},
		{
			title: 'Influencers'
		}
	],
	selectedTitle: 'Categories',
	selectedButtonUrl: '#',
	selectedButtonText: 'See Profile'
};

export const WithoutImage = Template.bind({});

WithoutImage.args = {
	...defaultArgs,
	imgSrc: ''
};

export const WithoutImageAndIcon = Template.bind({});

WithoutImageAndIcon.args = {
	...defaultArgs,
	imgSrc: '',
	iconSrc: '',
	insights: []
};
   