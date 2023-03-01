import { IRequest } from '@softobiz-df/shared-lib';
import { IsOptional } from 'class-validator';
import { DeleteResponseType } from './delete.response.type';
import { ApiProperty } from '@nestjs/swagger';



export class DeleteCommand implements IRequest<DeleteResponseType> {
	@IsOptional()
	@ApiProperty()
	public name: string
  
	public constructor(init?: Partial<DeleteCommand>) {
		Object.assign(this, init)
	}
}