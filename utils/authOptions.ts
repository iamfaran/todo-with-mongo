import connectDB from "@/config/database";
import User from "@/models/User";
import { AuthOptions } from "next-auth";

import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
      // This function is called when the user signs in

      // 1. Connect to the database
      await connectDB();

      // 2. Check if the user is already registered
      const user = await User.findOne({ email: profile?.email });

      // 3. If the user is not registered, register the user
      if (!user) {
        await User.create({
          username: profile?.name,
          email: profile?.email,
          profilePicture: profile?.image,
        });
      }

      // 4. Return true to allow sign in
      return true;
    },
  },
};
