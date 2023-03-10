import { Injectable } from "@nestjs/common";
import { RegFrom } from "./reg.dto";
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';
import { RegEntity} from "./reg.entity"


@Injectable()
export class RegService {
    constructor(
        @InjectRepository(RegEntity)
        private adminRepo: Repository<RegEntity>
      ) {}



}