import { container } from 'tsyringe';
import { UserRepository } from '../database/repositories/UserRepository';

container.register('IUserRepository', { useClass: UserRepository });
