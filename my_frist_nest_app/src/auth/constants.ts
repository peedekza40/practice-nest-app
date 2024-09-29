import { SetMetadata } from '@nestjs/common';

export const jwtConstants = {
  secret: 'JACKERLAWS',
};

export const IS_ALLOW_ANNONYMOUS_KEY = 'isAnnonymous';
export const AllowAnnounymous = () => SetMetadata(IS_ALLOW_ANNONYMOUS_KEY, true);
