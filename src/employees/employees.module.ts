import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { EmployeesController } from './employee.controller';
import { EmployeesService } from './employees.service';
import { EmployeesSchema } from './employees.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Employees',
        schema: EmployeesSchema,
      },
    ]),
  ],
  controllers: [EmployeesController],
  providers: [EmployeesService],
})
export class EmployeesModule {}
