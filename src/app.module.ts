import { Module } from '@nestjs/common';
import { ConfigurationModule } from './infrastructure/configuration/configuration.module';
import { CustomerModule } from "./application/use-cases/customer/customer.module";

@Module({
	imports: [ConfigurationModule, CustomerModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
