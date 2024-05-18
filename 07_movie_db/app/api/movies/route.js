const { getMovies } = require("@/data");
const { NextResponse } = require("next/server");

export async function GET(request) {
  const movies = getMovies();
  return NextResponse.json(movies);
}
