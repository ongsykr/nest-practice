import { Injectable } from '@nestjs/common';
import lectureDto from 'src/dto/lectureDto';
import lectureData from 'src/types/lectureData';

@Injectable()
export class LectureService {
  datas: lectureDto[] = [
    {
      professor: 'Dr. Smith',
      name: 'Introduction to Computer Science',
      dayofWeek: ['Monday', 'Wednesday', 'Friday'],
      credit: 3,
    },
    {
      professor: 'Prof. Johnson',
      name: 'Advanced Mathematics',
      dayofWeek: ['Tuesday', 'Thursday'],
      credit: 4,
    },
    {
      professor: 'Dr. Lee',
      name: 'Physics for Engineers',
      dayofWeek: ['Monday', 'Wednesday'],
      credit: 3,
    },
  ];

  addLecture(data: lectureData) {
    this.datas.push(data);
  }

  getLecture() {
    return this.datas;
  }

  //test

  searchLecture(name: string) {
    for (let i = 0; i < this.datas.length; i++) {
      if (name === this.datas[i].name) return this.datas[i];
    }
  }
}
