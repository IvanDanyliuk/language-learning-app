import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ unique: true, required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  photo: string;

  // @Prop()
  // wordsLearnt: string[];

  @Prop()
  currentStreak: number;

  @Prop()
  longestStreak: number;

  @Prop()
  lastStudyDate: string;

  @Prop()
  isOnboarded: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);