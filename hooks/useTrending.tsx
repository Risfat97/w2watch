import { MediaType } from "@/constants/Media";
import Constants from "expo-constants";

export interface Media {
    backdrop_path: string
    id: number
    title: string|null
    name: string|null
    original_title: string|null
    original_name: string|null
    overview: string
    poster_path: string
    media_type: string
    adult: boolean
    original_language: string
    genre_ids: number[]
    popularity: number
    release_date: string
    video: boolean
    vote_average: number
    vote_count: number
}

const TMDB_API_BASE_URL = Constants.expoConfig?.extra?.TMDB_API_BASE_URL;
const TOKEN_TMDB_API = Constants.expoConfig?.extra?.TOKEN_TMDB_API;
  

export async function useTrending(): Promise<Media[]> {
    const response = await fetch(`${TMDB_API_BASE_URL}/trending/all/day?language=en-US`, {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${TOKEN_TMDB_API}`
        }
    });
    
    if (response.status !== 200) {
        throw new Error("Unable to retrieve trendings");
    }

    const responseBody = await response.json();
    return responseBody.results.filter((item: Media) => item.media_type in MediaType);
}

/*
export function useColorScheme() {
    const [hasHydrated, setHasHydrated] = useState(false);

    useEffect(() => {
        setHasHydrated(true);
    }, []);

    const colorScheme = useRNColorScheme();

    if (hasHydrated) {
        return colorScheme;
    }

    return 'light';
}
*/