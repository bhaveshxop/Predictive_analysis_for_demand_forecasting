import { NextResponse } from "next/server";
import { query } from "@/app/lib/db";

export const POST = async (req, res) => {
  const data = await req.json();
  const { name, email, password } = data;

  console.log(name, email, password);
  try {

    const results = await query(
      {
        query: "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
        values: [name, email, password],
      }
    );

    if (results.error) {
      return NextResponse.json({ message: results.error }, { status: 500 });
    }
    else {
      return NextResponse.json({ message: "User created" }, { status: 201 });
    }
  }
  catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};