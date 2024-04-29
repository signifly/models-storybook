import { createAgencySignupButton } from './AgencySignupButton';

export default {
	title: 'Agency/Agency Signup/Agency Signup Button',
	argTypes: {
		text: {
			control: {
				type: 'text'
			}
		},
		url: {
			control: {
				type: 'text'
			}
		},
		hover: {
			control: {
				type: 'boolean'
			}
		},
		style: {
			control: {
				type: 'select',
				options: ['default', 'primary', 'secondary']
			}
		}
	}
};

const Template = (args) => createAgencySignupButton(args);

export const Default = Template.bind({});

Default.args = {
	text: 'Agency Signup',
	url: 'https://www.google.com',
	style: 'default'
};

export const Hover = Template.bind({});

Hover.args = {
	...Default.args,
	hover: true
};

export const Primary = Template.bind({});

Primary.args = {
	...Default.args,
	style: 'primary'
};

export const PrimaryHover = Template.bind({});

PrimaryHover.args = {
	...Primary.args,
	hover: true
};

export const Secondary = Template.bind({});

Secondary.args = {
	...Default.args,
	style: 'secondary'
};

export const SecondaryHover = Template.bind({});

SecondaryHover.args = {
	...Secondary.args,
	hover: true
};