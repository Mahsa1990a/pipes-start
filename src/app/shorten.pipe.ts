import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ //decorator
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
  transform(value: any, limit: number, anotherArg: string) {
    // text.substr(2, 4) : start at position 2 and show 4 characters
    if (value.length > limit) {
      //will give us back first 10characters
      return value.substr(0, limit) + ' ...' + anotherArg;
    }
    return value;
  }
}
