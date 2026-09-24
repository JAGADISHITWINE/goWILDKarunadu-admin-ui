import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AdminShellComponent } from '../shared/admin-shell/admin-shell.component';
import {
  AboutDataPayload,
  AboutHero,
  AboutSafetyItem,
  AboutStat,
  AboutStory,
  AboutTeamMember,
  AboutValue,
  StaticPageRecord,
  StaticPagesService,
} from './static-pages.service';

type PageKey = 'about-us' | 'faqs' | 'cancelation' | 'terms-and-condition';

interface StaticPageOption {
  key: PageKey;
  label: string;
  helper: string;
}

interface PreviewSection {
  title: string;
}

interface PagePoint {
  id: string;
  title: string;
  body: string;
}

@Component({
  selector: 'app-static-pages',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, AdminShellComponent],
  templateUrl: './static-pages.component.html',
  styleUrls: ['./static-pages.component.scss'],
})
export class StaticPagesComponent implements OnInit {
  readonly pages: StaticPageOption[] = [
    { key: 'about-us', label: 'About Us', helper: 'Hero, story, values, team & safety standards' },
    { key: 'faqs', label: "FAQ's", helper: 'Common user questions and answers' },
    { key: 'cancelation', label: 'Cancelation', helper: 'Booking cancellation policy' },
    { key: 'terms-and-condition', label: 'Terms and Condition', helper: 'Usage rules and terms' },
  ];

  records = new Map<PageKey, StaticPageRecord>();
  selectedKey: PageKey = 'about-us';
  loading = false;
  saving = false;
  message = '';
  error = '';

  aboutTab: 'hero' | 'story' | 'values' | 'team' | 'safety' | 'stats' = 'hero';

  aboutData: AboutDataPayload = {
    hero: {
      year: '2011',
      badge: 'Our Story',
      title: "Exploring Karnataka's Wilderness Since 2011",
      subtitle: 'Your trusted partner for adventure and exploration in the Western Ghats',
    },
    story: {
      sectionNumber: '01',
      tag: 'Our Story',
      heading: 'Born from a love of wild places',
      paragraph1:
        "goWILDKarunadu was born out of a passion for the Western Ghats and a desire to share its beauty with fellow adventurers. What started as weekend treks with friends has grown into one of Karnataka's most trusted trekking organisations.",
      quote:
        "We've introduced thousands of people to the majestic peaks, dense forests, and hidden waterfalls of Karnataka.",
      paragraph2:
        'Our mission remains simple: to create safe, memorable, and responsible trekking experiences while preserving the natural beauty that makes these adventures possible.',
    },
    stats: [
      { key: 'trekkers', number: '10,000+', label: 'Happy Trekkers' },
      { key: 'routes', number: '50+', label: 'Trek Routes' },
      { key: 'experience', number: '15', label: 'Years Experience' },
      { key: 'rating', number: '4.8', label: 'Average Rating' },
    ],
    values: [
      {
        icon: 'shield-checkmark',
        title: 'Safety First',
        description: 'All our treks are led by certified guides with comprehensive safety protocols',
      },
      {
        icon: 'leaf',
        title: 'Eco-Friendly',
        description: 'We practice and promote responsible trekking with minimal environmental impact',
      },
      {
        icon: 'people',
        title: 'Community',
        description: 'Building a community of adventure enthusiasts who respect nature',
      },
      {
        icon: 'star',
        title: 'Excellence',
        description: 'Committed to providing exceptional experiences on every trek',
      },
    ],
    team: [
      {
        name: 'Rajesh Kumar',
        role: 'Founder & Lead Trek Leader',
        image: 'https://ui-avatars.com/api/?name=Rajesh+Kumar&size=200',
        bio: '15+ years of trekking experience in the Western Ghats',
        suffix: 'Founder & Lead Trek Leader',
      },
      {
        name: 'Priya Sharma',
        role: 'Operations Manager',
        image: 'https://ui-avatars.com/api/?name=Priya+Sharma&size=200',
        bio: 'Expert in trek logistics and safety protocols',
        suffix: 'Operations Manager',
      },
      {
        name: 'Arjun Menon',
        role: 'Senior Trek Guide',
        image: 'https://ui-avatars.com/api/?name=Arjun+Menon&size=200',
        bio: 'Certified wilderness first responder and mountaineer',
        suffix: 'Senior Trek Guide',
      },
      {
        name: 'Meera Reddy',
        role: 'Trek Guide & Naturalist',
        image: 'https://ui-avatars.com/api/?name=Meera+Reddy&size=200',
        bio: 'Wildlife enthusiast with deep knowledge of Western Ghats flora & fauna',
        suffix: 'Trek Guide & Naturalist',
      },
    ],
    safetyItems: [
      {
        icon: 'shield-checkmark',
        title: 'Certified Guides',
        description: 'All treks led by certified guides with wilderness first aid training',
      },
      {
        icon: 'medkit',
        title: 'Safety Briefings',
        description: 'Comprehensive safety briefings before each trek',
      },
      {
        icon: 'call',
        title: 'Emergency Communication',
        description: 'Emergency communication devices on all treks',
      },
      {
        icon: 'cloudy-night',
        title: 'Weather Monitoring',
        description: 'Strict adherence to weather and trail conditions',
      },
    ],
  };

