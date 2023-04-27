import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sample',
})
export class SamplePipe implements PipeTransform {
  transform(sample: string): string {
    console.log(sample);
    return 'sample';
  }
}
