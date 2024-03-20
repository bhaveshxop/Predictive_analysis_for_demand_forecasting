import { NextResponse } from "next/server";
import { query } from "@/app/lib/db";


export const POST = async (req, res) => {
    const data = await req.json();
    const { email, password } = data;

    try {
        const results = await query(
            {
                query: "SELECT * FROM users WHERE email = ? AND password = ?",
                values: [email, password],
            }
        );

        if (results.error) {
            return NextResponse.json({ message: results.error }, { status: 500 });
        }
        else {
            if (results.length > 0) {
                return NextResponse.json({
                    message: "Login successful", user: results[0]}, { status: 200 });
            }
            else {
                return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
            }
        }
    }
    catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
};