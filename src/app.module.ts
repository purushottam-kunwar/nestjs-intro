import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './products/products.module';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [
    ProductModule,
    EmployeesModule,
    MongooseModule.forRoot('mongodb://localhost:27017/hrm'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
