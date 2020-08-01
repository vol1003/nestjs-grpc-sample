import { Controller } from '@nestjs/common';
import { Hero, HeroById, HeroesServiceController, HeroesServiceControllerMethods } from './hero';
import { Metadata } from 'grpc';

@Controller('hero')
@HeroesServiceControllerMethods()
export class HeroController implements HeroesServiceController {
  findOne(request: HeroById, metadata?: Metadata): Promise<Hero> | Hero {
    if (metadata) {
      console.log(metadata);
    }

    return {
      id: request.id,
      name: 'superman',
    } as Hero;
  }
}
