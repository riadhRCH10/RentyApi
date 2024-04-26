import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './schema/user.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://riadhNestApp:ZRnN2ZtvYhXkEEk3@rentydb.ca9snng.mongodb.net/?retryWrites=true&w=majority&appName=RentyDB',
    ),
    MongooseModule.forFeature([
      { name: 'user', schema: userSchema },
    ]),
    JwtModule.register({
      secret: 'SECRET',
      signOptions: { expiresIn: '60s' }
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
