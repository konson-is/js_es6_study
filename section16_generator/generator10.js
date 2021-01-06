class Comment {
    constructor(content,children){
        this.content = content;
        this.children = children;
    }

    //クラスの中でのSymbol.iteratorの定義
    *[Symbol.iterator](){
        yield this.content;
        //generator関係はmapなどではなくfor ofを使用
        for(let child of this.children){
            yield* child;
        }
    }
}

const children = [
    new Comment('賛成!!',[]),
    new Comment('反対!!',[]),
    new Comment('うーん。。。',[]),

]

const tree = new Comment('非常に良い記事です',children);
const values = [];
for(let value of tree){
    values.push(value);
}
console.log(values);