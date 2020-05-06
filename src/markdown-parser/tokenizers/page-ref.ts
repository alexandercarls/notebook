import {Eat, Parse} from "remark-parse";
import {Node} from "unist";

const name = 'pageRef';

export function addPageRefTokenizer(remark: Parse) {
    const tokenizers = remark.Parser.prototype.inlineTokenizers;
    const methods = remark.Parser.prototype.inlineMethods;

    (tokenizers as any)[name] = Object.assign(
        tokenize,
        {
            notInLink: true,
            locator,
        });

    methods.splice(methods.indexOf('text'), 0, name)
}

function locator(value: string, fromIndex: number): number {
    return value.indexOf('[[', fromIndex);
}

function tokenize(eat: Eat, value: string): Node | boolean | void {
    const match = /^\[\[(.*?)]]/.exec(value)

    if (!match) {
        return;
    }

    return eat(match[0])({
        type: name,
        ref: match[1],
        children: [{type: 'text', value: match[0]}]
    })
}
