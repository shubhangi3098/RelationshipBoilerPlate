import { Inject, Injectable, Res } from '@nestjs/common';
import { AppLoggerService, GenericAppError, IRequestHandler, RecordIdModel, Result } from '@softobiz-df/shared-lib';
import { CustomerId, CustomerName, Product } from 'src/domain/Customer';
import { Customer } from '../../../../../domain/customer/customer';
import { ICustomerRepository } from '../../../../../infrastructure/data-access/irepositories/icustomer.repository';
import { CustomerCreateCommand } from './customer.cmd';
import { CustomerCreateResponseType } from './customer.response.type';

@Injectable()
export class CustomerCreateCommandHandler implements IRequestHandler<CustomerCreateCommand, CustomerCreateResponseType> {
	private readonly _logger = AppLoggerService.getLogger(CustomerCreateCommandHandler)

	constructor(@Inject(ICustomerRepository) private readonly _customerRepo: ICustomerRepository) { }
	async handle(commandOrQuery: CustomerCreateCommand, token?: string): Promise<CustomerCreateResponseType> {

		let products = [{
			"product_id_name": "mobile",

		},
		{
			"product_id_name": "laptop",

		},
		{
			"product_id_name": "pc",

		}
		]

		const customerNameResult = CustomerName.create({ name: commandOrQuery.name })
		console.log(customerNameResult.isFailure)

		if (customerNameResult.isFailure) {
			return Result.fail(new GenericAppError.ValidationError(customerNameResult.errorValue()))
		}

      const customerID = CustomerId.create(null)
        console.log(customerID);


		const productResultList = []
		for (const product of products) {
			const productResult: Result<Product> = Product.create({ productName: product.product_id_name, customerID:customerID})
			productResultList.push(productResult)
			console.log(productResult);

		}

		const validateProductResult = Result.combine(productResultList)
		if (validateProductResult.isFailure) {
			return Result.fail(new GenericAppError.ValidationError(validateProductResult.message))
		}

		const customer = Customer.create({
			name: customerNameResult.getValue(),
			products: productResultList.map((x: Result<Product>) => x.getValue())
		},
		customerID.id
		)
		if (customer.isFailure) return Result.fail(customer.errorValue())

		const customerValue = customer.getValue()
		await this._customerRepo.save(customerValue)

		return Result.ok(new RecordIdModel({ id: customerValue.id.toString() }))
	}

}
