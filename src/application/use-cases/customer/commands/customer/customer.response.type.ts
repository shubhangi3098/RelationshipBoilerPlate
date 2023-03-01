import { AppError, RecordIdModel, Result } from '@softobiz-df/shared-lib';

export type CustomerCreateResponseType = Result<RecordIdModel | AppError>