import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateToolDto } from './dto/create-tool.dto';
import { UpdateToolDto } from './dto/update-tool.dto';
import { Tool } from './entities/tool.entity';

@Injectable()
export class ToolsService {
  constructor(
    @InjectRepository(Tool) private toolRepository: Repository<Tool>,
  ) {}

  async create(createToolDto: CreateToolDto) {
    console.log('caiu aqui');
    const tool = this.toolRepository.create({
      title: 'olá',
      link: 'olá',
      tags: 'de novo',
      description: 'de novooo',
    });
    return this.toolRepository.save(tool);
  }

  findAll() {
    return `This action returns all tools`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tool`;
  }

  update(id: number, updateToolDto: UpdateToolDto) {
    return `This action updates a #${id} tool`;
  }

  remove(id: number) {
    return `This action removes a #${id} tool`;
  }
}
