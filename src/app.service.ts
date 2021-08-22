import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class AppService {
  addData(value: string): any {
    const array = [];
    if (!value) {
      throw new NotFoundException('Please provide inputs')
    }
    array.push(value);
    return { ...array };
  }
}
