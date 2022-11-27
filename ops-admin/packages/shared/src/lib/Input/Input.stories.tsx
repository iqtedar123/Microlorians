import Input from './Input';

export default {
  title: 'Button',
  component: Input,
  argTypes: {
    type: {
      options: ['email', 'password'],
      control: { type: 'select' },
    },
  },
};

const Template = (args) => <Input {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
  label: 'Email',
  type: 'email',
};
