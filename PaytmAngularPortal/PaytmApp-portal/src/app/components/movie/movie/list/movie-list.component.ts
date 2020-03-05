import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractMovie } from '../domain/abstract-movie';
import { Movie } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-movie-list",
    templateUrl:'./movie-list.component.html'
})
export class MovieListComponent extends AbstractMovie implements OnInit, OnDestroy {
    movie: List<Movie>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<Movie>) => {
            this.movie = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