  draft = {
    title: '',
    content: '',
    status: 'active' as 'active' | 'inactive',
  };

  points: PagePoint[] = [];

  constructor(private staticPagesService: StaticPagesService) {}

  ngOnInit(): void {
    this.loadPages();
  }

  get selectedPage(): StaticPageRecord | null {
    return this.records.get(this.selectedKey) || null;
  }

  get previewContent(): string {
    return this.draft.content || '';
  }

  get previewSections(): PreviewSection[] {
    return this.points
      .filter((point) => point.title.trim())
      .map((point) => ({ title: point.title.trim() }));
  }

  trackByPointId(_: number, point: PagePoint): string {
    return point.id;
  }

  selectPage(pageKey: PageKey): void {
    this.selectedKey = pageKey;
    this.applySelectedPage();
    this.message = '';
    this.error = '';
  }

  loadPages(): void {
    this.loading = true;
    this.error = '';

    this.staticPagesService.getPages().subscribe({
      next: (pages) => {
        this.records.clear();
        pages.forEach((page) => {
          this.records.set(page.pageKey as PageKey, page);
        });
        this.applySelectedPage();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.error = 'Failed to load static pages.';
      },
    });
  }

  setAboutTab(tab: 'hero' | 'story' | 'values' | 'team' | 'safety' | 'stats'): void {
    this.aboutTab = tab;
  }

  addValue(): void {
    if (!this.aboutData.values) this.aboutData.values = [];
    this.aboutData.values.push({
      icon: 'star',
      title: 'New Value',
      description: 'Describe this core value here...',
    });
  }

  removeValue(index: number): void {
    if (this.aboutData.values && this.aboutData.values.length > 0) {
      this.aboutData.values.splice(index, 1);
    }
  }

  addTeamMember(): void {
    if (!this.aboutData.team) this.aboutData.team = [];
    this.aboutData.team.push({
      name: 'New Trek Leader',
      role: 'Trek Guide',
      image: 'https://ui-avatars.com/api/?name=Trek+Guide&size=200',
      bio: 'Experienced mountaineer and wilderness guide in the Western Ghats.',
      suffix: 'Trek Guide',
    });
  }

  removeTeamMember(index: number): void {
    if (this.aboutData.team && this.aboutData.team.length > 0) {
      this.aboutData.team.splice(index, 1);
    }
  }

  addSafetyItem(): void {
    if (!this.aboutData.safetyItems) this.aboutData.safetyItems = [];
    this.aboutData.safetyItems.push({
      icon: 'shield-checkmark',
      title: 'Safety Standard',
      description: 'Describe this safety protocol here...',
    });
  }

  removeSafetyItem(index: number): void {
    if (this.aboutData.safetyItems && this.aboutData.safetyItems.length > 0) {
      this.aboutData.safetyItems.splice(index, 1);
    }
  }

