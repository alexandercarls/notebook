import { Component, ChangeDetectionStrategy } from '@angular/core';
import { parser } from 'src/markdown-parser/parser';
import { Node } from 'unist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  sampleData = test;

  parseText(text: string): Node {
    return parser(text);
  }
}


const test = `
# Shopping List

Hey **@*thorsten**,
    
hier ist eine [[Aufzählung]] :
- zwei
- [ ] drei mit aufgabe #movies
`;