import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class ItemsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createItemDto: CreateItemDto) {
    const { name, description, image, authorId } = createItemDto;
    
    return await this.prisma.item.create({
      data: {
        name,
        description,
        image,
        authorId,
      },
    });
  }

  async findAll() {
    return await this.prisma.item.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.item.findUnique({
      where: {
        id,
      },
    });
  }

  async findByAuthorId(userId: number) {
    return await this.prisma.item.findMany({
      where: {
        authorId: userId,
      },
    });
  }

  async update(id: number, updateItemDto: UpdateItemDto) {
    const { name, description, image } = updateItemDto;
    
    return await this.prisma.item.update({
      where: {
        id,
      },
      data: {
        name,
        description,
        image,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.item.delete({
      where: {
        id,
      },
    });
  }
}
