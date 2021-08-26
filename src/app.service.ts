import { Injectable, NotFoundException } from '@nestjs/common';

const array = [];
@Injectable()
export class AppService {
  addData(value: string): any {
    if (!value) {
      throw new NotFoundException('Please provide inputs');
    }
    array.push(value);
    return array;
  }

  getAllData() {
    if (!array) {
      throw new NotFoundException('No Data Available');
    }
    return array;
  }

  deleteData(value: string): string {
    if (!value) {
      throw new NotFoundException('which value you want to delete');
    }
    if (array.includes(value)) {
      const index = array.indexOf(value);
      if (index > -1) {
        array.splice(index, 1);
      }
    } else {
      throw new NotFoundException(`${value} is not exist`);
    }
    return `${value} is deleted successfully!`;
  }
}
