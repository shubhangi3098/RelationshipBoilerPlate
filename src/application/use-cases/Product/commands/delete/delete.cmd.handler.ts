import { Inject, Injectable } from '@nestjs/common';
import { AppLoggerService, IRequestHandler} from '@softobiz-df/shared-lib';
import { DeleteCommand } from './delete.cmd';
import { DeleteResponseType } from './delete.response.type';

@Injectable()
export class DeleteCommandHandler implements IRequestHandler<DeleteCommand, DeleteResponseType> {
	private readonly _logger = AppLoggerService.getLogger(DeleteCommandHandler)

	constructor() {}
	async handle(commandOrQuery: DeleteCommand, token?: string) {

	

	}
}