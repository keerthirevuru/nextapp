import connect from "../../../utils/db";
import User from "../../../models/user";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        await connect();
        const body = await request.json();
        const { email, password } = body;

        // Check if the user exists
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return new NextResponse("User does not exist", { status: 404 });
        }

        // Validate the password
        if (existingUser.password !== password) {
            return new NextResponse("Incorrect password", { status: 401 });
        }

        return NextResponse.json(
            { message: "User logged in successfully." },
            { status: 200 }
        );
    } catch (e) {
        return new NextResponse("Error logging in user: " + e.message, { status: 500 });
    }
}

export async function GET(request) {
    try {
        await connect();
        const { searchParams } = new URL(request.url);
        const email = searchParams.get('email');

        if (!email) {
            return new NextResponse("Email query parameter is required", { status: 400 });
        }

        // Retrieve user by email
        const user = await User.findOne({ email });

        if (!user) {
            return new NextResponse("User not found", { status: 404 });
        }

        return NextResponse.json(
            { password: user.password },
            { status: 200 }
        );
    } catch (e) {
        return new NextResponse("Error retrieving user: " + e.message, { status: 500 });
    }
}
