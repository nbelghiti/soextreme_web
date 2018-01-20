import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LOADER_DURATION } from '../../globals/index';

@Injectable()
export class LoaderPageService {

    public loading = false;
    public duration = LOADER_DURATION;
    constructor(private router: Router) {}
    onClick(url) {

        this.loading = true;
        setTimeout(() => {

            this.loading = false;
            this.router.navigate(['/' + url + '']);
        }, this.duration);
    }
    load() {

        this.loading = true;
        setTimeout(() => {

            this.loading = false;
        }, this.duration);
    }
}
