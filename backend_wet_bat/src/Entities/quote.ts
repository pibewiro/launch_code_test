import "reflect-metadata";
import { v4 as uuid } from "uuid";
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { Contacts } from "./contact";

@Entity("quotes")
class Quotes {
  @PrimaryColumn()
  _id?: string;

  @Column()
  departure_location: string;

  @Column()
  destination_location: string;

  @Column()
  depart_date: string;

  @Column()
  return_date: string;

  @Column()
  number_travellers: number;

  @Column()
  transportation: string;

  @Column()
  status: string;

  @Column()
  active: boolean;

  @Column()
  contact_id: string;

  @Column()
  price: number;

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;

  @DeleteDateColumn()
  deleted_at?: Date;

  @ManyToOne((type) => Contacts, (contacts) => contacts.quotes)
  @JoinColumn({ name: "contact_id" })
  contacts?: Contacts;

  constructor() {
    if (!this._id) {
      this._id = uuid();
    }
  }
}

export { Quotes };
