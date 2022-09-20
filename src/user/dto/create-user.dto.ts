import { UserGender } from './../entities/user.entity';
export class CreateUserDTO {
  name: string;
  gender: UserGender;
  email: string;
  age: number;
}
