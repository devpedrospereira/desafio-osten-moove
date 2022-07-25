import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

@Entity("company")
 class Company {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column()
  corporateName!: string;

  @Column()
  fantasyName!: string;

  @Column()
  cnpj!: string;

  @Column()
  phoneNumber!: string;

  @Column()
  street!: string;

  @Column()
  addressNumber!: string;

  @Column()
  complement?: string;

  @Column()
  district!: string;

  @Column()
  city!: string;

  @Column()
  federatedUnit!: string;

  @CreateDateColumn()
  created_at!: Date;
}


export {Company }