  savePage(): void {
    if (this.selectedKey === 'about-us') {
      this.saving = true;
      this.error = '';
      this.message = '';

      const content = JSON.stringify(this.aboutData);
      this.draft.content = content;

      this.staticPagesService.updatePage('about-us', {
        title: this.draft.title.trim() || 'About Us',
        status: this.draft.status,
        aboutData: this.aboutData,
        content,
      }).subscribe({
        next: (page) => {
          this.saving = false;
          this.message = 'About Us page updated successfully.';
          if (page) {
            this.records.set('about-us', page);
            if (page.aboutData) {
              this.aboutData = JSON.parse(JSON.stringify(page.aboutData));
            }
          }
        },
        error: (err) => {
          this.saving = false;
          this.error = err?.error?.message || 'Failed to save About Us page.';
        },
      });
      return;
    }

    const pointsSnapshot = this.points
      .map((point) => ({
        id: point.id,
        title: point.title.trim(),
        body: point.body.trim(),
      }))
      .filter((point) => point.title || point.body);
    const content = this.buildContentFromPoints(
      pointsSnapshot,
      this.draft.title || this.selectedPage?.title || this.pages.find((entry) => entry.key === this.selectedKey)?.label || ''
    );
    this.points = pointsSnapshot.map((point) => this.createPoint(point));
    this.draft.content = content;

    if (!this.draft.title.trim() || !content.trim()) {
      this.error = 'Title and content are required.';
      return;
    }

    this.saving = true;
    this.error = '';
    this.message = '';

    this.staticPagesService.updatePage(this.selectedKey, {
      title: this.draft.title.trim(),
      status: this.draft.status,
      points: pointsSnapshot.map((point) => ({
        title: point.title,
        body: point.body,
      })),
    }).subscribe({
      next: (page) => {
        const responseContent = page?.content || content.trim();

        this.staticPagesService.getPage(this.selectedKey).subscribe({
          next: (freshPage) => {
            const updatedPage: StaticPageRecord = {
              ...(this.selectedPage || {}),
              ...(freshPage || page || {}),
              pageKey: this.selectedKey,
              title: freshPage?.title || page?.title || this.draft.title.trim(),
              content: freshPage?.content || responseContent,
              status: freshPage?.status || page?.status || this.draft.status,
              sortOrder: freshPage?.sortOrder ?? page?.sortOrder ?? this.selectedPage?.sortOrder,
            };

            this.records.set(this.selectedKey, updatedPage);
            this.draft.title = updatedPage.title;
            this.draft.content = updatedPage.content;
            this.draft.status = updatedPage.status || 'active';
            this.points = this.extractPoints(updatedPage.content, this.selectedKey);
            if (!this.points.length) {
              this.points = this.getAccordionTemplatePoints(this.selectedKey);
            }
            this.saving = false;
            this.message = 'Page saved successfully.';
          },
          error: () => {
            const updatedPage: StaticPageRecord = {
              ...(this.selectedPage || {}),
              ...(page || {}),
              pageKey: this.selectedKey,
              title: page?.title || this.draft.title.trim(),
              content: responseContent,
              status: page?.status || this.draft.status,
              sortOrder: page?.sortOrder ?? this.selectedPage?.sortOrder,
            };

            this.records.set(this.selectedKey, updatedPage);
            this.draft.content = updatedPage.content;
            this.points = this.extractPoints(updatedPage.content, this.selectedKey);
            if (!this.points.length) {
              this.points = this.getAccordionTemplatePoints(this.selectedKey);
            }
            this.saving = false;
            this.message = 'Page saved successfully.';
          },
        });
      },
      error: (err) => {
        this.saving = false;
        this.error = err?.error?.message || 'Failed to save page.';
      },
    });
  }

  resetDraft(): void {
    this.applySelectedPage();
    this.message = '';
    this.error = '';
  }

  addPoint(): void {
    this.points.push(this.createPoint());
    this.syncDraftContent();
    this.message = '';
    this.error = '';
  }

  removePoint(index: number): void {
    if (index < 0 || index >= this.points.length) {
      return;
    }

    this.points = this.points.filter((_, pointIndex) => pointIndex !== index);
    if (!this.points.length) {
      this.points = [this.createPoint()];
    }
    this.syncDraftContent();
    this.message = '';
    this.error = '';
  }

  movePoint(index: number, direction: -1 | 1): void {
    const target = index + direction;
    if (index < 0 || target < 0 || target >= this.points.length) {
      return;
    }

    const [item] = this.points.splice(index, 1);
    this.points.splice(target, 0, item);
    this.syncDraftContent();
  }

  applyTemplate(pageKey: PageKey): void {
    this.selectedKey = pageKey;
    const page = this.records.get(pageKey);
    const fallback = this.pages.find((entry) => entry.key === pageKey);

    this.draft.title = page?.title || fallback?.label || '';
    this.draft.status = page?.status === 'inactive' ? 'inactive' : 'active';
    this.points = this.getAccordionTemplatePoints(pageKey);
    this.syncDraftContent();
    this.message = '';
    this.error = '';
  }

