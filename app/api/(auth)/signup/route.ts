import connect from "../../../utils/db";
import user from "../../../models/user";
import { NextResponse } from "next/server";

// POST method for user authentication
export async function POST(request: Request) {
    const body = await request.json();
    const { email, password, username} = body;

    // Validate the request body
    if (!email || !password || !username) {
        return new NextResponse(JSON.stringify({ message: "User is created Email, password, and confirmPassword are required." }), { status: 400 });
    }

    // Check if password matches confirmPassword
    // if (password !== username) {
    //     return new NextResponse("Password and confirmPassword do not match.", { status: 400 });
    // }

    try {
        await connect();
        const newUser = new user({email,password,username});
         await newUser.save();
        // Add your logic for user authentication (e.g., creating a new user, logging in, etc.)
        return new NextResponse(
            JSON.stringify({ message: "siginup successfully" }),
            { status: 200 }
        );
    } catch (e) {
        return new NextResponse("Error in registering user: " + e, { status: 500 });
    }
}

/// GET method for fetching user data
export async function GET(request: Request) {
    try {
        await connect();
        
        // Fetch user data
        const users = await user.find({});
        
        // Return the fetched user data
        return new NextResponse(
            JSON.stringify({ message: "User data fetched successfully", users }),
            { status: 200 }
        );
    } catch (e) {
        return new NextResponse(`Error in fetching user data: ${e}`, { status: 500 });
    }
}

// PUT method for updating user data
export async function PUT(request: Request) {
    const body = await request.json();
    const { email, password, username } = body;

    // Validate the request body
    if (!email || !password || !username) {
        return new NextResponse(JSON.stringify({ message: "Email, password, and confirmPassword are required." }), { status: 400 });
    }

    // Check if password matches confirmPassword
    if (password !== username) {
        return new NextResponse("Password and confirmPassword do not match.", { status: 400 });
    }

    try {
        await connect();
        
        // Update user data
        const updatedUser = await user.findOneAndUpdate(
            { email: email },
            { password: password },
            { new: true }
        );

        if (!updatedUser) {
            return new NextResponse("User not found.", { status: 404 });
        }

        // Return success response
        return new NextResponse(
            JSON.stringify({ message: "User data updated successfully", updatedUser }),
            { status: 200 }
        );
    } catch (e) {
        return new NextResponse("Error in updating user data: " + e, { status: 500 });
    }
}