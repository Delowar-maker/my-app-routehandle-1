

const { NextResponse } = require("next/server");

import { headers } from 'next/headers'


// Reuest Header

export async function GET(req,res){
    const headersList = headers()
   const apiKey = headersList.get('api-key');
   return NextResponse.json({mas:apiKey})
}