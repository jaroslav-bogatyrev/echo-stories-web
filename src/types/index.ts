// Project data types
export interface Project {
  slug: string;
  title_en: string;
  title_cs?: string; // Czech title
  category: ('short' | 'feature' | 'documentary' | 'experimental' | 'animation' | 'drama' | 'folk Horror')[];
  status: 'in development' | 'in postproduction' | 'released';
  year?: number;
  duration?: string;
  logline_en?: string;
  logline_cs?: string;
  synopsis_en: string;
  synopsis_cs: string;
  credits: Credit[];
  support?: string[];
  gallery: GalleryImage[];
  trailer?: string; // YouTube or Vimeo URL
  order: number;
  locked?: boolean; // Prevents clicking to project page for TBD projects
}

export interface Credit {
  role: string;
  name: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

// Site configuration
export interface SiteConfig {
  siteName: string;
  location: string;
  email: string;
}
