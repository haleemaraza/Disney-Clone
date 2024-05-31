import CarouselBannerWrapper from "@/components/CarouselBannerWapper";
import MoviesCarousel from "@/components/MoviesCarousel";
import { getPopularMovies, getToRatedMovies, getUpcomingMovies } from "@/lib/getMovies";

export default async function Home() {

  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getToRatedMovies();
  const popularMovies = await getPopularMovies();

  return (
    <main>
      <CarouselBannerWrapper />

      <div className="flex flex-col space-y-2 xl:-mt-48">
        <MoviesCarousel movies={upcomingMovies} title="Upcoming" />
        <MoviesCarousel movies={topRatedMovies} title='Top Rated' />
        <MoviesCarousel movies={popularMovies} title='Popular' />
      </div>
    </main>

  );
}
