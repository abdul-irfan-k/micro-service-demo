import { IUserRepository } from "../../app/repository";

export interface InputBoundaryUseCase {
  (repository: any): {
    execute(data: any): Promise<any>;
  };
}
