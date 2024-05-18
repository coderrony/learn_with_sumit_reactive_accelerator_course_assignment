const { getMovieById, updateMovie, deleteMovie } = require("@/data");
const { NextResponse } = require("next/server");

export async function GET(request, { params }) {
  const movie = await getMovieById(params?.id);
  return NextResponse.json(movie);
}

export async function PATCH(request, { params }) {
  try {
    const response = await request.json();
    const movie = updateMovie(params?.id, response);

    if (movie) {
      return NextResponse.json(movie);
    } else {
      return NextResponse.json({
        message: "Movie not found",
        status: 500,
        data: null,
      });
    }
  } catch (error) {
    return NextResponse.error("Something went wrong", { status: 500 });
  }
}
export async function DELETE(request, { params }) {
  try {
    console.log(params.id);
    const movie = deleteMovie(params?.id);
    console.log(movie);
    if (movie) {
      return NextResponse.json({
        message: "Movie delete successfully",
        status: 200,
      });
    } else {
      return NextResponse.json({
        message: "movie not found",
        status: 500,
        data: null,
      });
    }
  } catch (error) {
    return NextResponse.error("Something went wrong", { status: 500 });
  }
}
