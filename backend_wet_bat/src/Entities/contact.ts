import "reflect-metadata";
import { v4 as uuid } from "uuid";
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { Quotes } from "./quote";

@Entity("contacts")
class Contacts {
  @PrimaryColumn()
  _id?: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  zip_code: string;

  @Column()
  phone_number: string;

  @Column()
  active?: boolean;

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;

  @DeleteDateColumn()
  deleted_at?: Date;

  @OneToMany((type) => Quotes, (quotes) => quotes.contacts)
  quotes?: Quotes[];

  constructor() {
    if (!this._id) {
      this._id = uuid();
    }
  }
}

export { Contacts };
