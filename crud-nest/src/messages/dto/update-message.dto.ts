import { PartialType } from '@nestjs/mapped-types';
import { IsString, MaxLength } from 'class-validator';
import { CreateMessageDto } from './create-message.dto';

export class UpdateMessageDto extends PartialType(CreateMessageDto) {}
