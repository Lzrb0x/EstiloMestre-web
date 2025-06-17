import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("http://192.168.5.118:7089/clientdashboard"); 
  const data = await res.json();
  return NextResponse.json(data);
}
