import { createLinkedPanel } from './LinkedPanel';


export default {
	title: 'Components/LinkedPanel',
	argTypes: {
		title: {control: 'text'},
		titleTag: {
			control: {type: 'select'},
			options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']
		},
		buttonLabel: {control: 'text'},
		buttonUrl: {control: 'text'},
		newTab: {control: 'boolean'}
	}
};

const Template = (args) => {
	return createLinkedPanel(args);
};

export const LinkedPanel = Template.bind({});
LinkedPanel.args = {
	title: 'Lorem ipsum dolor sit amet',
	titleTag: 'p',
	buttonLabel: 'Click me',
	buttonUrl: '/',
	newTab: false
};
