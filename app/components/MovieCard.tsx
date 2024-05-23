import { PlayCircle } from "lucide-react";

interface iAppProps {
  title: string;
  overview: string;
  movieId: number;
  watchList: boolean;
  watchListId: string;
  youtubeUrl: string;
}

export function MovieCard({
  movieId,
  overview,
  title,
  watchListId,
  watchList,
  youtubeUrl,
}: iAppProps) {
  return (
    <>
      <button className="-mt-14">
        <PlayCircle className="h-20 w-20" />
      </button>
    </>
  );
}
