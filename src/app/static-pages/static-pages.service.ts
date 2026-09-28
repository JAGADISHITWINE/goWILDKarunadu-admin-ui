import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface AboutHero {
  year?: string;
  badge?: string;
  title?: string;
  subtitle?: string;
}

export interface AboutStory {
  sectionNumber?: string;
  tag?: string;
  heading?: string;
  paragraph1?: string;
  quote?: string;
  paragraph2?: string;
}

export interface AboutStat {
  key?: string;
  number: string;
  label: string;
}

export interface AboutValue {
  icon: string;
  title: string;
  description: string;
}

export interface AboutTeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  suffix?: string;
}

export interface AboutSafetyItem {
  icon: string;
  title: string;
  description: string;
}

export interface AboutDataPayload {
  hero?: AboutHero;
  story?: AboutStory;
  stats?: AboutStat[];
  values?: AboutValue[];
  team?: AboutTeamMember[];
  safetyItems?: AboutSafetyItem[];
}

export interface StaticPageRecord {
  id?: string;
  pageKey: string;
  title: string;
  content: string;
  status?: 'active' | 'inactive';
  sortOrder?: number;
  aboutData?: AboutDataPayload;
  updatedBy?: {
    id?: string;
    name?: string | null;
    email?: string | null;
  } | null;
  updatedAt?: string;
  createdAt?: string;
}

export interface StaticPagePointPayload {
  title: string;
  body: string;
}

export interface UpdateStaticPagePayload {
  title: string;
  status: 'active' | 'inactive';
  points?: StaticPagePointPayload[];
  aboutData?: AboutDataPayload;
  content?: string;
}

interface StaticPagesResponse {
  success?: boolean;
  message?: string;
  data?: StaticPageRecord | StaticPageRecord[] | null;
}

@Injectable({
  providedIn: 'root',
})
export class StaticPagesService {
  private readonly API = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getPages(): Observable<StaticPageRecord[]> {
    return this.http.get<StaticPagesResponse>(`${this.API}/static-pages`).pipe(
      map((response) => (Array.isArray(response?.data) ? response.data : []))
    );
  }

  getPage(pageKey: string): Observable<StaticPageRecord | null> {
    return this.http.get<StaticPagesResponse>(`${this.API}/static-pages/${encodeURIComponent(pageKey)}`).pipe(
      map((response) => (response?.data && !Array.isArray(response.data) ? response.data : null))
    );
  }

  updatePage(
    pageKey: string,
    payload: UpdateStaticPagePayload
  ): Observable<StaticPageRecord | null> {
    return this.http.put<StaticPagesResponse>(`${this.API}/static-pages/${encodeURIComponent(pageKey)}`, payload).pipe(
      map((response) => (response?.data && !Array.isArray(response.data) ? response.data : null))
    );
  }
}
