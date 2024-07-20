import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [
    UsersModule,
    JwtModule.register({
      privateKey: process.env.PRIVATE_KEY || 'SECRET_KEY',
      signOptions: {
        expiresIn: '24h',
      },
    }),
  ],
})
export class AuthModule {}
