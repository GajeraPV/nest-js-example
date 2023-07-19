import { Controller, Req, Get, Post, Body, Param } from '@nestjs/common'
import { CreateItemDto } from './dto/create-item.dto'
import { ItemsService } from './items.service'
import { Item } from './items.interface'

@Controller('items')
export class ItemsController {

	constructor(private readonly itemsService: ItemsService) {}

	@Post()
	create(@Body() data: CreateItemDto): Object {
		return this.itemsService.create(data)
	}

	@Get()
	findAll(): Array<Item> {
		return this.itemsService.findAll()
	}

	@Get('hello')
	getHello(): string {
		return this.itemsService.getHello()
	}

	@Get('/:id')
	findById(@Param('id') id: number) {
		return this.itemsService.findById(id)
	}
}