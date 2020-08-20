import {Pipe, PipeTransform} from '@angular/core';
import {IMate} from '../../interfaces/mate';

@Pipe({
    name: 'aggregation',
    pure: false,
})
export class AggregationPipe implements PipeTransform {

    transform(mate: IMate): string {
        const firstSymbol = [...mate.name.first][0];
        const secondSymbol = [...mate.name.last][0];

        return `${firstSymbol}.${secondSymbol}. - ${mate.email}`;
    }

}
