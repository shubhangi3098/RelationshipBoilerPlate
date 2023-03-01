import { eDataSource, GenericAppError, Result, UniqueEntityID, Entity } from '@softobiz-df/shared-lib'

interface CustomerIdProps {
}
export class CustomerId extends Entity<CustomerIdProps> {
	//#region member variables
	//#endregion

	//#region constants
	//#endregion

	//#region properties
	//#endregion

	//#region private methods
	private constructor(props: CustomerIdProps, id?: UniqueEntityID) {
		super(props, id)
	}
	//#endregion


	//#region private setters

public get id() : UniqueEntityID {
	return this._id
}

	
	//#endregion

	//#region public methods
	public static create(props: CustomerIdProps, id?: UniqueEntityID, dataSource?: eDataSource) {
	return new CustomerId(id)
	}
	//#endregion
}