  private applySelectedPage(): void {
    const page = this.records.get(this.selectedKey);
    const fallback = this.pages.find((entry) => entry.key === this.selectedKey);

    if (this.selectedKey === 'about-us') {
      if (page?.aboutData) {
        this.aboutData = JSON.parse(JSON.stringify(page.aboutData));
      } else if (page?.content) {
        try {
          const parsed = JSON.parse(page.content);
          this.aboutData = {
            hero: parsed.hero || this.aboutData.hero,
            story: parsed.story || this.aboutData.story,
            stats: parsed.stats || this.aboutData.stats,
            values: parsed.values?.length ? parsed.values : this.aboutData.values,
            team: parsed.team?.length ? parsed.team : this.aboutData.team,
            safetyItems: parsed.safetyItems?.length ? parsed.safetyItems : this.aboutData.safetyItems,
          };
        } catch {
          // keep existing default aboutData
        }
      }

      this.draft = {
        title: page?.title || fallback?.label || 'About Us',
        content: JSON.stringify(this.aboutData),
        status: page?.status === 'inactive' ? 'inactive' : 'active',
      };
      return;
    }

    const content = page?.content || this.getAccordionTemplate(this.selectedKey);
    this.draft = {
      title: page?.title || fallback?.label || '',
      content,
      status: page?.status === 'inactive' ? 'inactive' : 'active',
    };
    this.points = this.extractPoints(content, this.selectedKey);
    if (!this.points.length) {
      this.points = this.getAccordionTemplatePoints(this.selectedKey);
    }
    this.syncDraftContent();
  }

  private getAccordionTemplate(pageKey: PageKey): string {
    return this.buildContentFromPoints(this.getAccordionTemplatePoints(pageKey), this.pages.find((entry) => entry.key === pageKey)?.label || '');
  }

  private getAccordionTemplatePoints(pageKey: PageKey): PagePoint[] {
    switch (pageKey) {
      case 'faqs':
        return [
          {
            title: 'Booking Process',
            body: 'Bookings are completed by selecting a trek, choosing a suitable date, filling in the participant details, and making the payment online.',
          },
          {
            title: 'Payment Methods',
            body: 'Payments can be made using the approved online payment methods shown during checkout. The booking is confirmed only after the transaction is successfully completed.',
          },
          {
            title: 'Rescheduling and Cancellation',
            body: 'If you need to cancel or reschedule, please contact the support team as early as possible. Requests are handled according to the published cancellation policy and the availability of alternate dates.',
          },
          {
            title: 'Support Contact',
            body: 'For assistance with bookings, payments, rescheduling, or general queries, please use the official support contact details listed on the website.',
          },
        ].map((point) => this.createPoint(point));
      case 'cancelation':
        return [
          {
            title: 'Cancellation by Customer',
            body: 'Cancellation requests must be submitted through the official support channel or the booking platform used for the reservation. The date and time of receipt will be used to determine refund eligibility and any applicable deductions.',
          },
          {
            title: 'Refund Eligibility',
            body: 'Refund eligibility depends on how close the request is to the departure date and on the operational commitments already made, including permits, transport, accommodation, and guide arrangements. The final refund amount is calculated from the total booking value after applicable deductions.',
          },
          {
            title: 'Late Cancellation and No-Show',
            body: 'Cancellations made close to the trek date, late arrivals, or failure to report at the scheduled time are treated as no-show cases and are generally non-refundable because arrangements will already be in place.',
          },
          {
            title: 'Organizer Cancellation',
            body: 'If we cancel an event due to weather, safety concerns, forest department restrictions, insufficient participants, or other operational reasons, you will receive a full refund or, where available, the option to reschedule to another date.',
          },
          {
            title: 'Refund Processing',
            body: 'Approved refunds are processed to the original payment method within 7 to 10 working days. Bank, card network, or payment gateway timelines may vary and are outside our control.',
          },
          {
            title: 'Rescheduling',
            body: 'Where operationally possible, one reschedule request may be allowed instead of a refund. Rescheduled bookings remain subject to availability, permit rules, and any price difference in effect on the new date.',
          },
        ].map((point) => this.createPoint(point));
      case 'terms-and-condition':
        return [
          {
            title: 'Acceptance of Terms',
            body: 'By accessing or using our services, you agree to follow these Terms and Conditions and any updates published by us from time to time.',
          },
          {
            title: 'User Responsibilities',
            body: 'Users must provide accurate information, follow all instructions, behave responsibly, and avoid any misuse of the service, bookings, or website.',
          },
          {
            title: 'Payment Terms',
            body: 'All prices and charges are shown at the time of booking. Payments must be completed through the approved payment methods, and any applicable taxes or gateway charges will be displayed before confirmation.',
          },
          {
            title: 'Updates to Terms',
            body: 'We may revise these terms when required. Any updated version will be published on the website and will take effect from the date mentioned in the revised document.',
          },
        ].map((point) => this.createPoint(point));
    }

    return [];
  }

