import { TiendaEntity } from "src/tienda/tienda.entity";
import { Column, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

export class CafeEntity {

 @PrimaryGeneratedColumn('uuid')
 id: string;

 @Column()
 name: string;
 
 @Column()
 description: string;
 
 @Column()
 price: number;
 

 @ManyToMany(() => TiendaEntity, tienda => tienda.cafes)
 tiendas: TiendaEntity[];

}
