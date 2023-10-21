/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type girisPagePage = typeof import('./pages/GirisPage.js');
type kayitkabulPage = typeof import('./pages/kayitkabul.js');
type hizliAramaFragment = typeof import('./fragments/hizliArama.js');
type kayitKabulFragment = typeof import('./fragments/kayitKabul.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, girisPagePage: girisPagePage, kayitkabulPage: kayitkabulPage, hizliAramaFragment: hizliAramaFragment, kayitKabulFragment: kayitKabulFragment }
  interface Methods extends WebDriver {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
