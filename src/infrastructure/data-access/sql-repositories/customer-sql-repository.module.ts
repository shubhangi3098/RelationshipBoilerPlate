import { Module } from '@nestjs/common';
import { CustomerSqlMapper } from './mappers/customer.mapper';
import { ICustomerRepository } from '../irepositories/icustomer.repository';
import { CustomerSqlRepository } from './customer.repository';


@Module({
	providers: [CustomerSqlMapper,  CustomerSqlRepositoryModule, { provide: ICustomerRepository, useClass: CustomerSqlRepository }],
	exports: [{ provide: ICustomerRepository, useClass: CustomerSqlRepository }],
})
export class CustomerSqlRepositoryModule {}