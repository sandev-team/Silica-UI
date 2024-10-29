import type { Meta, StoryObj } from "@storybook/react";
import DatePicker from "../DatePicker";

const meta: Meta<typeof DatePicker> = {
  title: "Datepicker",
  component: DatePicker,
  tags: ["autodoc"],
  parameters: {
    docs: {
      toc: true,
    },
  },
};

export default meta;
type StoryInput = StoryObj<typeof DatePicker>;

export const AllowPastDateForDatepickerInput: StoryInput = {
  name: "Input allow past",
  args: {
    disablePastDates: false,
  },
};

export const DisablePastDateForDatepickerInput: StoryInput = {
  name: "Input disallow past",
  args: {
    disablePastDates: true,
  },
};
