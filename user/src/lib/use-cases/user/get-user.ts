import { IUserRepository } from "../../../app/repository";
import { IUser } from "../../entities";
import { IGetUserUseCase, IGetUserUseCaseArgs } from "../interface";

export class GetUserUseCase implements IGetUserUseCase {
  private userRepository: IUserRepository;
  constructor(args: { userRepository: IUserRepository }) {
    const { userRepository } = args;
    this.userRepository = userRepository;
  }
  async execute({ userId }: IGetUserUseCaseArgs): Promise<IUser | null> {
    const userDetails = await this.userRepository.findOne(userId);
    return userDetails;
  }
}
