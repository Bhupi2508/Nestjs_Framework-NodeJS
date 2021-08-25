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
      array.filter((data) => {
        return data.value === value;
      });
    } else {
      throw new NotFoundException(`${value} is not exist`);
    }
    console.log('array', array);
    return `${value} is deleted successfully!`;
  }
}
