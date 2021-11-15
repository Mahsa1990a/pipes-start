import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ //decorator
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
  transform(value: any) {
    // text.substr(2, 4) : start at position 2 and show 4 characters
    if (value.length > 10) {
      //will give us back first 10characters
      return value.substr(0, 10) + ' ...';
    }
    return value;
  }
}
