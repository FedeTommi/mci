import { InjectionToken } from '@angular/core';

import galleryData from './gallery-data.json';

export interface GalleryPhoto {
  id: string;
  src: string;
  thumbnail: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
}

export interface GalleryGroup {
  id: string;
  label: string;
  photos: GalleryPhoto[];
}

export const galleryGroups = new InjectionToken<GalleryGroup[]>('Gallery groups', { providedIn: 'root', factory: () => galleryData });
