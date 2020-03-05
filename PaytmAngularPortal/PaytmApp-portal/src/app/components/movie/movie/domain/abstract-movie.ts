import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { Movie } from '@app/models';

export class AbstractMovie extends RxHttp {
    movieFormGroup: IFormGroup<Movie>
}
