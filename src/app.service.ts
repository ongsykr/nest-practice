import { Injectable } from '@nestjs/common';
import PhoneData from './types/phoneData';
import NewPhoneDto from './dto/phoneDto';

@Injectable()
export class AppService {
  datas: NewPhoneDto[] = [
    {
      modelName: 'iPhone13',
      releaseYear: 2021,
      screenSize: '6.1 inches',
      storageOptions: ['64GB', '128GB', '256GB'],
    },

    {
      modelName: 'Samsung Galaxy S21',
      releaseYear: 2021,
      screenSize: '6.2 inches',
      storageOptions: ['128GB', '256GB', '512GB'],
    },
  ];

  adddata(data: PhoneData) {
    this.datas.push(data);
  }

  getdata(): PhoneData[] {
    return this.datas;
  }

  searchName(name: string): PhoneData {
    for (let i = 0; i < this.datas.length; i++) {
      if (name === this.datas[i].modelName) {
        return this.datas[i];
      }
    }
  }
}