  private createPoint(point: Partial<PagePoint> = {}): PagePoint {
    return {
      id: point.id || `point-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
      title: point.title || '',
      body: point.body || '',
    };
  }

  private buildContentFromPoints(points: PagePoint[], title: string): string {
    const usablePoints = points.filter((point) => point.title.trim() || point.body.trim());

    if (!usablePoints.length) {
      return '';
    }

    const listItems = usablePoints
      .map((section, index) => {
        const body = this.normalizePointBody(section.body || '')
          .trim()
          .split(/\n+/)
          .map((sentence) => sentence.trim())
          .filter(Boolean)
          .join('<br>');

        return [
          `<li${index === 0 ? ' data-open="true"' : ''}>`,
          `<strong>${this.escapeHtml(section.title)}</strong><br>${body}`,
          '</li>',
        ].join('');
      })
      .join('');

    return `<h2>${this.escapeHtml(title)}</h2><ul>${listItems}</ul>`;
  }

  syncDraftContent(): void {
    this.draft.content = this.buildContentFromPoints(
      this.points,
      this.draft.title || this.selectedPage?.title || this.pages.find((entry) => entry.key === this.selectedKey)?.label || ''
    );
  }

  private extractPoints(content: string, pageKey: PageKey): PagePoint[] {
    if (!content.trim() || typeof DOMParser === 'undefined') {
      return this.getAccordionTemplatePoints(pageKey);
    }

    const parser = new DOMParser();
    const doc = parser.parseFromString(`<div>${content}</div>`, 'text/html');
    const detailsNodes = Array.from(doc.querySelectorAll('details'));
    const listItems = Array.from(doc.querySelectorAll('ul > li, ol > li'));

    if (detailsNodes.length > 0) {
      return detailsNodes.map((details, index) => {
        const summary = details.querySelector('summary');
        const body = Array.from(details.children)
          .filter((child) => child.tagName.toLowerCase() !== 'summary')
          .map((child) => child.outerHTML)
          .join('');
        return {
          id: this.createPoint().id,
          title: summary?.textContent?.trim() || `Section ${index + 1}`,
          body,
        };
      });
    }

    if (listItems.length > 0) {
      return listItems.map((li, index) => this.extractListPoint(li as HTMLElement, index));
    }

    const bodyPoints: PagePoint[] = [];
    let currentTitle = '';
    let currentBody: string[] = [];
    let counter = 1;

    const flush = (): void => {
      if (!currentTitle && !currentBody.length) {
        return;
      }

      bodyPoints.push({
        id: this.createPoint().id,
        title: currentTitle || `Section ${counter}`,
        body: currentBody.join('\n').trim(),
      });
      currentTitle = '';
      currentBody = [];
      counter += 1;
    };

    Array.from(doc.body.firstElementChild?.childNodes || []).forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        const element = node as HTMLElement;
        const tagName = element.tagName.toLowerCase();
        if (/^h[1-6]$/.test(tagName)) {
          flush();
          currentTitle = element.textContent?.trim() || `Section ${counter}`;
          return;
        }
        if (!currentTitle && !currentBody.length) {
          currentTitle = `Section ${counter}`;
        }
        currentBody.push(element.outerHTML);
        return;
      }

      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent?.trim();
        if (!text) {
          return;
        }
        if (!currentTitle && !currentBody.length) {
          currentTitle = `Section ${counter}`;
        }
        currentBody.push(`<p>${this.escapeHtml(text)}</p>`);
      }
    });

    flush();

    return bodyPoints.length
      ? bodyPoints
      : [
        {
          id: this.createPoint().id,
          title: this.pages.find((entry) => entry.key === pageKey)?.label || 'Section 1',
          body: content,
        },
      ];
  }

  private extractListPoint(li: HTMLElement, index: number): PagePoint {
    const titleNode = li.querySelector(':scope > strong, :scope > b, :scope > h3, :scope > h4, :scope > h5, :scope > h6');
    const title = titleNode?.textContent?.trim() || `Section ${index + 1}`;
    const clone = li.cloneNode(true) as HTMLElement;
    const cloneFirst = clone.firstElementChild;

    if (cloneFirst && ['STRONG', 'B', 'H3', 'H4', 'H5', 'H6'].includes(cloneFirst.tagName)) {
      cloneFirst.remove();
      if (clone.firstElementChild?.tagName === 'BR') {
        clone.firstElementChild.remove();
      }
    }

    const body = this.normalizePointBody(clone.innerHTML.trim().replace(/^\s*<br\s*\/?>/i, '').trim());
    return {
      id: this.createPoint().id,
      title,
      body,
    };
  }

  private normalizePointBody(body: string): string {
    return body
      .replace(/<\/?p[^>]*>/gi, '')
      .replace(/\n\s*\n/g, '\n')
      .trim();
  }

  private escapeHtml(value: string): string {
    return value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }
}
