import { UsersModule } from './../users/users.module';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [UsersModule, JwtModule.register({
    secret: process.env.PRIVATE_KEY || "SECRET",
    signOptions: {
      expiresIn: "24h"
    }
  })]
})
export class AuthModule {}
