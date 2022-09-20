import { IsNotEmpty } from 'class-validator';

export class UserDTO {
  @IsNotEmpty()
  name: string;
}

export class UserRO {
  id: string;
  username: string;
  created: Date;
}
