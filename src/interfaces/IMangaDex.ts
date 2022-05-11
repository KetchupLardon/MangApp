interface ITitle {
  en: string;
}

interface IMangaAttributes {
  title: ITitle;
  altTitle: ITitle[];
  description: {
    en: string;
    pl?: string;
    ru?: string;
  };
  isLocked: boolean;
  links: {
    al: string;
    ap: string;
    bw: string;
    kt: string;
    mu: string;
    amz: string;
    ebj: string;
    mal: string;
    raw: string;
    engtl: string;
  };
  originalLanguage: string;
  lastVolume: string;
  lastChapter: string;
  publicationDemographic: string;
  status: string;
  year: null | string;
  contentRating: string;
  tags: [];
  state: string;
  createdAt: string;
  updatedAt: string;
  version: number;
}

interface IImageAttributes {
  description?: string;
  volume?: string;
  fileName?: string;
  locale?: string;
  createdAt?: string;
  updatedAt?: string;
  version?: number;
}

interface IMangaRelationships {
  id: string;
  type: string;
  attributes?: IImageAttributes;
}

export interface IMangaData {
  id: string;
  type: string;
  attributes: IMangaAttributes;
  relationships: IMangaRelationships[];
}
