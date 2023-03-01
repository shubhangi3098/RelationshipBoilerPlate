import { Body, Controller, Get, Post, Query} from '@nestjs/common';
import { IMediator, Result } from '@softobiz-df/shared-lib';
import { CustomerCreateCommand } from '../use-cases/customer/commands/customer/customer.cmd';
import { CustomerCreateResponseType } from '../use-cases/customer/commands/customer/customer.response.type';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('customer')
@Controller('customer')
export class CustomerController {
	constructor(private readonly _mediator: IMediator) {}

  
	@Post('create')
	async createCustomer(@Body() payload: CustomerCreateCommand): Promise<CustomerCreateResponseType> {
		return this._mediator.send<CustomerCreateResponseType>(new CustomerCreateCommand(payload))
	}


  @ApiQuery({name: 'id',description: 'Gets the Action id'})
	// @Get()
	// async getCustomer(@Query("id") id): Promise<GetCustomerReponseType> {
	// 	return this._mediator.send<GetCustomerReponseType>(new GetCustomerQuery({ id }))

	// }

	@Get("health")
    async getHealth(): Promise<Result<string>> {
        return Result.ok(" Service running ")

    }
}
