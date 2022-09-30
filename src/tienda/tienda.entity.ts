import { CafeEntity } from "src/cafe/cafe.entity";
import { Column, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

export class TiendaEntity {
       
 @PrimaryGeneratedColumn('uuid')
 id: string;

 @Column()
 name: string;
 
 @Column()
 code: string;
 
 @Column()
 caountry: string;
 
 @Column()
 city: string;

 @ManyToMany(() => CafeEntity, cafe => cafe.tiendas)
 @JoinTable()
 cafes: CafeEntity[];
}
