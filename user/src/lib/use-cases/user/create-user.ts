import { IUserRepository } from "../../../app/repository";
import { IUser } from "../../entities";
import { ICreateUserCaseArgs, ICreateUserUseCase } from "../interface";
import { InputBoundaryUseCase } from "../interface/input-boundary-use-case";



export class CreateUserUseCaseCase implements ICreateUserUseCase {
  private userRepository: IUserRepository;
  constructor({ userRepository }: { userRepository: IUserRepository }) {
    this.userRepository = userRepository;
  }
  async execute(args: ICreateUserCaseArgs): Promise<IUser | null> {
    const user = await this.userRepository.create(args);
    return user;
  }
}
