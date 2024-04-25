import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './schema/user.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://riadhNestApp:ZRnN2ZtvYhXkEEk3@rentydb.ca9snng.mongodb.net/?retryWrites=true&w=majority&appName=RentyDB',
    ),
    MongooseModule.forFeature([
      { name: 'user', schema: userSchema },
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
