import { eDataSource, GenericAppError, Result, UniqueEntityID, Entity } from '@softobiz-df/shared-lib'
import { CustomerId } from './customer-id'

interface ProductProps {
	productName: string	
	customerID: CustomerId
}
export class Product extends Entity<ProductProps> {
	//#region member variables
	//#endregion

	//#region constants
	//#endregion

	//#region properties
	//#endregion

	//#region private methods
	private constructor(props: ProductProps, id?: UniqueEntityID) {
		super(props, id)
	}
	//#endregion
 
 
	//#region private setters
	private setName(name: string){
		if(name==undefined){
			return Result.fail(new GenericAppError.ValidationError("Product Name is undefined"))
		}
		this._props.productName = name
		return Result.ok(this)
	}
     
	private setCustomerID(customerID: CustomerId){
	
		this._props.customerID = customerID
		return Result.ok(this)
	}

	public get getProductID() : UniqueEntityID {
		return this._id
	 }

		public get getCustomerID() : CustomerId{
			return this.props.customerID
		}

	 
	//#endregion

	//#region public methods
	public static create(props: ProductProps, id?: UniqueEntityID, dataSource?: eDataSource) {
		if (dataSource === eDataSource.STORAGE) return Result.ok(new Product(props, id))
		const product = new Product(Object.create(null), id)
		const validationQueue = [
			product.setName(props.productName),product.setCustomerID(props.customerID)	
		]
		const combinedResult = Result.combine(validationQueue)
		if (combinedResult.isFailure) return Result.fail<Product>(new GenericAppError.DomainError(combinedResult.errorValue()))
		return Result.ok(product)
	}
	//#endregion
}

