
export class MyUser {
  constructor(
    public id: number,
    public name: string,
    // 这里一般用生日来计算,这里就不搞那么麻烦了
    public age: number,
    public school: string,
    // 爱好加了?代表不是必须填写,可以为空,这个是typescript语法
    public hobby?: string
  ) { }
}
