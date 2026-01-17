import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql', // 'postgres', 'sqlite', itp.
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'nestdb',
      entities: [__dirname + '/../**/**/*entity{.ts,.js}'], // Automatyczne ładowanie encji
      synchronize: true, // Używaj tylko w rozwoju! W produkcji migracje!
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
