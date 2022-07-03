import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 } from "uuid";

@Entity("comments")
class Comments {
  @PrimaryColumn()
  id: string;

  @Column()
  comment: string;

  @Column()
  name_user: string;

  @Column()
  post_id: string;

  constructor() {
    if (!this.id) {
      this.id = v4();
    }
  }
}

export { Comments };
