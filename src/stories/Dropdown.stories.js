import  Dropdown  from '../components/dropdown/Dropdown';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Dropdown',
  component: Dropdown,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    icon: { control: "boolean" },
    disabled: { control: "boolean" },
    selected: { control: "boolean" },
    onChange: { action: "changed" },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Static = {
   args: {
    icon:false,
    selected:false,
    disabled:false
  },
};
export const WithIcon = {
   args: {
    icon:true,
    selected:false,
    disabled:false
  },
}

export const Selected = {
   args: {
    icon:false,
    selected:true,
    disabled:false
  },
};

export const Disabled = {
   args: {
    icon:true,
    selected:false,
    disabled:true
  },
};
