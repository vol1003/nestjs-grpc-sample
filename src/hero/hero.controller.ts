import { Controller } from '@nestjs/common';
import { Hero, HeroById, HeroesServiceController, HeroesServiceControllerMethods, HeroMetadata } from './hero';
import { Metadata } from 'grpc';
import { Empty } from './google/protobuf/empty';
import { Observable } from 'rxjs';

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

  metadatas(request: Empty, metadata?: Metadata): Promise<HeroMetadata> | Observable<HeroMetadata> | HeroMetadata {
    return {
      metadata: JSON.stringify(metadata.getMap())
    } as HeroMetadata;
  }
}
