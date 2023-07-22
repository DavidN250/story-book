
import  {Checkbox}  from '../components/checkbox/Checkbox';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Checkbox',
  component: Checkbox,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    label: { control: "text" },
    value: { control: "text" },
    disabled: { control: "boolean" },
    onClick: { action: "clicked" },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Static = {
   args: {
    label: 'Default Checkbox',
    disabled:false
  },
};

export const Disabled = {
   args: {
    label: 'Disabled Checkbox',
    disabled: true
  },
};


