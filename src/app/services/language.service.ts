import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { MainService } from './main.service';

@Injectable({ providedIn: 'root' })
export class LanguageService {

    public TRANSL: Map<string, object>;
    public LANGS: string[];

    constructor(
        private http: HttpClient
        , private mainService: MainService
    ) {
        const TRANSL = new Map<string, object>();
        const LANGS = new Array<string>();
        // this.http.get<object>('../../src/assets/locals.json').subscribe((response) => {
        this.http.get<object>('./assets/locals.json').subscribe((response) => {
            const obs = new Array<Observable<object>>();
            for (const key in response) {
                if (key) {
                    // obs.push(this.http.get<object>('../../src/assets/' + response[key]));
                    obs.push(this.http.get<object>('./assets/' + response[key]));
                    LANGS.push(key);
                }
            }
            if (obs.length) {
                forkJoin<object[]>(...obs).subscribe((translations: Array<object>) => {
                    for (let i = 0; i < translations.length; i++) {
                        for (const key in translations[i]) {
                            if (key) {
                                let objTransl: object;
                                if (!TRANSL.has(key)) {
                                    objTransl = {};
                                } else {
                                    objTransl = TRANSL.get(key);
                                }
                                objTransl[LANGS[i]] = translations[i][key];
                                TRANSL.set(key, objTransl);

                                if (key === 'language') {
                                    LANGS.push(translations[i][key]);
                                }
                            }
                        }
                    }
                    this.TRANSL = TRANSL;
                    this.LANGS = LANGS;
                    if (!this.mainService.language && this.LANGS.length) {
                        this.mainService.language = this.LANGS[0];
                    }
                    console.log(this.TRANSL);
                }, (error) => {
                    console.log(error);
                });
            }
        }, (error) => {
            console.log(error);
        });
    }
}
