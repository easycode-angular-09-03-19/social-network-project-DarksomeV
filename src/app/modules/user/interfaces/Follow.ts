import {UserServerAnswer} from "../../../common/interfaces/UserServerAnswer";

export interface Follow {
  counts: string;
  users: UserServerAnswer[];
}
