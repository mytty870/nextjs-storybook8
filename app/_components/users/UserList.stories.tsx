import { Meta, StoryObj } from "@storybook/react";
import  UserList from "./UserList";


const meta = {
  title: 'UserList',
  component: UserList,
} satisfies Meta<typeof UserList>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {}
