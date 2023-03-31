
import { ValueObject, Result, GenericAppError } from "@softobiz-df/shared-lib";

interface ICustomerNameProps {
	// isAuth: boolean
    name:string
	
}
/**
 * The CustomerName Class
 *
 * @export
 * @class CustomerName
 * @extends {ValueObject<ICustomerNameProps>}
 */
export class CustomerName extends ValueObject<ICustomerNameProps> {
    
    /**
     * Creates an instance of CustomerName.
     * @param {ICustomerNameProps} props
     * @memberof CustomerName
     */
    private constructor(props: ICustomerNameProps) {
        super(props);
    }


      
      public get customerName() : string {
        return this.props.name
      }
      
    /**
     * Creates and initializes object for the CustomerName Class using the private constructor after validations
     *
     * @static
     * @param {ICustomerNameProps} props
     * @returns {Result<CustomerName>}
     * @memberof CustomerName
     */
    public static create(props: ICustomerNameProps): Result<CustomerName> {

        if(props.name.length<5){
       return Result.fail("customer name should be of 5 alhphabets")
        }
      const customer = new CustomerName({name:props.name})
      console.log(CustomerName);
      

      return Result.ok(customer)
    }
}
