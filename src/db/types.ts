import type { ColumnType } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export type Todo = {
    uniqueId: string;
    userId: string;
    createdAt: Generated<string>;
    updatedAt: string;
    todoItem: string;
    status: string;
    completedAt: string | null;
};
export type User = {
    uniqueId: string;
    username: string;
    createdAt: Generated<string>;
    updatedAt: string;
    name: string;
    password: string;
};
export type DB = {
    Todo: Todo;
    User: User;
};
