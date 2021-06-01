import { generateUUID } from '@/utils/uuid';

export class Todo {
  _id;
  title;
  createdAt;
  listUUID;
  desc;
  completedFlag;
  completedAt;
  dueAt;
  planAt;
  notifyMe;

  constructor({title, listUUID}) {
    this._id = generateUUID();
    this.title = title;
    this.listUUID = listUUID;
    this.completedFlag = false;
  }
}

export class List {
  _id;
  title;
  createdAt;

  constructor(title) {
    this._id = generateUUID();
    this.title = title;
  }
}