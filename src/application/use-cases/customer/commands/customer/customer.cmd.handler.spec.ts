import { RecordIdModel, Result } from "@softobiz-df/shared-lib";
import { ICustomerRepository } from'../../../../../infrastructure/data-access/irepositories/icustomer.repository';
import { CustomerCreateCommand } from "./customer.cmd";
import { CustomerCreateCommandHandler } from "./customer.cmd.handler";

describe('CustomerCreateCommandHandler', () => {
  let commandHandler:CustomerCreateCommandHandler,
  _customerRepo:ICustomerRepository

	beforeEach(async () => {
		_customerRepo = new (jest.fn<ICustomerRepository, []>(() => Object.create(null) as ICustomerRepository))()
		commandHandler = new CustomerCreateCommandHandler(_customerRepo)
	})

  it('should create program as customer filled all details', async () => {
		_customerRepo.save = (inputProgram) => Promise.resolve(Result.ok(inputProgram))
  
    const command= new CustomerCreateCommand({
     name:'name'

    })
      const customer = await commandHandler.handle(command)
      // console.log('resultFailed');
      
      expect(customer.isSuccess).toBe(true)
      expect((customer.getValue() as RecordIdModel).id).toBeDefined()
    })
	
})