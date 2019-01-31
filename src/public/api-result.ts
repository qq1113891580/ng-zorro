// API结果返回接口

export class ApiResult {
  name: string;
  city: [
    {
      name: string;
      area: any[];
    }
  ];
  constructor() {}
}
