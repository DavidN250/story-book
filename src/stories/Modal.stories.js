import  Modal  from '../components/modal/Modal';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Modal',
  component: Modal,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    isProgress: { action: "changed" },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Static = {
   args: { 
   },
};

export const Progress = {
   args: { 
   },
};