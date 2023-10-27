
import { NextResponse } from "next/server";


// Get
// export async function GET(req,res){
//     return NextResponse.json({msg:"I am Get Request"})

// }

export function GET(req, res){
    const {searchParams} = new URL(req.url);
    const id = searchParams.get('id')
    return NextResponse.json({msg:id});

}