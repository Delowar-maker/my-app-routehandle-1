

const { NextResponse } = require("next/server");

import { headers } from 'next/headers'


// Reuest Header

// যে সব value  key pair আকারে থাকে সে সবকে get করব।
// Examples 1. headers 2.cookies 3.formData

// export async function GET(req,res){
//     const headersList = headers()
//    const apiKey = headersList.get('api-key');
//    return NextResponse.json({mas:apiKey})
// }

// cookies Request
// যে সব value  key pair আকারে থাকে সে সবকে get করব।
// Examples 1. headers 2.cookies 3.formData

export async function GET(req,res){
    // const token = req.cookies.get('token');
    const token = req.cookies.get('token').name;
    return NextResponse.json({mes:token});
}