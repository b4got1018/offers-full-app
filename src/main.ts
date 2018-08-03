import {enableProdMode, LOCALE_ID, TRANSLATIONS, TRANSLATIONS_FORMAT} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {UtilityService} from "./app/utility.service";


if (environment.production) {
  enableProdMode();
}

/*
platformBrowserDynamic().bootstrapModule(AppModule, )
  .catch(err => console.log(err));
*/

getTranslationProviders().then(providers => {
  const options = { providers };
  platformBrowserDynamic().bootstrapModule(AppModule);
});

export function getTranslationProviders(): Promise<Object[]> {
  const locale = 'es-ES';
  const noProviders: Object[] = [];
  if ( !locale || locale === 'es-ES') {
    return Promise.resolve(noProviders);
  }

  const translationFile = `../locale/messages.${locale}.xlf`;
  return getTranslationWithImports(translationFile)
    .then(( translations: string ) => [
    { provide: TRANSLATIONS, useValue: translations },
    { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' },
    { provide: LOCALE_ID, useValue: locale}

  ]).catch(() => noProviders);
}

function getTranslationWithImports(file: string) {
  const util = new UtilityService();
  return util.getFile(file);
}
