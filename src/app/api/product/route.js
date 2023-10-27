
import { NextResponse } from "next/server";


// Get
// export async function GET(req,res){
//     return NextResponse.json({msg:"I am Get Request"})

// }

// export function GET(req, res){
//     // const {searchParams} = new URL(req.url);
//     // const id = searchParams.get('id')
//     // return NextResponse.json({msg:id});
//     const {searchParams} = new URL(req.url);
//     const name = searchParams.get('name')
//     const city = searchParams.get('city')
//     return NextResponse.json({name, city});

// }

export async function POST(req, res){
    const reqBody = await req.json()
    return NextResponse.json({mass:reqBody.name})
}