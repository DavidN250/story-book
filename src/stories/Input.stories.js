import  Input  from '../components/input/Input';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Input',
  component: Input,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    placeholder: { control: "text" },
    type: { control: 'select', options: ['text', 'email', 'password'] },
    disabled: { control: "boolean" },
    onChange: { action: "changed" },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Static = {
   args: {
    placeholder: 'Enter text',
    type:'text',
    disabled:false
  },
};

export const Disabled = {
   args: {
    placeholder: 'Enter text',
    type:'text',
    disabled:true
  },
};


