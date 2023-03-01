import { Injectable } from '@nestjs/common';
import { eDataSource, IDTO, IMapper, UniqueEntityID } from '@softobiz-df/shared-lib';
import {  CustomerName  } from 'src/domain/Customer/customer-name';
import {  CustomerModel } from '../models/customer.model';


@Injectable()
export class  CustomerNameSqlMapper implements IMapper {
	constructor() {}

	toDomain(raw:  CustomerModel): CustomerName {
		return  CustomerName.create(
			{
				name: raw.name		
			},
			// new UniqueEntityID(raw.uuid),eDataSource.STORAGE,
		).getValue()
	}

	toPersistence(input: CustomerName, curEntity?: CustomerModel): CustomerModel {
		if (!curEntity) {
			curEntity = new CustomerModel()
		}
		// curEntity.uuid = input.id.toString()
		curEntity.name = input.props.name;
		
		//@todo:: improve mapping
		return curEntity;
	}
	toDto(input: CustomerModel): IDTO {
		throw new Error('Method not implemented.')
	}
}
