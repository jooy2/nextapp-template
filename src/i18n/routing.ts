import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const supportLocales = ['en', 'ko'];

export const fallbackLocale = 'en';

export const routing = defineRouting({
  locales: supportLocales,
  defaultLocale: fallbackLocale,
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
