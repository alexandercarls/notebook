import * as unified from 'unified';
import * as markdown from 'remark-parse';
import { Node } from 'unist';
import { addMentionTokenizer } from './tokenizers/mention';
import { addPageRefTokenizer } from './tokenizers/page-ref';
import {addTagTokenizer} from './tokenizers/tag';
// const removePosition = require('unist-util-remove-position');

addTagTokenizer(markdown);
addMentionTokenizer(markdown);
addPageRefTokenizer(markdown);

const pipeline = unified()
  .use(markdown);

export function parser(text: string): Node {
    return pipeline.parse(text);
    // return removePosition(pipeline.parse(text));
}
