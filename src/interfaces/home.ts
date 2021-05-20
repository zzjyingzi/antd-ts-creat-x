export interface single {
    id: number;
    name: string;
    salesVolume: number
}

export interface list {
    loadData(): any[];
    todoList: Array<single>;
}

export interface abProp extends list{
    addCreate(): void;
    deleteById(id:number): void;
    modifyById(): void;
    findByName(): void;
}

