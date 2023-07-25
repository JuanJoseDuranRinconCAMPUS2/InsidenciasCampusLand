var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose } from "class-transformer";
import { IsDefined, MaxLength, IsNumber, IsPositive, IsNotEmpty, Matches } from 'class-validator';
export class validatePostArea {
    constructor(A_Id, A_Nombre, A_Descripcion) {
        this.A_Id = A_Id;
        this.A_Nombre = A_Nombre;
        this.A_Descripcion = A_Descripcion;
    }
}
__decorate([
    Expose({ name: "A_Id" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro A_Id es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro A_Id debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro A_Id debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro A_Id no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePostArea.prototype, "A_Id", void 0);
__decorate([
    Expose({ name: "A_Nombre" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro A_Nombre es obligatorio' }; } }),
    MaxLength(45, { message: () => { throw { status: 400, message: 'El parametro A_Nombre debe tener como máximo 45 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s]+$/, { message: () => { throw { status: 400, message: 'El parametro A_Nombre debe ser una cadena de texto sin caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro A_Nombre no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostArea.prototype, "A_Nombre", void 0);
__decorate([
    Expose({ name: "A_Descripcion" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro A_Descripcion es obligatorio' }; } }),
    MaxLength(100, { message: () => { throw { status: 400, message: 'El parametro A_Descripcion debe tener como máximo 100 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro A_Descripcion debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro A_Descripcion no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePostArea.prototype, "A_Descripcion", void 0);
export class validateQueryPutArea {
    constructor(idSelect) {
        this.idSelect = idSelect;
    }
}
__decorate([
    Expose({ name: "idSelect" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro idSelect es obligatorio' }; } }),
    Matches(/^\d+$/, { message: () => { throw { status: 400, message: 'El parametro idSelect debe ser un numero positivo' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro idSelect no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateQueryPutArea.prototype, "idSelect", void 0);
export class validateBodyPutArea {
    constructor(A_Nombre, A_Descripcion) {
        this.A_Nombre = A_Nombre;
        this.A_Descripcion = A_Descripcion;
    }
}
__decorate([
    Expose({ name: "A_Nombre" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro A_Nombre es obligatorio' }; } }),
    MaxLength(45, { message: () => { throw { status: 400, message: 'El parametro A_Nombre debe tener como máximo 45 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s]+$/u, { message: () => { throw { status: 400, message: 'El parametro A_Nombre debe ser una cadena de texto sin caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro A_Nombre no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateBodyPutArea.prototype, "A_Nombre", void 0);
__decorate([
    Expose({ name: "A_Descripcion" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro A_Descripcion es obligatorio' }; } }),
    MaxLength(100, { message: () => { throw { status: 400, message: 'El parametro A_Descripcion debe tener como máximo 100 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro A_Descripcion debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro A_Descripcion no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validateBodyPutArea.prototype, "A_Descripcion", void 0);
export class validateDeleteArea {
    constructor(IdDelete) {
        this.IdDelete = IdDelete;
    }
}
__decorate([
    Expose({ name: "IdDelete" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro IdDelete es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro IdDelete debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro IdDelete debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro IdDelete no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validateDeleteArea.prototype, "IdDelete", void 0);
