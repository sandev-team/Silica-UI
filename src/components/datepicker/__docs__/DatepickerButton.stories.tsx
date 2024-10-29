import type { Meta, StoryObj } from "@storybook/react";
import DatePickerButton from "../DatePickerButton";

const meta: Meta<typeof DatePickerButton> = {
  title: "Datepicker",
  component: DatePickerButton,
  tags: ["autodoc"],
  parameters: {
    docs: {
      toc: true,
    },
  },
};

export default meta;

type StoryButton = StoryObj<typeof DatePickerButton>;

export const AllowPastDateForDatepickerButton: StoryButton = {
  name: "Button allow past",
  args: {
    disablePastDates: false,
  },
};

export const DisablePastDateForDatepickerButton: StoryButton = {
  name: "Button disallow past",
  args: {
    disablePastDates: true,
  },
};
