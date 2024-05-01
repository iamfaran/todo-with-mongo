import { Profile } from "next-auth";
// TODO type

export type Todo = {
  _id: string;
  task: string;
  isCompleted: boolean;
};

export interface UserProfile extends Profile {
  picture?: string;
}
