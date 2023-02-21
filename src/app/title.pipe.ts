import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title',
})
export class TitlePipe implements PipeTransform {
  transform(value: string): string {
    const words = ['of', 'the'];
    const newWords = value
      .toLowerCase()
      .split(' ')
      .map((word, index) => {
        if (words.indexOf(word) === -1) {
          return word[0].toUpperCase() + word.substr(1);
        }
        return index === 0 ? word[0].toUpperCase() + word.substr(1) : word;
      });

    return newWords.join(' ');
  }
}
