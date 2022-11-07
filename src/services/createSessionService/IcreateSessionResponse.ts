import { IUserModelResponse } from '../../database/entities/models/IUserModel';

export default interface ICreateSessionResponseDTO {
  user: IUserModelResponse;
  token: string;
}
