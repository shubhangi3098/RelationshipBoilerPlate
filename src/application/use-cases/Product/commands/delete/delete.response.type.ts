import { AppError, RecordIdModel, Result } from '@softobiz-df/shared-lib';

export type DeleteResponseType = Result<RecordIdModel | AppError>