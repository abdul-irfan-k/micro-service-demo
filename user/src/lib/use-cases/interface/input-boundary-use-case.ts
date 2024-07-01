import { IUserRepository } from "../../app/repository";

export type InputBoundaryUseCase = (repository: any) => {
    execute(data: any): Promise<any>;
  };
