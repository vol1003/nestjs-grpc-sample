import { Module } from '@nestjs/common';
import { HeroController } from './hero/hero.controller';
import { HeroModule } from './hero/hero.module';

@Module({
  imports: [HeroModule],
  controllers: [HeroController],
})
export class AppModule {
}
