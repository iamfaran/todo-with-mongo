import { NextResponse } from "next/server";
import { getSessionUser } from "@/utils/getSessionUser";
import User from "@/models/User";

export async function GET(request: Request) {
  try {
    const sessionUser = await getSessionUser();

    if (!sessionUser) {
      return new Response(JSON.stringify({ message: "Not Authenticated" }), {
        status: 401,
      });
    }

    const userId = (sessionUser?.user as any).id;
    const user = await User.findById(userId);
    console.log(user);

    if (!user) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }
    return new Response(JSON.stringify({ darkMode: user.darkMode }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching theme preference:", error);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
}

export async function PUT(request: Request) {
  try {
    const sessionUser = await getSessionUser();
    const { darkMode } = await request.json();

    if (!sessionUser) {
      return new Response(JSON.stringify({ message: "Not Authenticated" }), {
        status: 401,
      });
    }

    const userId = (sessionUser?.user as any).id;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { darkMode },
      { new: true }
    );

    if (!updatedUser) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(updatedUser), { status: 200 });
  } catch (error) {
    console.error("Error updating theme preference:", error);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
}
