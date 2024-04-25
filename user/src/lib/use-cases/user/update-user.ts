import { IUserRepository } from "../../../app/repository";
import { IUser } from "../../entities";
import { IUpdateUserUseCase, IUpdateUserUseCaseArgs } from "../interface";

export class UpdateUserUseCase implements IUpdateUserUseCase {
  private userRepository: IUserRepository;
  constructor({ userRepository }: { userRepository: IUserRepository }) {
    this.userRepository = userRepository;
  }
  async execute(args: IUpdateUserUseCaseArgs): Promise<IUser | null> {
    const { userId } = args;
    const user = await this.userRepository.update(userId, args);
    return user;
  }
}
