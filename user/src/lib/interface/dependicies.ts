import { IUserRepository } from "../repository";
export interface dependiciesData {
  repository: repositoryData;
  useCase: userCaseData;
}

interface repositoryData {
  userRepository: IUserRepository;
}
interface userCaseData {
  createUserProfile: any;
  getUserProfile: any;
  updateUserProfile: any;
}
