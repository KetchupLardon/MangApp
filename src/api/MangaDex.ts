export class MangaDex {
  protected API_BASE_URL = 'https://api.mangadex.org';
  protected IMAGE_BASE_URL = 'https://uploads.mangadex.org/covers/';

  private checkStatusError = (status: number) => {
    if (status >= 400 && status < 600) {
      throw new Error('Bad response from server');
    }
  };

  private async fetchData(query: string) {
    const response = await fetch(`${this.API_BASE_URL}/${query}`);
    this.checkStatusError(response.status);
    return response.json();
  }

  console.log("iji");
  

  public fetchMangaList = () => {
    return this.fetchData('manga?includes[]=cover_art');
  };

  public fetchManga = (mangaId: string) => {
    return this.fetchData(
      `manga/${mangaId}?includes[]=author&includes[]=artist&includes[]=cover_art`,
    );
  };

  // ex: https://api.mangadex.org/manga/46e530ce-0766-4cbd-b005-5e6fb0ba5e71/aggregate?translatedLanguage[]=en
  public async fetchChapters(mangaId: string, lang: string) {
    return this.fetchData(
      `manga/${mangaId}/aggregate?translatedLanguage[]=${lang}`,
    );
  }

  // ex: https://api.mangadex.org/at-home/server/43231fc9-bc6f-4507-af62-76c6cf1fd7d6
  public async fetchChapterPages(chapterId: string) {
    return this.fetchData(`/at-home/server/${chapterId}`);
  }

  // ex: https://uploads.mangadex.org/covers/46e530ce-0766-4cbd-b005-5e6fb0ba5e71/bc157f09-43ed-4759-bba2-d54b4ac8b968.jpg
  public coverUrl(mangaId: string, fileName: string) {
    return `${this.IMAGE_BASE_URL}/${mangaId}/${fileName}`;
  }

  // ex: https://uploads.mangadex.org/data/b158653a1d4d4b57d5d0af6ec29aa8d5/m5-0bd875092e5b7c2708425f6f5dd45ad2f71a078484ea65bd8d0b08de7b690852.png
  public chapterPageUrl(dataType: string, hash: string, fileName: string) {
    return `${this.IMAGE_BASE_URL}/${dataType}/${hash}/${fileName}`;
  }
}
