import { UserEntity } from 'src/users/entities/user.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';

@Entity('files')
export class FileEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  filename: string;

  @Column()
  originalName: string;

  @Column()
  size: number;

  @Column()
  mimetype: string;

  @ManyToOne(() => UserEntity, (user) => user.files)
  user: FileEntity[];

  @DeleteDateColumn()
  deletedAd?: Date;
}
